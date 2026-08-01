"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

const STEP_COLORS = ["#84ff00", "#00e5ff", "#7c4dff", "#ff9500", "#84ff00"];

export default function Process() {
  return (
    <section id="process" className="section-py relative overflow-hidden bg-navy-deep">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%,rgba(124,77,255,0.08) 0%,transparent 60%)" }} />

      <div className="page-wrap relative">

        <motion.div className="flex flex-col items-center text-center mb-20"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-tag">How We Work</span>
          <h2 className="mt-6 py-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron text-slate-100">
            From Brief to Results<br />
            <span className="text-gradient-purple">in 5 Steps</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {PROCESS_STEPS.map((step, i) => {
            const color = STEP_COLORS[i];
            return (
              <motion.div key={step.step} className="relative"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>

                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-9 left-[64%] right-[-10px] h-px z-0"
                    style={{ background: `linear-gradient(90deg,${color}50,${STEP_COLORS[i + 1]}20)` }} />
                )}

                <div className="relative z-10 rounded-2xl p-7 h-full flex flex-col items-center text-center"
                  style={{
                    background: "linear-gradient(135deg,rgba(30,41,59,0.7) 0%,rgba(15,23,42,0.5) 100%)",
                    border:    "1px solid rgba(255,255,255,0.06)",
                    borderTop: `2px solid ${color}`,
                  }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 mx-auto"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                    <span className="text-lg font-black font-orbitron" style={{ color }}>{step.step}</span>
                  </div>
                  <h3 className="text-sm font-bold mb-3 leading-snug text-slate-100">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
