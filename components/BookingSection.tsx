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
    <section id="booking" className="py-24 px-4" style={{ background: "#0f172a" }} ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag">Free Consultation</span>
          <h2
            className="mt-4 text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
          >
            Book a Free 30-Minute Strategy Call
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ color: "#94a3b8" }}>
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
            <div key={text} className="flex items-center gap-2">
              <Icon size={16} style={{ color: "#84ff00" }} />
              <span className="text-sm" style={{ color: "#94a3b8" }}>{text}</span>
            </div>
          ))}
        </div>

        {/* Cal.com embed or CTA */}
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
              title="Book a discovery call with GMHCO"
              style={{ border: "none" }}
            />
          ) : (
            <div className="flex items-center justify-center h-64">
              <p style={{ color: "#94a3b8" }}>Loading booking calendar...</p>
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
