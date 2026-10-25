import React from "react";
import type { Metadata } from "next";
import { LocationMapSection } from "@/components/home/LocationMapSection";
import { ClosingCta } from "@/components/home/ClosingCta";

export const metadata: Metadata = {
  title: "Contact & Workshop Location | 540-542 London Rd, Stanwell",
  description: "Contact Shine Auto Centre in Stanwell, Ashford TW15 3AE. Call 01784 694898, WhatsApp 07412 895092, or visit Monday to Saturday, 9am to 6pm.",
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
