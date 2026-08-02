import type { Metadata } from "next";
import Script from "next/script";
import { Orbitron, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { SITE } from "@/lib/constants";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-orbitron-var",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter-var",
});

const SITE_URL = SITE.url;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GMHCO | AI-Powered IT Solutions, SaaS Development & Google Ads Agency",
    template: "%s | GMHCO",
  },
  description:
    "GMHCO delivers enterprise IT consulting, SaaS development, AI automation, Google Ads management, and cloud infrastructure for high-growth businesses worldwide. Google-certified. Results-driven.",
  keywords: [
    "enterprise IT consulting",
    "SaaS development company",
    "AI automation agency UK",
    "Google Ads certified expert London",
    "custom software development",
    "AI chatbot development",
    "cloud infrastructure consultant",
    "data analytics consultant UK",
    "full stack developer London",
    "RAG system development",
    "business automation consultant",
    "mobile app development UK",
  ],
  authors: [{ name: "Gazi Morshed", url: SITE_URL }],
  creator: "Gazi Morshed",
  publisher: "GMHCO",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "GMHCO",
    title: "GMHCO | AI-Powered IT Solutions & Google Ads Agency",
    description:
      "Enterprise IT consulting, SaaS development, AI automation & certified Google Ads management for high-ticket clients worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GMHCO - AI-Powered IT Solutions & Enterprise Digital Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GMHCO | AI-Powered IT Solutions",
    description: "Enterprise IT consulting, SaaS & AI automation for high-growth businesses.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: "/logos/gmhco-logo.png",
    apple: "/logos/gmhco-logo.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "GMHCO",
  legalName: "Gazi Morshed Company",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/gmhco-logo.png`,
  description:
    "AI-powered IT solutions, SaaS development, and Google Ads management for enterprise clients worldwide.",
  founder: { "@type": "Person", name: "Gazi Morshed" },
  foundingDate: "2023",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "English",
    email: SITE.email,
  },
  sameAs: [SITE.linkedin, SITE.github],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body style={{ fontFamily: "Inter, sans-serif", background: "#0f172a", color: "#e2e8f0" }}>
        {children}
        <Analytics />
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
