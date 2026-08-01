import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createServerSupabase } from "@/lib/supabase-server";
import type { Lead, ChatLead } from "@/lib/supabase";
import LinkedInComposer from "@/components/admin/LinkedInComposer";

async function getData() {
  try {
    const db = createServerSupabase();
    const [leadsRes, chatLeadsRes] = await Promise.all([
      db.from("leads").select("*").order("created_at", { ascending: false }).limit(50),
      db.from("chat_leads").select("*").order("created_at", { ascending: false }).limit(50),
    ]);
    return {
      leads: (leadsRes.data ?? []) as Lead[],
      chatLeads: (chatLeadsRes.data ?? []) as ChatLead[],
    };
  } catch {
    return { leads: [], chatLeads: [] };
  }
}

function formatTime(dateStr: string) {
  return new Date(dateStr).toLocaleString("en-GB", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

export default async function AdminDashboard() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (!session) redirect("/admin/login");

  const { leads, chatLeads } = await getData();

  const stats = [
    { label: "Total Leads", value: leads.length, color: "#84ff00" },
    { label: "Chat Leads", value: chatLeads.length, color: "#00e5ff" },
    { label: "This Week", value: leads.filter((l) => new Date(l.created_at) > new Date(Date.now() - 7 * 86400000)).length, color: "#7c4dff" },
  ];

  return (
    <main style={{ background: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      {/* Nav */}
      <div
        className="px-6 py-4 flex items-center justify-between"
        style={{ background: "#1e293b", borderBottom: "1px solid rgba(132,255,0,0.15)" }}
      >
        <h1 style={{ fontFamily: "Orbitron, sans-serif", color: "#84ff00", fontSize: "1.1rem" }}>
          GMHCO Admin
        </h1>
        <div className="flex items-center gap-3">
          <a
            href="/api/hubspot/install"
            className="text-sm px-4 py-2 rounded-full"
            style={{ border: "1px solid rgba(255,122,0,0.4)", color: "#ff7a00" }}
          >
            Connect HubSpot
          </a>
          <a
            href="/api/linkedin/install"
            className="text-sm px-4 py-2 rounded-full"
            style={{ border: "1px solid rgba(0,229,255,0.4)", color: "#00e5ff" }}
          >
            Connect LinkedIn
          </a>
          <a
            href="/api/admin/logout"
            className="text-sm px-4 py-2 rounded-full"
            style={{ border: "1px solid rgba(132,255,0,0.3)", color: "#94a3b8" }}
          >
            Sign Out
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-6 text-center"
              style={{
                background: "#1e293b",
                border: `1px solid ${s.color}30`,
              }}
            >
              <div className="text-3xl font-bold mb-1" style={{ fontFamily: "Orbitron, sans-serif", color: s.color }}>
                {s.value}
              </div>
              <div className="text-sm" style={{ color: "#94a3b8" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Contact Form Leads */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4" style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0", fontSize: "1rem" }}>
            Contact Form Leads ({leads.length})
          </h2>
          {leads.length === 0 ? (
            <p style={{ color: "#64748b" }}>No leads yet. Share your site and they will start coming in.</p>
          ) : (
            <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(132,255,0,0.12)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "#1e293b", borderBottom: "1px solid rgba(132,255,0,0.12)" }}>
                    {["Date", "Name", "Email", "Company", "Service", "Budget", "Message"].map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-medium" style={{ color: "#84ff00", whiteSpace: "nowrap" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, i) => (
                    <tr
                      key={lead.id}
                      style={{ background: i % 2 === 0 ? "#0f172a" : "#1e293b", borderBottom: "1px solid rgba(132,255,0,0.06)" }}
                    >
                      <td className="px-4 py-3 whitespace-nowrap text-xs" style={{ color: "#64748b" }}>
                        {formatTime(lead.created_at)}
                      </td>
                      <td className="px-4 py-3 font-medium" style={{ color: "#e2e8f0" }}>{lead.name}</td>
                      <td className="px-4 py-3">
                        <a href={`mailto:${lead.email}`} style={{ color: "#84ff00" }}>{lead.email}</a>
                      </td>
                      <td className="px-4 py-3" style={{ color: "#94a3b8" }}>{lead.company ?? "—"}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: "#94a3b8" }}>{lead.service ?? "—"}</td>
                      <td className="px-4 py-3 text-xs" style={{ color: "#94a3b8" }}>{lead.budget ?? "—"}</td>
                      <td className="px-4 py-3 max-w-xs text-xs truncate" style={{ color: "#94a3b8" }}>
                        {lead.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <LinkedInComposer />

        {/* Chat Leads */}
        <section>
          <h2 className="text-lg font-semibold mb-4" style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0", fontSize: "1rem" }}>
            AI Chatbot Leads ({chatLeads.length})
          </h2>
          {chatLeads.length === 0 ? (
            <p style={{ color: "#64748b" }}>No chatbot leads yet.</p>
          ) : (
            <div className="space-y-3">
              {chatLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="rounded-xl p-4"
                  style={{ background: "#1e293b", border: "1px solid rgba(0,229,255,0.15)" }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold" style={{ color: "#e2e8f0" }}>
                      {lead.name ?? "Name not captured"}
                    </span>
                    <span className="text-xs" style={{ color: "#64748b" }}>
                      {formatTime(lead.created_at)}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2 text-xs" style={{ color: "#94a3b8" }}>
                    <a href={`mailto:${lead.email}`} style={{ color: "#00e5ff" }}>{lead.email}</a>
                    {lead.phone && <span>📱 {lead.phone}</span>}
                    {lead.company && <span>🏢 {lead.company}</span>}
                    {lead.website && <span>🔗 {lead.website}</span>}
                  </div>
                  <p className="text-xs whitespace-pre-wrap" style={{ color: "#94a3b8" }}>
                    {lead.conversation_summary?.slice(0, 300)}
                    {(lead.conversation_summary?.length ?? 0) > 300 ? "..." : ""}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
