"use client";
import {
  View, Text, TextInput, TouchableOpacity, FlatList,
  StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator,
} from "react-native";
import { useState, useRef } from "react";
import { Colors, API_BASE } from "@/constants/theme";
import { Send, Bot, User } from "lucide-react-native";

type Message = { role: "user" | "assistant"; content: string };

const GREETING: Message = {
  role: "assistant",
  content: "Hi! I'm GMHCO's AI assistant. I can answer questions about our services, pricing, and how we can help your business. What are you working on?",
};

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error();
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.message }]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Sorry, I couldn't connect right now. Please try WhatsApp or the contact form instead." },
      ]);
    } finally {
      setLoading(false);
      setTimeout(() => listRef.current?.scrollToEnd({ animated: true }), 100);
    }
  };

  const renderItem = ({ item }: { item: Message }) => {
    const isUser = item.role === "user";
    return (
      <View style={[styles.msgRow, isUser && styles.msgRowUser]}>
        {!isUser && (
          <View style={styles.avatar}>
            <Bot size={14} color={Colors.lime} />
          </View>
        )}
        <View style={[styles.bubble, isUser ? styles.bubbleUser : styles.bubbleAI]}>
          <Text style={[styles.bubbleText, isUser && styles.bubbleTextUser]}>{item.content}</Text>
        </View>
        {isUser && (
          <View style={[styles.avatar, styles.avatarUser]}>
            <User size={14} color={Colors.white} />
          </View>
        )}
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={90}
    >
      <FlatList
        ref={listRef}
        data={messages}
        keyExtractor={(_, i) => String(i)}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: true })}
      />

      {loading && (
        <View style={styles.typingRow}>
          <ActivityIndicator size="small" color={Colors.lime} />
          <Text style={styles.typingText}>GMHCO AI is thinking…</Text>
        </View>
      )}

      <View style={styles.inputRow}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Ask about our services…"
          placeholderTextColor={Colors.slate}
          style={styles.input}
          multiline
          maxLength={500}
          onSubmitEditing={send}
          returnKeyType="send"
        />
        <TouchableOpacity
          style={[styles.sendBtn, (!input.trim() || loading) && { opacity: 0.4 }]}
          onPress={send}
          disabled={!input.trim() || loading}
        >
          <Send size={18} color={Colors.navy} />
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>Powered by Llama 3.1 · Responses may not always be accurate</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.navy },

  list: { padding: 16, paddingBottom: 8, gap: 12 },

  msgRow:     { flexDirection: "row", alignItems: "flex-end", gap: 8 },
  msgRowUser: { flexDirection: "row-reverse" },

  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "rgba(132,255,0,0.1)",
    borderWidth: 1,
    borderColor: "rgba(132,255,0,0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarUser: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderColor: Colors.border,
  },

  bubble: {
    maxWidth: "78%",
    borderRadius: 16,
    padding: 12,
  },
  bubbleAI: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderBottomLeftRadius: 4,
  },
  bubbleUser: {
    backgroundColor: Colors.lime,
    borderBottomRightRadius: 4,
  },
  bubbleText:     { fontSize: 13, color: Colors.white, lineHeight: 20 },
  bubbleTextUser: { color: Colors.navy, fontWeight: "500" },

  typingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  typingText: { fontSize: 11, color: Colors.slate },

  inputRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    backgroundColor: Colors.card,
  },
  input: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    color: Colors.white,
    fontSize: 14,
    maxHeight: 100,
  },
  sendBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Colors.lime,
    alignItems: "center",
    justifyContent: "center",
  },

  footer: { fontSize: 9, color: Colors.slate, textAlign: "center", paddingBottom: 8 },
});
