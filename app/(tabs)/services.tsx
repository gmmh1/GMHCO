import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import { Colors } from "@/constants/theme";

const SERVICES = [
  { slug: "technology-consulting", title: "Technology Consulting & Solution Strategy", from: "$2,500" },
  { slug: "google-ads-analytics", title: "Digital Growth, Google Ads & Analytics", from: "$1,500/mo" },
  { slug: "data-analytics-bi", title: "Data Analytics, Business Intelligence & Reporting", from: "$3,000" },
  { slug: "api-systems-integration", title: "API Development & Systems Integration", from: "$2,000" },
  { slug: "cloud-devops", title: "Cloud Infrastructure, DevOps & Deployment", from: "$3,500" },
  { slug: "ai-solutions-automation", title: "AI Solutions Architect & Business Automation", from: "$4,000" },
  { slug: "fullstack-saas-development", title: "Full-Stack Web & SaaS Development", from: "$5,000" },
  { slug: "ai-agents-chatbots-rag", title: "AI Agents, Chatbots & RAG Systems", from: "$3,500" },
  { slug: "mobile-app-development", title: "Mobile App Development & Cross-Platform", from: "$6,000" },
];

export default function ServicesScreen() {
  const router = useRouter();

  return (
    <FlatList
      style={{ backgroundColor: Colors.navy }}
      contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
      data={SERVICES}
      keyExtractor={(item) => item.slug}
      ListHeaderComponent={
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>All Services</Text>
          <Text style={styles.subtitle}>
            9 specialist services for high-growth businesses worldwide.
          </Text>
        </View>
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push(`/service/${item.slug}` as never)}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.from}>From {item.from}</Text>
          </View>
          <ArrowRight size={18} color={Colors.lime} />
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: Colors.white,
    marginBottom: 6,
  },
  subtitle: { fontSize: 13, color: Colors.slate, lineHeight: 20, marginBottom: 4 },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 14,
    padding: 16,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.white,
    marginBottom: 4,
    lineHeight: 20,
  },
  from: { fontSize: 12, color: Colors.lime, fontWeight: "600" },
});
