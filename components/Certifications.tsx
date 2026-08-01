"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/constants";

function CertCard({ cert }: { cert: typeof CERTIFICATIONS[0] }) {
  return (
    <div className="flex-shrink-0 w-64 rounded-2xl p-5 mx-2"
      style={{
        background:     "linear-gradient(135deg,rgba(30,41,59,0.9) 0%,rgba(15,23,42,0.9) 100%)",
        border:         "1px solid rgba(255,255,255,0.06)",
        borderLeft:     `3px solid ${cert.color}`,
        backdropFilter: "blur(12px)",
      }}>
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${cert.color}18` }}>
          <BadgeCheck size={17} style={{ color: cert.color }} />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold leading-snug text-slate-200 line-clamp-2">{cert.name}</p>
          <p className="text-xs mt-1.5 font-medium" style={{ color: cert.color, opacity: 0.85 }}>{cert.issuer}</p>
          <p className="text-xs mt-1 text-slate-400">{cert.issued}</p>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const doubled = [...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section id="certifications" className="section-py relative overflow-hidden bg-navy">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%,rgba(0,229,255,0.03) 0%,transparent 70%)" }} />

      {/* Header */}
      <div className="page-wrap relative mb-16">
        <motion.div className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-tag">Verified Credentials</span>
          <h2 className="mt-6 py-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-orbitron text-slate-100 leading-tight">
            Google-Certified.{" "}
            <span className="text-gradient-purple">Proven. Trusted.</span>
          </h2>
          <p className="mt-5 max-w-lg mx-auto text-base text-slate-400 leading-relaxed" style={{ textAlign: "center" }}>
            12+ active industry certifications — every strategy backed by verified expertise.
          </p>
        </motion.div>
      </div>

      {/* Full-bleed carousel */}
      <div className="overflow-hidden"
        style={{ mask: "linear-gradient(90deg,transparent,black 5%,black 95%,transparent)" }}>
        <div className="cert-track py-2">
          {doubled.map((cert, i) => <CertCard key={`${cert.credentialId}-${i}`} cert={cert} />)}
        </div>
      </div>

      {/* Footer */}
      <div className="page-wrap mt-12 flex justify-center">
        <motion.div
          className="flex items-center gap-3 px-7 py-4 rounded-2xl"
          style={{
            background: "linear-gradient(135deg,rgba(0,229,255,0.08),rgba(124,77,255,0.08))",
            border:     "1px solid rgba(0,229,255,0.15)",
          }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <BadgeCheck size={17} className="text-cyan flex-shrink-0" />
          <span className="text-sm font-semibold text-slate-300">
            {CERTIFICATIONS.length} Active Certifications · All Verifiable on LinkedIn
          </span>
        </motion.div>
      </div>
    </section>
  );
}
