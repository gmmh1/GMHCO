import {
  View, Text, TextInput, TouchableOpacity, ScrollView,
  StyleSheet, Alert, Linking,
} from "react-native";
import { useState } from "react";
import { Colors, WHATSAPP, CAL_URL, API_BASE } from "@/constants/theme";
import { MessageSquare, Calendar, Send } from "lucide-react-native";

export default function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!name || !email || !message) {
      Alert.alert("Missing fields", "Please fill in your name, email, and message.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, source: "gmhco_mobile_app" }),
      });
      if (res.ok) {
        Alert.alert("Sent!", "GM will get back to you within 24 hours.");
        setName(""); setEmail(""); setMessage("");
      } else {
        throw new Error();
      }
    } catch {
      Alert.alert("Error", "Could not send your message. Please try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      style={{ backgroundColor: Colors.navy }}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Get in Touch</Text>
      <Text style={styles.sub}>Tell us what you are building. We respond within 24 hours.</Text>

      {/* Quick contact */}
      <View style={styles.quickRow}>
        <TouchableOpacity
          style={[styles.quickBtn, { backgroundColor: Colors.lime }]}
          onPress={() => Linking.openURL(`https://wa.me/${WHATSAPP}?text=Hi%20GMHCO`)}
        >
          <MessageSquare size={16} color={Colors.navy} />
          <Text style={[styles.quickText, { color: Colors.navy }]}>WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.quickBtn, { borderWidth: 1, borderColor: "rgba(132,255,0,0.4)" }]}
          onPress={() => Linking.openURL(CAL_URL)}
        >
          <Calendar size={16} color={Colors.lime} />
          <Text style={[styles.quickText, { color: Colors.lime }]}>Book Call</Text>
        </TouchableOpacity>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="John Smith"
          placeholderTextColor={Colors.slate}
          style={styles.input}
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="john@company.com"
          placeholderTextColor={Colors.slate}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <Text style={styles.label}>Your Message</Text>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Tell us about your project..."
          placeholderTextColor={Colors.slate}
          multiline
          numberOfLines={5}
          style={[styles.input, { height: 120, textAlignVertical: "top" }]}
        />

        <TouchableOpacity
          style={[styles.submitBtn, loading && { opacity: 0.6 }]}
          onPress={submit}
          disabled={loading}
        >
          <Send size={16} color={Colors.navy} />
          <Text style={styles.submitText}>{loading ? "Sending..." : "Send Message"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, paddingBottom: 40 },
  title:   { fontSize: 22, fontWeight: "800", color: Colors.white, marginBottom: 6 },
  sub:     { fontSize: 13, color: Colors.slate, marginBottom: 20, lineHeight: 20 },

  quickRow: { flexDirection: "row", gap: 10, marginBottom: 24 },
  quickBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: 99,
  },
  quickText: { fontWeight: "700", fontSize: 13 },

  form: { gap: 4 },
  label: { fontSize: 13, color: Colors.slateLight, marginBottom: 6, marginTop: 12 },
  input: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: Colors.white,
    fontSize: 14,
  },
  submitBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: Colors.lime,
    paddingVertical: 14,
    borderRadius: 99,
    marginTop: 20,
  },
  submitText: { color: Colors.navy, fontWeight: "700", fontSize: 15 },
});
