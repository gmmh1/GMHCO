"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, Zap, LineChart } from "lucide-react";
import { WHY_GMHCO } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck, Globe, Zap, LineChart,
};

const ACCENTS = ["#84ff00", "#00e5ff", "#7c4dff", "#ff6b6b"];

export default function WhyGMHCO() {
  return (
    <section
      className="relative py-32 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080e1a 0%, #0f172a 100%)" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(132,255,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(132,255,0,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Why GMHCO</span>
            <h2
              className="mt-4 text-4xl sm:text-5xl font-bold leading-tight"
              style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
            >
              Built Different.<br />
              <span style={{ background: "linear-gradient(135deg, #84ff00, #00e5ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Proven Better.
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: "#475569" }}>
              We don't just build software — we become your technology partner, delivering enterprise-grade results with a boutique team that's always reachable.
            </p>

            {/* Metric pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { v: "12+", l: "Certifications" },
                { v: "35+", l: "Projects" },
                { v: "98%", l: "Satisfaction" },
                { v: "4×", l: "Avg ROI" },
              ].map((m) => (
                <div
                  key={m.l}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl"
                  style={{
                    background: "rgba(132,255,0,0.06)",
                    border: "1px solid rgba(132,255,0,0.15)",
                  }}
                >
                  <span className="text-2xl font-black" style={{ fontFamily: "Orbitron, sans-serif", color: "#84ff00" }}>{m.v}</span>
                  <span className="text-sm" style={{ color: "#64748b" }}>{m.l}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_GMHCO.map((item, i) => {
              const Icon = ICON_MAP[item.icon] ?? ShieldCheck;
              const color = ACCENTS[i % ACCENTS.length];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl p-6"
                  style={{
                    background: "linear-gradient(135deg, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0.8) 100%)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderLeft: `3px solid ${color}`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <h3
                    className="text-sm font-bold mb-2"
                    style={{ color: "#e2e8f0" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
