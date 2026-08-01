"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, Zap, LineChart } from "lucide-react";
import { WHY_GMHCO } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = { ShieldCheck, Globe, Zap, LineChart };
const ACCENTS = ["#84ff00", "#00e5ff", "#7c4dff", "#ff6b6b"];

export default function WhyGMHCO() {
  return (
    <section className="section-py relative overflow-hidden"
      style={{ background: "linear-gradient(180deg,#080e1a 0%,#0f172a 100%)" }}>
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(132,255,0,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(132,255,0,0.05) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

      <div className="page-wrap relative">

        {/* Header */}
        <motion.div className="flex flex-col items-center text-center mb-20"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-tag">Why GMHCO</span>
          <h2 className="mt-6 py-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron text-slate-100 leading-[1.1]">
            Built Different.<br />
            <span className="text-gradient-lime">Proven Better.</span>
          </h2>
          <p className="mt-5 text-base text-slate-400 max-w-lg mx-auto leading-relaxed" style={{ textAlign: "center" }}>
            We don&apos;t just build software — we become your technology partner, delivering
            enterprise-grade results with a boutique team that&apos;s always reachable.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { v: "12+", l: "Active Certifications" },
            { v: "35+", l: "Projects Delivered" },
            { v: "98%", l: "Client Satisfaction" },
            { v: "4×",  l: "Average ROI" },
          ].map((m, i) => (
            <motion.div key={m.l}
              className="text-center rounded-2xl p-6 bg-lime/[0.05] border border-lime/[0.12]"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <div className="text-3xl font-black font-orbitron text-lime mb-2">{m.v}</div>
              <div className="text-sm text-slate-400">{m.l}</div>
            </motion.div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_GMHCO.map((item, i) => {
            const Icon  = ICON_MAP[item.icon] ?? ShieldCheck;
            const color = ACCENTS[i % ACCENTS.length];
            return (
              <motion.div key={item.title}
                className="rounded-2xl p-7 flex flex-col items-center text-center"
                style={{
                  background: "linear-gradient(135deg,rgba(30,41,59,0.9) 0%,rgba(15,23,42,0.9) 100%)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderTop: `2px solid ${color}`,
                }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ background: `${color}18` }}>
                  <Icon size={21} style={{ color }} />
                </div>
                <h3 className="text-sm font-bold mb-2.5 text-slate-100">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
