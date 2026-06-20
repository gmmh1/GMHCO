import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore GMHCO's 9 core IT services: Technology Consulting, Google Ads, Data Analytics, API Integration, Cloud & DevOps, AI Automation, SaaS Development, AI Chatbots & RAG, and Mobile Apps.",
  alternates: { canonical: `${SITE.url}/services` },
};

export default function ServicesPage() {
  return (
    <main style={{ background: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{
              background: "rgba(132,255,0,0.1)",
              color: "#84ff00",
              border: "1px solid rgba(132,255,0,0.3)",
            }}
          >
            What We Offer
          </span>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            All Services
          </h1>
          <p className="max-w-2xl mx-auto" style={{ color: "#94a3b8" }}>
            Nine specialist services built to solve real business problems and deliver measurable results for high-growth companies worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <div
                className="hover-card h-full rounded-2xl p-6 flex flex-col gap-3 group"
                style={{
                  background: "#1e293b",
                  border: "1px solid rgba(132,255,0,0.1)",
                }}
              >
                <div>
                  <h2
                    className="text-base font-semibold mb-2"
                    style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0", fontSize: "0.9rem" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                    {service.shortDesc}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs font-semibold" style={{ color: "#84ff00" }}>
                    From {service.startingAt}
                  </span>
                  <span
                    className="flex items-center gap-1 text-xs transition-transform group-hover:translate-x-1"
                    style={{ color: "#84ff00" }}
                  >
                    Learn more <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
