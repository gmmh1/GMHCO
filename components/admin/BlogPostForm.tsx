"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SERVICES } from "@/lib/constants";
import type { BlogPost } from "@/lib/blog";

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const inputStyle = {
  background: "#1e293b",
  border: "1px solid rgba(132,255,0,0.15)",
  color: "#e2e8f0",
  padding: "0.75rem 1rem",
  width: "100%",
};

const labelStyle = { color: "#94a3b8", fontSize: "0.8rem", marginBottom: "0.4rem", display: "block" };

export default function BlogPostForm({ post }: { post?: BlogPost }) {
  const router = useRouter();
  const isEdit = Boolean(post);

  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");
  const [content, setContent] = useState(post?.content ?? "");
  const [category, setCategory] = useState(post?.category ?? "");
  const [readTime, setReadTime] = useState(post?.read_time ?? "");
  const [keywords, setKeywords] = useState(post?.keywords.join(", ") ?? "");
  const [relatedServices, setRelatedServices] = useState<Set<string>>(new Set(post?.related_service_slugs ?? []));
  const [published, setPublished] = useState(post?.published ?? true);
  const [publishedAt, setPublishedAt] = useState(
    post?.published_at ? post.published_at.slice(0, 10) : new Date().toISOString().slice(0, 10)
  );

  const [status, setStatus] = useState<"idle" | "saving" | "deleting" | "error">("idle");
  const [error, setError] = useState("");

  function toggleService(slug: string) {
    setRelatedServices((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("saving");
    setError("");

    const payload = {
      slug,
      title,
      excerpt,
      content,
      category,
      read_time: readTime,
      keywords: keywords.split(",").map((k) => k.trim()).filter(Boolean),
      related_service_slugs: Array.from(relatedServices),
      published,
      published_at: new Date(publishedAt).toISOString(),
    };

    try {
      const res = await fetch(isEdit ? `/api/admin/blog/${post!.id}` : "/api/admin/blog", {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setError(data.error ?? "Failed to save post");
        return;
      }
      router.push("/admin/blog");
      router.refresh();
    } catch {
      setStatus("error");
      setError("Network error — please try again.");
    }
  }

  async function handleDelete() {
    if (!post) return;
    if (!confirm(`Delete "${post.title}"? This can't be undone.`)) return;
    setStatus("deleting");
    try {
      const res = await fetch(`/api/admin/blog/${post.id}`, { method: "DELETE" });
      if (!res.ok) {
        setStatus("error");
        setError("Failed to delete post");
        return;
      }
      router.push("/admin/blog");
      router.refresh();
    } catch {
      setStatus("error");
      setError("Network error — please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" style={{ maxWidth: "42rem" }}>
      <div>
        <label style={labelStyle}>Title</label>
        <input
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (!slugTouched) setSlug(slugify(e.target.value));
          }}
          className="rounded-lg text-sm"
          style={inputStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Slug</label>
        <input
          required
          value={slug}
          onChange={(e) => {
            setSlug(e.target.value);
            setSlugTouched(true);
          }}
          className="rounded-lg text-sm"
          style={inputStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Excerpt</label>
        <textarea
          required
          rows={2}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="rounded-lg text-sm"
          style={inputStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Content (markdown: ## headings, **bold**, - bullets)</label>
        <textarea
          required
          rows={16}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="rounded-lg text-sm font-mono"
          style={{ ...inputStyle, lineHeight: 1.6 }}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Category</label>
          <input required value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-lg text-sm" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Read Time</label>
          <input required placeholder="7 min read" value={readTime} onChange={(e) => setReadTime(e.target.value)} className="rounded-lg text-sm" style={inputStyle} />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Keywords (comma-separated)</label>
        <input value={keywords} onChange={(e) => setKeywords(e.target.value)} className="rounded-lg text-sm" style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>Related Services (shown as cross-links on this post + &ldquo;From the Blog&rdquo; on those service pages)</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {SERVICES.map((s) => (
            <label key={s.slug} className="flex items-center gap-2 text-sm" style={{ color: "#cbd5e1" }}>
              <input
                type="checkbox"
                checked={relatedServices.has(s.slug)}
                onChange={() => toggleService(s.slug)}
                style={{ accentColor: "#84ff00" }}
              />
              {s.title}
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Published Date</label>
          <input type="date" required value={publishedAt} onChange={(e) => setPublishedAt(e.target.value)} className="rounded-lg text-sm" style={inputStyle} />
        </div>
        <div className="flex items-end">
          <label className="flex items-center gap-2 text-sm" style={{ color: "#cbd5e1", paddingBottom: "0.75rem" }}>
            <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} style={{ accentColor: "#84ff00" }} />
            Published (visible on the public site)
          </label>
        </div>
      </div>

      {status === "error" && <p className="text-xs" style={{ color: "#ff6b6b" }}>{error}</p>}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={status === "saving"}
          className="text-sm rounded-full disabled:opacity-40"
          style={{ background: "#84ff00", color: "#0f172a", paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingTop: "0.6rem", paddingBottom: "0.6rem" }}
        >
          {status === "saving" ? "Saving…" : isEdit ? "Save Changes" : "Create Post"}
        </button>
        {isEdit && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={status === "deleting"}
            className="text-sm rounded-full disabled:opacity-40"
            style={{ border: "1px solid rgba(255,107,107,0.4)", color: "#ff6b6b", paddingLeft: "1.25rem", paddingRight: "1.25rem", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
          >
            {status === "deleting" ? "Deleting…" : "Delete Post"}
          </button>
        )}
      </div>
    </form>
  );
}
