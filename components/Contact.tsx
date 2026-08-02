"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, ChevronRight, ChevronLeft, Package } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { PACKAGE_REQUEST_KEY, type PendingPackageRequest } from "@/lib/packageRequest";

const schema = z.object({
  name:    z.string().min(2),
  email:   z.string().email(),
  phone:   z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  budget:  z.string().optional(),
  message: z.string().min(10, "Please tell us a bit more (at least 10 characters)"),
});

type FormData = z.infer<typeof schema>;

const BUDGET_OPTIONS = [
  "Under $2,000", "$2,000 – $5,000", "$5,000 – $15,000",
  "$15,000 – $50,000", "$50,000+", "Prefer not to say",
];

export default function Contact() {
  const [step,     setStep]    = useState(1);
  const [status,   setStatus]  = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [hasPendingPackage, setHasPendingPackage] = useState(false);

  const { register, handleSubmit, trigger, setValue, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    const raw = sessionStorage.getItem(PACKAGE_REQUEST_KEY);
    if (!raw) return;
    sessionStorage.removeItem(PACKAGE_REQUEST_KEY);
    try {
      const pending: PendingPackageRequest = JSON.parse(raw);
      setValue("service", pending.service);
      setValue("message", pending.message);
      // One-time hydration from sessionStorage on mount, guarded by the `if (!raw) return`
      // above — not a subscription loop, so the set-state-in-effect rule doesn't apply here.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHasPendingPackage(true);
    } catch {
      // malformed sessionStorage payload — ignore, form stays blank
    }
  }, [setValue]);

  const nextStep = async () => {
    const fields: (keyof FormData)[][] = [["name", "email", "phone"], ["company", "service", "budget"], ["message"]];
    const valid = await trigger(fields[step - 1]);
    if (valid) setStep((s) => Math.min(s + 1, 3));
  };

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try WhatsApp or email us directly.");
    }
  };

  if (status === "success") {
    return (
      <section id="contact" className="section-py overflow-hidden bg-navy-deep">
        <div className="page-wrap-md text-center">
          <CheckCircle size={64} className="mx-auto mb-6 text-lime" />
          <h3 className="text-2xl font-bold mb-3 font-orbitron text-slate-100">Message Received!</h3>
          <p className="text-slate-400">GM will review your enquiry and respond within 24 hours.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-py overflow-hidden bg-navy-deep">
      <div className="page-wrap-md">

        <div className="flex flex-col items-center text-center mb-16">
          <span className="section-tag">Get in Touch</span>
          <h2 className="mt-6 py-2 text-4xl sm:text-5xl font-bold font-orbitron text-slate-100">Start Your Project</h2>
          <p className="mt-4 text-base text-slate-400">Tell us what you&apos;re building. We respond within 24 hours.</p>
        </div>

        {hasPendingPackage && (
          <div className="flex items-center gap-3 mb-8 p-4 rounded-xl bg-lime/10 border border-lime/30">
            <Package size={18} className="text-lime flex-shrink-0" />
            <p className="text-sm text-slate-200">
              Your custom Google Ads package is ready to send — just add your contact details below.
            </p>
          </div>
        )}

        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all"
                style={{
                  background: s <= step ? "#84ff00" : "#1e293b",
                  color:      s <= step ? "#0f172a" : "#94a3b8",
                  border:     s <= step ? "none"    : "1px solid rgba(132,255,0,0.2)",
                }}
              >{s}</div>
              {s < 3 && (
                <div className="flex-1 h-px transition-all"
                  style={{ background: s < step ? "#84ff00" : "rgba(132,255,0,0.15)" }} />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-2xl bg-card border border-lime/[0.15]" style={{ padding: "2.5rem" }}>

            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <h3 className="text-xs font-bold font-orbitron text-slate-400 uppercase tracking-widest mb-6">
                  Step 1 — Your Contact Details
                </h3>
                {[
                  { id: "name",  label: "Full Name *",      placeholder: "John Smith",       type: "text"  },
                  { id: "email", label: "Email Address *",  placeholder: "john@company.com", type: "email" },
                  { id: "phone", label: "Phone (optional)", placeholder: "+44 7000 000000",  type: "tel"   },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="block text-sm font-medium mb-2 text-slate-300">{f.label}</label>
                    <input {...register(f.id as keyof FormData)} type={f.type} placeholder={f.placeholder}
                      className={`form-input ${errors[f.id as keyof FormData] ? "form-input-error" : ""}`} />
                    {errors[f.id as keyof FormData] && (
                      <p className="text-xs mt-1.5 text-red-500">{errors[f.id as keyof FormData]?.message}</p>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <h3 className="text-xs font-bold font-orbitron text-slate-400 uppercase tracking-widest mb-6">
                  Step 2 — About Your Project
                </h3>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Company (optional)</label>
                  <input {...register("company")} placeholder="Acme Corp" className="form-input" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Service You Need</label>
                  <select {...register("service")} className="form-input">
                    <option value="">Select a service...</option>
                    {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                    <option value="Not sure — need guidance">Not sure — need guidance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Approximate Budget</label>
                  <select {...register("budget")} className="form-input">
                    <option value="">Select budget range...</option>
                    {BUDGET_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <h3 className="text-xs font-bold font-orbitron text-slate-400 uppercase tracking-widest mb-6">
                  Step 3 — Describe Your Challenge
                </h3>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Your Message *</label>
                  <textarea {...register("message")} rows={7}
                    placeholder="Tell us about your project, the problem you are solving, and what success looks like..."
                    className={`form-input ${errors.message ? "form-input-error" : ""}`} />
                  {errors.message && <p className="text-xs mt-1.5 text-red-500">{errors.message.message}</p>}
                </div>
                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10">
                    <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                    <p className="text-sm text-red-500">{errorMsg}</p>
                  </div>
                )}
              </motion.div>
            )}

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-lime/10">
              {step > 1 ? (
                <button type="button" onClick={() => setStep((s) => s - 1)}
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors">
                  <ChevronLeft size={16} /> Back
                </button>
              ) : <div />}

              {step < 3 ? (
                <button type="button" onClick={nextStep} className="btn-sm-lime">
                  Continue <ChevronRight size={16} />
                </button>
              ) : (
                <button type="submit" disabled={status === "loading"} className="btn-sm-lime disabled:opacity-60">
                  {status === "loading" ? "Sending…" : "Send Message"} <Send size={16} />
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
