"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CASE_STUDIES } from "@/lib/constants";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-py overflow-hidden bg-navy">
      <div className="page-wrap">

        <div className="flex flex-col items-center text-center mb-20">
          <span className="section-tag">Proof of Work</span>
          <h2 className="mt-6 py-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron text-slate-100">
            Results That Speak for Themselves
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-base text-slate-400 leading-relaxed text-center">
            Real client problems. Real solutions. Real numbers.
          </p>
        </div>

        <div className="space-y-24">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div key={cs.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative h-72 rounded-2xl overflow-hidden">
                  <Image src={cs.image} alt={cs.title} fill className="object-cover" />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(135deg,rgba(132,255,0,0.15) 0%,rgba(0,0,0,0.6) 100%)" }} />
                </div>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex flex-wrap gap-2 mb-5">
                  {cs.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <p className="text-xs uppercase tracking-widest mb-2 text-slate-500 font-semibold">{cs.client}</p>
                <h3 className="text-xl sm:text-2xl font-bold mb-6 font-orbitron text-slate-100 leading-snug">{cs.title}</h3>
                <div className="space-y-5 mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-2 text-lime font-bold">The Challenge</p>
                    <p className="text-sm leading-relaxed text-slate-400">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-2 text-lime font-bold">Our Solution</p>
                    <p className="text-sm leading-relaxed text-slate-400">{cs.solution}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {cs.results.map(r => (
                    <div key={r.label} className="rounded-xl p-5 text-center bg-card border border-lime/[0.15]">
                      <div className="text-2xl font-bold mb-1.5 font-orbitron text-lime">{r.metric}</div>
                      <div className="text-sm text-slate-400">{r.label}</div>
                    </div>
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
