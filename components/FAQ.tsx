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
    <section id="faq" className="section-py overflow-hidden bg-navy">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="page-wrap-md">

        <div className="flex flex-col items-center text-center mb-16">
          <span className="section-tag">FAQ</span>
          <h2 className="mt-6 py-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron text-slate-100">
            Common Questions, Direct Answers
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden transition-all duration-200 bg-card"
              style={{ border: open === i ? "1px solid rgba(132,255,0,0.4)" : "1px solid rgba(132,255,0,0.1)" }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm sm:text-base font-medium text-slate-200 leading-snug">
                  {faq.question}
                </span>
                <span className="flex-shrink-0">
                  {open === i ? <Minus size={18} className="text-lime" /> : <Plus size={18} className="text-lime" />}
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
                    <p className="px-8 pb-8 text-sm leading-relaxed text-slate-400">{faq.answer}</p>
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
