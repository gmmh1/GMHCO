"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, ChevronRight, ChevronLeft } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit more (at least 10 characters)"),
});

type FormData = z.infer<typeof schema>;

const BUDGET_OPTIONS = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Prefer not to say",
];

export default function Contact() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const nextStep = async () => {
    const fields: (keyof FormData)[][] = [
      ["name", "email", "phone"],
      ["company", "service", "budget"],
      ["message"],
    ];
    const valid = await trigger(fields[step - 1]);
    if (valid) setStep((s) => Math.min(s + 1, 3));
  };

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try WhatsApp or email us directly.");
    }
  };

  if (status === "success") {
    return (
      <section id="contact" className="py-24 px-4" style={{ background: "#0a1022" }}>
        <div className="max-w-xl mx-auto text-center">
          <CheckCircle size={64} className="mx-auto mb-6" style={{ color: "#84ff00" }} />
          <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}>
            Message Received!
          </h3>
          <p style={{ color: "#94a3b8" }}>
            GM will review your enquiry and get back to you within 24 hours. Check your inbox — you may also receive a confirmation email.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-4" style={{ background: "#0a1022" }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-tag">Get in Touch</span>
          <h2
            className="mt-4 text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
          >
            Start Your Project
          </h2>
          <p className="mt-3" style={{ color: "#94a3b8" }}>
            Tell us what you are building. We will respond within 24 hours.
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all"
                style={{
                  background: s <= step ? "#84ff00" : "#1e293b",
                  color: s <= step ? "#0f172a" : "#94a3b8",
                  border: s <= step ? "none" : "1px solid rgba(132,255,0,0.2)",
                }}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className="flex-1 h-px transition-all"
                  style={{ background: s < step ? "#84ff00" : "rgba(132,255,0,0.15)" }}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "#1e293b",
              border: "1px solid rgba(132,255,0,0.15)",
            }}
          >
            {/* Step 1 */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-base font-semibold mb-4" style={{ color: "#e2e8f0", fontFamily: "Orbitron, sans-serif" }}>
                  Your Contact Details
                </h3>
                {[
                  { id: "name", label: "Full Name *", placeholder: "John Smith", type: "text" },
                  { id: "email", label: "Email Address *", placeholder: "john@company.com", type: "email" },
                  { id: "phone", label: "Phone (optional)", placeholder: "+44 7000 000000", type: "tel" },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="block text-sm mb-1.5" style={{ color: "#cbd5e1" }}>
                      {f.label}
                    </label>
                    <input
                      {...register(f.id as keyof FormData)}
                      type={f.type}
                      placeholder={f.placeholder}
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all"
                      style={{
                        background: "#0f172a",
                        border: errors[f.id as keyof FormData] ? "1px solid #ef4444" : "1px solid rgba(132,255,0,0.2)",
                        color: "#e2e8f0",
                        outline: "none",
                      }}
                    />
                    {errors[f.id as keyof FormData] && (
                      <p className="text-xs mt-1" style={{ color: "#ef4444" }}>
                        {errors[f.id as keyof FormData]?.message}
                      </p>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-base font-semibold mb-4" style={{ color: "#e2e8f0", fontFamily: "Orbitron, sans-serif" }}>
                  About Your Project
                </h3>
                <div>
                  <label className="block text-sm mb-1.5" style={{ color: "#cbd5e1" }}>
                    Company (optional)
                  </label>
                  <input
                    {...register("company")}
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={{
                      background: "#0f172a",
                      border: "1px solid rgba(132,255,0,0.2)",
                      color: "#e2e8f0",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1.5" style={{ color: "#cbd5e1" }}>
                    Service You Need
                  </label>
                  <select
                    {...register("service")}
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={{
                      background: "#0f172a",
                      border: "1px solid rgba(132,255,0,0.2)",
                      color: "#e2e8f0",
                    }}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Not sure — need guidance">Not sure — need guidance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1.5" style={{ color: "#cbd5e1" }}>
                    Approximate Budget
                  </label>
                  <select
                    {...register("budget")}
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={{
                      background: "#0f172a",
                      border: "1px solid rgba(132,255,0,0.2)",
                      color: "#e2e8f0",
                    }}
                  >
                    <option value="">Select budget range...</option>
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-base font-semibold mb-4" style={{ color: "#e2e8f0", fontFamily: "Orbitron, sans-serif" }}>
                  Describe Your Challenge
                </h3>
                <div>
                  <label className="block text-sm mb-1.5" style={{ color: "#cbd5e1" }}>
                    Your Message *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={6}
                    placeholder="Tell us about your project, the problem you are solving, and what success looks like for you..."
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={{
                      background: "#0f172a",
                      border: errors.message ? "1px solid #ef4444" : "1px solid rgba(132,255,0,0.2)",
                      color: "#e2e8f0",
                      resize: "vertical",
                    }}
                  />
                  {errors.message && (
                    <p className="text-xs mt-1" style={{ color: "#ef4444" }}>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-lg" style={{ background: "rgba(239,68,68,0.1)" }}>
                    <AlertCircle size={16} style={{ color: "#ef4444" }} />
                    <p className="text-sm" style={{ color: "#ef4444" }}>{errorMsg}</p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 pt-4" style={{ borderTop: "1px solid rgba(132,255,0,0.1)" }}>
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: "#94a3b8" }}
                >
                  <ChevronLeft size={16} /> Back
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
                  style={{ background: "#84ff00", color: "#0f172a" }}
                >
                  Next <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5 disabled:opacity-60"
                  style={{ background: "#84ff00", color: "#0f172a" }}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
