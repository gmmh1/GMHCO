"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

const STEP_COLORS = ["#84ff00", "#00e5ff", "#7c4dff", "#ff9500", "#84ff00"];

export default function Process() {
  return (
    <section id="process" className="relative py-32 px-4 overflow-hidden" style={{ background: "#080e1a" }}>
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(124,77,255,0.08) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">How We Work</span>
          <h2
            className="mt-4 text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
          >
            From Brief to Results
            <br />
            <span style={{ background: "linear-gradient(135deg, #7c4dff, #00e5ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              in 5 Steps
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step, i) => {
            const color = STEP_COLORS[i];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                {/* Connector line (desktop) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-[60%] right-0 h-px z-0"
                    style={{ background: `linear-gradient(90deg, ${color}40, ${STEP_COLORS[i + 1]}20)` }}
                  />
                )}

                <div
                  className="relative z-10 rounded-2xl p-6 h-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(30,41,59,0.7) 0%, rgba(15,23,42,0.5) 100%)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderTop: `2px solid ${color}`,
                  }}
                >
                  {/* Step number */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <span
                      className="text-xl font-black"
                      style={{ fontFamily: "Orbitron, sans-serif", color }}
                    >
                      {step.step}
                    </span>
                  </div>

                  <h3
                    className="text-sm font-bold mb-3 leading-snug"
                    style={{ color: "#e2e8f0" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#475569" }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
