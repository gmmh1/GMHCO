import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — GMHCO",
  description: "Terms and conditions for using GMHCO services.",
};

export default function TermsPage() {
  return (
    <main style={{ background: "#0f172a", minHeight: "100vh", padding: "6rem 1.5rem 5rem" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <Link href="/" style={{ color: "#84ff00", fontSize: "0.875rem", textDecoration: "none" }}>
          ← Back to home
        </Link>

        <h1 style={{ color: "#f8fafc", fontSize: "2.5rem", fontWeight: 900, marginTop: "2rem", marginBottom: "0.5rem", fontFamily: "Orbitron, sans-serif" }}>
          Terms of Service
        </h1>
        <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "3rem" }}>
          Last updated: June 2025
        </p>

        {[
          {
            title: "1. Acceptance of terms",
            body: "By accessing gmhco.org or engaging GMHCO for services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.",
          },
          {
            title: "2. Services",
            body: "GMHCO provides AI-powered IT solutions, SaaS development, Google Ads management, data intelligence, and related digital services. The specific scope, deliverables, timelines, and fees for each engagement are defined in a separate Statement of Work (SOW) or proposal agreed between the parties in writing.",
          },
          {
            title: "3. Payment terms",
            body: "Unless otherwise agreed in writing, payment is due within 14 days of invoice. Late payments may incur interest at 8% above the Bank of England base rate. We reserve the right to suspend work on overdue accounts. All prices are exclusive of VAT where applicable.",
          },
          {
            title: "4. Intellectual property",
            body: "Upon receipt of full payment, GMHCO assigns to the client all intellectual property rights in the custom deliverables created specifically for that client. GMHCO retains rights to pre-existing frameworks, tools, libraries, and methodologies used in the delivery of services. We may reference completed projects in our portfolio unless the client requests otherwise in writing.",
          },
          {
            title: "5. Confidentiality",
            body: "Each party agrees to keep confidential any proprietary or sensitive information disclosed by the other party and not to disclose it to third parties without prior written consent. This obligation survives termination of the agreement for 3 years.",
          },
          {
            title: "6. Limitation of liability",
            body: "To the maximum extent permitted by law, GMHCO's total liability for any claim arising from our services shall not exceed the total fees paid by the client in the 3 months preceding the claim. We are not liable for indirect, consequential, or incidental damages, loss of profits, or loss of data.",
          },
          {
            title: "7. Warranties",
            body: "GMHCO warrants that services will be performed with reasonable skill and care. We do not guarantee specific business outcomes (such as revenue growth, search rankings, or conversion rates) as these depend on factors outside our control.",
          },
          {
            title: "8. Termination",
            body: "Either party may terminate an engagement by providing 30 days' written notice. The client is responsible for fees for work completed up to the date of termination. If the client terminates without cause, any deposit paid is non-refundable.",
          },
          {
            title: "9. Governing law",
            body: "These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
          },
          {
            title: "10. Changes",
            body: "We may update these terms from time to time. Continued use of our services after changes are posted constitutes acceptance. We will notify existing clients of material changes by email.",
          },
          {
            title: "11. Contact",
            body: "Questions about these terms? Email hello@gmhco.org or write to GMHCO, London, United Kingdom.",
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
