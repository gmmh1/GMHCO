"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from "@/lib/constants";

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PORTFOLIO_PROJECTS : PORTFOLIO_PROJECTS.filter(p => p.category === active);

  return (
    <section id="portfolio" className="section-py overflow-hidden bg-navy-deep">
      <div className="page-wrap">

        <div className="flex flex-col items-center text-center mb-16">
          <span className="section-tag">Selected Work</span>
          <h2 className="mt-6 py-2 text-4xl sm:text-5xl font-bold font-orbitron text-slate-100">
            Projects That Moved the Needle
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {PORTFOLIO_CATEGORIES.map(cat => (
            <div key={cat} style={{ paddingTop: "4px", paddingBottom: "4px" }}>
              <button onClick={() => setActive(cat)}
                className="px-6 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background: active === cat ? "#84ff00" : "transparent",
                  color:      active === cat ? "#0f172a"  : "#94a3b8",
                  border:     active === cat ? "1px solid #84ff00" : "1px solid rgba(132,255,0,0.2)",
                }}>
                {cat}
              </button>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="rounded-2xl overflow-hidden group bg-card border border-lime/10 hover-card block">
              <div className="relative h-48 overflow-hidden">
                <Image src={p.image} alt={p.title} fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top,rgba(30,41,59,0.95),transparent)" }} />
                <div className="absolute bottom-4 left-4">
                  <span className="text-sm font-bold font-orbitron text-lime"
                    style={{ textShadow: "0 0 10px rgba(132,255,0,0.8)" }}>{p.metric}</span>
                </div>
              </div>
              <div className="p-7 text-center">
                <h3 className="text-sm font-bold mb-3 font-orbitron text-slate-100">{p.title}</h3>
                <p className="text-sm leading-relaxed mb-4 text-slate-400">{p.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
