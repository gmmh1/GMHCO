"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[idx];

  return (
    <section
      className="py-24 px-4"
      style={{ background: "linear-gradient(180deg, #0a1022 0%, #0f172a 100%)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-tag">Client Stories</span>
          <h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
          >
            What Clients Say
          </h2>
        </div>

        {/* Testimonial card */}
        <div
          className="relative rounded-3xl p-8 sm:p-12 text-center"
          style={{
            background: "#1e293b",
            border: "1px solid rgba(132,255,0,0.15)",
            boxShadow: "0 0 60px rgba(132,255,0,0.05)",
          }}
        >
          <Quote
            size={48}
            className="mx-auto mb-6"
            style={{ color: "rgba(132,255,0,0.25)" }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="#84ff00" style={{ color: "#84ff00" }} />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-lg sm:text-xl italic leading-relaxed mb-8"
                style={{ color: "#e2e8f0" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold" style={{ color: "#84ff00", fontFamily: "Orbitron, sans-serif", fontSize: "0.9rem" }}>
                  {t.name}
                </p>
                <p className="text-sm mt-1" style={{ color: "#94a3b8" }}>
                  {t.role} · {t.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-x-0.5"
              style={{ background: "rgba(132,255,0,0.1)", border: "1px solid rgba(132,255,0,0.25)" }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} style={{ color: "#84ff00" }} />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ background: i === idx ? "#84ff00" : "rgba(132,255,0,0.3)" }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:translate-x-0.5"
              style={{ background: "rgba(132,255,0,0.1)", border: "1px solid rgba(132,255,0,0.25)" }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} style={{ color: "#84ff00" }} />
            </button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {["100% Verified Reviews", "Google-Certified Expert", "GDPR Compliant", "Direct Access — No Hand-offs"].map((b) => (
            <span
              key={b}
              className="text-xs px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(132,255,0,0.05)",
                border: "1px solid rgba(132,255,0,0.15)",
                color: "#94a3b8",
              }}
            >
              ✓ {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
