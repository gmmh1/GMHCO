"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section id="process" className="py-24 px-4" style={{ background: "#0a1022" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag">How We Work</span>
          <h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
          >
            From Brief to Results in 5 Steps
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "#94a3b8" }}>
            A structured, transparent process built to eliminate uncertainty and deliver results on time.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:flex items-start gap-0 relative">
          <div
            className="absolute top-10 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(132,255,0,0.4), transparent)" }}
          />
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              className="flex-1 flex flex-col items-center text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative z-10"
                style={{
                  background: "#1e293b",
                  border: "2px solid #84ff00",
                  boxShadow: "0 0 20px rgba(132,255,0,0.3)",
                }}
              >
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: "Orbitron, sans-serif", color: "#84ff00" }}
                >
                  {step.step}
                </span>
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden space-y-6">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "#1e293b",
                    border: "2px solid #84ff00",
                    boxShadow: "0 0 15px rgba(132,255,0,0.3)",
                  }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{ fontFamily: "Orbitron, sans-serif", color: "#84ff00" }}
                  >
                    {step.step}
                  </span>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="flex-1 w-px mt-2" style={{ background: "rgba(132,255,0,0.2)", minHeight: "24px" }} />
                )}
              </div>
              <div className="pb-6">
                <h3
                  className="text-base font-semibold mb-1"
                  style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
