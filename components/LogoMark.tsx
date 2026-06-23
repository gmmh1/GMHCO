"use client";

import { useId } from "react";

export function LogoMark({ size = 36 }: { size?: number }) {
  const uid = useId();
  const grad = `gm${uid.replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GMHCO logo mark"
    >
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#84ff00" />
          <stop offset="100%" stopColor="#00e5ff" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="100" height="100" rx="20" fill="#0d1527" />
      {/* Border */}
      <rect x="1.5" y="1.5" width="97" height="97" rx="18.5" fill="none" stroke="#84ff00" strokeWidth="2.5" strokeOpacity="0.55" />

      {/* G mark — geometric block letterform */}
      {/* Top horizontal bar */}
      <rect x="12" y="12" width="76" height="14" rx="3" fill={`url(#${grad})`} />
      {/* Left vertical bar */}
      <rect x="12" y="12" width="14" height="76" rx="3" fill={`url(#${grad})`} />
      {/* Bottom horizontal bar */}
      <rect x="12" y="74" width="76" height="14" rx="3" fill={`url(#${grad})`} />
      {/* Right vertical bar — lower 55% only (creates the G opening at top-right) */}
      <rect x="74" y="43" width="14" height="45" rx="3" fill={`url(#${grad})`} />
      {/* Middle crossbar — extends inward from right */}
      <rect x="43" y="43" width="45" height="14" rx="3" fill={`url(#${grad})`} />

      {/* Circuit node accent at crossbar entry point */}
      <circle cx="43" cy="50" r="4" fill="#00e5ff" opacity="0.5" />
    </svg>
  );
}
