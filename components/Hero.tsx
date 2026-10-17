"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/constants";

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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy">
      <ParticleCanvas />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(132,255,0,0.06) 0%, transparent 70%)" }} />

      {/* Hero content */}
      <div className="relative z-10 w-full pt-28 pb-12 text-center page-wrap-md">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-tag">Digital growth · Software · Technology services</span>
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
          Digital growth, software and technology engagements shaped around your business needs.
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
          <span className="text-xs uppercase tracking-widest text-slate-500">
            Selected individual credentials
          </span>
          <a href="#certifications" className="text-sm font-semibold text-slate-400 hover:text-lime transition-colors">
            View details
          </a>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        <a href="#services"><ChevronDown size={28} className="text-lime/50" /></a>
      </motion.div>
    </section>
  );
}
