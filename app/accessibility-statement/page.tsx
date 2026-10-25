import React from "react";
import type { Metadata } from "next";
import { BUSINESS_CONFIG, getSiteUrl } from "@/lib/business";
import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Accessibility Statement | Shine Auto Centre",
  description: "Accessibility statement for Shine Auto Centre website prototype. Committed to digital inclusion adhering to WCAG 2.2 Level AA standards.",
  alternates: {
    canonical: `${siteUrl}/accessibility-statement`,
  },
  openGraph: {
    title: "Accessibility Statement | Shine Auto Centre Ashford",
    description: "Learn how Shine Auto Centre ensures digital accessibility adhering to WCAG 2.2 Level AA standards.",
    url: `${siteUrl}/accessibility-statement`,
    siteName: "Shine Auto Centre",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Statement | Shine Auto Centre Ashford",
    description: "Learn how Shine Auto Centre ensures digital accessibility adhering to WCAG 2.2 Level AA standards.",
  },
};

export default function AccessibilityStatementPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-amber">Inclusion</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Accessibility Statement
          </h1>
          <p className="text-slate-400 text-xs mt-2">
            Target Standard: Web Content Accessibility Guidelines (WCAG) 2.2 Level AA • {BUSINESS_CONFIG.legalName}
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-300 leading-relaxed bg-surface border border-surface-border p-6 sm:p-10 rounded-3xl">
          
          <section>
            <h2 className="text-lg font-bold text-white mb-2">1. Our Commitment</h2>
            <p>
              At {BUSINESS_CONFIG.legalName}, trading as {BUSINESS_CONFIG.name}, we are committed to ensuring digital accessibility for all users, including individuals with visual, auditory, cognitive, or motor disabilities. We continually refine user experience and apply relevant accessibility standards across our digital services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">2. Standards &amp; Conformance Status</h2>
            <p>
              This website has been architected to adhere strictly to the <strong>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong>. Our engineering choices include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="p-3 bg-surface-raised rounded-xl border border-surface-border flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white text-xs block">Contrast Ratio Compliance</span>
                  <span className="text-[11px] text-slate-400">All body copy and primary button text exceeds the minimum 4.5:1 contrast requirement.</span>
                </div>
              </div>

              <div className="p-3 bg-surface-raised rounded-xl border border-surface-border flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white text-xs block">Keyboard Navigable</span>
                  <span className="text-[11px] text-slate-400">Skip-to-content links and clear focus-visible outlines on all interactive elements.</span>
                </div>
              </div>

              <div className="p-3 bg-surface-raised rounded-xl border border-surface-border flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white text-xs block">Touch Ergonomics</span>
                  <span className="text-[11px] text-slate-400">All touch targets exceed 48x48px on mobile viewports for effortless tap interaction.</span>
                </div>
              </div>

              <div className="p-3 bg-surface-raised rounded-xl border border-surface-border flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white text-xs block">Screen Reader Ready</span>
                  <span className="text-[11px] text-slate-400">Descriptive alt text on repair photos, ARIA attributes on modals, and semantic HTML5 hierarchy.</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">3. Feedback &amp; Contact</h2>
            <p>
              We welcome your feedback on the accessibility of Shine Auto Centre&apos;s website. If you encounter any accessibility barriers or require assistance with vehicle quoting, please contact our team:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
              <li>Telephone: <a href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`} className="text-brand-amber font-mono underline">{BUSINESS_CONFIG.phoneLandline}</a></li>
              <li>WhatsApp: <a href={BUSINESS_CONFIG.whatsappLink} className="text-[#25D366] font-mono underline">07412 895092</a></li>
              <li>Email: <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-brand-amber underline">{BUSINESS_CONFIG.email}</a></li>
            </ul>
          </section>

          <div className="pt-6 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <span>Trading as {BUSINESS_CONFIG.name}</span>
            <Link href="/" className="text-brand-amber font-semibold hover:underline">
              Return to Homepage →
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
