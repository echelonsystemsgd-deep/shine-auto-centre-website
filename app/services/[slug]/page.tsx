import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  AlertCircle,
  Wrench
} from "lucide-react";
import { SERVICES, BUSINESS_CONFIG, ServiceDetail } from "@/lib/business";
import { WhatHappensNext } from "@/components/home/WhatHappensNext";
import { ClosingCta } from "@/components/home/ClosingCta";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} in Ashford & Stanwell`,
    description: `${service.shortDescription} Located at 540-542 London Rd, Stanwell. Replies in under 2 hours.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      
      {/* Service Hero */}
      <section className="py-12 sm:py-20 border-b border-surface-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-medium">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-blue-glow text-xs font-bold mb-3">
                {service.category} • Stanwell &amp; Ashford
              </span>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {service.title} in Ashford
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                {service.heroSnippet}
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <Clock className="w-4 h-4" />
                <span>{BUSINESS_CONFIG.responseClaim}</span>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={`/quote?service=${service.slug}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-amber to-brand-amber-hover text-slate-950 font-bold px-8 py-4 rounded-xl text-base shadow-xl shadow-brand-amber/20 hover:brightness-110 active:scale-98 transition-all min-h-[50px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
                >
                  <span>Get quote for this repair</span>
                  <ChevronRight className="w-5 h-5 text-slate-950" />
                </Link>

                <a
                  href={`${BUSINESS_CONFIG.whatsappLink}?text=${encodeURIComponent(
                    `Hello Shine Auto Centre, I'd like a quote for ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface-raised hover:bg-surface-elevated text-white border border-surface-border hover:border-emerald-500/50 px-6 py-4 rounded-xl text-sm font-semibold transition-all min-h-[50px]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Send Photos on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-surface-border shadow-2xl bg-slate-900">
                <Image
                  src={service.image}
                  alt={service.altText}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-slate-300 border border-slate-700/60">
                  Completed at 540-542 London Rd, Stanwell
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Structured Outcomes Breakdown */}
      <section className="py-16 sm:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* What We Do */}
            <div className="bg-surface border border-surface-border p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                <Wrench className="w-5 h-5 text-brand-blue-light" />
                <span>What We Do</span>
              </h2>
              <ul className="space-y-4">
                {service.whatWeDo.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* When You Need It */}
            <div className="bg-surface border border-surface-border p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                <AlertCircle className="w-5 h-5 text-brand-amber-light" />
                <span>When You Need This Repair</span>
              </h2>
              <ul className="space-y-4">
                {service.whenYouNeedIt.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-brand-amber mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-surface-border/60">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">How We Quote</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {service.howWeQuote}
                </p>
              </div>
            </div>

          </div>

          {/* Owner Confirmation Flag (Guardrail Compliance) */}
          <div className="mt-8 p-3.5 bg-surface-raised/60 border border-surface-border rounded-xl text-xs text-slate-400 flex items-center gap-2">
            <span className="font-semibold text-slate-300">Owner Confirmation Note:</span>
            <span>TODO: Service scope restates exact claims from the existing website. Specific parts pricing or guarantee durations to be confirmed by workshop manager.</span>
          </div>

        </div>
      </section>

      {/* What Happens Next Strip */}
      <WhatHappensNext />

      {/* Closing CTA */}
      <ClosingCta
        headline={`Need ${service.title.toLowerCase()} in Ashford?`}
        subline={`Get an accurate quotation in under 2 hours during working hours. Bring your vehicle to 540-542 London Rd, Stanwell.`}
      />

    </div>
  );
}
