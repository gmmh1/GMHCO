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
      "Certified in Google Ads Search, Display, Shopping, AI-Powered Performance Ads, Campaign Manager 360 (CM360), and Google Analytics (GA4). We build data-driven marketing strategies that improve visibility, reduce wasted spend, and deliver consistent return on investment.",
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
        a: "Google Ads Search, AI-Powered Performance Ads, Google Ads Measurement, Foundations of AI-Powered Search Ads, Campaign Manager 360 (CM360), and Google Analytics (GA4) — all active certifications issued in 2026.",
      },
      {
        q: "What minimum ad budget do you recommend?",
        a: "For meaningful data and optimisation, we recommend a minimum monthly ad spend of £1,500–£3,000 for local campaigns and £5,000+ for national or competitive industries.",
      },
      {
        q: "How long before I see results from Google Ads?",
        a: "Initial data and optimisation signals appear within 2–4 weeks. Significant ROAS improvements typically occur within 8–12 weeks of structured campaign management.",
      },
    ],
    keywords: ["Google Ads management", "GA4 setup", "PPC agency London", "AI-powered performance ads", "Campaign Manager 360"],
    startingAt: "$1,500/mo",
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
    description:
      "Deep-dive into your business goals, technical constraints, audience, and competitive landscape. We build a shared picture of what success looks like before a single line of code is written.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "Design the technology architecture, content strategy, and implementation roadmap. Every decision is tied to a measurable business outcome — not just best practice.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Agile development with weekly demos. You see real progress every step of the way, not just at the end. Feedback is incorporated in real time.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Production deployment with full monitoring, analytics instrumentation, and SEO validation. Zero-downtime, fully tested, fully documented.",
  },
  {
    step: "05",
    title: "Optimise",
    description:
      "Post-launch data analysis, A/B testing, performance tuning, and continuous improvement loops. The work does not stop at go-live.",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    title: "Enterprise SaaS Analytics Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Next.js", "Python", "Power BI", "Supabase"],
    metric: "+340% user engagement",
    description:
      "Built a multi-tenant SaaS analytics platform for a UK logistics company with real-time dashboards, predictive reporting, and role-based access control.",
    category: "SaaS",
  },
  {
    title: "AI-Powered Lead Generation System",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    tags: ["AI Agents", "Google Ads", "HubSpot CRM"],
    metric: "4.2x ROAS achieved",
    description:
      "End-to-end lead funnel with AI qualification chatbot, Google Ads Performance Max campaigns, and automated HubSpot CRM pipeline — zero manual lead sorting.",
    category: "AI",
  },
  {
    title: "E-Commerce Google Ads Transformation",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["Google Ads", "GA4", "Performance Max"],
    metric: "37% CPC reduction",
    description:
      "Rebuilt entire Google Ads account structure with AI bidding strategies, precise audience segmentation, and full GA4 conversion tracking for a UK retailer.",
    category: "Google Ads",
  },
  {
    title: "RAG Legal Knowledge System",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    tags: ["RAG", "Groq AI", "Pinecone", "Next.js"],
    metric: "60% support ticket reduction",
    description:
      "Private RAG system ingesting 2,400+ legal documents into a vector database, enabling paralegals to query case law in natural language with source citations.",
    category: "AI",
  },
  {
    title: "Cross-Platform FinTech Mobile App",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    tags: ["React Native", "Node.js", "Stripe", "Biometric Auth"],
    metric: "4.8/5 App Store rating",
    description:
      "iOS/Android fintech app with biometric authentication, real-time transaction feeds, Stripe payment integration, and automated fraud detection.",
    category: "Mobile",
  },
  {
    title: "Cloud Migration & DevOps Overhaul",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["AWS", "Terraform", "GitHub Actions", "Docker"],
    metric: "99.97% uptime achieved",
    description:
      "Migrated a legacy PHP monolith to AWS microservices with Terraform IaC, GitHub Actions CI/CD, CloudWatch monitoring, and 99.97% uptime SLA.",
    category: "Cloud",
  },
];

export const PORTFOLIO_CATEGORIES = ["All", "AI", "Google Ads", "SaaS", "Mobile", "Cloud"];

