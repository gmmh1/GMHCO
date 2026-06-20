"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SITE, STATS } from "@/lib/constants";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Array<{
      x: number; y: number; vx: number; vy: number; size: number; opacity: number;
    }> = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(132,255,0,${p.opacity})`;
        ctx.fill();
      });

      // Draw connecting lines
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(132,255,0,${0.08 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let start = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 20);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} style={{ fontFamily: "Orbitron, sans-serif", color: "#84ff00" }}>
      {count}{suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0f172a" }}
    >
      <ParticleCanvas />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(132,255,0,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Google-Certified · AI-Native · Enterprise-Grade</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
          style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We Build the Systems{" "}
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #84ff00, #00e5ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            That Scale Your Business
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto"
          style={{ color: "#94a3b8", lineHeight: 1.7 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          AI-Powered IT Solutions · Certified Google Ads · SaaS Development · Data Intelligence
          <br />
          <span style={{ color: "#cbd5e1" }}>
            Enterprise-grade technology strategy for businesses that demand results, not excuses.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={SITE.cal}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-200 hover:-translate-y-1"
            style={{
              background: "#84ff00",
              color: "#0f172a",
              boxShadow: "0 0 30px rgba(132,255,0,0.4)",
            }}
          >
            Start Your Project <ArrowRight size={18} />
          </a>
          <a
            href="#portfolio"
            className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold border transition-all duration-200 hover:-translate-y-1 hover:border-lime"
            style={{
              border: "1px solid rgba(132,255,0,0.4)",
              color: "#e2e8f0",
            }}
          >
            View Our Work
          </a>
        </motion.div>

        {/* Trust logos */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-8 opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-xs uppercase tracking-widest" style={{ color: "#94a3b8" }}>
            Certified by
          </span>
          {["Google", "HubSpot", "freeCodeCamp", "CILEX"].map((brand) => (
            <span
              key={brand}
              className="text-sm font-semibold"
              style={{ color: "#94a3b8", fontFamily: "Inter, sans-serif" }}
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto mt-16 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl p-6"
          style={{
            background: "rgba(30,41,59,0.8)",
            border: "1px solid rgba(132,255,0,0.15)",
            backdropFilter: "blur(12px)",
          }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "Orbitron, sans-serif" }}>
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs sm:text-sm" style={{ color: "#94a3b8" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#services">
          <ChevronDown size={28} style={{ color: "rgba(132,255,0,0.5)" }} />
        </a>
      </motion.div>
    </section>
  );
}
