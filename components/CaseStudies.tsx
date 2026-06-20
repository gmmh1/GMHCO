"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CASE_STUDIES } from "@/lib/constants";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-4" style={{ background: "#0f172a" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag">Proof of Work</span>
          <h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
          >
            Results That Speak for Themselves
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "#94a3b8" }}>
            Real client problems. Real solutions. Real numbers.
          </p>
        </div>

        <div className="space-y-16">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image side */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative h-72 rounded-2xl overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(132,255,0,0.15) 0%, rgba(0,0,0,0.6) 100%)",
                    }}
                  />
                </div>
              </div>

              {/* Content side */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(132,255,0,0.08)",
                        color: "#84ff00",
                        border: "1px solid rgba(132,255,0,0.2)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "#94a3b8" }}>
                  {cs.client}
                </p>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-4"
                  style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0", fontSize: "1.2rem" }}
                >
                  {cs.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#84ff00" }}>
                      The Challenge
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                      {cs.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#84ff00" }}>
                      Our Solution
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                      {cs.solution}
                    </p>
                  </div>
                </div>

                {/* Results grid */}
                <div className="grid grid-cols-2 gap-3">
                  {cs.results.map((r) => (
                    <div
                      key={r.label}
                      className="rounded-xl p-4 text-center"
                      style={{
                        background: "#1e293b",
                        border: "1px solid rgba(132,255,0,0.15)",
                      }}
                    >
                      <div
                        className="text-2xl font-bold mb-1"
                        style={{ fontFamily: "Orbitron, sans-serif", color: "#84ff00" }}
                      >
                        {r.metric}
                      </div>
                      <div className="text-xs" style={{ color: "#94a3b8" }}>
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