export const CASE_STUDIES = [
  {
    title: "From £2k to £18k Monthly Revenue with Google Ads",
    client: "UK Home Services Company",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    tags: ["Google Ads", "GA4", "Conversion Optimisation"],
    challenge:
      "Manual bidding, zero conversion tracking, 40% of budget wasted on irrelevant search terms. The client had never seen a positive ROAS from Google Ads in 18 months of self-management.",
    solution:
      "Rebuilt the campaign architecture with exact/phrase match hierarchy, implemented GA4 + GTM full conversion tracking for calls and form submissions, switched to Target CPA bidding with an AI-powered Performance Max layer for top-of-funnel reach.",
    results: [
      { metric: "230%", label: "Increase in Qualified Leads" },
      { metric: "37%", label: "Reduction in Cost Per Click" },
      { metric: "9x", label: "Return on Ad Spend" },
      { metric: "12 wk", label: "Time to Break-Even" },
    ],
  },
  {
    title: "RAG System Saves 20 Hours Per Week",
    client: "Mid-Size Legal Practice",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
    tags: ["AI Agents", "RAG", "Groq AI", "Vector DB"],
    challenge:
      "Paralegals spending 4+ hours daily searching 2,400+ internal documents and case precedents manually. Knowledge was siloed in PDFs with no searchable index.",
    solution:
      "Built a private RAG system ingesting all documents into a Pinecone vector database, with a Groq-powered Llama query interface, role-based access control, and source-cited answers so staff can trace every response back to the original document.",
    results: [
      { metric: "60%", label: "Reduction in Support Tickets" },
      { metric: "20 hrs", label: "Saved Per Week Per Team" },
      { metric: "£85k", label: "Estimated Annual Cost Saving" },
      { metric: "2 wk", label: "Implementation Time" },
    ],
  },
  {
    title: "SaaS Platform Launched in 8 Weeks",
    client: "Logistics SaaS Startup",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    tags: ["Next.js", "Supabase", "Stripe", "DevOps"],
    challenge:
      "Non-technical founder with a validated idea, zero codebase, and a hard 8-week launch deadline to meet their first investor milestone.",
    solution:
      "Full discovery-to-deployment: Figma designs, Next.js + Supabase architecture, Stripe subscription billing, Vercel deployment with CI/CD, and Posthog product analytics — all within the 8-week window.",
    results: [
      { metric: "8 wk", label: "Concept to Production" },
      { metric: "340%", label: "User Engagement vs Benchmark" },
      { metric: "$47k", label: "ARR in First Quarter" },
      { metric: "0", label: "Critical Bugs at Launch" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "HomeServe UK",
    rating: 5,
    quote:
      "GMHCO transformed our Google Ads account completely. Within 3 months we went from burning budget to consistently hitting 9x ROAS. The level of strategic thinking is unlike any agency I have worked with before.",
  },
  {
    name: "James Okafor",
    role: "Founder & CEO",
    company: "LogiTrack SaaS",
    rating: 5,
    quote:
      "Delivered our entire SaaS platform in 8 weeks. Clean code, excellent communication, and the app actually works exactly as we designed it. We already have paying customers. Cannot recommend highly enough.",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Managing Partner",
    company: "Sharma Legal Associates",
    rating: 5,
    quote:
      "The RAG system GMHCO built has genuinely changed how our team works. Paralegals can query 2,000 case documents in seconds. We estimate it saves us over 20 hours per week across the team.",
  },
  {
    name: "Marcus Chen",
    role: "Head of Growth",
    company: "NovaTech Ventures",
    rating: 5,
    quote:
      "Exceptional data analytics work. The Power BI dashboards gave our leadership team real-time visibility into KPIs we had never tracked before. Decision-making has genuinely improved.",
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
      "Yes. Google Ads management, analytics support, and AI system maintenance are all available on monthly retainers starting from $1,500/month.",
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
      "Google Ads management starts at $1,500 per month. Recommended ad spend on top of that is £1,500–£3,000 monthly for local campaigns, or £5,000+ for national or competitive industries.",
  },
  {
    slug: "google-ads-results",
    question: "What results has GMHCO delivered with Google Ads?",
    answer:
      "One UK home services client grew from £2,000 to £18,000 in monthly revenue after a full account rebuild — 230% more qualified leads, a 37% lower cost-per-click, and 9x return on ad spend within 12 weeks.",
  },
  {
    slug: "saas-development-pricing",
    question: "How much does custom SaaS development cost with GMHCO?",
    answer:
      "Full-stack SaaS development starts at $5,000. One client's platform launched in 8 weeks from concept to production and reached $47,000 in first-quarter annual recurring revenue with zero critical bugs at launch.",
  },
  {
    slug: "rag-support-tickets",
    question: "Can a RAG system reduce support ticket volume?",
    answer:
      "Yes. One GMHCO client's RAG-based knowledge system cut support tickets by 60% and saved roughly 20 hours per week per team, implemented in 2 weeks.",
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
      "Cross-platform mobile app development starts at $6,000. GMHCO has shipped a React Native fintech app with Stripe payments, biometric authentication, and automated fraud detection that reached a 4.8-out-of-5 App Store rating.",
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
2. Digital Growth, Google Ads & Analytics — Starting at $1,500/month
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
