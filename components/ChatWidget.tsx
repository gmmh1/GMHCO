"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Loader2 } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const GREETING = `Hi! I'm GMHCO's AI assistant.

I can help you:
• Understand which service fits your needs
• Get pricing estimates
• Book a free discovery call

What brings you here today?`;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const toggle = () => {
    setOpen((o) => !o);
    if (!open) { setUnread(0); setTimeout(() => inputRef.current?.focus(), 200); }
  };

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setLoading(true);

    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.message || "Sorry, I couldn't process that. Please try again." }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "I'm having trouble connecting right now. Please contact us via WhatsApp or the contact form." }]);
    } finally {
      setLoading(false);
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <>
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{
              bottom: "90px",
              right: "20px",
              width: "340px",
              height: "480px",
              background: "#1e293b",
              border: "1px solid rgba(132,255,0,0.25)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(132,255,0,0.1)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ background: "#0f172a", borderBottom: "1px solid rgba(132,255,0,0.15)" }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(132,255,0,0.15)" }}
                >
                  <Bot size={16} style={{ color: "#84ff00" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#e2e8f0", fontFamily: "Orbitron, sans-serif", fontSize: "0.8rem" }}>
                    GMHCO AI
                  </p>
                  <p className="text-xs flex items-center gap-1" style={{ color: "#94a3b8" }}>
                    <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#84ff00" }} />
                    Online — responds instantly
                  </p>
                </div>
              </div>
              <button onClick={toggle} className="p-1 rounded-full transition-colors" style={{ color: "#94a3b8" }}>
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ scrollbarWidth: "thin" }}>
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap"
                    style={
                      m.role === "user"
                        ? { background: "#84ff00", color: "#0f172a", borderBottomRightRadius: "4px" }
                        : { background: "#263148", color: "#e2e8f0", borderBottomLeftRadius: "4px" }
                    }
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div
                    className="px-4 py-3 rounded-2xl flex items-center gap-2"
                    style={{ background: "#263148", borderBottomLeftRadius: "4px" }}
                  >
                    <Loader2 size={14} className="animate-spin" style={{ color: "#84ff00" }} />
                    <span className="text-xs" style={{ color: "#94a3b8" }}>Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div
              className="p-3 flex items-center gap-2"
              style={{ borderTop: "1px solid rgba(132,255,0,0.12)" }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                placeholder="Ask me anything..."
                disabled={loading}
                className="flex-1 px-3 py-2.5 rounded-xl text-sm"
                style={{
                  background: "#0f172a",
                  border: "1px solid rgba(132,255,0,0.2)",
                  color: "#e2e8f0",
                  outline: "none",
                }}
              />
              <button
                onClick={send}
                disabled={!input.trim() || loading}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all disabled:opacity-40"
                style={{ background: "#84ff00" }}
              >
                <Send size={14} style={{ color: "#0f172a" }} />
              </button>
            </div>

            {/* Footer */}
            <div
              className="text-center py-1.5 text-xs"
              style={{
                background: "#0f172a",
                borderTop: "1px solid rgba(132,255,0,0.08)",
                color: "#64748b",
              }}
            >
              Powered by GPT-OSS (Groq) · GMHCO AI
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{
          bottom: "20px",
          right: "90px",
          background: open ? "#1e293b" : "#84ff00",
          border: open ? "2px solid rgba(132,255,0,0.4)" : "none",
          boxShadow: open ? "0 0 20px rgba(132,255,0,0.2)" : "0 0 25px rgba(132,255,0,0.4)",
        }}
        aria-label="Open AI chat assistant"
      >
        <MessageSquare
          size={24}
          style={{ color: open ? "#84ff00" : "#0f172a" }}
        />
        {unread > 0 && !open && (
          <span
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ background: "#ef4444", color: "#fff" }}
          >
            {unread}
          </span>
        )}
      </motion.button>
    </>
  );
}
