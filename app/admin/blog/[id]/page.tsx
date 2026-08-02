import { redirect, notFound } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";
import { createServerSupabase } from "@/lib/supabase-server";
import type { BlogPost } from "@/lib/blog";
import BlogPostForm from "@/components/admin/BlogPostForm";

async function getPost(id: string): Promise<BlogPost | null> {
  const db = createServerSupabase();
  const { data } = await db.from("blog_posts").select("*").eq("id", id).maybeSingle();
  return data as BlogPost | null;
}

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (!session) redirect("/admin/login");

  const { id } = await params;
  const post = await getPost(id);
  if (!post) notFound();

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
        <span className="truncate" style={{ color: "#94a3b8", fontSize: "0.9rem", maxWidth: "16rem" }}>{post.title}</span>
      </div>

      <div className="mx-auto" style={{ maxWidth: "70rem", paddingLeft: "1rem", paddingRight: "1rem", paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
        <h1 className="text-lg font-semibold" style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0", fontSize: "1rem", marginBottom: "1.5rem" }}>
          Edit Blog Post
        </h1>
        <BlogPostForm post={post} />
      </div>
    </main>
  );
}
