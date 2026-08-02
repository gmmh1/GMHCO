import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";
import { createServerSupabase } from "@/lib/supabase-server";
import type { BlogPost } from "@/lib/blog";

async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const db = createServerSupabase();
    const { data } = await db.from("blog_posts").select("*").order("published_at", { ascending: false });
    return (data ?? []) as BlogPost[];
  } catch {
    return [];
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

export default async function AdminBlogPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (!session) redirect("/admin/login");

  const posts = await getAllPosts();

  return (
    <main style={{ background: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      <div
        className="flex items-center justify-between"
        style={{ background: "#1e293b", borderBottom: "1px solid rgba(132,255,0,0.15)", paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingTop: "1rem", paddingBottom: "1rem" }}
      >
        <div className="flex items-center gap-4">
          <Link href="/admin" style={{ fontFamily: "Orbitron, sans-serif", color: "#84ff00", fontSize: "1.1rem" }}>
            GMHCO Admin
          </Link>
          <span style={{ color: "#334155" }}>/</span>
          <span style={{ color: "#94a3b8", fontSize: "0.9rem" }}>Blog</span>
        </div>
        <Link
          href="/admin/blog/new"
          className="text-sm rounded-full"
          style={{ background: "#84ff00", color: "#0f172a", paddingLeft: "1.25rem", paddingRight: "1.25rem", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
        >
          + New Post
        </Link>
      </div>

      <div className="mx-auto" style={{ maxWidth: "70rem", paddingLeft: "1rem", paddingRight: "1rem", paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
        <h1 className="text-lg font-semibold" style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0", fontSize: "1rem", marginBottom: "1.5rem" }}>
          Blog Posts ({posts.length})
        </h1>

        {posts.length === 0 ? (
          <p style={{ color: "#64748b" }}>No posts yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(132,255,0,0.12)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#1e293b", borderBottom: "1px solid rgba(132,255,0,0.12)" }}>
                  {["Title", "Category", "Date", "Status", ""].map((h) => (
                    <th key={h} className="text-left font-medium" style={{ color: "#84ff00", whiteSpace: "nowrap", padding: "0.75rem 1rem" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {posts.map((post, i) => (
                  <tr key={post.id} style={{ background: i % 2 === 0 ? "#0f172a" : "#1e293b", borderBottom: "1px solid rgba(132,255,0,0.06)" }}>
                    <td className="font-medium" style={{ color: "#e2e8f0", padding: "0.75rem 1rem", maxWidth: "24rem" }}>
                      {post.title}
                    </td>
                    <td className="text-xs" style={{ color: "#94a3b8", padding: "0.75rem 1rem" }}>{post.category}</td>
                    <td className="text-xs whitespace-nowrap" style={{ color: "#64748b", padding: "0.75rem 1rem" }}>
                      {formatDate(post.published_at)}
                    </td>
                    <td className="text-xs" style={{ padding: "0.75rem 1rem" }}>
                      <span style={{ color: post.published ? "#84ff00" : "#64748b" }}>
                        {post.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="text-xs whitespace-nowrap" style={{ padding: "0.75rem 1rem" }}>
                      <Link href={`/admin/blog/${post.id}`} style={{ color: "#00e5ff" }}>Edit</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
