import { Tabs } from "expo-router";
import { Home, Briefcase, Mail, BookOpen, User } from "lucide-react-native";
import { Colors } from "@/constants/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.card,
          borderTopColor: Colors.border,
          paddingBottom: 4,
          height: 60,
        },
        tabBarActiveTintColor: Colors.lime,
        tabBarInactiveTintColor: Colors.slate,
        headerStyle: { backgroundColor: Colors.card },
        headerTintColor: Colors.lime,
        headerTitleStyle: { color: Colors.white, fontWeight: "700" },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: Colors.navy },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          tabBarIcon: ({ color, size }) => <Briefcase color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="blog"
        options={{
          title: "Blog",
          tabBarIcon: ({ color, size }) => <BookOpen color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color, size }) => <Mail color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
