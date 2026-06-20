"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Lightbulb, TrendingUp, BarChart2, GitMerge, Cloud,
  Cpu, Code2, Bot, Smartphone, ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Lightbulb, TrendingUp, BarChart2, GitMerge, Cloud,
  Cpu, Code2, Bot, Smartphone,
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-4" style={{ background: "#0f172a" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">What We Do</span>
          <h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
          >
            9 Ways We Grow Your Business
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: "#94a3b8" }}>
            From strategy to deployment — every service designed to deliver measurable results for high-growth businesses.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Cpu;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <div
                    className="card-glow h-full rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2"
                    style={{
                      background: "#1e293b",
                      border: "1px solid rgba(132,255,0,0.1)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(132,255,0,0.4)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(132,255,0,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(132,255,0,0.1)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(132,255,0,0.1)" }}
                    >
                      <Icon size={22} style={{ color: "#84ff00" }} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className="text-base font-semibold mb-2"
                        style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0", fontSize: "0.95rem" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-2 pt-4" style={{ borderTop: "1px solid rgba(132,255,0,0.1)" }}>
                      <span className="text-xs font-semibold" style={{ color: "#84ff00" }}>
                        From {service.startingAt}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: "#84ff00" }}>
                        Learn more <ArrowRight size={12} />
                      </span>
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
