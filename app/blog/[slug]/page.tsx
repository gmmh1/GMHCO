import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag, ArrowRight, Home } from "lucide-react";
import { BLOG_POSTS, SITE } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import Navigation from "@/components/Navigation";

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
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
      publishedTime: post.date,
      authors: ["Gazi Morshed"],
    },
  };
}

const BLOG_CONTENT: Record<string, string> = {
  "ai-digital-marketing-2026": `
## The AI Revolution in Digital Marketing

Artificial intelligence is no longer a future trend in digital marketing — it is the present competitive edge that separates growing businesses from stagnating ones. In 2026, companies that have embedded AI into their marketing operations are outperforming competitors across every measurable channel.

The shift is not about replacing human marketers. It is about giving them enterprise-level capabilities that were previously available only to organisations with enormous budgets and data science teams.

## Three Ways AI is Reshaping Marketing

### 1. Intelligent Campaign Optimisation

Google's Performance Max campaigns, powered by Google AI, automatically optimise bids, creative assets, and audience targeting in real time — making adjustments that would take a human analyst days to compute.

The result: brands using AI-powered campaigns are seeing 20–40% improvements in conversion rates compared to manually managed equivalents.

### 2. Hyper-Personalisation at Scale

AI enables businesses to deliver personalised experiences to thousands of customers simultaneously. Tools like HubSpot's AI features and Google Analytics 4's predictive audiences can identify your highest-value customer segments and automatically tailor messaging to each one.

### 3. Predictive Analytics and Lead Scoring

Instead of waiting for customers to convert, AI-powered CRM systems predict which leads are most likely to buy and surface them for priority follow-up — dramatically reducing the time from enquiry to sale.

## What This Means for Your Business

If your marketing team still runs campaigns manually, you are competing with one hand tied behind your back. The businesses winning in 2026 are the ones who have embraced AI as a force multiplier — not a replacement for strategy and creativity.

The good news: you do not need a massive budget to access these capabilities. The tools exist. What you need is a partner who knows how to deploy them effectively.
  `,
  "google-ads-performance-max-guide": `
## Understanding Performance Max in 2026

Performance Max (PMax) has matured significantly since its introduction. In 2026, it is one of the most powerful tools in any Google Ads account — but only when used correctly. Misusing it is one of the fastest ways to waste ad budget.

## What Performance Max Actually Does

PMax is Google's fully automated campaign type that serves ads across all Google inventory: Search, Shopping, Display, YouTube, Gmail, and Maps — all from a single campaign. Google's AI decides where, when, and how to show your ads based on your conversion goals.

## When to Use Performance Max

**PMax works best when:**
- You have strong, clean conversion tracking (GA4 + GTM properly configured)
- Your account has at least 30–50 conversions per month for the AI to learn from
- You are targeting a broad geographic area with varied intent signals
- You want to expand beyond existing search campaigns to new audiences

## When Standard Campaigns Still Win

**Stick with standard Search campaigns when:**
- Your budget is under £1,500/month (PMax needs sufficient spend to learn)
- You need granular control over exactly which search terms trigger your ads
- You are targeting a hyper-specific, narrow keyword set
- You are in a highly competitive industry where impression share management is critical

## The Recommended Architecture

For most accounts with £3,000+/month budgets: run PMax for acquisition alongside tightly structured Search campaigns for brand and high-intent terms. They complement each other rather than cannibalise.

The cardinal sin: running PMax without proper conversion tracking. Without accurate conversion signals, Google's AI optimises toward the wrong outcomes.
  `,
  "rag-systems-business-knowledge": `
## What is a RAG System?

Retrieval-Augmented Generation (RAG) is a technique that allows an AI model to answer questions using your specific documents, databases, and knowledge — not just its general training data.

Think of it as giving ChatGPT a photographic memory of your entire company knowledge base, and then asking it questions.

## How RAG Works in Practice

1. **Ingestion**: Your documents (PDFs, Word files, web pages, databases) are processed and converted into mathematical representations called embeddings
2. **Storage**: These embeddings are stored in a vector database (like Pinecone or pgvector in PostgreSQL)
3. **Query**: When someone asks a question, the system finds the most relevant document sections and sends them to the AI along with the question
4. **Response**: The AI answers based on your documents — with citations so you can verify every claim

## Who Needs a RAG System?

**You need RAG if your team:**
- Spends more than 3 hours per week searching internal documents
- Relies on specialist knowledge locked in PDFs, manuals, or previous case work
- Has onboarding challenges because knowledge is not properly documented or searchable
- Handles repetitive questions that could be answered from existing documentation

## Real-World ROI

One of GMHCO's clients — a legal practice with 2,400+ case documents — reduced their paralegal research time by 60% and saved an estimated £85,000 per year in billable hours. Implementation took 2 weeks.

For knowledge-heavy businesses, RAG is consistently the highest-ROI AI investment available today.
  `,
  "ga4-setup-guide-2026": `
## Why Most GA4 Setups Fail

Google Analytics 4 has been the default for two years, yet the vast majority of businesses are still not using it correctly. The most common issues: misconfigured conversion events, missing cross-domain tracking, and relying on GA4's default event tracking without customisation.

This guide covers the complete setup most businesses miss.

## Step 1: Property Architecture

GA4 uses a property-stream model. Each domain or app is a separate data stream feeding into one property. Ensure you have:
- One GA4 property per brand
- Correct data streams for web, iOS, and Android (if applicable)
- Data retention set to 14 months (change from the default 2 months immediately)

## Step 2: Google Tag Manager Integration

Connect GA4 via GTM for maximum flexibility. Never hardcode the GA4 tag directly in your website — it makes future changes exponentially harder.

GTM setup:
- Create a GA4 Configuration tag with your Measurement ID
- Set it to fire on All Pages
- Use GTM's built-in variables to capture user data automatically

## Step 3: Conversion Event Configuration

The biggest GA4 mistake: assuming that form submissions and purchases are automatically tracked. They are not.

You must explicitly mark events as conversions in the GA4 interface OR create custom events via GTM that fire on specific user actions (form submission confirmation, purchase confirmation, click-to-call).

## Step 4: Enhanced Measurement Validation

Enable Enhanced Measurement but validate each event:
- File downloads: verify the correct file types trigger events
- Outbound clicks: check that affiliate links and CTA clicks are captured
- Video engagement: confirm YouTube embeds fire correctly

## Step 5: Custom Reports and Explorations

GA4's default reports are a starting point, not the destination. Build Exploration reports for:
- User journey funnels from landing page to conversion
- Cohort analysis of user retention by acquisition source
- Revenue attribution by traffic channel

A correctly configured GA4 installation is one of the highest-ROI activities in digital marketing. It costs nothing to set up correctly and provides insights that fundamentally change how you allocate marketing spend.
  `,
  "saas-development-cost": `
## The Real Cost of Building a SaaS Product in 2026

The honest answer to "how much does it cost to build a SaaS?" is: it depends on what you are building. But most businesses asking this question are either significantly overestimating or underestimating the cost.

This guide gives you realistic numbers based on real projects.

## The Three Tiers of SaaS Development

### Tier 1: MVP (Minimum Viable Product)
**Typical cost: $5,000 – $15,000**
**Timeline: 6–10 weeks**

What this gets you:
- Core feature set only (2–3 primary user flows)
- Authentication (email/password login)
- Basic dashboard or management interface
- A payment mechanism (Stripe subscription)
- Vercel or AWS deployment
- No mobile app

This is the right approach for validating your idea with real paying customers. If you cannot get paying customers with an MVP, adding more features will not fix it.

### Tier 2: Growth-Ready SaaS
**Typical cost: $15,000 – $50,000**
**Timeline: 12–18 weeks**

What this adds:
- Advanced user management and team/organisation support
- Admin dashboard with analytics
- Multiple integration points (Zapier, REST API)
- Email notifications and in-app messaging
- Custom onboarding flow
- Mobile-responsive (but not native mobile app)

### Tier 3: Enterprise SaaS Platform
**Typical cost: $50,000 – $200,000+**
**Timeline: 6–18 months**

This level involves:
- Multi-tenancy with complex permission systems
- Native mobile apps (iOS + Android)
- Advanced reporting and data exports
- SSO and enterprise security compliance
- White-labelling capability
- Dedicated infrastructure

## What Actually Drives Costs Up

The biggest cost drivers are not what most founders expect:
- **Scope creep**: Adding features mid-build doubles timeline and cost
- **Third-party integrations**: Each API integration adds 20–40 hours
- **Authentication complexity**: SSO, two-factor, and social login add significant time
- **Mobile**: Native apps add 40–60% to the total cost

## The Right Way to Buy Development

Avoid fixed-price contracts for complex SaaS products — they always end in scope disputes. Work with a partner who will scope work transparently and build in phases, delivering working software at the end of each phase.
  `,
  "consumer-psychology-digital-marketing": `
## Why Psychology is Your Marketing Superpower

The businesses winning in digital marketing are not necessarily running the most ads or spending the most money. They are the ones that understand how people actually make decisions online — and use that understanding to design better campaigns, landing pages, and funnels.

Here are seven evidence-backed consumer psychology principles every digital marketer should know.

## 1. The Anchoring Effect

The first number a customer sees becomes the reference point for everything that follows. This is why pricing pages almost always show the most expensive plan first — it makes middle-tier plans feel like a bargain.

**Apply it**: When presenting pricing, lead with your highest-value package.

## 2. Social Proof and Herding Behaviour

Humans are deeply social animals. We look to what others are doing as a signal of correct behaviour — especially in uncertain situations.

**Apply it**: Show real review counts, client logos, and testimonials prominently. Specificity matters: "47 businesses in London use GMHCO" is more persuasive than "many businesses trust us."

## 3. The Scarcity Principle

Resources that are scarce are perceived as more valuable. Limited availability creates urgency that motivates action.

**Apply it**: Genuine scarcity works ("only 3 onboarding slots available this month"). Fake countdown timers destroy trust.

## 4. Loss Aversion

People are roughly twice as motivated to avoid losing something as they are to gain something equivalent. This is one of the most robust findings in behavioural economics.

**Apply it**: Frame your value proposition around what customers risk losing by not acting, not just what they gain by acting. "Stop losing 40% of your ad budget" is more motivating than "gain better ROAS."

## 5. Cognitive Load Reduction

The easier a decision is to make, the more likely someone is to make it. Every unnecessary option, confusing page element, or unclear CTA adds cognitive load and reduces conversions.

**Apply it**: Ruthlessly simplify your landing pages. One primary CTA. One clear message. Remove navigation menus from landing pages.

## 6. The Mere Exposure Effect

Familiarity breeds preference. People like things they have seen before, even without conscious awareness.

**Apply it**: Retargeting campaigns are not just about reminding people — they are building subconscious brand preference through repeated exposure.

## 7. Authority Signals

People defer to credibility signals when making uncertain decisions. Certifications, credentials, media mentions, and professional design all function as proxies for trustworthiness.

**Apply it**: Surface your qualifications, certifications, and trust signals prominently. GMHCO's 12 active Google certifications appear in the hero section because they reduce purchase risk for potential clients.

Understanding these principles does not make marketing manipulative — it makes it effective. The goal is to remove friction between a customer's genuine need and your genuine solution.
  `,
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = BLOG_CONTENT[slug] ?? post.excerpt;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
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
            <Clock size={10} /> {post.readTime}
          </span>
          <span className="text-xs" style={{ color: "#64748b" }}>
            {formatDate(post.date)}
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
          dangerouslySetInnerHTML={{
            __html: content
              .trim()
              .replace(/^## (.+)$/gm, `<h2 style="font-family:Orbitron,sans-serif;color:#e2e8f0;font-size:1.1rem;margin-top:2rem;margin-bottom:0.75rem;">$1</h2>`)
              .replace(/^### (.+)$/gm, `<h3 style="color:#84ff00;font-size:0.95rem;margin-top:1.5rem;margin-bottom:0.5rem;">$1</h3>`)
              .replace(/\*\*(.+?)\*\*/g, `<strong style="color:#e2e8f0;">$1</strong>`)
              .replace(/^- (.+)$/gm, `<li style="margin-left:1rem;list-style:disc;">$1</li>`)
              .replace(/\n\n/g, `</p><p style="color:#cbd5e1;line-height:1.8;margin-top:1rem;">`)
              .replace(/^(?!<)(.+)$/gm, `<p style="color:#cbd5e1;line-height:1.8;">$1</p>`)
              .replace(/<\/p><p[^>]*><\/p>/g, "")
              .replace(/(<li[^>]*>.+?<\/li>)/gs, `<ul style="margin:1rem 0;padding-left:1.5rem;">$1</ul>`),
          }}
        />

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
