"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Lightbulb, TrendingUp, BarChart2, GitMerge, Cloud,
  Cpu, Code2, Bot, Smartphone, ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Lightbulb, TrendingUp, BarChart2, GitMerge, Cloud,
  Cpu, Code2, Bot, Smartphone,
};

const CARD_ACCENTS = [
  "from-[#84ff00] to-[#00e5ff]",
  "from-[#00e5ff] to-[#7c4dff]",
  "from-[#7c4dff] to-[#84ff00]",
  "from-[#84ff00] to-[#00e5ff]",
  "from-[#00e5ff] to-[#7c4dff]",
  "from-[#7c4dff] to-[#84ff00]",
  "from-[#84ff00] to-[#00e5ff]",
  "from-[#00e5ff] to-[#7c4dff]",
  "from-[#7c4dff] to-[#84ff00]",
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-4 overflow-hidden" style={{ background: "#0f172a" }}>
      {/* Background glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(132,255,0,0.04) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">What We Do</span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}>
            9 Ways We Grow<br />
            <span style={{ background: "linear-gradient(135deg, #84ff00, #00e5ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Your Business
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-lg" style={{ color: "#64748b" }}>
            From strategy to deployment — every service built to deliver measurable results.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Cpu;
            const accent = CARD_ACCENTS[i];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div
                    className="relative h-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-2"
                    style={{
                      background: "linear-gradient(135deg, #1e293b 0%, #162032 100%)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(132,255,0,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.4)";
                    }}
                  >
                    {/* Top gradient accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${accent}`} />

                    {/* Card number watermark */}
                    <div
                      className="absolute top-4 right-5 text-7xl font-black select-none pointer-events-none"
                      style={{ fontFamily: "Orbitron, sans-serif", color: "rgba(255,255,255,0.03)", lineHeight: 1 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="p-7 flex flex-col gap-5 h-full">
                      {/* Icon */}
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${accent}`}
                        style={{ opacity: 0.9 }}
                      >
                        <Icon size={20} color="#0f172a" strokeWidth={2.5} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3
                          className="text-base font-bold mb-2.5 leading-snug"
                          style={{ color: "#f1f5f9", fontSize: "0.95rem" }}
                        >
                          {service.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                          {service.shortDesc}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                        <span className="text-xs font-bold tracking-wide" style={{ color: "#84ff00" }}>
                          From {service.startingAt}
                        </span>
                        <span
                          className="flex items-center gap-1 text-xs font-semibold transition-all duration-200 group-hover:gap-2"
                          style={{ color: "#94a3b8" }}
                        >
                          Explore <ArrowUpRight size={13} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
