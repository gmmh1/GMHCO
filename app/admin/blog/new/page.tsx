import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";
import BlogPostForm from "@/components/admin/BlogPostForm";

export default async function NewBlogPostPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (!session) redirect("/admin/login");

  return (
    <main style={{ background: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      <div
        className="flex items-center gap-4"
        style={{ background: "#1e293b", borderBottom: "1px solid rgba(132,255,0,0.15)", paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingTop: "1rem", paddingBottom: "1rem" }}
      >
        <Link href="/admin" style={{ fontFamily: "Orbitron, sans-serif", color: "#84ff00", fontSize: "1.1rem" }}>
          GMHCO Admin
        </Link>
        <span style={{ color: "#334155" }}>/</span>
        <Link href="/admin/blog" style={{ color: "#94a3b8", fontSize: "0.9rem" }}>Blog</Link>
        <span style={{ color: "#334155" }}>/</span>
        <span style={{ color: "#94a3b8", fontSize: "0.9rem" }}>New Post</span>
      </div>

      <div className="mx-auto" style={{ maxWidth: "70rem", paddingLeft: "1rem", paddingRight: "1rem", paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
        <h1 className="text-lg font-semibold" style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0", fontSize: "1rem", marginBottom: "1.5rem" }}>
          New Blog Post
        </h1>
        <BlogPostForm />
      </div>
    </main>
  );
}
