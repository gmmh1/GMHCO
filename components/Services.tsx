"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lightbulb, TrendingUp, BarChart2, GitMerge, Cloud, Cpu, Code2, Bot, Smartphone, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Lightbulb, TrendingUp, BarChart2, GitMerge, Cloud, Cpu, Code2, Bot, Smartphone,
};
const ACCENTS = [
  "from-lime to-cyan", "from-cyan to-purple", "from-purple to-lime",
  "from-lime to-cyan", "from-cyan to-purple", "from-purple to-lime",
  "from-lime to-cyan", "from-cyan to-purple", "from-purple to-lime",
];

export default function Services() {
  return (
    <section id="services" className="section-py relative overflow-hidden bg-navy">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(132,255,0,0.04) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)" }} />

      <div className="page-wrap relative">

        {/* Header */}
        <motion.div className="flex flex-col items-center text-center mb-20"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-tag">What We Do</span>
          <h2 className="mt-6 py-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron text-slate-100 leading-[1.1]">
            9 Ways We Grow<br />
            <span className="text-gradient-lime">Your Business</span>
          </h2>
          <p className="mt-5 text-base text-slate-400 max-w-lg leading-relaxed" style={{ textAlign: "center" }}>
            From strategy to deployment — every service built to deliver measurable results.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => {
            const Icon   = ICON_MAP[svc.icon] ?? Cpu;
            const accent = ACCENTS[i];
            return (
              <motion.div key={svc.slug}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
                <Link href={`/services/${svc.slug}`} className="group block h-full">
                  <div className="relative h-full rounded-2xl overflow-hidden transition-all duration-300
                    group-hover:-translate-y-2 group-hover:shadow-[0_24px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(132,255,0,0.2)]"
                    style={{ background: "linear-gradient(135deg,#1e293b 0%,#162032 100%)", border: "1px solid rgba(255,255,255,0.06)" }}>

                    {/* Accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${accent}`} />

                    {/* Watermark */}
                    <div className="absolute top-5 right-6 text-7xl font-black select-none pointer-events-none font-orbitron leading-none"
                      style={{ color: "rgba(255,255,255,0.025)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="p-8 flex flex-col gap-6 h-full text-center items-center">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${accent} flex-shrink-0`}>
                        <Icon size={22} color="#0f172a" strokeWidth={2.5} />
                      </div>

                      {/* Copy */}
                      <div className="flex-1">
                        <h3 className="text-base font-bold mb-3 leading-snug text-slate-100">{svc.title}</h3>
                        <p className="text-sm leading-relaxed text-slate-400">{svc.shortDesc}</p>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-center gap-6 pt-5 border-t border-white/[0.06] mt-auto w-full">
                        <span className="text-sm font-bold text-lime pl-1">From {svc.startingAt}</span>
                        <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 transition-all group-hover:gap-2.5 group-hover:text-slate-200">
                          Explore <ArrowUpRight size={14} />
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
