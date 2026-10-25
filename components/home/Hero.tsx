"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Car, 
  Sparkles, 
  CheckCircle,
  BadgeCheck
} from "lucide-react";
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
    <section className="relative overflow-hidden pt-10 pb-16 lg:py-24 border-b border-surface-border">
      
      {/* Stealth Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-brand-amber/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Live Open / Location Indicator */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-surface-border mb-6 shadow-sm">
            <div className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${status.isOpen ? "bg-emerald-400 animate-pulse" : "bg-slate-500"}`} />
              <span className={`text-xs font-bold ${status.isOpen ? "text-emerald-300" : "text-slate-300"}`}>
                {status.statusBadge}
              </span>
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-1 text-slate-300 text-xs font-mono">
              <Clock className="w-3.5 h-3.5 text-brand-amber" />
              <span>Quotes in ~15 Mins</span>
            </div>
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            Ashford’s Trusted Specialists in Car Bodywork, Accident Repair &amp; Servicing.
          </h1>

          {/* SUB-HEADLINE */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            From minor bumper scuffs and alloy refurbs to full insurance accident repairs. Get a transparent price in minutes — no jargon, no waiting.
          </p>

          {/* DUAL HERO ACTION TRIGGERS */}
          <div className="mt-8 w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3.5">
            {/* Primary: Instant Reg Plate Estimate */}
            <a
              href="#estimator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-amber to-brand-amber-hover text-slate-950 font-black px-8 py-4 rounded-2xl text-base shadow-xl shadow-brand-amber/25 hover:brightness-110 active:scale-98 transition-all min-h-[52px]"
            >
              <span>Instant Reg Plate Estimate 🇬🇧</span>
              <ChevronRight className="w-5 h-5 text-slate-950" />
            </a>

            {/* Secondary: WhatsApp Damage Photos */}
            <a
              href="https://wa.me/447412895092?text=Hi%20Shine%20Auto,%20I'd%20like%20a%20quote%20for%20my%20vehicle"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-emerald-600 text-slate-950 font-black px-7 py-4 rounded-2xl text-base shadow-xl shadow-emerald-500/20 active:scale-98 transition-all min-h-[52px]"
            >
              <MessageCircle className="w-5 h-5 text-slate-950" />
              <span>Send Damage Photos on WhatsApp</span>
            </a>
          </div>

          {/* 4 TRUST ANCHORS / BADGES */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-8 border-t border-surface-border text-left">
            
            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-surface/40 border border-surface-border/60">
              <ShieldCheck className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">12-Month Guarantee</span>
                <span className="text-[10px] text-slate-400">Paint &amp; workmanship</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-surface/40 border border-surface-border/60">
              <Sparkles className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">PPG Paint-Match</span>
                <span className="text-[10px] text-slate-400">Computerized camera tech</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-surface/40 border border-surface-border/60">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Same-Day SMART</span>
                <span className="text-[10px] text-slate-400">2–4h turnaround repairs</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-surface/40 border border-surface-border/60">
              <Car className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Courtesy Cars</span>
                <span className="text-[10px] text-slate-400">Insurance approved body shop</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
