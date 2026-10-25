import React from "react";
import { Hero } from "@/components/home/Hero";
import { SmartDvlaEstimator } from "@/components/estimator/SmartDvlaEstimator";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { ServicePillars } from "@/components/home/ServicePillars";
import { WhyChooseShine } from "@/components/home/WhyChooseShine";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { LocationMapSection } from "@/components/home/LocationMapSection";
import { ClosingCta } from "@/components/home/ClosingCta";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. THE FLAGSHIP FEATURE: SMART REPAIR & DVLA REG ESTIMATOR */}
      <SmartDvlaEstimator />

      {/* 3. INTERACTIVE BEFORE & AFTER SLIDER (DAMAGE RECOVERY) */}
      <section className="py-16 sm:py-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-amber">
              Verified Workshop Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Interactive Damage Recovery
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Slide to see how our temperature-controlled spray booth restores accident damage back to factory showroom perfection.
            </p>
          </div>

          <BeforeAfterSlider />

        </div>
      </section>

      {/* 4. CLEAR SERVICE PILLARS (NO PLACEHOLDER COPY, REAL PRICING ANCHORS) */}
      <ServicePillars />

      {/* 5. WHY CHOOSE SHINE AUTO (PROOF & CREDIBILITY, 4.9★ GOOGLE BADGE) */}
      <WhyChooseShine />

      {/* 6. REAL OBJECTION-BUSTING FAQ */}
      <section id="faqs" className="py-16 sm:py-24 border-b border-surface-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-amber">
              Clear &amp; Transparent Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Honest answers to common questions about repair costs, computerized colour matching, and insurance claims.
            </p>
          </div>

          <FaqAccordion />

        </div>
      </section>

      {/* 7. WORKSHOP LOCATION & MAP SECTION */}
      <LocationMapSection />

      {/* 8. CLOSING CTA */}
      <ClosingCta
        headline="Ready for an honest, fixed-price repair quote?"
        subline="Enter your reg number or message damage photos directly on WhatsApp for an estimate in 15 minutes."
      />
    </div>
  );
}
