"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from "@/lib/constants";

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 px-4" style={{ background: "#0a1022" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag">Selected Work</span>
          <h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
          >
            Projects That Moved the Needle
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: active === cat ? "#84ff00" : "transparent",
                color: active === cat ? "#0f172a" : "#94a3b8",
                border: active === cat ? "1px solid #84ff00" : "1px solid rgba(132,255,0,0.2)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="rounded-2xl overflow-hidden group"
              style={{
                background: "#1e293b",
                border: "1px solid rgba(132,255,0,0.1)",
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(30,41,59,0.9), transparent)" }}
                />
                <div className="absolute bottom-3 left-3">
                  <span
                    className="text-sm font-bold"
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      color: "#84ff00",
                      textShadow: "0 0 10px rgba(132,255,0,0.8)",
                    }}
                  >
                    {project.metric}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "#e2e8f0", fontFamily: "Orbitron, sans-serif", fontSize: "0.9rem" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(132,255,0,0.08)",
                        color: "#84ff00",
                        border: "1px solid rgba(132,255,0,0.2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
