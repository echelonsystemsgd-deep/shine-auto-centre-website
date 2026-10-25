import React from "react";
import type { Metadata } from "next";
import { QuoteWizard } from "@/components/quote/QuoteWizard";
import { Clock, Phone, MessageCircle } from "lucide-react";
import { BUSINESS_CONFIG, getSiteUrl } from "@/lib/business";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Get a Free Repair Quote | Under 2-Hour Response",
  description: "Request a fast, free repair quote from Shine Auto Centre in Ashford. We usually respond in under 2 hours during working hours. No obligation.",
  alternates: {
    canonical: `${siteUrl}/quote`,
  },
  openGraph: {
    title: "Get a Free Repair Quote | Shine Auto Centre Ashford",
    description: "Submit car damage details or vehicle reg for a fast, free repair estimate. We reply in under 2 hours during workshop hours.",
    url: `${siteUrl}/quote`,
    siteName: "Shine Auto Centre",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: `${siteUrl}/api/og?title=Get%20a%20Free%20Repair%20Quote&subtitle=Fast%202-Hour%20Response%20%E2%80%A2%20No%20Obligation%20%E2%80%A2%20Stanwell%20%26%20Ashford`,
        width: 1200,
        height: 630,
        alt: "Shine Auto Centre Quote Wizard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Repair Quote | Shine Auto Centre Ashford",
    description: "Submit car damage details or vehicle reg for a fast, free repair estimate. We reply in under 2 hours during workshop hours.",
    images: [`${siteUrl}/api/og?title=Get%20a%20Free%20Repair%20Quote&subtitle=Fast%202-Hour%20Response%20%E2%80%A2%20No%20Obligation%20%E2%80%A2%20Stanwell%20%26%20Ashford`],
  },
};

export default function QuotePage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-raised border border-surface-border text-xs text-brand-amber font-semibold mb-3">
            <Clock className="w-3.5 h-3.5 text-brand-amber" />
            <span>Under 2 Hour Response Claim</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get Your Free Repair Quote
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Only your name, phone number, and service are required to start. We will review your requirements and provide an accurate estimate.
          </p>
        </div>

        {/* 3-Step Wizard Component */}
        <QuoteWizard />

        {/* Alternative Quick Contact Bar */}
        <div className="mt-12 max-w-2xl mx-auto p-5 rounded-2xl bg-surface/60 border border-surface-border text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-xs">
            <span className="font-bold text-slate-200 block">Prefer to message photos directly?</span>
            <span className="text-slate-400">Open a direct chat with our technician on WhatsApp.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={BUSINESS_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#25D366] hover:brightness-110 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-xl transition-all min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp (07412 895092)</span>
            </a>

            <a
              href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-surface-raised hover:bg-surface-border text-white text-xs font-bold px-4 py-2.5 rounded-xl border border-surface-border transition-colors min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-brand-amber" />
              <span>Call Garage</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
