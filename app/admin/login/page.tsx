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
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "#0f172a" }}
    >
      <div
        className="w-full max-w-sm rounded-2xl p-8"
        style={{
          background: "#1e293b",
          border: "1px solid rgba(132,255,0,0.15)",
        }}
      >
        <div className="flex justify-center mb-6">
          <Image src="/logos/gmhco-logo.png" alt="GMHCO" width={48} height={48} className="rounded-xl" />
        </div>
        <h1
          className="text-center text-xl font-bold mb-2"
          style={{ fontFamily: "Orbitron, sans-serif", color: "#84ff00" }}
        >
          GMHCO Admin
        </h1>
        <p className="text-center text-sm mb-8" style={{ color: "#94a3b8" }}>
          Sign in to your dashboard
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm mb-1.5" style={{ color: "#cbd5e1" }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl text-sm"
              style={{
                background: "#0f172a",
                border: "1px solid rgba(132,255,0,0.2)",
                color: "#e2e8f0",
                outline: "none",
              }}
            />
          </div>
          <div>
            <label className="block text-sm mb-1.5" style={{ color: "#cbd5e1" }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl text-sm"
              style={{
                background: "#0f172a",
                border: "1px solid rgba(132,255,0,0.2)",
                color: "#e2e8f0",
                outline: "none",
              }}
            />
          </div>
          {error && (
            <p className="text-sm" style={{ color: "#ef4444" }}>{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-sm font-semibold transition-all disabled:opacity-60"
            style={{ background: "#84ff00", color: "#0f172a" }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}
