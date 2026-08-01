const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

export async function sendTelegramMessage(text: string): Promise<void> {
  if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
    console.warn("[Telegram] Missing credentials — skipping notification");
    return;
  }
  const res = await fetch(`${TELEGRAM_API}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text,
      parse_mode: "HTML",
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    console.error("[Telegram] Failed:", err);
  }
}

export function formatContactLead(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
}): string {
  return `🔔 <b>NEW CONTACT FORM SUBMISSION</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Name:</b> ${data.name}
📧 <b>Email:</b> ${data.email}
📱 <b>Phone:</b> ${data.phone ?? "Not provided"}
🏢 <b>Company:</b> ${data.company ?? "Not provided"}
🎯 <b>Service:</b> ${data.service ?? "General enquiry"}
💰 <b>Budget:</b> ${data.budget ?? "Not specified"}
━━━━━━━━━━━━━━━━━━━━
💬 <b>Message:</b>
${data.message}
━━━━━━━━━━━━━━━━━━━━
⏰ ${new Date().toUTCString()}
🌐 <b>Source:</b> gmhco.org contact form`.trim();
}

export function formatPotentialLead(data: {
  email: string;
  name?: string;
  phone?: string;
  company?: string;
  website?: string;
  summary: string;
}): string {
  return `🤖 <b>AI CHATBOT — POTENTIAL LEAD</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Name:</b> ${data.name ?? "Not provided"}
📧 <b>Email:</b> ${data.email}
📱 <b>Phone:</b> ${data.phone ?? "Not provided"}
🏢 <b>Company:</b> ${data.company ?? "Not provided"}
🔗 <b>Website:</b> ${data.website ?? "Not provided"}
━━━━━━━━━━━━━━━━━━━━
📝 <b>Conversation snippet:</b>
${data.summary.slice(0, 400)}
━━━━━━━━━━━━━━━━━━━━
⏰ ${new Date().toUTCString()}
🌐 <b>Source:</b> GMHCO AI Chatbot`.trim();
}
