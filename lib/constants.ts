export const SITE = {
  name: "GMHCO",
  fullName: "Gazi Morshed Company",
  tagline: "AI-Powered IT Solutions & Enterprise Digital Strategy",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gmhco.org",
  email: "hello@gmhco.org",
  phone: "+44 7920 462736",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "447920462736",
  cal: process.env.NEXT_PUBLIC_CAL_URL ?? "#contact",
  location: "London, United Kingdom",
  founded: "2023",
  linkedin: "https://www.linkedin.com/in/gmmorshedhossain",
  github: "https://github.com/gmmh1",
};

export const STATS = [
  { value: 12, suffix: "+", label: "Certifications Held" },
  { value: 35, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 4, suffix: "x", label: "Average Client ROI" },
];

export const SERVICES = [
  {
    slug: "technology-consulting",
    icon: "Lightbulb",
    title: "Technology Consulting & Solution Strategy",
    shortDesc: "Turn your biggest business challenges into technology roadmaps that actually get built.",
    longDesc:
      "Bring your idea, challenge, startup, workflow, or business problem. We analyse requirements, identify opportunities, and design the right technology solution using the most effective tools, frameworks, cloud platforms, and AI-powered development practices available today.",
    deliverables: [
      "Technology Audit & Gap Analysis",
      "Solution Architecture Document",
      "Implementation Roadmap",
      "Vendor / Stack Recommendations",
      "ROI Projection & Business Case",
    ],
    faqs: [
      {
        q: "What does a technology consulting engagement look like?",
        a: "We start with a deep-dive discovery session to understand your business goals, constraints, and current tech stack. We then produce a structured solution architecture document and implementation roadmap you can act on immediately.",
      },
      {
        q: "Do I need to be technical to work with you on consulting?",
        a: "No. We translate complex technical concepts into clear business language. Our deliverables are designed to be understood and acted upon by non-technical founders and executives.",
      },
      {
        q: "How long does a typical consulting engagement take?",
        a: "Initial assessment and roadmap: 1–2 weeks. Full solution architecture for complex systems: 3–4 weeks.",
      },
    ],
    keywords: ["IT consulting", "solution architecture", "technology strategy", "enterprise consulting"],
    startingAt: "$2,500",
  },
  {
    slug: "google-ads-analytics",
    icon: "TrendingUp",
    title: "Digital Growth, Google Ads & Analytics",
    shortDesc: "Google-certified campaign management that turns ad spend into measurable revenue.",
    longDesc:
      "Transform your advertising into measurable business growth with strategic Google Ads management, advanced analytics, and continuous optimisation. As Google-certified specialists in Search, Display, Shopping, AI-Powered Performance Ads, Campaign Manager 360 (CM360), and Google Analytics 4 (GA4), we help businesses generate more qualified leads, reduce wasted ad spend, and maximise return on investment.",
    deliverables: [
      "GA4 Property Setup & Audit",
      "Google Ads Campaign Architecture",
      "Conversion Tracking via Google Tag Manager",
      "AI-Powered Performance Max Layer",
      "Monthly Performance Dashboard & Report",
    ],
    faqs: [
      {
        q: "What Google Ads certifications do you hold?",
        a: "Google Ads Search, Display, Shopping, AI-Powered Performance Ads, Google Ads Measurement, Foundations of AI-Powered Search Ads, Campaign Manager 360 (CM360), and Google Analytics 4 (GA4) — all active certifications, kept up to date with the latest features and AI capabilities.",
      },
      {
        q: "How much should I spend on Google Ads?",
        a: "It depends on your goals, but as a guide: local businesses typically spend £1,000–£3,000/month, growing businesses £3,000–£10,000/month, and national campaigns £10,000+/month. We'll recommend the right budget during your discovery call.",
      },
      {
        q: "How long does it take to see results?",
        a: "Most campaigns begin generating meaningful data within 2–4 weeks. Significant improvements in lead quality, cost per acquisition, and return on ad spend are typically achieved within 8–12 weeks through continuous optimisation and testing.",
      },
    ],
    keywords: ["Google Ads management", "GA4 setup", "PPC agency London", "AI-powered performance ads", "Campaign Manager 360"],
    startingAt: "£695/mo",
  },
  {
    slug: "data-analytics-bi",
    icon: "BarChart2",
    title: "Data Analytics, Business Intelligence & Reporting",
    shortDesc: "Raw data transformed into decision-ready dashboards and actionable business intelligence.",
    longDesc:
      "We transform raw data into actionable insights using Python, SQL, Power BI, and modern analytics tools. We design and build dashboards, reporting systems, and business intelligence solutions that give your leadership team real-time visibility into the metrics that drive decisions.",
    deliverables: [
      "Data Audit & Pipeline Design",
      "Power BI / Looker Studio Dashboard",
      "KPI Framework & Metric Architecture",
      "Automated Reporting System",
      "Data Quality & Governance Assessment",
    ],
    faqs: [
      {
        q: "What data tools and platforms do you work with?",
        a: "Python (pandas, matplotlib, seaborn), SQL, Power BI, Looker Studio, Google Analytics, BigQuery, PostgreSQL, and most REST-API-accessible data sources.",
      },
      {
        q: "Can you connect data from multiple systems into one dashboard?",
        a: "Yes. Multi-source data consolidation is one of our core strengths — connecting CRMs, ad platforms, e-commerce systems, and internal databases into unified dashboards.",
      },
      {
        q: "Do you provide ongoing reporting retainers?",
        a: "Yes. Monthly analytics retainers are available from $500/month for dashboard maintenance and automated report delivery.",
      },
    ],
    keywords: ["business intelligence", "data analytics consultant", "Power BI consultant", "Python data analysis", "KPI dashboard"],
    startingAt: "$3,000",
  },
  {
    slug: "api-systems-integration",
    icon: "GitMerge",
    title: "API Development & Systems Integration",
    shortDesc: "Connect every tool in your stack into a seamless, automated digital ecosystem.",
    longDesc:
      "We connect applications, services, databases, CRMs, payment gateways, and third-party platforms to create seamless digital ecosystems that eliminate manual work, reduce errors, and unlock automation at scale.",
    deliverables: [
      "API Design & Technical Documentation",
      "CRM / ERP Integration",
      "Payment Gateway Setup (Stripe, PayPal)",
      "Webhook Automation Architecture",
      "End-to-End Testing & QA",
    ],
    faqs: [
      {
        q: "What systems can you integrate with?",
        a: "Any system with a REST, GraphQL, or SOAP API — including HubSpot, Salesforce, Shopify, Stripe, Xero, QuickBooks, Zapier, Make, and custom-built internal tools.",
      },
      {
        q: "How do you handle API security?",
        a: "All integrations are built with OAuth 2.0 or API key authentication, rate limiting, webhook signature verification, and encrypted data transmission.",
      },
      {
        q: "What if the system I need to integrate doesn't have a public API?",
        a: "We can build middleware layers, use browser automation (Playwright), or work directly with data exports — there is almost always a path forward.",
      },
    ],
    keywords: ["API development", "systems integration", "CRM integration", "REST API developer", "Stripe integration"],
    startingAt: "$2,000",
  },
  {
    slug: "cloud-devops",
    icon: "Cloud",
    title: "Cloud Infrastructure, DevOps & Deployment",
    shortDesc: "Scalable, secure cloud architecture and CI/CD pipelines built for enterprise-grade reliability.",
    longDesc:
      "We design and manage secure cloud environments, deployment pipelines, server infrastructure, and scalable architectures that keep your applications fast, reliable, and ready for growth — with monitoring and alerting so you know before your users do when something goes wrong.",
    deliverables: [
      "Cloud Architecture Design (AWS / GCP / Azure)",
      "Infrastructure as Code (Terraform / Pulumi)",
      "CI/CD Pipeline Setup (GitHub Actions)",
      "Monitoring, Alerting & Logging (Datadog / CloudWatch)",
      "Security Hardening & Cost Optimisation",
    ],
    faqs: [
      {
        q: "Which cloud platforms do you specialise in?",
        a: "AWS is our primary platform. We also work with GCP, Azure, and platform-specific solutions like Vercel, Railway, and Supabase for appropriate use cases.",
      },
      {
        q: "Can you migrate an existing application to the cloud?",
        a: "Yes. We handle lift-and-shift migrations, containerisation with Docker, and full re-architecture to cloud-native microservices — depending on your business requirements and budget.",
      },
      {
        q: "What does 'infrastructure as code' mean and why does it matter?",
        a: "IaC means your entire cloud infrastructure is defined in version-controlled code, making it reproducible, auditable, and disaster-recoverable in minutes rather than days.",
      },
    ],
    keywords: ["cloud infrastructure consultant", "DevOps as a service", "AWS deployment", "CI/CD pipeline", "Terraform consultant"],
    startingAt: "$3,500",
  },
  {
    slug: "ai-solutions-automation",
    icon: "Cpu",
    title: "AI Solutions Architect & Business Automation",
    shortDesc: "Intelligent automation that slashes operational costs and multiplies team output.",
    longDesc:
      "We transform business challenges into AI-powered solutions that save time, reduce costs, and increase productivity. We design and build intelligent systems, AI workflows, automation platforms, and custom business solutions that help organisations scale faster and operate smarter.",
    deliverables: [
      "AI Opportunity Assessment & ROI Projection",
      "Workflow Automation Build (n8n / Make / Zapier)",
      "LLM Integration (Groq / Claude / OpenAI)",
      "Custom AI Agent Development",
      "Automation Analytics & Monitoring",
    ],
    faqs: [
      {
        q: "How do I know if AI automation is right for my business?",
        a: "If your team spends more than 5 hours per week on repetitive, rule-based tasks — data entry, email sorting, report generation, lead routing — AI automation will deliver measurable ROI.",
      },
      {
        q: "What automation platforms do you use?",
        a: "n8n (self-hosted, no per-task fees), Make.com, Zapier, and custom Python/Node.js automation scripts. We choose the right tool for your specific workflow and budget.",
      },
      {
        q: "Can you integrate AI into our existing software?",
        a: "Yes. We build LLM-powered layers on top of existing tools — adding AI to your CRM, support desk, document processing, or any API-accessible platform.",
      },
    ],
    keywords: ["AI automation agency", "business process automation", "n8n consultant", "workflow automation UK", "LLM integration"],
    startingAt: "$4,000",
  },
  {
    slug: "fullstack-saas-development",
    icon: "Code2",
    title: "Full-Stack Web & SaaS Development",
    shortDesc: "Production-ready SaaS platforms and web apps built for growth, speed, and scale.",
    longDesc:
      "We build modern web applications, SaaS platforms, customer portals, dashboards, and business systems from concept to deployment. Every product is built for performance, security, scalability, and long-term maintainability.",
    deliverables: [
      "Product Scoping & Technical Wireframes",
      "Next.js / React Frontend",
      "Node.js / Python Backend + REST API",
      "Database Design (PostgreSQL / Supabase)",
      "Stripe Payments & Subscription Logic",
      "Vercel / AWS Deployment + CI/CD",
    ],
    faqs: [
      {
        q: "What is your typical SaaS development timeline?",
        a: "An MVP SaaS with core features: 6–10 weeks. A full-featured platform with admin dashboard, payments, and integrations: 12–16 weeks.",
      },
      {
        q: "Do you handle design as well as development?",
        a: "Yes. We work from Figma wireframes and can provide full UI/UX design or work from your existing designs — whatever works best for your project.",
      },
      {
        q: "Who owns the code when the project is complete?",
        a: "You own 100% of the code. All source code is delivered via GitHub and transferred to your account upon project completion.",
      },
    ],
    keywords: ["SaaS development company", "full stack developer UK", "Next.js developer", "web application development London"],
    startingAt: "$5,000",
  },
  {
    slug: "ai-agents-chatbots-rag",
    icon: "Bot",
    title: "AI Agents, Chatbots & RAG Systems",
    shortDesc: "Intelligent AI assistants that understand your business and convert conversations into customers.",
    longDesc:
      "We develop advanced AI agents, intelligent assistants, chatbots, and Retrieval-Augmented Generation (RAG) systems that automate customer support, streamline operations, and unlock the value buried inside your business documents and data.",
    deliverables: [
      "RAG Knowledge Base Architecture & Build",
      "Custom AI Chatbot (branded, trained on your data)",
      "Vector Database Setup (Pinecone / pgvector)",
      "LangChain / LlamaIndex Integration",
      "Analytics Dashboard & Conversation Logging",
    ],
    faqs: [
      {
        q: "What is a RAG system and do I need one?",
        a: "A Retrieval-Augmented Generation system lets an AI answer questions using your own documents, PDFs, databases, or knowledge base — not just its training data. If your team spends significant time searching internal information, a RAG system can save 10–30 hours per week.",
      },
      {
        q: "Can the chatbot be trained on our existing documentation?",
        a: "Yes. We ingest PDFs, Word documents, web pages, databases, and structured data into a vector store. The AI can then answer questions about your products, policies, processes, and history with source citations.",
      },
      {
        q: "How do you prevent the AI from giving wrong answers?",
        a: "We implement confidence scoring, source grounding (responses cite the exact document they came from), and human escalation triggers. The system knows what it doesn't know.",
      },
    ],
    keywords: ["AI chatbot development", "RAG system build", "custom AI agent", "knowledge base chatbot", "LangChain developer"],
    startingAt: "$3,500",
  },
  {
    slug: "mobile-app-development",
    icon: "Smartphone",
    title: "Mobile App Development & Cross-Platform Solutions",
    shortDesc: "Native-quality iOS and Android apps built with React Native for maximum reach, minimum budget.",
    longDesc:
      "We create intuitive, scalable, and user-focused mobile applications that connect seamlessly with cloud services, APIs, payment systems, and AI-powered functionality — delivering app experiences users rate 4.8+ stars.",
    deliverables: [
      "UX/UI Design (Figma, mobile-first)",
      "React Native / Flutter Development",
      "REST API & Third-Party Integration",
      "Push Notifications & Analytics",
      "App Store & Google Play Submission",
    ],
    faqs: [
      {
        q: "React Native or Flutter — which do you recommend?",
        a: "React Native if your team already uses JavaScript/TypeScript or you need deep integration with a web platform. Flutter if you need pixel-perfect custom UI and near-native performance on both platforms.",
      },
      {
        q: "How long does mobile app development take?",
        a: "MVP with core features: 8–12 weeks. Feature-complete app with backend, payments, and analytics: 16–20 weeks.",
      },
      {
        q: "Do you handle App Store and Google Play submission?",
        a: "Yes. We manage the full submission process including screenshots, metadata, privacy policy, and review responses — both platforms.",
      },
    ],
    keywords: ["mobile app development UK", "React Native developer", "iOS Android app agency", "cross-platform mobile app"],
    startingAt: "$6,000",
  },
];

