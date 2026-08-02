"use client";

import { useMemo, useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { GOOGLE_ADS_PACKAGE_BUILDER, SITE } from "@/lib/constants";

export default function GoogleAdsPackageBuilder() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectedAddons = useMemo(
    () =>
      GOOGLE_ADS_PACKAGE_BUILDER.categories
        .flatMap((c) => c.addons)
        .filter((a) => selected.has(a.id)),
    [selected]
  );

  const total = GOOGLE_ADS_PACKAGE_BUILDER.basePrice + selectedAddons.reduce((sum, a) => sum + a.price, 0);

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}>
        Build Your Package
      </h2>
      <p className="text-sm mb-8" style={{ color: "#94a3b8", maxWidth: "700px" }}>
        Every business is different. Select the services you need below — your monthly investment updates automatically, so you know exactly what {`£${GOOGLE_ADS_PACKAGE_BUILDER.basePrice}+`} actually gets you.
      </p>

      {/* Base package */}
      <div
        className="rounded-2xl p-6 mb-8"
        style={{ background: "#1e293b", border: "1px solid rgba(132,255,0,0.3)" }}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
          <h3 className="text-base font-semibold" style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}>
            Base Package
          </h3>
          <span className="text-lg font-bold" style={{ color: "#84ff00" }}>
            £{GOOGLE_ADS_PACKAGE_BUILDER.basePrice}/month
          </span>
        </div>
        <p className="text-sm mb-4" style={{ color: "#94a3b8" }}>
          Everything needed to launch and manage a professional Google Ads account. Included in every package.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
          {GOOGLE_ADS_PACKAGE_BUILDER.baseIncludes.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <CheckCircle size={15} style={{ color: "#84ff00", flexShrink: 0, marginTop: "2px" }} />
              <span className="text-sm" style={{ color: "#cbd5e1" }}>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs" style={{ color: "#64748b" }}>
          Recommended Ad Spend: {GOOGLE_ADS_PACKAGE_BUILDER.recommendedSpend}
        </p>
      </div>

      {/* Add-on categories */}
      <div className="space-y-8 mb-8">
        {GOOGLE_ADS_PACKAGE_BUILDER.categories.map((category) => (
          <div key={category.name}>
            <h3 className="text-sm font-semibold mb-3" style={{ color: "#e2e8f0" }}>
              {category.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {category.addons.map((addon) => {
                const checked = selected.has(addon.id);
                return (
                  <label
                    key={addon.id}
                    className="flex items-start gap-3 rounded-xl p-4 cursor-pointer transition-colors"
                    style={{
                      background: checked ? "rgba(132,255,0,0.06)" : "#1e293b",
                      border: checked ? "1px solid rgba(132,255,0,0.4)" : "1px solid rgba(132,255,0,0.1)",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggle(addon.id)}
                      className="mt-1 flex-shrink-0"
                      style={{ accentColor: "#84ff00", width: "16px", height: "16px" }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold" style={{ color: "#e2e8f0" }}>
                          {addon.label}
                        </span>
                        <span className="text-xs font-semibold flex-shrink-0" style={{ color: "#84ff00" }}>
                          +£{addon.price}/mo
                        </span>
                      </div>
                      <p className="text-xs mt-1 leading-relaxed" style={{ color: "#94a3b8" }}>
                        {addon.desc}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div
        className="rounded-2xl p-6"
        style={{
          background: "linear-gradient(135deg, rgba(132,255,0,0.08), rgba(0,229,255,0.05))",
          border: "1px solid rgba(132,255,0,0.3)",
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <p className="text-xs uppercase tracking-wide mb-1" style={{ color: "#64748b" }}>
              Your Custom Package
            </p>
            <p className="text-3xl font-bold" style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}>
              £{total}<span className="text-base font-normal" style={{ color: "#94a3b8" }}>/month</span>
            </p>
          </div>
          <a
            href={SITE.cal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5 flex-shrink-0"
            style={{ background: "#84ff00", color: "#0f172a" }}
          >
            Get This Package <ArrowRight size={16} />
          </a>
        </div>
        {selectedAddons.length > 0 && (
          <div className="pt-4 space-y-1.5" style={{ borderTop: "1px solid rgba(132,255,0,0.15)" }}>
            <div className="flex items-center justify-between text-xs" style={{ color: "#94a3b8" }}>
              <span>Base Package</span>
              <span>£{GOOGLE_ADS_PACKAGE_BUILDER.basePrice}/mo</span>
            </div>
            {selectedAddons.map((addon) => (
              <div key={addon.id} className="flex items-center justify-between text-xs" style={{ color: "#94a3b8" }}>
                <span>{addon.label}</span>
                <span>+£{addon.price}/mo</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
