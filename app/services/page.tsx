import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES, getSiteUrl } from "@/lib/business";
import { ServiceIcon } from "@/components/icons/BrandIcons";
import { WhatHappensNext } from "@/components/home/WhatHappensNext";
import { ClosingCta } from "@/components/home/ClosingCta";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Car Bodywork & Mechanical Repairs | Stanwell & Ashford",
  description: "Explore expert accident repairs, dent removal, bumper welding, panel resprays, alloy refurbs, and car servicing at Shine Auto Centre in Stanwell TW15 3AE.",
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: "Car Bodywork & Mechanical Repairs | Shine Auto Centre",
    description: "Accident repairs, dent removal, bumper welding, panel resprays, alloy wheel refurbs, and diagnostics in Stanwell & Ashford.",
    url: `${siteUrl}/services`,
    siteName: "Shine Auto Centre",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: `${siteUrl}/api/og?title=Bodyshop%20%26%20Mechanical%20Services&subtitle=Stanwell%20%26%20Ashford%20TW15%203AE%20%E2%80%A2%20Fast%202-Hour%20Quotes`,
        width: 1200,
        height: 630,
        alt: "Shine Auto Centre Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Bodywork & Mechanical Repairs | Shine Auto Centre",
    description: "Accident repairs, dent removal, bumper welding, panel resprays, alloy wheel refurbs, and diagnostics in Stanwell & Ashford.",
    images: [`${siteUrl}/api/og?title=Bodyshop%20%26%20Mechanical%20Services&subtitle=Stanwell%20%26%20Ashford%20TW15%203AE%20%E2%80%A2%20Fast%202-Hour%20Quotes`],
  },
};

export default function ServicesPage() {
  const bodyworkServices = SERVICES.filter(s => s.category === "Bodywork & Cosmetic");
  const mechanicalServices = SERVICES.filter(s => s.category === "Mechanical & Maintenance");

  return (
    <div className="flex flex-col">
      
      {/* Services Header */}
      <section className="py-12 sm:py-20 border-b border-surface-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-amber">
            Ashford &amp; Stanwell Workshop
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            Our Car Repair &amp; Servicing Solutions
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            From single-panel dent removals and bumper repairs to major accident bodywork and routine mechanical maintenance. We work on all car makes and models with computerised color matching.
          </p>
        </div>
      </section>

      {/* Bodywork & Cosmetic Section */}
      <section className="py-16 sm:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Bodywork &amp; Cosmetic Repairs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bodyworkServices.map((service) => (
              <div
                key={service.slug}
                className="bg-surface border border-surface-border rounded-2xl overflow-hidden flex flex-col justify-between hover:border-brand-amber/50 transition-all shadow-sm group"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-slate-900">
                    <Image
                      src={service.image}
                      alt={service.altText}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-amber/10 border border-brand-amber/25 flex items-center justify-center text-brand-amber shrink-0">
                        <ServiceIcon slug={service.slug} className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-brand-amber transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      {service.whatWeDo.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-surface-border/50">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Read Guide</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/quote?service=${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold bg-brand-amber/15 hover:bg-brand-amber text-brand-amber hover:text-slate-950 px-3 py-1.5 rounded-lg border border-brand-amber/30 transition-colors"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Mechanical & Maintenance Section */}
      <section className="py-16 sm:py-20 border-b border-surface-border bg-surface/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Mechanical &amp; Maintenance Repairs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mechanicalServices.map((service) => (
              <div
                key={service.slug}
                className="bg-surface border border-surface-border rounded-2xl overflow-hidden flex flex-col justify-between hover:border-brand-amber/50 transition-all shadow-sm group"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-slate-900">
                    <Image
                      src={service.image}
                      alt={service.altText}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-amber/10 border border-brand-amber/25 flex items-center justify-center text-brand-amber shrink-0">
                        <ServiceIcon slug={service.slug} className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-brand-amber transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      {service.whatWeDo.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-surface-border/50">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Read Guide</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/quote?service=${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold bg-brand-amber/15 hover:bg-brand-amber text-brand-amber hover:text-slate-950 px-3 py-1.5 rounded-lg border border-brand-amber/30 transition-colors"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Workflow roadmap */}
      <WhatHappensNext />

      {/* Bottom CTA */}
      <ClosingCta />

    </div>
  );
}
