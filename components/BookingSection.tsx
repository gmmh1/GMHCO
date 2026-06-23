"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, Video } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function BookingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="booking" className="section-py" style={{ background: "#0f172a" }} ref={sectionRef}>
      <div className="page-wrap">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="section-tag">Free Consultation</span>
          <h2 className="mt-4 py-2 text-3xl sm:text-4xl font-bold font-orbitron text-slate-100">
            Book a Free 30-Minute Strategy Call
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed" style={{ color: "#94a3b8", textAlign: "center" }}>
            No sales pitch. No obligation. Just a direct conversation about your goals and how we can help.
          </p>
        </div>

        {/* Feature bullets */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
          {[
            { icon: Clock, text: "30 minutes, your time zone" },
            { icon: Video, text: "Google Meet or Zoom" },
            { icon: Calendar, text: "Pick any available slot" },
          ].map(({ icon: Icon, text }) => (
            <a
              key={text}
              href={SITE.cal}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-70"
            >
              <Icon size={16} style={{ color: "#84ff00" }} />
              <span className="text-sm" style={{ color: "#94a3b8" }}>{text}</span>
            </a>
          ))}
        </div>

        {/* Cal.eu embed */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(132,255,0,0.15)", minHeight: "500px", background: "#1e293b" }}
        >
          {visible ? (
            <iframe
              src={SITE.cal}
              width="100%"
              height="600"
              frameBorder="0"
              loading="lazy"
              title="Book a 30-minute strategy call"
              style={{ border: "none" }}
            />
          ) : (
            <div className="flex items-center justify-center h-64">
              <p style={{ color: "#94a3b8" }}>Loading booking calendar…</p>
            </div>
          )}
        </div>

        <p className="text-center text-xs mt-4" style={{ color: "#64748b" }}>
          Alternatively, email us at{" "}
          <a href={`mailto:${SITE.email}`} style={{ color: "#84ff00" }}>
            {SITE.email}
          </a>
        </p>
      </div>
    </section>
  );
}
