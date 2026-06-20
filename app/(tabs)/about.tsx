import { View, Text, ScrollView, StyleSheet, Linking } from "react-native";
import { Colors, WHATSAPP, CAL_URL } from "@/constants/theme";
import { Award, CheckCircle, Calendar, MessageSquare } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

const CERTIFICATIONS = [
  { name: "Google Ads Search Certified", issuer: "Google", color: "#4285F4" },
  { name: "Google Ads Display Certified", issuer: "Google", color: "#34A853" },
  { name: "Google Ads Shopping Certified", issuer: "Google", color: "#EA4335" },
  { name: "Google Analytics (GA4) Certified", issuer: "Google", color: "#FF9800" },
  { name: "Google Tag Manager Certified", issuer: "Google", color: "#9C27B0" },
  { name: "HubSpot Inbound Marketing", issuer: "HubSpot", color: "#FF7A59" },
  { name: "HubSpot Content Marketing", issuer: "HubSpot", color: "#FF7A59" },
  { name: "Meta Blueprint Certified", issuer: "Meta", color: "#1877F2" },
  { name: "AWS Cloud Practitioner", issuer: "Amazon", color: "#FF9900" },
  { name: "Microsoft Azure Fundamentals", issuer: "Microsoft", color: "#0078D4" },
];

const WHY = [
  "12+ Google & Industry Certifications",
  "35+ projects delivered across 8 countries",
  "4× average client ROI",
  "AI-native workflows since 2022",
  "Full-stack: strategy + build + growth",
  "Direct access to the founder — no account managers",
];

export default function AboutScreen() {
  return (
    <ScrollView
      style={{ backgroundColor: Colors.navy }}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarInitials}>GM</Text>
        </View>
        <Text style={styles.name}>GM Morshed Hossain</Text>
        <Text style={styles.role}>Founder & Lead Technology Consultant</Text>
        <Text style={styles.location}>London, UK · Serving clients worldwide</Text>
      </View>

      {/* Bio */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>About GMHCO</Text>
        <Text style={styles.bio}>
          GMHCO is a specialist IT consulting and software development firm delivering enterprise-grade
          AI solutions, SaaS platforms, Google Ads campaigns, and data analytics. We work with
          high-growth businesses in the UK, EU, US, and Middle East, providing the systems that
          turn data into decisions and ideas into revenue.
        </Text>
      </View>

      {/* Why */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Why Choose GMHCO</Text>
        {WHY.map((item) => (
          <View key={item} style={styles.whyRow}>
            <CheckCircle size={14} color={Colors.lime} />
            <Text style={styles.whyText}>{item}</Text>
          </View>
        ))}
      </View>

      {/* Certifications */}
      <View style={styles.card}>
        <View style={styles.certHeader}>
          <Award size={16} color={Colors.lime} />
          <Text style={styles.cardTitle}>Certifications</Text>
        </View>
        <View style={styles.certsGrid}>
          {CERTIFICATIONS.map((cert) => (
            <View key={cert.name} style={[styles.certBadge, { borderColor: cert.color + "40" }]}>
              <View style={[styles.certDot, { backgroundColor: cert.color }]} />
              <View style={{ flex: 1 }}>
                <Text style={styles.certName}>{cert.name}</Text>
                <Text style={styles.certIssuer}>{cert.issuer}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* CTAs */}
      <View style={styles.ctaRow}>
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => Linking.openURL(CAL_URL)}
        >
          <Calendar size={14} color={Colors.navy} />
          <Text style={styles.primaryBtnText}>Book a Free Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={() => Linking.openURL(`https://wa.me/${WHATSAPP}?text=Hi%20GM`)}
        >
          <MessageSquare size={14} color={Colors.lime} />
          <Text style={styles.secondaryBtnText}>WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, paddingBottom: 40, gap: 16 },

  header: { alignItems: "center", paddingVertical: 20 },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(132,255,0,0.12)",
    borderWidth: 2,
    borderColor: Colors.lime,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  avatarInitials: { fontSize: 28, fontWeight: "800", color: Colors.lime },
  name: { fontSize: 20, fontWeight: "800", color: Colors.white, marginBottom: 4 },
  role: { fontSize: 13, color: Colors.lime, marginBottom: 4 },
  location: { fontSize: 12, color: Colors.slate },

  card: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    padding: 16,
    gap: 10,
  },
  cardTitle: { fontSize: 15, fontWeight: "700", color: Colors.white },
  bio: { fontSize: 13, color: Colors.slate, lineHeight: 21 },

  certHeader: { flexDirection: "row", alignItems: "center", gap: 8 },
  certsGrid: { gap: 8 },
  certBadge: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    gap: 10,
  },
  certDot: { width: 8, height: 8, borderRadius: 4 },
  certName: { fontSize: 12, fontWeight: "600", color: Colors.white, lineHeight: 17 },
  certIssuer: { fontSize: 10, color: Colors.slate },

  whyRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  whyText: { fontSize: 13, color: Colors.slate, flex: 1, lineHeight: 19 },

  ctaRow: { flexDirection: "row", gap: 10 },
  primaryBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: Colors.lime,
    paddingVertical: 13,
    borderRadius: 99,
  },
  primaryBtnText: { color: Colors.navy, fontWeight: "700", fontSize: 13 },
  secondaryBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "rgba(132,255,0,0.4)",
    paddingVertical: 13,
    borderRadius: 99,
  },
  secondaryBtnText: { color: Colors.lime, fontWeight: "600", fontSize: 13 },
});
