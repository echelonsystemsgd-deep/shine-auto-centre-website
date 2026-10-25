import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { WhatHappensNext } from "@/components/home/WhatHappensNext";
import { ClosingCta } from "@/components/home/ClosingCta";
import { Sparkles, ShieldCheck, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Before & After Car Bodywork Repairs Gallery in Ashford",
  description: "View authentic before and after collision repairs, dent removals, bumper welds, and spray finishes completed at Shine Auto Centre in Stanwell, Ashford.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      
      {/* Header */}
      <section className="py-12 sm:py-20 border-b border-surface-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-glow">
            Authentic Workshop Repairs
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            Before &amp; After Car Repair Gallery
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            All photos below represent real customer vehicles repaired and refinished by our team at 540-542 London Rd, Stanwell. Drag any slider to inspect our paint match and panel alignment quality.
          </p>
        </div>
      </section>

      {/* Interactive Showcase Section */}
      <section className="py-16 sm:py-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* Trust Notice */}
      <section className="py-12 bg-surface/50 border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 p-3 bg-brand-blue/10 border border-brand-blue/20 rounded-2xl text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Authenticity guarantee:</strong> Every example displayed is an unedited photographic record of repairs performed at our Stanwell workshop.
            </span>
          </div>
        </div>
      </section>

      {/* What Happens Next Strip */}
      <WhatHappensNext />

      {/* Closing CTA */}
      <ClosingCta
        headline="Have damage similar to one of these cases?"
        subline="Send us a photo on WhatsApp or fill out our quick form for an estimate in under 2 hours."
      />

    </div>
  );
}