// Extended page content for the google-ads-analytics service detail page.
// Kept separate from SERVICES so the shared [slug] template's per-service
// fields (deliverables/faqs) stay untouched for the other 8 services.
export const GOOGLE_ADS_SERVICE_DETAIL = {
  intro: [
    "Transform your advertising into measurable business growth with strategic Google Ads management, advanced analytics, and continuous optimisation.",
    "As Google-certified specialists in Search, Display, Shopping, AI-Powered Performance Ads, Campaign Manager 360 (CM360), and Google Analytics 4 (GA4), we help businesses generate more qualified leads, reduce wasted ad spend, and maximise return on investment through data-driven marketing strategies.",
    "Whether you're launching your first campaign or improving an existing account, we build, manage, and optimise every aspect of your advertising to deliver sustainable, long-term growth.",
  ],
  whyChooseUs: [
    "Google Ads Certified Professionals",
    "Google Analytics 4 (GA4) Certified",
    "Campaign Manager 360 (CM360) Certified",
    "AI-Powered Campaign Optimisation",
    "Data-Driven Decision Making",
    "Transparent Reporting",
    "Continuous Campaign Improvements",
    "Dedicated Account Management",
    "No Long-Term Contracts",
    "Focused on Real Business Results",
  ],
  process: [
    {
      step: "01",
      title: "Discovery & Strategy",
      desc: "We take the time to understand your business, goals, competitors, audience, and current marketing performance before creating a tailored advertising strategy.",
    },
    {
      step: "02",
      title: "Campaign Build",
      desc: "We build or optimise your Google Ads account using industry best practices, implement accurate conversion tracking, and ensure your campaigns are ready to perform from day one.",
    },
    {
      step: "03",
      title: "Launch & Optimisation",
      desc: "Once your campaigns are live, we continuously monitor, test, and refine every element to improve lead quality, reduce costs, and maximise performance.",
    },
    {
      step: "04",
      title: "Reporting & Growth",
      desc: "Every month you'll receive clear reporting, strategic insights, and recommendations designed to help your business scale confidently.",
    },
  ],
  faqs: [
    {
      q: "What Google Ads certifications do you hold?",
      a: "We hold active Google certifications in Google Ads Search, Google Ads Display, Google Ads Shopping, AI-Powered Performance Ads, Google Ads Measurement, Foundations of AI-Powered Search Ads, Campaign Manager 360 (CM360), and Google Analytics 4 (GA4). Our certifications are kept up to date to ensure we're using the latest Google Ads features, AI capabilities, and measurement best practices.",
    },
    {
      q: "How much should I spend on Google Ads?",
      a: "Every business is different, but we generally recommend: local businesses £1,000–£3,000/month, growing businesses £3,000–£10,000/month, and national campaigns £10,000+/month. We'll recommend the right budget during your discovery call based on your goals, market, and competition.",
    },
    {
      q: "Is your management fee included in the advertising budget?",
      a: "No. Your Google Ads budget is paid directly to Google, while our monthly management fee covers strategy, campaign management, optimisation, reporting, and ongoing support.",
    },
    {
      q: "Can I change my add-ons after we start?",
      a: "Yes. Your package isn't fixed — add extra campaign types, tracking, or reporting as your needs grow, or scale back if priorities shift. Changes take effect from the start of the following month.",
    },
    {
      q: "How long does it take to see results?",
      a: "Most campaigns begin generating meaningful data within 2–4 weeks. Significant improvements in lead quality, cost per acquisition, and return on ad spend are typically achieved within 8–12 weeks through continuous optimisation and testing.",
    },
    {
      q: "Can you improve my existing Google Ads account?",
      a: "Absolutely. We can audit your current campaigns, identify opportunities for improvement, implement accurate tracking, and optimise performance to maximise your return on investment.",
    },
  ],
};

