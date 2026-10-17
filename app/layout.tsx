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
    default: "GMHCO | Digital Growth, Software & Technology Services",
    template: "%s | GMHCO",
  },
  description:
    "GMHCO offers digital-growth and technology engagements, including software, data and automation work. PQC discovery is an in-development concept, not a generally available service.",
  keywords: [
    "technology consulting",
    "software development",
    "digital growth services",
    "Google Ads management",
    "custom software development",
    "AI chatbot development",
    "cloud infrastructure",
    "data analytics consultant UK",
    "full stack developer London",
    "RAG system development",
    "business automation consultant",
    "mobile app development UK",
    "post-quantum cryptography discovery in development",
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
    title: "GMHCO | Digital Growth & Technology Services",
    description:
      "Digital-growth and technology engagements from GMHCO. Post-quantum cryptography discovery is in development and is not generally available.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GMHCO — Digital Growth, Software & Technology Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GMHCO | Digital Growth & Technology Services",
    description: "Digital-growth and technology engagements. PQC discovery is in development.",
    images: ["/opengraph-image"],
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
    "Digital-growth and technology engagements, including software, data and automation work. PQC discovery is in development.",
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
