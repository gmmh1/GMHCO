"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#certifications", label: "Certifications" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b"
          : "bg-transparent"
      )}
      style={scrolled ? {
        background: "rgba(8,14,26,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderColor: "rgba(255,255,255,0.06)",
        boxShadow: "0 1px 40px rgba(0,0,0,0.4)",
      } : {}}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logos/gmhco-logo.png"
            alt="GMHCO Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span
            className="font-orbitron text-xl font-bold text-lime group-hover:opacity-80 transition-opacity"
            style={{
              fontFamily: "Orbitron, sans-serif",
              color: "#84ff00",
              textShadow: "0 0 12px rgba(132,255,0,0.5)",
            }}
          >
            {SITE.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-slate-300 hover:text-lime transition-colors hover-underline"
                style={{ color: "#cbd5e1" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#84ff00")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#cbd5e1")
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={SITE.cal}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "#84ff00",
              color: "#0f172a",
              boxShadow: "0 0 20px rgba(132,255,0,0.3)",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.boxShadow =
                "0 0 30px rgba(132,255,0,0.6)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.boxShadow =
                "0 0 20px rgba(132,255,0,0.3)")
            }
          >
            Book a Call
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md text-slate-300 hover:text-lime transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden border-t"
          style={{
            background: "#0f172a",
            borderColor: "rgba(132,255,0,0.15)",
          }}
        >
          <ul className="px-6 py-4 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm py-1.5"
                  style={{ color: "#cbd5e1" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={SITE.cal}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 rounded-full text-sm font-semibold"
                style={{ background: "#84ff00", color: "#0f172a" }}
              >
                Book a Free Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
