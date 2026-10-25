import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/business";

export function ServicePillars() {
  return (
    <section id="services" className="py-16 sm:py-24 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-amber">
              Transparent Pricing &amp; Certified Workshop
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Clear Service Pillars
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              No hidden fees, no unnecessary upselling. Fixed pricing anchors with 12-month paint guarantees on all bodywork.
            </p>
          </div>

          <a
            href="#estimator"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-amber hover:underline"
          >
            <span>Lookup Your Reg For Instant Price</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6 Clean Service Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((service, idx) => (
            <div
              key={service.slug}
              className="bg-surface hover:bg-surface-raised border border-surface-border hover:border-brand-amber/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200 group shadow-sm"
            >
              <div>
                {/* Photo Header */}
                <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.altText}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                  
                  {/* Starting Price Pill */}
                  {service.startingPrice && (
                    <span className="absolute top-3 right-3 text-xs font-black font-mono px-3 py-1 rounded-full bg-black/90 backdrop-blur-md text-brand-amber border border-brand-amber/40 shadow-lg">
                      {service.startingPrice}
                    </span>
                  )}

                  {/* Turnaround Pill */}
                  {service.turnaround && (
                    <span className="absolute bottom-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-slate-300 border border-slate-700">
                      ⏱ {service.turnaround}
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-amber transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-1.5">
                    {service.whatWeDo.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-surface-border/60">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-bold text-slate-400 hover:text-white transition-colors"
                >
                  View Details
                </Link>

                <a
                  href="#estimator"
                  className="inline-flex items-center gap-1.5 text-xs font-black bg-brand-amber/15 hover:bg-brand-amber text-brand-amber hover:text-slate-950 px-4 py-2 rounded-xl border border-brand-amber/30 transition-all min-h-[40px]"
                >
                  <span>Book / Estimate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
