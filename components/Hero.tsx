"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SITE, STATS } from "@/lib/constants";

function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    let id: number;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize(); window.addEventListener("resize", resize);
    const pts = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 2 + 0.5, o: Math.random() * 0.4 + 0.1,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(132,255,0,${p.o})`; ctx.fill();
      });
      pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) {
          ctx.beginPath(); ctx.strokeStyle = `rgba(132,255,0,${0.07 * (1 - d / 130)})`;
          ctx.lineWidth = 0.5; ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }));
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 pointer-events-none opacity-70" />;
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [n, set] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; obs.disconnect();
      let v = 0; const step = Math.ceil(target / 60);
      const t = setInterval(() => { v += step; if (v >= target) { set(target); clearInterval(t); } else set(v); }, 20);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref} className="font-orbitron text-lime">{n}{suffix}</span>;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy">
      <ParticleCanvas />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(132,255,0,0.06) 0%, transparent 70%)" }} />

      {/* Hero content */}
      <div className="relative z-10 w-full pt-28 pb-12 text-center page-wrap-md">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-tag">Google-Certified · AI-Native · Enterprise-Grade</span>
        </motion.div>

        <motion.h1
          className="mt-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] font-orbitron text-slate-100"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          We Build the Systems<br />
          <span className="text-gradient-lime">That Scale Your Business</span>
        </motion.h1>

        <motion.p
          className="mt-7 text-base sm:text-lg leading-relaxed text-slate-400 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          AI-Powered IT Solutions · Certified Google Ads · SaaS Development · Data Intelligence.{" "}
          <span className="text-slate-300">Enterprise-grade technology for businesses that demand real results.</span>
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href={SITE.cal} target="_blank" rel="noopener noreferrer" className="btn-lime">
            Start Your Project <ArrowRight size={18} />
          </a>
          <a href="#portfolio" className="btn-outline">View Our Work</a>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-xs uppercase tracking-widest text-slate-500">Certified by</span>
          {["Google", "HubSpot", "freeCodeCamp", "CILEX"].map(b => (
            <span key={b} className="text-sm font-semibold text-slate-500">{b}</span>
          ))}
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        className="relative z-10 w-full page-wrap pb-16"
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl p-6 sm:p-8"
          style={{ background: "rgba(30,41,59,0.8)", border: "1px solid rgba(132,255,0,0.15)", backdropFilter: "blur(12px)" }}>
          {STATS.map(s => (
            <div key={s.label} className="text-center py-2">
              <div style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.02em" }}><Counter target={s.value} suffix={s.suffix} /></div>
              <div className="mt-2 text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        <a href="#services"><ChevronDown size={28} className="text-lime/50" /></a>
      </motion.div>
    </section>
  );
}
