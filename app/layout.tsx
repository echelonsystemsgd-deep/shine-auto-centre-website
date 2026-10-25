import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileActionBar } from "@/components/layout/StickyMobileActionBar";
import { PrototypeBanner } from "@/components/layout/PrototypeBanner";
import { BUSINESS_CONFIG } from "@/lib/business";

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
  themeColor: "#080B14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shineauto.co.uk"),
  title: {
    default: "Shine Auto Centre | Car Repairs, Servicing & Bodywork in Ashford",
    template: "%s | Shine Auto Centre Ashford",
  },
  description: "Expert accident repair, dent & scratch removal, bumper repair, re-sprays, and car servicing at 540-542 London Rd, Stanwell, Ashford TW15 3AE. Fast quotes in under 2 hours.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  icons: {
    icon: "/images/brand/favicon.png",
    apple: "/images/brand/favicon.png",
  },
  openGraph: {
    title: "Shine Auto Centre | Car Repairs & Bodywork in Ashford",
    description: "Accident repairs, dent removal, panel re-sprays, and servicing at 540-542 London Rd, Stanwell. Replies in under 2 hours.",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/brand/logo.png",
        width: 1200,
        height: 1200,
        alt: "Shine Auto Centre Ashford Logo",
      },
    ],
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
    description: "Your local car repairs, servicing and bodywork specialist in Ashford & Stanwell.",
    url: "https://www.shineauto.co.uk",
    telephone: BUSINESS_CONFIG.phoneLandlineRaw,
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
      latitude: "51.442",
      longitude: "-0.478",
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
    priceRange: "$$",
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
