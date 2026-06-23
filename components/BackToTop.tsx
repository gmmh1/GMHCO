"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: "90px",
        right: "20px",
        zIndex: 40,
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        background: "rgba(132,255,0,0.15)",
        border: "1px solid rgba(132,255,0,0.4)",
        color: "#84ff00",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "background 0.2s, transform 0.2s",
        backdropFilter: "blur(8px)",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(132,255,0,0.25)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(132,255,0,0.15)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
    >
      <ArrowUp size={18} />
    </button>
  );
}
