import React from "react";
import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { WhatHappensNext } from "@/components/home/WhatHappensNext";
import { ClosingCta } from "@/components/home/ClosingCta";
import { FAQS, BUSINESS_CONFIG, getSiteUrl } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons/BrandIcons";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Car Repairs in Ashford",
  description: "Answers to common questions about Shine Auto Centre repair quotes, 2-hour response claims, color matching, walk-ins, and opening hours in Stanwell.",
  alternates: {
    canonical: `${siteUrl}/faq`,
  },
  openGraph: {
    title: "Frequently Asked Questions | Shine Auto Centre Ashford",
    description: "Read answers about repair estimates, paint matching, repair turnarounds, and our Stanwell workshop opening hours.",
    url: `${siteUrl}/faq`,
    siteName: "Shine Auto Centre",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: `${siteUrl}/api/og?title=Frequently%20Asked%20Questions&subtitle=Workshop%20Quotes%2C%20Turnaround%20Times%20%26%20Paint%20Guarantees`,
        width: 1200,
        height: 630,
        alt: "Shine Auto Centre FAQs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Shine Auto Centre Ashford",
    description: "Read answers about repair estimates, paint matching, repair turnarounds, and our Stanwell workshop opening hours.",
    images: [`${siteUrl}/api/og?title=Frequently%20Asked%20Questions&subtitle=Workshop%20Quotes%2C%20Turnaround%20Times%20%26%20Paint%20Guarantees`],
  },
};

export default function FaqPage() {
  // FAQPage Schema JSON-LD
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <section className="py-12 sm:py-20 border-b border-surface-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-amber">
            Help &amp; Practical Information
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our repair quote process, factory color matching, vehicle turnaround times, and workshop appointments.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 sm:py-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion />

          {/* Still have questions box */}
          <div className="mt-16 max-w-xl mx-auto bg-surface-raised p-6 rounded-2xl border border-surface-border text-center">
            <h3 className="text-base font-bold text-white mb-1">Still have a question?</h3>
            <p className="text-xs text-slate-300 mb-4">
              Our workshop team is available Monday to Saturday, 9am to 6pm to answer any queries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface-border text-white text-xs font-bold px-4 py-2.5 rounded-xl border border-surface-border transition-colors min-h-[44px]"
              >
                <PhoneIcon className="w-4 h-4 text-brand-amber" />
                <span>Call {BUSINESS_CONFIG.phoneLandline}</span>
              </a>
              <a
                href={BUSINESS_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:brightness-110 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-xl transition-all min-h-[44px]"
              >
                <WhatsAppIcon className="w-4 h-4 text-slate-950" />
                <span>WhatsApp Workshop</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next roadmap */}
      <WhatHappensNext />

      {/* Bottom CTA */}
      <ClosingCta />

    </div>
  );
}
