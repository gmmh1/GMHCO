"use client";

import { useState } from "react";

export default function LinkedInComposer() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState<"idle" | "posting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handlePost() {
    setStatus("posting");
    setError("");
    try {
      const res = await fetch("/api/linkedin/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setError(data.error ?? "Failed to post");
        return;
      }
      setStatus("success");
      setText("");
    } catch {
      setStatus("error");
      setError("Network error — please try again.");
    }
  }

  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <h2
        className="text-lg font-semibold"
        style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0", fontSize: "1rem", marginBottom: "1rem" }}
      >
        Post to LinkedIn
      </h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or write the post text here — review it before posting, this goes live immediately."
        rows={6}
        className="w-full rounded-xl text-sm"
        style={{ background: "#1e293b", border: "1px solid rgba(0,229,255,0.15)", color: "#e2e8f0", padding: "1rem" }}
      />
      <div className="flex items-center gap-3" style={{ marginTop: "0.75rem" }}>
        <button
          onClick={handlePost}
          disabled={status === "posting" || text.trim().length === 0}
          className="text-sm rounded-full disabled:opacity-40"
          style={{ border: "1px solid rgba(0,229,255,0.4)", color: "#00e5ff", paddingLeft: "1.25rem", paddingRight: "1.25rem", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
        >
          {status === "posting" ? "Posting…" : "Post to LinkedIn"}
        </button>
        {status === "success" && <span className="text-xs" style={{ color: "#84ff00" }}>Posted successfully.</span>}
        {status === "error" && <span className="text-xs" style={{ color: "#ff6b6b" }}>{error}</span>}
      </div>
    </section>
  );
}
