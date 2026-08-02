import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, ArrowRight, Clock } from "lucide-react";
import { SERVICES, SITE, GOOGLE_ADS_SERVICE_DETAIL, PACKAGE_BUILDERS } from "@/lib/constants";
import PackageBuilder from "@/components/PackageBuilder";
import { getPostsForService } from "@/lib/blog";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.longDesc,
    keywords: service.keywords,
    alternates: { canonical: `${SITE.url}/services/${slug}` },
    openGraph: {
      title: `${service.title} | GMHCO`,
      description: service.longDesc,
      url: `${SITE.url}/services/${slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const detail = slug === "google-ads-analytics" ? GOOGLE_ADS_SERVICE_DETAIL : null;
  const hasPackageBuilder = Boolean(PACKAGE_BUILDERS[slug]);
  const relatedPosts = await getPostsForService(slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDesc,
    provider: {
      "@type": "Organization",
      name: "GMHCO",
      url: SITE.url,
    },
    areaServed: "Worldwide",
    url: `${SITE.url}/services/${service.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
      { "@type": "ListItem", position: 3, name: service.title },
    ],
  };

  return (
    <main style={{ background: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-24">
        {/* Back link */}
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors"
          style={{ color: "#94a3b8" }}
        >
          <ArrowLeft size={16} /> Back to Services
        </Link>

        {/* Breadcrumb */}
        <nav className="text-xs mb-6" style={{ color: "#64748b" }}>
          <Link href="/" style={{ color: "#64748b" }}>Home</Link>
          {" / "}
          <Link href="/services" style={{ color: "#64748b" }}>Services</Link>
          {" / "}
          <span style={{ color: "#84ff00" }}>{service.title}</span>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{
              background: "rgba(132,255,0,0.1)",
              color: "#84ff00",
              border: "1px solid rgba(132,255,0,0.3)",
            }}
          >
            Starting from {service.startingAt}
          </span>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: "Orbitron, sans-serif", lineHeight: 1.2 }}
          >
            {service.title}
          </h1>
          {detail ? (
            <div className="space-y-4" style={{ maxWidth: "760px" }}>
              {detail.intro.map((p, i) => (
                <p
                  key={i}
                  className="text-lg leading-relaxed"
                  style={{ color: i === 0 ? "#e2e8f0" : "#94a3b8" }}
                >
                  {p}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-lg leading-relaxed" style={{ color: "#94a3b8", maxWidth: "700px" }}>
              {service.longDesc}
            </p>
          )}
        </div>

        {hasPackageBuilder && <PackageBuilder slug={slug} />}

        {detail ? (
          <>
            {/* Why Choose Us */}
            <div className="mb-16">
              <h2
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
              >
                Why Choose Us?
              </h2>
              <p className="text-sm mb-6" style={{ color: "#94a3b8", maxWidth: "700px" }}>
                We don&apos;t just manage campaigns — we build long-term growth strategies backed by data, automation, and continuous optimisation.
              </p>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-2xl p-6"
                style={{ background: "#1e293b", border: "1px solid rgba(132,255,0,0.15)" }}
              >
                {detail.whyChooseUs.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} style={{ color: "#84ff00", flexShrink: 0, marginTop: "2px" }} />
                    <span className="text-sm" style={{ color: "#cbd5e1" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Process */}
            <div className="mb-16">
              <h2
                className="text-2xl font-bold mb-8"
                style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
              >
                Our Process
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {detail.process.map((step) => (
                  <div
                    key={step.step}
                    className="rounded-2xl p-6"
                    style={{ background: "#1e293b", border: "1px solid rgba(132,255,0,0.1)" }}
                  >
                    <span
                      className="text-2xl font-bold"
                      style={{ fontFamily: "Orbitron, sans-serif", color: "#84ff00" }}
                    >
                      {step.step}
                    </span>
                    <h3 className="text-base font-semibold mt-2 mb-2" style={{ color: "#e2e8f0" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-4">
              <h2
                className="text-2xl font-bold mb-8"
                style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
              >
                Common Questions
              </h2>
              <div className="space-y-4">
                {detail.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-4"
                    style={{ background: "#1e293b", border: "1px solid rgba(132,255,0,0.1)" }}
                  >
                    <p className="text-sm font-semibold mb-2" style={{ color: "#e2e8f0" }}>
                      {faq.q}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className={hasPackageBuilder ? "" : "grid grid-cols-1 lg:grid-cols-2 gap-10"}>
            {/* Deliverables — only shown as a fallback when there's no package builder,
                since the builder's Base Package card already covers this. */}
            {!hasPackageBuilder && (
              <div
                className="rounded-2xl p-6"
                style={{ background: "#1e293b", border: "1px solid rgba(132,255,0,0.15)" }}
              >
                <h2
                  className="text-lg font-semibold mb-4"
                  style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0", fontSize: "1rem" }}
                >
                  What You Get
                </h2>
                <ul className="space-y-3">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <CheckCircle size={16} style={{ color: "#84ff00", flexShrink: 0, marginTop: "2px" }} />
                      <span className="text-sm" style={{ color: "#cbd5e1" }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQ */}
            <div className="space-y-4">
              <h2
                className="text-lg font-semibold mb-4"
                style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0", fontSize: "1rem" }}
              >
                Common Questions
              </h2>
              {service.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4"
                  style={{ background: "#1e293b", border: "1px solid rgba(132,255,0,0.1)" }}
                >
                  <p className="text-sm font-semibold mb-2" style={{ color: "#e2e8f0" }}>
                    {faq.q}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* From the Blog */}
        {relatedPosts.length > 0 && (
          <div className="mt-14">
            <h2
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
            >
              From the Blog
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <div
                    className="h-full rounded-2xl p-5 transition-colors"
                    style={{ background: "#1e293b", border: "1px solid rgba(132,255,0,0.1)" }}
                  >
                    <span className="text-xs flex items-center gap-1 mb-3" style={{ color: "#64748b" }}>
                      <Clock size={10} /> {post.read_time}
                    </span>
                    <h3
                      className="text-sm font-semibold leading-snug mb-2"
                      style={{ color: "#e2e8f0" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-xs leading-relaxed mb-3" style={{ color: "#94a3b8" }}>
                      {post.excerpt}
                    </p>
                    <span
                      className="text-xs flex items-center gap-1 transition-transform group-hover:translate-x-1"
                      style={{ color: "#84ff00" }}
                    >
                      Read more <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div
          className="mt-14 rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(132,255,0,0.08), rgba(0,229,255,0.05))",
            border: "1px solid rgba(132,255,0,0.2)",
          }}
        >
          <h3
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "Orbitron, sans-serif", color: "#e2e8f0" }}
          >
            Ready to Get Started?
          </h3>
          <p className="text-sm mb-6" style={{ color: "#94a3b8" }}>
            Book a free 30-minute discovery call or send us a message about your {service.title.toLowerCase()} project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE.cal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{ background: "#84ff00", color: "#0f172a" }}
            >
              Book Free Call <ArrowRight size={16} />
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{ border: "1px solid rgba(132,255,0,0.4)", color: "#e2e8f0" }}
            >
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
