import { Resend } from "resend";
import { SITE } from "@/lib/constants";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function confirmationHtml(data: { name: string; message: string }): string {
  const firstName = data.name.trim().split(/\s+/)[0] || data.name;
  return `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:560px;margin:0 auto;color:#1e293b;">
  <div style="background:#0f172a;padding:32px 40px;border-radius:12px 12px 0 0;">
    <span style="color:#84ff00;font-weight:700;font-size:18px;letter-spacing:0.5px;">GMHCO</span>
  </div>
  <div style="background:#ffffff;padding:40px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">
    <h1 style="font-size:20px;margin:0 0 16px;color:#0f172a;">Thanks, ${firstName} — we've got your enquiry</h1>
    <p style="font-size:14px;line-height:1.6;color:#475569;margin:0 0 20px;">
      This confirms we've received your message. Gazi will personally review it and get back to you within 24 hours.
    </p>
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:20px;margin:0 0 20px;">
      <p style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:#64748b;margin:0 0 10px;">What you sent us</p>
      <p style="font-size:14px;line-height:1.6;color:#1e293b;margin:0;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
    </div>
    <p style="font-size:14px;line-height:1.6;color:#475569;margin:0 0 24px;">
      Need to reach us sooner? Reply directly to this email, WhatsApp us at <a href="https://wa.me/${SITE.whatsapp}" style="color:#0f172a;">+${SITE.whatsapp}</a>, or book a call: <a href="${SITE.cal}" style="color:#0f172a;">${SITE.cal}</a>
    </p>
    <p style="font-size:13px;color:#94a3b8;margin:0;">— The GMHCO Team</p>
  </div>
</div>`.trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function sendCustomerConfirmationEmail(data: {
  name: string;
  email: string;
  message: string;
}): Promise<void> {
  if (!resend || !process.env.RESEND_FROM_EMAIL) {
    console.warn("[Email] Missing Resend credentials — skipping customer confirmation");
    return;
  }
  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: data.email,
      replyTo: SITE.email,
      subject: "We've received your enquiry — GMHCO",
      html: confirmationHtml(data),
    });
    if (error) console.error("[Email] Resend returned an error:", error);
  } catch (err) {
    console.error("[Email] Failed to send customer confirmation:", err);
  }
}