// Interactive "build your own package" pricing data for the google-ads-analytics
// service page. Base price + optional add-ons, priced against UK PPC market rates
// (typical UK agency retainers run £300-£2,000/mo, avg ~£1,040/mo; entry-level
// scoped retainers £500-£750/mo) so £695 base + modular add-ons reads as
// competitive rather than arbitrary.
export const GOOGLE_ADS_PACKAGE_BUILDER = {
  basePrice: 695,
  baseIncludes: [
    "Dedicated Account Manager",
    "Business & Competitor Analysis",
    "Google Ads Account Setup or Audit",
    "Google Search Campaign Management",
    "Google Analytics 4 (GA4) Setup & Audit",
    "Google Tag Manager (GTM) Implementation",
    "Conversion Tracking",
    "Monthly Campaign Optimisation",
    "Monthly Performance Report",
    "Email Support",
  ],
  recommendedSpend: "£1,000–£3,000/month",
  categories: [
    {
      name: "Campaign Types",
      addons: [
        { id: "pmax", label: "Performance Max Campaigns", price: 150, desc: "AI-powered campaigns across Search, Display, Maps, YouTube, Gmail and Discover." },
        { id: "display", label: "Google Display Campaigns", price: 125, desc: "Expand your reach through Google's Display Network." },
        { id: "shopping", label: "Google Shopping Campaigns", price: 175, desc: "For ecommerce businesses selling physical products." },
        { id: "demandgen", label: "Demand Gen Campaigns", price: 175, desc: "Reach new audiences using Google's AI-powered discovery placements." },
        { id: "youtube", label: "YouTube Advertising", price: 200, desc: "Video advertising for brand awareness and lead generation." },
      ],
    },
    {
      name: "Tracking & Analytics",
      addons: [
        { id: "enhanced-conversions", label: "Enhanced Conversions", price: 75, desc: "Improve conversion accuracy and campaign optimisation." },
        { id: "call-tracking", label: "Call Tracking", price: 95, desc: "Track phone enquiries generated by your campaigns." },
        { id: "ecommerce-tracking", label: "Ecommerce Tracking", price: 125, desc: "Advanced purchase and revenue tracking for online stores." },
        { id: "custom-dashboard", label: "Custom GA4 Dashboard", price: 95, desc: "A bespoke dashboard tailored to your business KPIs." },
      ],
    },
    {
      name: "Optimisation & Growth",
      addons: [
        { id: "weekly-optimisation", label: "Weekly Campaign Optimisation", price: 150, desc: "More frequent optimisation for faster performance improvements." },
        { id: "landing-page-reviews", label: "Landing Page Reviews & Recommendations", price: 125, desc: "Monthly conversion-focused landing page analysis." },
        { id: "ab-testing", label: "A/B Ad Copy Testing", price: 95, desc: "Continuous testing to improve click-through and conversion rates." },
        { id: "competitor-monitoring", label: "Competitor Monitoring", price: 95, desc: "Track competitor activity and identify new opportunities." },
        { id: "audience-optimisation", label: "Advanced Audience Optimisation", price: 125, desc: "Build and refine audience segments for improved targeting." },
      ],
    },
    {
      name: "Reporting & Strategy",
      addons: [
        { id: "live-dashboard", label: "Live Performance Dashboard", price: 75, desc: "24/7 access to campaign performance." },
        { id: "monthly-call", label: "Monthly Strategy Call", price: 95, desc: "A one-to-one session to review performance and discuss next steps." },
        { id: "fortnightly-calls", label: "Fortnightly Strategy Calls", price: 175, desc: "Ideal for businesses scaling quickly." },
      ],
    },
  ],
};

