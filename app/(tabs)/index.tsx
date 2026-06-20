import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking, Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { Colors, WHATSAPP, CAL_URL } from "@/constants/theme";
import { MessageSquare, Calendar, TrendingUp, Award, ArrowRight } from "lucide-react-native";

const { width } = Dimensions.get("window");

const STATS = [
  { value: "12+", label: "Certifications" },
  { value: "35+", label: "Projects" },
  { value: "98%", label: "Satisfaction" },
  { value: "4x", label: "Avg ROI" },
];

const QUICK_SERVICES = [
  { icon: TrendingUp, title: "Google Ads", sub: "Certified campaigns that convert", slug: "google-ads-analytics" },
  { icon: MessageSquare, title: "AI Agents & RAG", sub: "Chatbots trained on your data", slug: "ai-agents-chatbots-rag" },
  { icon: Award, title: "SaaS Development", sub: "Full-stack platforms from idea to launch", slug: "fullstack-saas-development" },
];

export default function HomeScreen() {
  const router = useRouter();

  const openWhatsApp = () => {
    Linking.openURL(`https://wa.me/${WHATSAPP}?text=Hi%20GMHCO%2C%20I'd%20like%20to%20discuss%20a%20project`);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero */}
      <View style={styles.hero}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Google-Certified · AI-Native · Enterprise-Grade</Text>
        </View>

        <Text style={styles.headline}>
          We Build the Systems{"\n"}
          <Text style={styles.headlineAccent}>That Scale Your Business</Text>
        </Text>

        <Text style={styles.subheadline}>
          AI-Powered IT Solutions · Google Ads · SaaS Development · Data Analytics
        </Text>

        {/* Hero CTAs */}
        <View style={styles.ctaRow}>
          <TouchableOpacity
            style={styles.primaryCta}
            onPress={() => Linking.openURL(CAL_URL)}
          >
            <Calendar size={16} color={Colors.navy} />
            <Text style={styles.primaryCtaText}>Book Free Call</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryCta} onPress={openWhatsApp}>
            <MessageSquare size={16} color={Colors.lime} />
            <Text style={styles.secondaryCtaText}>WhatsApp Us</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsGrid}>
        {STATS.map((s) => (
          <View key={s.label} style={styles.statCard}>
            <Text style={styles.statValue}>{s.value}</Text>
            <Text style={styles.statLabel}>{s.label}</Text>
          </View>
        ))}
      </View>

      {/* Quick Services */}
      <Text style={styles.sectionTitle}>Popular Services</Text>
      {QUICK_SERVICES.map(({ icon: Icon, title, sub, slug }) => (
        <TouchableOpacity
          key={slug}
          style={styles.serviceRow}
          onPress={() => router.push(`/service/${slug}` as never)}
        >
          <View style={styles.serviceIcon}>
            <Icon size={20} color={Colors.lime} />
          </View>
          <View style={styles.serviceText}>
            <Text style={styles.serviceTitle}>{title}</Text>
            <Text style={styles.serviceSub}>{sub}</Text>
          </View>
          <ArrowRight size={16} color={Colors.slate} />
        </TouchableOpacity>
      ))}

      {/* AI Chat CTA */}
      <TouchableOpacity
        style={styles.chatCta}
        onPress={() => router.push("/chat" as never)}
      >
        <MessageSquare size={20} color={Colors.lime} />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.chatCtaTitle}>Ask Our AI Assistant</Text>
          <Text style={styles.chatCtaSub}>Get instant answers about our services</Text>
        </View>
        <ArrowRight size={16} color={Colors.lime} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.navy },
  content:   { padding: 20, paddingBottom: 40 },

  hero: { marginBottom: 24 },
  badge: {
    backgroundColor: "rgba(132,255,0,0.1)",
    borderWidth: 1,
    borderColor: "rgba(132,255,0,0.3)",
    borderRadius: 99,
    paddingHorizontal: 12,
    paddingVertical: 5,
    alignSelf: "flex-start",
    marginBottom: 16,
  },
  badgeText: { color: Colors.lime, fontSize: 10, fontWeight: "600", letterSpacing: 1 },

  headline: {
    fontSize: 26,
    fontWeight: "800",
    color: Colors.white,
    lineHeight: 34,
    marginBottom: 10,
  },
  headlineAccent: { color: Colors.lime },
  subheadline: { fontSize: 13, color: Colors.slate, lineHeight: 20, marginBottom: 20 },

  ctaRow: { flexDirection: "row", gap: 10 },
  primaryCta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: Colors.lime,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 99,
  },
  primaryCtaText: { color: Colors.navy, fontWeight: "700", fontSize: 13 },
  secondaryCta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "rgba(132,255,0,0.4)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 99,
  },
  secondaryCtaText: { color: Colors.lime, fontWeight: "600", fontSize: 13 },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 28,
  },
  statCard: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 14,
    padding: 14,
    alignItems: "center",
    width: (width - 50) / 2,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "800",
    color: Colors.lime,
    marginBottom: 2,
  },
  statLabel: { fontSize: 11, color: Colors.slate },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.white,
    marginBottom: 14,
  },
  serviceRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
  },
  serviceIcon: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(132,255,0,0.1)",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  serviceText: { flex: 1 },
  serviceTitle: { fontSize: 14, fontWeight: "600", color: Colors.white, marginBottom: 2 },
  serviceSub: { fontSize: 11, color: Colors.slate },

  chatCta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(132,255,0,0.06)",
    borderWidth: 1,
    borderColor: "rgba(132,255,0,0.25)",
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  },
  chatCtaTitle: { fontSize: 14, fontWeight: "700", color: Colors.white, marginBottom: 2 },
  chatCtaSub: { fontSize: 11, color: Colors.slate },
});
