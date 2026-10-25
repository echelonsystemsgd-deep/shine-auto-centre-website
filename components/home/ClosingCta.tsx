import React from "react";
import Link from "next/link";
import { ChevronRight, Phone, MessageCircle, Clock, Sparkles } from "lucide-react";
import { BUSINESS_CONFIG } from "@/lib/business";

export function ClosingCta({
  headline = "Ready to restore your vehicle to showroom condition?",
  subline = "Get an accurate, free quotation in under 2 hours during working hours. No obligation, no pushy sales.",
}: {
  headline?: string;
  subline?: string;
}) {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-b from-surface to-background border-t border-surface-border">
      
      {/* Glossy accent light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-brand-blue/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-raised border border-surface-border text-xs text-brand-blue-glow font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-amber-light" />
            <span>Stanwell &amp; Ashford Local Car Repairs</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
            {headline}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            {subline}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              href="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-amber to-brand-amber-hover text-slate-950 font-bold px-8 py-4 rounded-xl text-base shadow-xl shadow-brand-amber/20 hover:brightness-110 active:scale-98 transition-all min-h-[50px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
            >
              <span>Get my quote</span>
              <ChevronRight className="w-5 h-5 text-slate-950" />
            </Link>

            <a
              href={BUSINESS_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface-raised hover:bg-surface-elevated text-white border border-surface-border hover:border-emerald-500/50 px-6 py-4 rounded-xl text-sm font-semibold transition-all min-h-[50px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface-raised hover:bg-surface-elevated text-slate-300 hover:text-white border border-surface-border px-6 py-4 rounded-xl text-sm font-semibold transition-all min-h-[50px]"
            >
              <Phone className="w-4 h-4 text-brand-blue-light" />
              <span>{BUSINESS_CONFIG.phoneLandline}</span>
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5 text-brand-blue-light" />
            <span>{BUSINESS_CONFIG.responseClaim}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
