"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[idx];

  return (
    <section className="section-py relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080e1a 0%, #0f172a 100%)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(132,255,0,0.04) 0%, transparent 60%)" }} />

      <div className="page-wrap-md relative">

        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Client Stories</span>
          <h2 className="mt-6 py-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron text-slate-100">
            Results That <span className="text-gradient-lime">Speak</span>
          </h2>
        </motion.div>

        {/* Card */}
        <div className="relative rounded-3xl p-8 sm:p-12"
          style={{
            background:     "linear-gradient(135deg, rgba(30,41,59,0.6) 0%, rgba(15,23,42,0.8) 100%)",
            border:         "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(20px)",
            boxShadow:      "0 40px 80px rgba(0,0,0,0.4)",
          }}>
          <div className="absolute top-6 right-8 text-8xl font-black select-none pointer-events-none leading-none"
            style={{ fontFamily: "Georgia, serif", color: "rgba(132,255,0,0.06)" }}>
            &ldquo;
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#84ff00" className="text-lime" />
                ))}
              </div>
              <p className="text-base sm:text-lg leading-relaxed mb-8 text-slate-300 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold text-navy flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #84ff00, #00e5ff)" }}>
                  {t.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-lime">{t.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress dots — display only, no click */}
          <div className="mt-10 flex items-center justify-center gap-1.5">
            {TESTIMONIALS.map((_, i) => (
              <div key={i}
                className="rounded-full transition-all duration-300 h-1.5"
                style={{ background: i === idx ? "#84ff00" : "rgba(132,255,0,0.2)", width: i === idx ? "20px" : "6px" }} />
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {["100% Verified Reviews", "Google-Certified Expert", "GDPR Compliant", "Direct Access"].map((b) => (
            <span key={b}
              className="text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.07] text-slate-400">
              <span className="text-lime">✓</span> {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
