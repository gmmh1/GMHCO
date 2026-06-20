import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "@/constants/theme";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor={Colors.navy} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.card },
          headerTintColor: Colors.lime,
          headerTitleStyle: { fontWeight: "700", color: Colors.white },
          contentStyle: { backgroundColor: Colors.navy },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="chat" options={{ title: "AI Assistant" }} />
        <Stack.Screen name="booking" options={{ title: "Book a Call" }} />
        <Stack.Screen name="service/[slug]" options={{ title: "Service Details" }} />
      </Stack>
    </>
  );
}
