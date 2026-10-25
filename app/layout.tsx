import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileActionBar } from "@/components/layout/StickyMobileActionBar";
import { PrototypeBanner } from "@/components/layout/PrototypeBanner";
import { BUSINESS_CONFIG, SERVICES, getSiteUrl, isPrototypeMode } from "@/lib/business";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080B14" },
    { media: "(prefers-color-scheme: light)", color: "#080B14" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = getSiteUrl();
const isPrototype = isPrototypeMode();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shine Auto Centre | Car Repairs, Servicing & Bodywork in Ashford",
    template: "%s | Shine Auto Centre, Stanwell & Ashford",
  },
  description: "Expert accident repair, dent & scratch removal, bumper repair, resprays, and vehicle servicing at 540-542 London Rd, Stanwell TW15 3AE. Free fast quotes.",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "./",
  },
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
  robots: isPrototype
    ? {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true,
        },
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: "#F59E0B",
      },
    ],
  },
  openGraph: {
    title: "Shine Auto Centre | Car Repairs & Bodywork in Ashford",
    description: "Accident repairs, dent removal, bumper welding, panel resprays, and servicing at 540-542 London Rd, Stanwell. Replies in under 2 hours.",
    url: siteUrl,
    siteName: "Shine Auto Centre",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Shine Auto Centre | Car Repairs & Bodywork in Stanwell & Ashford",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shine Auto Centre | Car Repairs & Bodywork in Ashford",
    description: "Accident repairs, dent removal, bumper welding, panel resprays, and servicing at 540-542 London Rd, Stanwell. Replies in under 2 hours.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness / AutoRepair JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: BUSINESS_CONFIG.name,
    legalName: BUSINESS_CONFIG.legalName,
    description: "Your local car repairs, servicing and accident bodywork specialist in Stanwell & Ashford TW15 3AE.",
    url: siteUrl,
    logo: `${siteUrl}/images/brand/logo-clean.png`,
    image: `${siteUrl}/opengraph-image`,
    telephone: [BUSINESS_CONFIG.phoneLandlineRaw, BUSINESS_CONFIG.phoneMobileRaw],
    email: BUSINESS_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_CONFIG.address.line1,
      addressLocality: BUSINESS_CONFIG.address.town,
      addressRegion: "Surrey",
      postalCode: BUSINESS_CONFIG.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.442,
      longitude: -0.478,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      "Stanwell",
      "Ashford",
      "Staines-upon-Thames",
      "Feltham",
      "Heathrow",
      "Surrey",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Automotive Bodywork & Repair Services",
      itemListElement: SERVICES.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
          url: `${siteUrl}/services/${service.slug}`,
        },
        position: index + 1,
      })),
    },
    sameAs: BUSINESS_CONFIG.sameAs,
  };

  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-background text-slate-100 min-h-screen flex flex-col selection:bg-brand-blue selection:text-white">
        
        {/* Skip to Content for Keyboard Users */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        {/* Prototype review banner */}
        <PrototypeBanner />

        {/* Global Header */}
        <Header />

        {/* Main Viewport Content */}
        <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Mobile Sticky Quick Action Bar */}
        <StickyMobileActionBar />

      </body>
    </html>
  );
}
