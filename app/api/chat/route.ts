import { NextRequest, NextResponse } from "next/server";
import { groq, GROQ_MODEL } from "@/lib/groq";
import { GROQ_SYSTEM_PROMPT } from "@/lib/constants";
import { sendTelegramMessage, formatPotentialLead } from "@/lib/telegram";
import { createServerSupabase } from "@/lib/supabase-server";
import { upsertHubSpotContact } from "@/lib/hubspot";

const EMAIL_RE = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/;
const PHONE_RE = /(\+?\d[\d\s().\-]{7,}\d)/;
const URL_RE = /\b(?:https?:\/\/)?(?:www\.)?[a-z0-9-]+\.[a-z]{2,}(?:\/[^\s,]*)?\b/i;

type ExtractedInfo = { name?: string; phone?: string; company?: string; website?: string };

// Best-effort structured extraction — anything the user has explicitly stated, never guessed.
async function extractContactInfo(conversationText: string): Promise<ExtractedInfo> {
  try {
    const res = await groq.chat.completions.create({
      model: GROQ_MODEL,
      max_tokens: 200,
      temperature: 0,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            'Extract contact details the USER has explicitly stated in this conversation (ignore anything the assistant said). Return strict JSON only: {"name": string|null, "phone": string|null, "company": string|null, "website": string|null}. Use null for anything not explicitly stated — never guess or invent a value.',
        },
        { role: "user", content: conversationText.slice(0, 4000) },
      ],
    });
    const parsed = JSON.parse(res.choices[0]?.message?.content ?? "{}");
    return {
      name: typeof parsed.name === "string" ? parsed.name : undefined,
      phone: typeof parsed.phone === "string" ? parsed.phone : undefined,
      company: typeof parsed.company === "string" ? parsed.company : undefined,
      website: typeof parsed.website === "string" ? parsed.website : undefined,
    };
  } catch {
    return {};
  }
}

async function captureLead(email: string, userText: string, messages: { role: string; content: string }[]) {
  const conversationSummary = messages
    .map((m) => `${m.role}: ${m.content}`)
    .join("\n")
    .slice(0, 2000);

  const db = createServerSupabase();
  const { data: existing } = await db
    .from("chat_leads")
    .select("id")
    .eq("email", email)
    .limit(1);
  const isNew = !existing || existing.length === 0;

  const extracted = await extractContactInfo(userText);
  const fields: ExtractedInfo = {
    name: extracted.name,
    phone: extracted.phone ?? userText.match(PHONE_RE)?.[0],
    company: extracted.company,
    website: extracted.website ?? userText.match(URL_RE)?.[0],
  };

  if (isNew) {
    await db.from("chat_leads").insert({ email, conversation_summary: conversationSummary, ...fields });
  } else {
    await db.from("chat_leads").update({ conversation_summary: conversationSummary, ...fields }).eq("email", email);
  }

  await upsertHubSpotContact({
    email,
    ...fields,
    message: conversationSummary,
    source: "ai_chatbot",
  });

  // Only alert once per lead — avoid re-pinging Telegram on every subsequent turn of the same conversation.
  if (isNew) {
    await sendTelegramMessage(formatPotentialLead({ email, ...fields, summary: userText }));
  }
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    const userText = messages
      .filter((m: { role: string }) => m.role === "user")
      .map((m: { content: string }) => m.content)
      .join("\n");
    const emailMatch = userText.match(EMAIL_RE);

    const capturePromise = emailMatch
      ? captureLead(emailMatch[0], userText, messages).catch((err) => console.error("[chat] Lead capture failed:", err))
      : Promise.resolve();

    const completionPromise = groq.chat.completions.create({
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

    const [, completion] = await Promise.all([capturePromise, completionPromise]);

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
