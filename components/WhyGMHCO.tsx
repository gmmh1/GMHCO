"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, Zap, LineChart } from "lucide-react";
import { WHY_GMHCO } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck, Globe, Zap, LineChart,
};

export default function WhyGMHCO() {
  return (
    <section
      className="py-24 px-4"
      style={{ background: "linear-gradient(180deg, #0f172a 0%, #0a1022 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag">Why GMHCO</span>
          <h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
          >
            Built Different. Proven Better.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_GMHCO.map((item, i) => {
            const Icon = ICON_MAP[item.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: "#1e293b",
                  border: "1px solid rgba(132,255,0,0.12)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: "rgba(132,255,0,0.1)",
                    boxShadow: "0 0 20px rgba(132,255,0,0.15)",
                  }}
                >
                  <Icon size={26} style={{ color: "#84ff00" }} />
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0", fontSize: "0.9rem" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
