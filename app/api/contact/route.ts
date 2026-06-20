import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendTelegramMessage, formatContactLead } from "@/lib/telegram";
import { createServerSupabase } from "@/lib/supabase-server";

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10).max(3000),
});

async function pushToHubSpot(data: { name: string; email: string; phone?: string; company?: string; service?: string; message: string }) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) return;

  const [firstName, ...rest] = data.name.split(" ");
  const lastName = rest.join(" ") || "-";

  try {
    await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        properties: {
          firstname: firstName,
          lastname: lastName,
          email: data.email,
          phone: data.phone ?? "",
          company: data.company ?? "",
          hs_lead_status: "NEW",
          lifecyclestage: "lead",
          message: `Service: ${data.service ?? "General"}\n\n${data.message}`,
        },
      }),
    });
  } catch (err) {
    console.error("[HubSpot] Failed to create contact:", err);
  }
}

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
      pushToHubSpot(data),
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
