import React from "react";
import { Star, ShieldCheck, Clock, FileCheck, Car, ExternalLink } from "lucide-react";
import { BUSINESS_CONFIG } from "@/lib/business";

export function WhyChooseShine() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Exact Colour Match Guarantee",
      desc: "Spectrophotometer digital paint analysis ensures zero shade mismatch, seamlessly blending into your car's factory paintwork.",
    },
    {
      icon: Clock,
      title: "Fast 24-48h Turnaround",
      desc: "We prioritize efficiency in our heated spray booth so you aren't stranded without your vehicle for weeks on end.",
    },
    {
      icon: FileCheck,
      title: "Insurance Excess Relief",
      desc: "We work directly with all major UK insurers, manage paperwork, and assist in keeping your out-of-pocket costs to a minimum.",
    },
    {
      icon: Car,
      title: "Courtesy Cars Provided",
      desc: "Keep moving with our fleet of modern replacement vehicles while your car is expertly restored in our workshop.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-b border-surface-border bg-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-surface-border mb-4 shadow-sm">
            <div className="flex items-center text-amber-400">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <span className="font-extrabold text-sm text-white">{BUSINESS_CONFIG.rating.label}</span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-400">{BUSINESS_CONFIG.rating.source}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Drivers Choose Shine Auto Centre
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Stanwell and Ashford&apos;s independent bodyshop delivering dealership-grade repairs with personal, honest service.
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="bg-surface border border-surface-border hover:border-brand-amber/40 p-6 rounded-2xl flex flex-col justify-between transition-colors shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-amber/15 text-brand-amber flex items-center justify-center mb-5 border border-brand-amber/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{b.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-surface-border/50 text-[11px] font-semibold text-brand-amber">
                  ✓ Standard on all bookings
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Google Reviews Link */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_CONFIG.address.googleMapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white bg-surface hover:bg-surface-raised border border-surface-border px-5 py-3 rounded-xl transition-colors"
          >
            <span>Read Our Verified Google Reviews Directly on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-brand-amber" />
          </a>
        </div>

      </div>
    </section>
  );
}
