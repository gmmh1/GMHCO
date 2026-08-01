"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Invalid credentials. Please try again.");
    }
    setLoading(false);
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#0f172a", paddingLeft: "1rem", paddingRight: "1rem" }}
    >
      <div
        className="w-full max-w-sm rounded-2xl"
        style={{
          background: "#1e293b",
          border: "1px solid rgba(132,255,0,0.15)",
          padding: "2rem",
        }}
      >
        <div className="flex justify-center" style={{ marginBottom: "1.5rem" }}>
          <Image src="/logos/gmhco-logo.png" alt="GMHCO" width={48} height={48} className="rounded-xl" />
        </div>
        <h1
          className="text-center text-xl font-bold"
          style={{ fontFamily: "Orbitron, sans-serif", color: "#84ff00", marginBottom: "0.5rem" }}
        >
          GMHCO Admin
        </h1>
        <p className="text-center text-sm" style={{ color: "#94a3b8", marginBottom: "2rem" }}>
          Sign in to your dashboard
        </p>

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label className="block text-sm" style={{ color: "#cbd5e1", marginBottom: "0.375rem" }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl text-sm"
              style={{
                background: "#0f172a",
                border: "1px solid rgba(132,255,0,0.2)",
                color: "#e2e8f0",
                outline: "none",
                padding: "0.75rem 1rem",
              }}
            />
          </div>
          <div>
            <label className="block text-sm" style={{ color: "#cbd5e1", marginBottom: "0.375rem" }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl text-sm"
              style={{
                background: "#0f172a",
                border: "1px solid rgba(132,255,0,0.2)",
                color: "#e2e8f0",
                outline: "none",
                padding: "0.75rem 1rem",
              }}
            />
          </div>
          {error && (
            <p className="text-sm" style={{ color: "#ef4444" }}>{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl text-sm font-semibold transition-all disabled:opacity-60"
            style={{ background: "#84ff00", color: "#0f172a", paddingTop: "0.75rem", paddingBottom: "0.75rem" }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}
