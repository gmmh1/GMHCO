import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { Colors, CAL_URL, WHATSAPP } from "@/constants/theme";
import { Calendar, MessageSquare, Clock, CheckCircle } from "lucide-react-native";

const ITEMS = [
  "30-minute focused strategy session",
  "Discuss your project goals and challenges",
  "Get a tailored recommendation and quote",
  "No sales pressure — pure value",
];

export default function BookingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconWrap}>
          <Calendar size={28} color={Colors.lime} />
        </View>

        <Text style={styles.title}>Book a Free Discovery Call</Text>
        <Text style={styles.sub}>Speak directly with GM Morshed Hossain, founder of GMHCO.</Text>

        <View style={styles.itemsWrap}>
          {ITEMS.map((item) => (
            <View key={item} style={styles.item}>
              <CheckCircle size={14} color={Colors.lime} />
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.durationRow}>
          <Clock size={13} color={Colors.slate} />
          <Text style={styles.duration}>30 minutes · Video or Phone · Free</Text>
        </View>

        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => Linking.openURL(CAL_URL)}
        >
          <Calendar size={16} color={Colors.navy} />
          <Text style={styles.primaryBtnText}>Open Booking Calendar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={() => Linking.openURL(`https://wa.me/${WHATSAPP}?text=Hi%20GM%2C%20I'd%20like%20to%20book%20a%20call`)}
        >
          <MessageSquare size={16} color={Colors.lime} />
          <Text style={styles.secondaryBtnText}>Prefer WhatsApp? Chat here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.navy,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 20,
    padding: 24,
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
    gap: 16,
  },
  iconWrap: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(132,255,0,0.1)",
    borderWidth: 1,
    borderColor: "rgba(132,255,0,0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 18, fontWeight: "800", color: Colors.white, textAlign: "center" },
  sub:   { fontSize: 13, color: Colors.slate, textAlign: "center", lineHeight: 20 },

  itemsWrap: { alignSelf: "stretch", gap: 8 },
  item:      { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  itemText:  { fontSize: 13, color: Colors.slate, flex: 1, lineHeight: 19 },

  durationRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  duration:    { fontSize: 12, color: Colors.slate },

  primaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: Colors.lime,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 99,
    alignSelf: "stretch",
  },
  primaryBtnText: { color: Colors.navy, fontWeight: "700", fontSize: 14 },

  secondaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 10,
  },
  secondaryBtnText: { color: Colors.lime, fontSize: 13, textDecorationLine: "underline" },
});
