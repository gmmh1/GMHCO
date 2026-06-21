"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);
  const t = TESTIMONIALS[idx];

  return (
    <section
      className="relative py-32 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080e1a 0%, #0f172a 100%)" }}
    >
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(132,255,0,0.04) 0%, transparent 60%)" }} />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Client Stories</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold" style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}>
            Results That{" "}
            <span style={{ background: "linear-gradient(135deg, #84ff00, #00e5ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Speak
            </span>
          </h2>
        </motion.div>

        {/* Card */}
        <div
          className="relative rounded-3xl p-8 sm:p-12"
          style={{
            background: "linear-gradient(135deg, rgba(30,41,59,0.6) 0%, rgba(15,23,42,0.8) 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
          }}
        >
          {/* Large quote mark */}
          <div
            className="absolute top-6 right-8 text-8xl font-black select-none pointer-events-none"
            style={{ fontFamily: "Georgia, serif", color: "rgba(132,255,0,0.06)", lineHeight: 1 }}
          >
            "
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
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#84ff00" style={{ color: "#84ff00" }} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-xl leading-relaxed mb-10" style={{ color: "#cbd5e1", fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: "linear-gradient(135deg, #84ff00, #00e5ff)", color: "#0f172a" }}
                >
                  {t.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold" style={{ color: "#84ff00" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#475569" }}>{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              aria-label="Previous"
            >
              <ChevronLeft size={16} style={{ color: "#94a3b8" }} />
            </button>
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    background: i === idx ? "#84ff00" : "rgba(132,255,0,0.2)",
                    width: i === idx ? "20px" : "6px",
                    height: "6px",
                  }}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              aria-label="Next"
            >
              <ChevronRight size={16} style={{ color: "#94a3b8" }} />
            </button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["100% Verified Reviews", "Google-Certified Expert", "GDPR Compliant", "Direct Access"].map((b) => (
            <span
              key={b}
              className="text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "#475569" }}
            >
              <span style={{ color: "#84ff00" }}>✓</span> {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