export const CERTIFICATIONS = [
  {
    name: "Google Analytics Certification (GA4)",
    issuer: "Google Skillshop",
    credentialId: "182617377",
    issued: "May 2026",
    expires: "May 2027",
    color: "#4285F4",
  },
  {
    name: "Foundations of AI-Powered Search Ads",
    issuer: "Google Skillshop",
    credentialId: "57183182601735",
    issued: "May 2026",
    expires: "May 2027",
    color: "#34A853",
  },
  {
    name: "Campaign Manager 360 (CM360)",
    issuer: "Google Skillshop",
    credentialId: "176129272",
    issued: "Mar 2026",
    expires: "Mar 2027",
    color: "#FBBC05",
  },
  {
    name: "Google Ads Search Certification",
    issuer: "Google Skillshop",
    credentialId: "174827309",
    issued: "Feb 2026",
    expires: "Feb 2027",
    color: "#EA4335",
  },
  {
    name: "AI-Powered Performance Ads Certification",
    issuer: "Google Skillshop",
    credentialId: "174848050",
    issued: "Feb 2026",
    expires: "Feb 2027",
    color: "#34A853",
  },
  {
    name: "Google Ads Measurement Certification",
    issuer: "Google Skillshop",
    credentialId: "174850417",
    issued: "Feb 2026",
    expires: "Feb 2027",
    color: "#4285F4",
  },
  {
    name: "HubSpot Academy Certification",
    issuer: "HubSpot",
    credentialId: "s84v5vfl",
    issued: "2025",
    expires: "2026",
    color: "#FF7A59",
  },
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google Career Certificates",
    credentialId: "GCC-IT-2025",
    issued: "2025",
    expires: "Active",
    color: "#4285F4",
  },
  {
    name: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    credentialId: "fcc1ff02871-9e96-4be3-b10c-b1a2889f8688",
    issued: "Jul 2024",
    expires: "No Expiry",
    color: "#0A0A23",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description: "Your goals, constraints, and audience — mapped before a line of code is written.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Architecture and roadmap, with every decision tied to a measurable outcome.",
  },
  {
    step: "03",
    title: "Build",
    description: "Agile development with weekly demos — real progress, real-time feedback.",
  },
  {
    step: "04",
    title: "Launch",
    description: "Zero-downtime deployment with full monitoring, analytics, and SEO validation.",
  },
  {
    step: "05",
    title: "Optimise",
    description: "Post-launch testing and tuning. The work doesn't stop at go-live.",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    title: "TeamsAI — AI Legal Operating System",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    tags: ["AI Agents", "SaaS", "Legal Tech", "Self-Hosted LLMs"],
    metric: "Live product · from £199/mo",
    description:
      "GMHCO's own SaaS product: nine specialist AI workers covering Family Law, Employment, Corporate, and Property practice areas, with self-hosted, GDPR-compliant private LLMs.",
    category: "SaaS",
    link: "https://teamsai.uk",
  },
  {
    title: "SalonTime — AI Booking Platform",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    tags: ["SaaS", "AI", "Booking Platform"],
    metric: "Live product",
    description:
      "GMHCO's own SaaS product: an AI-powered discovery and booking platform for salons, barbershops, and spas, with instant booking and verified trust scores.",
    category: "SaaS",
    link: "https://salontime.org",
  },
  {
    title: "Fixies — Trusted Tradespeople Marketplace",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    tags: ["SaaS", "Marketplace", "AI Matching"],
    metric: "Live product",
    description:
      "GMHCO's own SaaS product: a marketplace connecting verified, insured tradespeople with customers across the UK via AI-powered pricing and instant matching.",
    category: "SaaS",
    link: "https://www.fixies.uk",
  },
  {
    title: "SHYN Legal — Immigration Advisory Website",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    tags: ["Web Design", "Next.js"],
    metric: "Live client site",
    description:
      "Full website design and build for a UK immigration advisory law firm — spouse & family visas, student visas, skilled worker visas, and naturalisation services.",
    category: "Web",
    link: "https://www.shynlegal.co.uk",
  },
  {
    title: "Raipur Society UK — Community Platform",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    tags: ["Web Design", "Community"],
    metric: "Live site",
    description:
      "Website for a UK community organisation built around culture, learning, and collective progress.",
    category: "Web",
    link: "https://raipursociety.uk",
  },
];

