"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/constants";

function CertCard({ cert }: { cert: typeof CERTIFICATIONS[0] }) {
  return (
    <div
      className="flex-shrink-0 w-60 rounded-2xl p-4 mx-2"
      style={{
        background: "linear-gradient(135deg, rgba(30,41,59,0.9) 0%, rgba(15,23,42,0.9) 100%)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderLeft: `3px solid ${cert.color}`,
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${cert.color}18` }}
        >
          <BadgeCheck size={18} style={{ color: cert.color }} />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold leading-snug" style={{ color: "#e2e8f0" }}>
            {cert.name}
          </p>
          <p className="text-xs mt-1.5 font-medium" style={{ color: cert.color, opacity: 0.8 }}>
            {cert.issuer}
          </p>
          <p className="text-xs mt-1" style={{ color: "#334155" }}>{cert.issued}</p>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const doubled = [...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section id="certifications" className="relative py-32 px-4 overflow-hidden" style={{ background: "#0f172a" }}>
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,229,255,0.03) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Verified Credentials</span>
          <h2
            className="mt-4 text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
          >
            Google-Certified.{" "}
            <span style={{ background: "linear-gradient(135deg, #00e5ff, #7c4dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Proven. Trusted.
            </span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-sm" style={{ color: "#475569" }}>
            12+ active industry certifications — every strategy backed by verified expertise.
          </p>
        </motion.div>

        {/* Scrolling carousel */}
        <div
          className="overflow-hidden"
          style={{ mask: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}
        >
          <div
            className="flex"
            style={{ animation: "scroll-left 40s linear infinite", width: "max-content" }}
          >
            {doubled.map((cert, i) => (
              <CertCard key={`${cert.credentialId}-${i}`} cert={cert} />
            ))}
          </div>
        </div>

        {/* Badge count */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(0,229,255,0.08), rgba(124,77,255,0.08))",
              border: "1px solid rgba(0,229,255,0.15)",
            }}
          >
            <BadgeCheck size={16} style={{ color: "#00e5ff" }} />
            <span className="text-sm font-semibold" style={{ color: "#94a3b8" }}>
              {CERTIFICATIONS.length} Active Certifications · All Verifiable on LinkedIn
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
