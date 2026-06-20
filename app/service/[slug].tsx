import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Colors, WHATSAPP, CAL_URL } from "@/constants/theme";
import { CheckCircle, Calendar, MessageSquare } from "lucide-react-native";

const SERVICES: Record<string, {
  title: string;
  from: string;
  desc: string;
  deliverables: string[];
  faqs: { q: string; a: string }[];
}> = {
  "technology-consulting": {
    title: "Technology Consulting & Solution Strategy",
    from: "$2,500",
    desc: "We analyse your existing tech stack, map your growth goals, and build a clear IT roadmap with specific tools, timelines, and ROI projections — so you invest in technology that actually delivers.",
    deliverables: ["Technology audit & gap analysis", "IT roadmap (6–18 months)", "Vendor & tool recommendations", "Build vs buy analysis", "Risk & compliance assessment"],
    faqs: [
      { q: "How long does an engagement take?", a: "Typical consulting engagements run 2–6 weeks, depending on scope." },
      { q: "Do you work with startups?", a: "Yes — from Series A startups to enterprise. We scale the engagement to your budget." },
    ],
  },
  "google-ads-analytics": {
    title: "Digital Growth, Google Ads & Analytics",
    from: "$1,500/mo",
    desc: "Google-certified campaign management focused on cost-per-acquisition, not vanity metrics. We build, optimise, and scale Google Ads, Meta Ads, and GA4 tracking that ties ad spend directly to revenue.",
    deliverables: ["Google Ads account setup & restructure", "GA4 + GTM implementation", "Conversion tracking (calls, forms, ecom)", "Monthly performance reports", "A/B ad copy testing"],
    faqs: [
      { q: "What budget do you require?", a: "We typically work with ad budgets of $2,000–$100,000/month." },
      { q: "How do you measure success?", a: "We set KPIs before launch: target CPA, ROAS, and monthly lead targets." },
    ],
  },
  "data-analytics-bi": {
    title: "Data Analytics, Business Intelligence & Reporting",
    from: "$3,000",
    desc: "We connect your data sources (CRM, ads, ERP, ecommerce) into unified dashboards that surface the KPIs that drive decisions — eliminating spreadsheet chaos and reporting delays.",
    deliverables: ["Data warehouse design", "ETL pipeline build", "Looker Studio / Power BI dashboards", "KPI framework definition", "Automated reporting"],
    faqs: [
      { q: "Which tools do you use?", a: "BigQuery, Looker Studio, Power BI, dbt, Fivetran, and custom Python pipelines." },
      { q: "Can you connect Shopify / Salesforce?", a: "Yes — we have pre-built connectors for 50+ data sources." },
    ],
  },
  "api-systems-integration": {
    title: "API Development & Systems Integration",
    from: "$2,000",
    desc: "We design and build REST and GraphQL APIs that connect your siloed systems — CRM, ERP, ecommerce, payment gateways — into a single source of truth.",
    deliverables: ["API architecture design", "REST / GraphQL endpoints", "Authentication & rate limiting", "Webhook integrations", "API documentation (OpenAPI)"],
    faqs: [
      { q: "Do you build internal or public APIs?", a: "Both — from internal microservice APIs to third-party developer platforms." },
      { q: "What languages do you use?", a: "Node.js / TypeScript, Python (FastAPI), and Go for high-throughput services." },
    ],
  },
  "cloud-devops": {
    title: "Cloud Infrastructure, DevOps & Deployment",
    from: "$3,500",
    desc: "We design and deploy cloud infrastructure on AWS, GCP, or Azure — with CI/CD pipelines, container orchestration, and monitoring so your platform stays fast, secure, and always on.",
    deliverables: ["Cloud architecture design", "Docker / Kubernetes setup", "CI/CD pipeline (GitHub Actions)", "Monitoring & alerting (Grafana)", "Cost optimisation audit"],
    faqs: [
      { q: "Which cloud do you prefer?", a: "We work with AWS, GCP, and Azure — we recommend based on your team and use case." },
      { q: "Can you migrate our existing servers?", a: "Yes — we run lift-and-shift migrations and cloud-native rewrites." },
    ],
  },
  "ai-solutions-automation": {
    title: "AI Solutions Architect & Business Automation",
    from: "$4,000",
    desc: "We identify high-impact automation opportunities in your business and build AI workflows using GPT-4, Claude, open-source LLMs, and custom fine-tuned models — reducing manual work by 60–80%.",
    deliverables: ["AI opportunity audit", "LLM-powered workflow builds", "Prompt engineering & fine-tuning", "Integration into existing tools", "Cost & accuracy monitoring"],
    faqs: [
      { q: "Which AI models do you use?", a: "GPT-4o, Claude 3.5, Llama 3, Mistral — we match the model to the budget and task." },
      { q: "How secure is our data?", a: "We can deploy entirely on-premise or in your own cloud with no data leaving your environment." },
    ],
  },
  "fullstack-saas-development": {
    title: "Full-Stack Web & SaaS Development",
    from: "$5,000",
    desc: "We build production-grade SaaS platforms with Next.js, React, Node.js, and PostgreSQL — with multi-tenant auth, Stripe billing, and a scalable architecture designed to grow with your users.",
    deliverables: ["Product scoping & wireframes", "Next.js / React frontend", "Node.js / Python backend", "Supabase / PostgreSQL database", "Stripe subscription billing", "Admin dashboard"],
    faqs: [
      { q: "How long to build an MVP?", a: "A focused MVP typically takes 6–12 weeks. We scope tightly to hit that window." },
      { q: "Do you provide ongoing support?", a: "Yes — we offer monthly retainer plans for maintenance, features, and scaling." },
    ],
  },
  "ai-agents-chatbots-rag": {
    title: "AI Agents, Chatbots & RAG Systems",
    from: "$3,500",
    desc: "We build intelligent agents and retrieval-augmented chatbots trained on your company's documents, FAQs, and product data — so your customers get accurate, instant answers 24/7.",
    deliverables: ["RAG pipeline design & build", "Vector database setup (Pinecone / pgvector)", "Custom chatbot UI (web + mobile)", "Document ingestion pipeline", "Accuracy evaluation & monitoring"],
    faqs: [
      { q: "What is a RAG system?", a: "RAG (Retrieval-Augmented Generation) lets an AI answer questions using your specific documents rather than generic training data." },
      { q: "Can it integrate with WhatsApp?", a: "Yes — we build WhatsApp Business API integrations and Telegram bots." },
    ],
  },
  "mobile-app-development": {
    title: "Mobile App Development & Cross-Platform",
    from: "$6,000",
    desc: "We build iOS and Android apps with React Native and Expo — sharing 95% of code across platforms, cutting build time in half, and shipping to both app stores simultaneously.",
    deliverables: ["UX/UI design (Figma)", "React Native / Expo build", "iOS & Android deployment", "Push notifications", "App Store & Play Store submission"],
    faqs: [
      { q: "Do you build native iOS/Android?", a: "We primarily use React Native for speed and cost. For performance-critical apps we can use native Swift/Kotlin." },
      { q: "Can you wrap our existing website?", a: "Yes — we can build a WebView wrapper or a fully native app depending on your needs." },
    ],
  },
};