export const PORTFOLIO_CATEGORIES = ["All", "SaaS", "Web"];

export const CASE_STUDIES = [
  {
    title: "TeamsAI — An AI Operating System for Law Firms",
    client: "GMHCO Product",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
    tags: ["AI Agents", "SaaS", "Legal Tech", "Self-Hosted LLMs"],
    challenge:
      "Law firms need AI help with repetitive work across practice areas, but most AI tools require sending confidential client data to third-party clouds — a non-starter under GDPR and professional conduct rules.",
    solution:
      "GMHCO designed and built TeamsAI from the ground up: nine specialist AI workers covering Family Law, Employment, Corporate, and Property, running on self-hosted, GDPR-compliant private LLMs — live today at teamsai.uk.",
    results: [
      { metric: "9", label: "Specialist AI Workers" },
      { metric: "£199", label: "Starting Monthly Price" },
      { metric: "100%", label: "Self-Hosted & GDPR-Compliant" },
      { metric: "Live", label: "In Production Today" },
    ],
  },
  {
    title: "SalonTime — AI-Powered Booking Platform",
    client: "GMHCO Product",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    tags: ["SaaS", "AI", "Booking Platform"],
    challenge:
      "Booking a salon, barbershop, or spa still means phone calls, hold times, and no reliable way to compare trust and quality before you show up.",
    solution:
      "GMHCO designed and built SalonTime: an AI-powered discovery and booking platform with instant booking and verified trust scores — live today at salontime.org.",
    results: [
      { metric: "Live", label: "In Production Today" },
      { metric: "AI", label: "Powered Recommendations" },
      { metric: "Instant", label: "Booking, No Waiting" },
      { metric: "Verified", label: "Trust Scores" },
    ],
  },
];

