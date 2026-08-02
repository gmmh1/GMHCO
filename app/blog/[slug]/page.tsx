import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag, ArrowRight, Home } from "lucide-react";
import { SITE, SERVICES } from "@/lib/constants";
import { getPostBySlug, getPublishedPostSlugs } from "@/lib/blog";
import { renderBlogMarkdown } from "@/lib/markdown";
import { formatDate } from "@/lib/utils";
import Navigation from "@/components/Navigation";

export const revalidate = 300;

export async function generateStaticParams() {
  const slugs = await getPublishedPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `${SITE.url}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE.url}/blog/${slug}`,
      type: "article",
      publishedTime: post.published_at,
      authors: ["Gazi Morshed"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const relatedServices = SERVICES.filter((s) => post.related_service_slugs.includes(s.slug));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: { "@type": "Person", name: "Gazi Morshed", url: SITE.url },
    publisher: { "@type": "Organization", name: "GMHCO", url: SITE.url },
    url: `${SITE.url}/blog/${slug}`,
    keywords: post.keywords.join(", "),
  };

  return (
    <main style={{ background: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="page-wrap-md" style={{ paddingTop: "7rem", paddingBottom: "5rem" }}>
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-lime"
            style={{ color: "#64748b" }}
          >
            <Home size={14} /> Home
          </Link>
          <span style={{ color: "#334155" }}>/</span>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-lime"
            style={{ color: "#94a3b8" }}
          >
            <ArrowLeft size={14} /> Blog
          </Link>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
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
          <span className="text-xs" style={{ color: "#64748b" }}>
            {formatDate(post.published_at)}
          </span>
        </div>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          {post.title}
        </h1>

        <p className="text-base mb-8 leading-relaxed" style={{ color: "#94a3b8" }}>
          {post.excerpt}
        </p>

        <div
          className="prose-content space-y-4 text-sm leading-7"
          style={{ color: "#cbd5e1" }}
          dangerouslySetInnerHTML={{ __html: renderBlogMarkdown(post.content) }}
        />

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="mt-12">
            <h3
              className="text-sm font-semibold uppercase tracking-wide mb-4"
              style={{ color: "#64748b" }}
            >
              Related Services
            </h3>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors hover:-translate-y-0.5"
                  style={{
                    background: "#1e293b",
                    border: "1px solid rgba(132,255,0,0.2)",
                    color: "#e2e8f0",
                  }}
                >
                  {service.title} <ArrowRight size={14} style={{ color: "#84ff00" }} />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div
          className="mt-16 rounded-2xl p-8 text-center"
          style={{
            background: "rgba(132,255,0,0.05)",
            border: "1px solid rgba(132,255,0,0.2)",
          }}
        >
          <h3
            className="text-lg font-bold mb-3"
            style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0", fontSize: "1rem" }}
          >
            Want to Apply These Strategies to Your Business?
          </h3>
          <p className="text-sm mb-6" style={{ color: "#94a3b8" }}>
            Book a free 30-minute strategy call with Gazi Morshed.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{ background: "#84ff00", color: "#0f172a" }}
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