export default function ServiceDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const service = SERVICES[slug ?? ""] ?? null;

  if (!service) {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.navy, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: Colors.white, fontSize: 16 }}>Service not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{ backgroundColor: Colors.navy }}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.from}>Starting from {service.from}</Text>
        <Text style={styles.title}>{service.title}</Text>
        <Text style={styles.desc}>{service.desc}</Text>
      </View>

      {/* Deliverables */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>What's Included</Text>
        {service.deliverables.map((d) => (
          <View key={d} style={styles.delivRow}>
            <CheckCircle size={14} color={Colors.lime} />
            <Text style={styles.delivText}>{d}</Text>
          </View>
        ))}
      </View>

      {/* FAQs */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Common Questions</Text>
        {service.faqs.map((faq) => (
          <View key={faq.q} style={styles.faqItem}>
            <Text style={styles.faqQ}>{faq.q}</Text>
            <Text style={styles.faqA}>{faq.a}</Text>
          </View>
        ))}
      </View>

      {/* CTAs */}
      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => Linking.openURL(CAL_URL)}
      >
        <Calendar size={16} color={Colors.navy} />
        <Text style={styles.primaryBtnText}>Book Free Discovery Call</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryBtn}
        onPress={() => Linking.openURL(`https://wa.me/${WHATSAPP}?text=Hi%20GMHCO%2C%20I%27m%20interested%20in%20${encodeURIComponent(service.title)}`)}
      >
        <MessageSquare size={16} color={Colors.lime} />
        <Text style={styles.secondaryBtnText}>Discuss on WhatsApp</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, paddingBottom: 50, gap: 14 },

  header: { gap: 8, paddingBottom: 6 },
  from:  { fontSize: 12, fontWeight: "700", color: Colors.lime, letterSpacing: 0.5 },
  title: { fontSize: 20, fontWeight: "800", color: Colors.white, lineHeight: 27 },
  desc:  { fontSize: 13, color: Colors.slate, lineHeight: 21 },

  card: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    padding: 16,
    gap: 10,
  },
  cardTitle: { fontSize: 14, fontWeight: "700", color: Colors.white, marginBottom: 2 },

  delivRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  delivText: { fontSize: 13, color: Colors.slate, flex: 1, lineHeight: 19 },

  faqItem: { paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: Colors.border },
  faqQ:    { fontSize: 13, fontWeight: "600", color: Colors.white, marginBottom: 4 },
  faqA:    { fontSize: 12, color: Colors.slate, lineHeight: 18 },

  primaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: Colors.lime,
    paddingVertical: 14,
    borderRadius: 99,
  },
  primaryBtnText: { color: Colors.navy, fontWeight: "700", fontSize: 14 },

  secondaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "rgba(132,255,0,0.4)",
    paddingVertical: 14,
    borderRadius: 99,
  },
  secondaryBtnText: { color: Colors.lime, fontWeight: "600", fontSize: 14 },
});
