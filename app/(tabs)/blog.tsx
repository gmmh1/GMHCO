import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from "react-native";
import { Colors, SITE_URL } from "@/constants/theme";
import { Clock, ArrowRight } from "lucide-react-native";

const POSTS = [
  { slug: "ai-digital-marketing-2026", title: "How AI is Reshaping Digital Marketing Strategy in 2026", category: "AI & Marketing", readTime: "8 min read" },
  { slug: "google-ads-performance-max-guide", title: "Performance Max vs Standard Shopping: When to Use Each", category: "Google Ads", readTime: "6 min read" },
  { slug: "rag-systems-business-knowledge", title: "What is a RAG System and Why Your Business Needs One", category: "AI Development", readTime: "7 min read" },
  { slug: "ga4-setup-guide-2026", title: "The Complete GA4 Setup Guide for 2026", category: "Analytics", readTime: "10 min read" },
  { slug: "saas-development-cost", title: "How Much Does it Cost to Build a SaaS Product in 2026?", category: "SaaS Development", readTime: "9 min read" },
  { slug: "consumer-psychology-digital-marketing", title: "Consumer Psychology Principles Every Digital Marketer Must Know", category: "Marketing Strategy", readTime: "7 min read" },
];

export default function BlogScreen() {
  return (
    <FlatList
      style={{ backgroundColor: Colors.navy }}
      contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
      data={POSTS}
      keyExtractor={(item) => item.slug}
      ListHeaderComponent={
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>Insights & Expertise</Text>
          <Text style={styles.subtitle}>Practical guides on AI, Google Ads, SaaS, and enterprise technology.</Text>
        </View>
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => Linking.openURL(`${SITE_URL}/blog/${item.slug}`)}
        >
          <View style={styles.meta}>
            <Text style={styles.category}>{item.category}</Text>
            <View style={styles.readTime}>
              <Clock size={10} color={Colors.slate} />
              <Text style={styles.readTimeText}>{item.readTime}</Text>
            </View>
          </View>
          <Text style={styles.postTitle}>{item.title}</Text>
          <View style={styles.readMore}>
            <Text style={styles.readMoreText}>Read on website</Text>
            <ArrowRight size={14} color={Colors.lime} />
          </View>
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    />
  );
}

const styles = StyleSheet.create({
  title:    { fontSize: 22, fontWeight: "800", color: Colors.white, marginBottom: 6 },
  subtitle: { fontSize: 13, color: Colors.slate, lineHeight: 20 },

  card: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 14,
    padding: 16,
    gap: 8,
  },
  meta:         { flexDirection: "row", alignItems: "center", gap: 10 },
  category: {
    fontSize: 10,
    fontWeight: "600",
    color: Colors.lime,
    backgroundColor: "rgba(132,255,0,0.08)",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 99,
    overflow: "hidden",
  },
  readTime:     { flexDirection: "row", alignItems: "center", gap: 4 },
  readTimeText: { fontSize: 10, color: Colors.slate },

  postTitle: { fontSize: 14, fontWeight: "600", color: Colors.white, lineHeight: 20 },
  readMore:  { flexDirection: "row", alignItems: "center", gap: 4, marginTop: 4 },
  readMoreText: { fontSize: 12, color: Colors.lime },
});
