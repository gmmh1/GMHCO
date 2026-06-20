"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section id="faq" className="py-24 px-4" style={{ background: "#0f172a" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-tag">FAQ</span>
          <h2
            className="mt-4 text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
          >
            Common Questions, Direct Answers
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden transition-all duration-200"
              style={{
                background: "#1e293b",
                border: open === i ? "1px solid rgba(132,255,0,0.4)" : "1px solid rgba(132,255,0,0.1)",
              }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="text-sm sm:text-base font-medium"
                  style={{ color: "#e2e8f0" }}
                >
                  {faq.question}
                </span>
                <span className="flex-shrink-0">
                  {open === i ? (
                    <Minus size={18} style={{ color: "#84ff00" }} />
                  ) : (
                    <Plus size={18} style={{ color: "#84ff00" }} />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p
                      className="px-5 pb-5 text-sm leading-relaxed"
                      style={{ color: "#94a3b8" }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
