import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/business";

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-24 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-glow">
              Comprehensive Workshop Repairs
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Bodywork, Cosmetic &amp; Mechanical Repairs
            </h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              From bumper scuffs and scratch removals to major accident restoration and routine car maintenance. All makes and models repaired at 540-542 London Rd, Stanwell.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue-glow hover:text-white transition-colors"
          >
            <span>Explore all services</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group bg-surface hover:bg-surface-raised border border-surface-border hover:border-brand-blue/50 rounded-2xl overflow-hidden transition-all duration-200 flex flex-col justify-between shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-glow"
            >
              <div>
                {/* Service Image */}
                <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.altText}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-slate-200 border border-slate-700/60">
                    {s.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white group-hover:text-brand-blue-glow transition-colors flex items-center justify-between">
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-brand-blue-glow" />
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {s.shortDescription}
                  </p>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-5 pt-0">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue-light group-hover:underline">
                  <span>View repair details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
