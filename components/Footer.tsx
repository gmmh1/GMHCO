import Link from "next/link";
import { SITE, SERVICES } from "@/lib/constants";
import { LogoMark } from "@/components/LogoMark";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-py"
      style={{
        background: "#0a1022",
        borderTop: "1px solid rgba(132,255,0,0.15)",
      }}
    >
      <div className="page-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark size={42} />
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: "Orbitron, sans-serif", color: "#84ff00" }}
              >
                {SITE.name}
              </span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: "#94a3b8" }}>
              AI-Powered IT Solutions & Enterprise Digital Strategy. Helping ambitious businesses scale with technology that actually works.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm transition-colors"
                style={{ color: "#84ff00" }}
              >
                {SITE.email}
              </a>
            </div>
            <div className="mt-2">
              <a
                href={`tel:${SITE.phone}`}
                className="text-sm transition-colors"
                style={{ color: "#94a3b8" }}
              >
                {SITE.phone}
              </a>
            </div>
            <p className="mt-2 text-xs" style={{ color: "#64748b" }}>
              London, United Kingdom
            </p>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: "#84ff00" }}
            >
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm transition-colors"
                    style={{ color: "#94a3b8" }}
                  >
                    {s.title.split("&")[0].trim()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: "#84ff00" }}
            >
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { href: "#portfolio", label: "Portfolio" },
                { href: "#case-studies", label: "Case Studies" },
                { href: "#certifications", label: "Certifications" },
                { href: "/blog", label: "Blog & Insights" },
                { href: "#contact", label: "Contact" },
                { href: SITE.cal, label: "Book a Call", external: true },
              ].map((l) => (
                <li key={l.href}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors"
                      style={{ color: "#94a3b8" }}
                    >
                      {l.label}
                    </a>
                  ) : (
                    <a
                      href={l.href}
                      className="text-sm transition-colors"
                      style={{ color: "#94a3b8" }}
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(132,255,0,0.1)" }}
        >
          <p className="text-xs" style={{ color: "#94a3b8" }}>
            © {year} GMHCO. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-lime"
              style={{ color: "#94a3b8" }}
            >
              LinkedIn
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-lime"
              style={{ color: "#94a3b8" }}
            >
              GitHub
            </a>
            <a href="/privacy" className="text-xs transition-colors hover:text-lime" style={{ color: "#94a3b8" }}>Privacy</a>
            <a href="/terms" className="text-xs transition-colors hover:text-lime" style={{ color: "#94a3b8" }}>Terms</a>
            <span className="text-xs" style={{ color: "#64748b" }}>London, UK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
