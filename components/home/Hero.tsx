"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, MessageCircle, Clock, ShieldCheck, Wrench, CheckCircle } from "lucide-react";
import { BUSINESS_CONFIG, getGarageStatus } from "@/lib/business";

export function Hero() {
  const [status, setStatus] = useState(() => getGarageStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getGarageStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-24 border-b border-surface-border">
      
      {/* Subtle glossy background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Live Open / Response Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-raised border border-surface-border mb-6 shadow-sm">
            <div className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${status.isOpen ? "bg-emerald-400 animate-pulse" : "bg-slate-500"}`} />
              <span className={`text-xs font-bold ${status.isOpen ? "text-emerald-300" : "text-slate-300"}`}>
                {status.statusBadge}
              </span>
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-1 text-slate-300 text-xs">
              <Clock className="w-3.5 h-3.5 text-brand-amber-light" />
              <span>Replies in under 2 hours</span>
            </div>
          </div>

          {/* Main H1 Title (Truthful from existing site) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Your Local Car Repairs, Servicing &amp; Bodywork in Ashford
          </h1>

          {/* Subtitle with exact business facts */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Accident repairs, scratch &amp; dent removal, bumper restoration, panel re-sprays, and routine car servicing at 540-542 London Rd, Stanwell.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-amber to-brand-amber-hover text-slate-950 font-bold px-8 py-4 rounded-xl text-base shadow-xl shadow-brand-amber/20 hover:brightness-110 active:scale-98 transition-all min-h-[52px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
            >
              <span>Get my quote</span>
              <ChevronRight className="w-5 h-5 text-slate-950" />
            </Link>

            <a
              href={BUSINESS_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface-raised hover:bg-surface-elevated text-white border border-surface-border hover:border-emerald-500/50 px-6 py-4 rounded-xl text-base font-semibold transition-all min-h-[52px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>WhatsApp Us Photos</span>
            </a>
          </div>

          {/* Trust Highlights Strip (Zero invented claims) */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-surface-border/60 text-left">
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs text-slate-300 font-medium">Under 2hr response</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs text-slate-300 font-medium">All makes &amp; models</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs text-slate-300 font-medium">Free no-obligation quotes</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs text-slate-300 font-medium">Precision color match</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
