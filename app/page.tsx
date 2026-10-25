import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { WhatHappensNext } from "@/components/home/WhatHappensNext";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { GoogleReviewsBridge } from "@/components/home/GoogleReviewsBridge";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { ClosingCta } from "@/components/home/ClosingCta";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* What Happens Next Strip */}
      <WhatHappensNext />

      {/* Real Before & After Slider Showcase */}
      <section className="py-16 sm:py-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-glow">
              Real Stanwell Workshop Results
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Before &amp; After Bodywork Repairs
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
              Swipe or drag the slider on any repair case below to see our authentic dent removals, bumper repairs, and factory paint match resprays.
            </p>
          </div>

          <BeforeAfterSlider />

          <div className="mt-8 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-glow hover:text-white transition-colors"
            >
              <span>View all 12 verified before/after workshop cases</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />

      {/* Google Reviews Bridge */}
      <GoogleReviewsBridge />

      {/* FAQ Accordion Section Preview */}
      <section className="py-16 sm:py-24 border-b border-surface-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-glow">
              Clear &amp; Transparent
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Common questions about our quote process, turnaround claims, repair methods, and location.
            </p>
          </div>

          <FaqAccordion limit={5} />

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-glow hover:text-white transition-colors"
            >
              <span>Have more questions? Read our full FAQ guide</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Closing CTA Band */}
      <ClosingCta />
    </div>
  );
}
