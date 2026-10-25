import React from "react";
import type { Metadata } from "next";
import { LocationMapSection } from "@/components/home/LocationMapSection";
import { ClosingCta } from "@/components/home/ClosingCta";
import { getSiteUrl } from "@/lib/business";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Contact & Workshop Location | Stanwell, Ashford TW15",
  description: "Contact Shine Auto Centre at 540-542 London Rd, Stanwell, Ashford TW15 3AE. Call 01784 694898, WhatsApp 07412 895092, or visit Monday to Saturday, 9am to 6pm.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Workshop & Location | Shine Auto Centre Ashford",
    description: "Workshop location at 540-542 London Rd, Stanwell, Ashford TW15 3AE. Fast 2-hour response, on-site parking, walk-ins welcome.",
    url: `${siteUrl}/contact`,
    siteName: "Shine Auto Centre",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: `${siteUrl}/api/og?title=Contact%20%26%20Workshop%20Location&subtitle=540-542%20London%20Rd%2C%20Stanwell%2C%20Ashford%20TW15%203AE%20%E2%80%A2%2001784%20694898`,
        width: 1200,
        height: 630,
        alt: "Shine Auto Centre Contact and Map",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Workshop & Location | Shine Auto Centre Ashford",
    description: "Workshop location at 540-542 London Rd, Stanwell, Ashford TW15 3AE. Fast 2-hour response, on-site parking, walk-ins welcome.",
    images: [`${siteUrl}/api/og?title=Contact%20%26%20Workshop%20Location&subtitle=540-542%20London%20Rd%2C%20Stanwell%2C%20Ashford%20TW15%203AE%20%E2%80%A2%2001784%20694898`],
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <LocationMapSection />
      <ClosingCta
        headline="Have damage photos to share?"
        subline="Send photos directly on WhatsApp for an estimate within 15 minutes."
      />
    </div>
  );
}
