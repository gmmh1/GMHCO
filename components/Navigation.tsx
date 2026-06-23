"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/LogoMark";

const NAV_LINKS = [
  { href: "/#services",       label: "Services" },
  { href: "/#process",        label: "Process" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#portfolio",      label: "Portfolio" },
  { href: "/#case-studies",   label: "Case Studies" },
  { href: "/blog",            label: "Blog" },
  { href: "/#contact",        label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "nav-glass border-b border-white/[0.06]" : "bg-transparent"
    )}>
      <div className="page-wrap">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <LogoMark size={36} />
            <span className="font-orbitron text-lg font-bold text-lime drop-shadow-[0_0_10px_rgba(132,255,0,0.5)] group-hover:opacity-80 transition-opacity">
              {SITE.name}
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}
                  className="text-sm text-slate-400 hover:text-lime transition-colors duration-200 hover-underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + burger */}
          <div className="flex items-center gap-4">
            <a href={SITE.cal} target="_blank" rel="noopener noreferrer"
              className="hidden lg:inline-flex btn-sm-lime">
              Book a Call
            </a>
            <button onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-300 hover:text-lime transition-colors"
              aria-label="Toggle menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-navy border-t border-lime/[0.12]">
          <div className="page-wrap py-5 space-y-1">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block py-3 text-sm text-slate-300 hover:text-lime transition-colors border-b border-white/[0.05]">
                {l.label}
              </a>
            ))}
            <div className="pt-4">
              <a href={SITE.cal} target="_blank" rel="noopener noreferrer" className="btn-lime block text-center">
                Book a Free Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
