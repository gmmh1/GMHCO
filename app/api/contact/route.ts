import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendTelegramMessage, formatContactLead } from "@/lib/telegram";
import { createServerSupabase } from "@/lib/supabase-server";
import { upsertHubSpotContact } from "@/lib/hubspot";

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10).max(3000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Run all side effects in parallel
    await Promise.all([
      sendTelegramMessage(formatContactLead(data)),
      upsertHubSpotContact({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        message: `Service: ${data.service ?? "General"}\n\n${data.message}`,
        source: "contact_form",
      }),
      (async () => {
        try {
          const db = createServerSupabase();
          await db.from("leads").insert({
            name: data.name,
            email: data.email,
            phone: data.phone,
            company: data.company,
            service: data.service,
            budget: data.budget,
            message: data.message,
            source: "contact_form",
          });
        } catch (err) {
          console.error("[contact] Supabase insert failed:", err);
        }
      })(),
    ]);

    return NextResponse.json({
      success: true,
      message: "Your message has been received. GM will be in touch within 24 hours.",
    });
  } catch (err) {
    console.error("[/api/contact]", err);
    return NextResponse.json(
      { error: "Failed to send message. Please contact us via WhatsApp or email directly." },
      { status: 500 }
    );
  }
}