export const FAQS = [
  {
    slug: "client-types",
    question: "What types of clients does GMHCO work with?",
    answer:
      "GMHCO works with startups, scale-ups, and established enterprises worldwide — primarily in the UK, US, Europe, and the Middle East. Our clients typically have serious business goals, budgets to match, and want a strategic technology partner rather than a commodity vendor.",
  },
  {
    slug: "project-start-time",
    question: "How quickly can a project start?",
    answer:
      "Discovery calls can be booked within 48 hours. For most engagements, scoped work begins within 1–2 weeks of contract signing.",
  },
  {
    slug: "retainers",
    question: "Do you offer retainer-based engagements?",
    answer:
      "Yes. Google Ads management is available from £695/month, with analytics support and AI system maintenance also available on monthly retainers.",
  },
  {
    slug: "differentiator",
    question: "What makes GMHCO different from a typical agency?",
    answer:
      "GMHCO is founder-led and specialist-focused. Every engagement is managed personally by Gazi Morshed — not handed off to junior staff. You get certified expertise, direct communication, and full accountability at every stage.",
  },
  {
    slug: "gdpr-compliance",
    question: "How do you handle data privacy and GDPR compliance?",
    answer:
      "All client data is handled under GDPR-compliant practices. Infrastructure is deployed with security hardening, role-based access controls, and encrypted data at rest and in transit.",
  },
  {
    slug: "stack-integration",
    question: "Can you integrate with our existing technology stack?",
    answer:
      "Absolutely. Systems integration is a core service. We connect new solutions to your existing CRM, ERP, payment systems, or any API-accessible platform without disrupting your current operations.",
  },
  {
    slug: "what-is-rag",
    question: "What is a RAG system and do I need one?",
    answer:
      "A Retrieval-Augmented Generation (RAG) system lets an AI model answer questions using your own documents, database, or knowledge base — not just its training data. If your team spends significant time searching internal information, a RAG system can save 10–30 hours per week per team member.",
  },
  {
    slug: "post-launch-support",
    question: "Do you provide post-launch support?",
    answer:
      "Yes. All project engagements include 30 days of post-launch support at no additional cost. Ongoing maintenance and optimisation retainers are available beyond that period.",
  },
  {
    slug: "google-ads-pricing",
    question: "How much does GMHCO's Google Ads management cost?",
    answer:
      "Google Ads management starts at £695 per month for the base package (Search campaigns, GA4, GTM, conversion tracking, monthly optimisation and reporting). You then build your own package by adding only the extra campaign types, tracking, or reporting you need — the price updates accordingly. Recommended ad spend on top of that is £1,000–£3,000 monthly for local businesses, £3,000–£10,000 for growing businesses, or £10,000+ for national campaigns.",
  },
  {
    slug: "google-ads-results",
    question: "What experience does GMHCO have with Google Ads?",
    answer:
      "GMHCO holds active Google Ads Search, Measurement, and AI-Powered Performance Ads certifications, and manages campaigns using GA4 and GTM conversion tracking with a Target CPA + Performance Max approach.",
  },
  {
    slug: "saas-development-pricing",
    question: "How much does custom SaaS development cost with GMHCO?",
    answer:
      "Full-stack SaaS development starts at $5,000. GMHCO has designed and shipped its own production SaaS products — including TeamsAI (teamsai.uk) and SalonTime (salontime.org) — both live today.",
  },
  {
    slug: "rag-support-tickets",
    question: "Can a RAG system reduce support ticket volume?",
    answer:
      "Yes — a well-built RAG system lets a team query internal documents in natural language instead of searching manually. GMHCO's own TeamsAI product applies this approach to legal knowledge work.",
  },
  {
    slug: "certifications",
    question: "What Google certifications does GMHCO hold?",
    answer:
      "GMHCO holds 12+ active certifications, including Google Ads Search, Google Ads Measurement, AI-Powered Performance Ads, Campaign Manager 360, Google Analytics (GA4), and HubSpot Academy — all verifiable through Google Skillshop.",
  },
  {
    slug: "mobile-app-pricing",
    question: "How much does mobile app development cost?",
    answer:
      "Cross-platform mobile app development starts at $6,000, using React Native to ship a single codebase to both iOS and Android without sacrificing native performance.",
  },
  {
    slug: "location-and-regions",
    question: "Where is GMHCO based and which regions does it serve?",
    answer:
      "GMHCO is based in London, UK, founded in 2023. It serves clients across the UK, US, Europe, and the Middle East, with all engagements led directly by founder Gazi Morshed.",
  },
];

