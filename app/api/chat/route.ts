import { NextRequest, NextResponse } from "next/server";
import { groq, GROQ_MODEL } from "@/lib/groq";
import { GROQ_SYSTEM_PROMPT } from "@/lib/constants";
import { sendTelegramMessage, formatChatLead } from "@/lib/telegram";
import { createServerSupabase } from "@/lib/supabase-server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    // Detect email in latest user message for lead capture
    const lastUserMsg = messages.at(-1)?.content ?? "";
    const emailMatch = lastUserMsg.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/);

    if (emailMatch) {
      const email = emailMatch[0];
      // Fire-and-forget notifications
      Promise.all([
        sendTelegramMessage(formatChatLead({ email, summary: lastUserMsg })),
        (async () => {
          try {
            const db = createServerSupabase();
            await db.from("chat_leads").insert({
              email,
              conversation_summary: messages.map((m: { role: string; content: string }) => `${m.role}: ${m.content}`).join("\n").slice(0, 2000),
            });
          } catch (err) {
            console.error("[chat] Supabase insert failed:", err);
          }
        })(),
      ]).catch(console.error);
    }

    const completion = await groq.chat.completions.create({
      model: GROQ_MODEL,
      max_tokens: 1024,
      temperature: 0.7,
      messages: [
        { role: "system", content: GROQ_SYSTEM_PROMPT },
        ...messages.map((m: { role: string; content: string }) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
      ],
    });

    const message = completion.choices[0]?.message?.content ?? "I couldn't generate a response. Please try again.";
    return NextResponse.json({ message });
  } catch (err) {
    console.error("[/api/chat]", err);
    return NextResponse.json(
      { error: "AI service temporarily unavailable. Please use WhatsApp or the contact form." },
      { status: 500 }
    );
  }
}
