import React from "react";
import type { Metadata } from "next";
import { BUSINESS_CONFIG } from "@/lib/business";
import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement | Shine Auto Centre Ashford",
  description: "Accessibility statement for Shine Auto Centre website prototype. Committed to digital inclusion adhering to WCAG 2.2 Level AA standards.",
};

export default function AccessibilityStatementPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-glow">Inclusion</span>
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
                  <span className="font-semibold text-white text-xs block">Keyboard Navigability</span>
                  <span className="text-[11px] text-slate-400">Skip-to-content links, visible focus outlines, and arrow-key operable sliders and accordions.</span>
                </div>
              </div>

              <div className="p-3 bg-surface-raised rounded-xl border border-surface-border flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white text-xs block">Touch Target Sizing</span>
                  <span className="text-[11px] text-slate-400">Interactive touch targets meet or exceed the recommended 48×48px mobile requirement.</span>
                </div>
              </div>

              <div className="p-3 bg-surface-raised rounded-xl border border-surface-border flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white text-xs block">Reduced Motion Support</span>
                  <span className="text-[11px] text-slate-400">Smooth animations respect the user&apos;s system prefers-reduced-motion configuration.</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">3. Descriptive Alternative Text</h2>
            <p>
              Unlike the former website implementation which served raw filenames as image descriptions, every vehicle repair photograph on this site provides descriptive, context-rich alternative text describing the bodywork performed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">4. Alternative Access &amp; Direct Assistance</h2>
            <p>
              If you experience any accessibility difficulty navigating our website or require assistance requesting a car repair quote, our workshop staff are ready to help via direct telephone or WhatsApp:
            </p>
            <div className="mt-3 p-4 bg-surface-raised rounded-xl border border-surface-border text-xs space-y-1">
              <p>Telephone: <a href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`} className="text-brand-blue-glow font-mono font-bold hover:underline">{BUSINESS_CONFIG.phoneLandline}</a></p>
              <p>Mobile / WhatsApp: <a href={`tel:${BUSINESS_CONFIG.phoneMobileRaw}`} className="text-brand-blue-glow font-mono font-bold hover:underline">{BUSINESS_CONFIG.phoneMobile}</a></p>
              <p>Email: <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-brand-blue-glow hover:underline">{BUSINESS_CONFIG.email}</a></p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