export const WHY_GMHCO = [
  {
    icon: "ShieldCheck",
    title: "Google-Certified & Proven",
    desc: "12+ active certifications from Google Skillshop, HubSpot, and industry bodies. Every strategy is backed by verified expertise, not guesswork.",
  },
  {
    icon: "Globe",
    title: "Global Reach, Direct Access",
    desc: "Serving clients across UK, US, Europe, and beyond. You get direct access to your strategist — no account managers, no hand-offs.",
  },
  {
    icon: "Zap",
    title: "AI-Native from Day One",
    desc: "AI is embedded in everything we build — from automated ad campaigns to intelligent systems — not bolted on as an afterthought.",
  },
  {
    icon: "LineChart",
    title: "Outcome-Driven Only",
    desc: "Every engagement is measured against real business metrics: revenue, leads, cost reduction, and time saved. No vanity metrics, ever.",
  },
];

export const BLOG_POSTS = [
  {
    slug: "ai-digital-marketing-2026",
    title: "How AI is Reshaping Digital Marketing Strategy in 2026",
    excerpt:
      "AI is no longer a future trend — it's the present competitive edge. Here is how forward-thinking businesses are using AI to outperform competitors across every digital channel.",
    readTime: "8 min read",
    date: "2026-06-01",
    category: "AI & Marketing",
    keywords: ["AI digital marketing", "AI marketing strategy 2026", "marketing automation"],
  },
  {
    slug: "google-ads-performance-max-guide",
    title: "Performance Max vs Standard Shopping: When to Use Each in 2026",
    excerpt:
      "Performance Max is not a replacement for everything — it is a complement. A certified Google Ads expert breaks down exactly when to use PMax and when standard campaigns still win.",
    readTime: "6 min read",
    date: "2026-05-20",
    category: "Google Ads",
    keywords: ["Performance Max Google Ads", "PMax vs Shopping", "Google Ads 2026"],
  },
  {
    slug: "rag-systems-business-knowledge",
    title: "What is a RAG System and Why Every Knowledge-Heavy Business Needs One",
    excerpt:
      "If your team spends hours searching internal documents, a Retrieval-Augmented Generation system is the single highest-ROI AI investment you can make. Here is why.",
    readTime: "7 min read",
    date: "2026-05-10",
    category: "AI Development",
    keywords: ["RAG system business", "retrieval augmented generation", "AI knowledge base"],
  },
  {
    slug: "ga4-setup-guide-2026",
    title: "The Complete GA4 Setup Guide for 2026 (With Full Conversion Tracking)",
    excerpt:
      "Most businesses set up GA4 wrong. This step-by-step guide covers property setup, event tracking, conversion configuration, and the GA4 reporting features that actually matter.",
    readTime: "10 min read",
    date: "2026-04-28",
    category: "Analytics",
    keywords: ["GA4 setup guide", "Google Analytics 4 2026", "conversion tracking GA4"],
  },
  {
    slug: "saas-development-cost",
    title: "How Much Does it Really Cost to Build a SaaS Product in 2026?",
    excerpt:
      "A transparent, no-nonsense breakdown of SaaS development costs — from MVP to full-featured platform — and what you should expect at each stage of investment.",
    readTime: "9 min read",
    date: "2026-04-15",
    category: "SaaS Development",
    keywords: ["SaaS development cost", "how much to build SaaS", "MVP development cost 2026"],
  },
  {
    slug: "consumer-psychology-digital-marketing",
    title: "Consumer Psychology Principles Every Digital Marketer Must Know",
    excerpt:
      "The brands that win online understand how people actually make decisions. Seven evidence-backed consumer psychology principles that should inform every campaign you run.",
    readTime: "7 min read",
    date: "2026-04-05",
    category: "Marketing Strategy",
    keywords: ["consumer psychology digital marketing", "marketing psychology", "buyer behaviour online"],
  },
  {
    slug: "mobile-app-development-cost-2026",
    title: "How Much Does Mobile App Development Really Cost in 2026?",
    excerpt:
      "From a simple MVP to a fintech-grade app with biometric auth and payments — a transparent breakdown of what mobile app development actually costs, and what drives the price up.",
    readTime: "8 min read",
    date: "2026-08-02",
    category: "Mobile Development",
    keywords: ["mobile app development cost", "how much does an app cost 2026", "React Native development cost", "cross-platform app pricing"],
  },
];

