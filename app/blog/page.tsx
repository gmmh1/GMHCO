import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Clock, Tag } from "lucide-react";
import { SITE } from "@/lib/constants";
import { getPublishedPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import Navigation from "@/components/Navigation";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Expert insights on AI in digital marketing, Google Ads, SaaS development, data analytics, and enterprise IT strategy from GMHCO.",
  alternates: { canonical: `${SITE.url}/blog` },
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();
  return (
    <main style={{ background: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      <Navigation />
      <div className="page-wrap" style={{ paddingTop: "7rem", paddingBottom: "5rem" }}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors hover:text-lime"
          style={{ color: "#94a3b8" }}
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <div className="flex flex-col items-center text-center mb-14">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{
              background: "rgba(132,255,0,0.1)",
              color: "#84ff00",
              border: "1px solid rgba(132,255,0,0.3)",
            }}
          >
            Knowledge Hub
          </span>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Insights & Expertise
          </h1>
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: "#94a3b8" }}>
            Practical guides and strategic thinking on AI, Google Ads, SaaS development, and enterprise technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article
                className="hover-card h-full rounded-2xl flex flex-col group"
                style={{
                  background: "#1e293b",
                  border: "1px solid rgba(132,255,0,0.1)",
                  padding: "1.5rem",
                  gap: "1rem",
                }}
              >
                {/* Category + read time */}
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full flex items-center gap-1"
                    style={{
                      background: "rgba(132,255,0,0.08)",
                      color: "#84ff00",
                      border: "1px solid rgba(132,255,0,0.2)",
                    }}
                  >
                    <Tag size={10} /> {post.category}
                  </span>
                  <span className="text-xs flex items-center gap-1" style={{ color: "#64748b" }}>
                    <Clock size={10} /> {post.read_time}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="text-base font-semibold leading-snug"
                  style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0", fontSize: "0.9rem" }}
                >
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#94a3b8" }}>
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs" style={{ color: "#64748b" }}>
                    {formatDate(post.published_at)}
                  </span>
                  <span
                    className="flex items-center gap-1 text-xs transition-transform group-hover:translate-x-1"
                    style={{ color: "#84ff00" }}
                  >
                    Read more <ArrowRight size={12} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
