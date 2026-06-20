"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/constants";

function CertCard({ cert }: { cert: typeof CERTIFICATIONS[0] }) {
  return (
    <div
      className="flex-shrink-0 w-64 rounded-xl p-4 mx-2"
      style={{
        background: "#1e293b",
        border: "1px solid rgba(132,255,0,0.12)",
        borderTop: `3px solid ${cert.color}`,
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: `${cert.color}20` }}
        >
          <Award size={20} style={{ color: cert.color }} />
        </div>
        <div className="min-w-0">
          <p
            className="text-sm font-semibold leading-tight"
            style={{ color: "#e2e8f0" }}
          >
            {cert.name}
          </p>
          <p className="text-xs mt-1" style={{ color: "#94a3b8" }}>
            {cert.issuer}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(132,255,0,0.1)",
                color: "#84ff00",
                border: "1px solid rgba(132,255,0,0.2)",
              }}
            >
              {cert.issued}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const doubled = [...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section id="certifications" className="py-24 px-4" style={{ background: "#0f172a" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-tag">Verified Credentials</span>
          <h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
          >
            Google-Certified. Proven. Trusted.
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "#94a3b8" }}>
            12+ active industry certifications — every strategy backed by verified expertise, not guesswork.
          </p>
        </div>

        {/* Scrolling carousel */}
        <div className="overflow-hidden" style={{ mask: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
          <div
            className="flex"
            style={{
              animation: "scroll-left 35s linear infinite",
              width: "max-content",
            }}
          >
            {doubled.map((cert, i) => (
              <CertCard key={`${cert.credentialId}-${i}`} cert={cert} />
            ))}
          </div>
        </div>

        {/* Count badge */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div
            className="flex items-center gap-2 px-6 py-3 rounded-full"
            style={{
              background: "rgba(132,255,0,0.08)",
              border: "1px solid rgba(132,255,0,0.25)",
            }}
          >
            <Award size={16} style={{ color: "#84ff00" }} />
            <span className="text-sm font-medium" style={{ color: "#84ff00" }}>
              {CERTIFICATIONS.length} Active Certifications Held
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