export const GROQ_SYSTEM_PROMPT = `You are the AI assistant for GMHCO (Gazi Morshed Company), an elite IT solutions, SaaS development, and digital strategy firm based in London, UK.

ABOUT GMHCO:
- Founded by Gazi Morshed, a certified technology strategist and Google Ads expert
- 12+ active certifications: Google Analytics (GA4), Google Ads Search, AI-Powered Performance Ads, Google Ads Measurement, Campaign Manager 360 (CM360), Foundations of AI-Powered Search Ads, HubSpot Academy, Google IT Support Professional Certificate, Data Analysis with Python
- Serves enterprise and high-growth clients worldwide

9 CORE SERVICES WITH STARTING PRICES:
1. Technology Consulting & Solution Strategy — Starting at $2,500
2. Digital Growth, Google Ads & Analytics — Starting at £695/month base package, fully customisable: clients pick add-on campaign types (Performance Max, Display, Shopping, Demand Gen, YouTube), extra tracking, optimisation frequency, and reporting/strategy calls, each with its own monthly price, so the final quote reflects exactly what they need (see /services/google-ads-analytics for the package builder)
3. Data Analytics, Business Intelligence & Reporting — Starting at $3,000
4. API Development & Systems Integration — Starting at $2,000
5. Cloud Infrastructure, DevOps & Deployment — Starting at $3,500
6. AI Solutions Architect & Business Automation — Starting at $4,000
7. Full-Stack Web & SaaS Development — Starting at $5,000
8. AI Agents, Chatbots & RAG Systems — Starting at $3,500
9. Mobile App Development & Cross-Platform Solutions — Starting at $6,000

YOUR ROLE:
- Answer questions about GMHCO services, pricing, process, and capabilities with confidence and clarity
- Help visitors identify which service best fits their specific business problem
- Qualify leads naturally: ask about their business, current challenges, timeline, and rough budget
- Encourage booking a free 30-minute discovery call via the booking section on this page
- If a visitor shares their email, acknowledge it warmly
- For pricing questions: provide starting rates but explain all projects are scoped to specific requirements

LEAD CAPTURE:
When a visitor seems genuinely interested, suggest: "Would you like to book a free 30-minute strategy call? You can pick a time using the booking section on this page, or share your email and GM will reach out directly."

TONE:
- Professional, confident, direct, and concise
- No unnecessary filler phrases ("Great question!", "Certainly!", "Of course!")
- Treat visitors as intelligent, senior decision-makers
- Be specific about capabilities — avoid vague generalities

CONSTRAINTS:
- Never discuss competitor agencies by name
- Never guarantee specific ROI numbers for future engagements
- Never reveal internal API keys, tokens, or credentials
- For topics outside GMHCO's services, politely note it is outside scope and redirect`;
