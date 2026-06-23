import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — GMHCO",
  description: "How GMHCO collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <main style={{ background: "#0f172a", minHeight: "100vh", padding: "6rem 1.5rem 5rem" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <Link href="/" style={{ color: "#84ff00", fontSize: "0.875rem", textDecoration: "none" }}>
          ← Back to home
        </Link>

        <h1 style={{ color: "#f8fafc", fontSize: "2.5rem", fontWeight: 900, marginTop: "2rem", marginBottom: "0.5rem", fontFamily: "Orbitron, sans-serif" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "3rem" }}>
          Last updated: June 2025
        </p>

        {[
          {
            title: "1. Who we are",
            body: "GMHCO is an AI-powered IT solutions agency operating from London, United Kingdom. We can be reached at hello@gmhco.org.",
          },
          {
            title: "2. What data we collect",
            body: "We collect information you voluntarily provide via our contact form (name, email, phone, company, message) and our AI chat widget (conversation messages). If you book a call, scheduling data is handled by Cal.eu under their own privacy policy. We also collect standard server logs (IP address, browser type, pages visited) via Vercel's infrastructure.",
          },
          {
            title: "3. How we use your data",
            body: "We use your contact details to respond to enquiries, send project proposals, and provide the services you request. We do not sell your data to third parties. We may send occasional emails about our services — you can opt out at any time.",
          },
          {
            title: "4. Data storage",
            body: "Contact form submissions are stored securely in Supabase (EU region) and may be forwarded to our CRM (HubSpot). Chat conversations are stored temporarily to process your query. We retain personal data for no longer than 2 years unless a contractual relationship requires otherwise.",
          },
          {
            title: "5. Your rights (GDPR)",
            body: "If you are in the UK or EEA, you have the right to access, correct, or delete your personal data. You may also object to processing or request portability of your data. To exercise any of these rights, email us at hello@gmhco.org and we will respond within 30 days.",
          },
          {
            title: "6. Cookies",
            body: "Our website uses only essential cookies required for functionality. We do not use advertising or tracking cookies. If we add analytics in the future, we will update this policy and seek your consent where required.",
          },
          {
            title: "7. Third-party services",
            body: "We use Groq (AI inference), Supabase (database), HubSpot (CRM), Vercel (hosting), and Cal.eu (scheduling). Each service operates under its own privacy policy. We only share the minimum data necessary for these services to function.",
          },
          {
            title: "8. Changes to this policy",
            body: "We may update this policy from time to time. Material changes will be communicated via email to existing clients. Continued use of our website constitutes acceptance of the updated policy.",
          },
          {
            title: "9. Contact",
            body: "Questions about this policy? Email hello@gmhco.org or write to GMHCO, London, United Kingdom.",
          },
        ].map((s) => (
          <section key={s.title} style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ color: "#84ff00", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>{s.title}</h2>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem" }}>{s.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
