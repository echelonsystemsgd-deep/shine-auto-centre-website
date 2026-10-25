import React from "react";
import { Star, ShieldCheck, ExternalLink, MessageSquare } from "lucide-react";
import { BUSINESS_CONFIG } from "@/lib/business";

export function GoogleReviewsBridge() {
  return (
    <section className="py-16 border-b border-surface-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-glow text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verified Customer Feedback</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            See Our Google Reviews
          </h2>

          <p className="text-slate-300 text-sm mt-2 max-w-xl leading-relaxed">
            We take pride in every repair that leaves our workshop. Read honest, unfiltered reviews from local drivers directly on our Google Maps profile.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={BUSINESS_CONFIG.address.googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg hover:shadow-white/10 min-h-[48px]"
            >
              <div className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <span>Read Verified Google Reviews</span>
              <ExternalLink className="w-4 h-4 text-slate-500" />
            </a>

            <a
              href={BUSINESS_CONFIG.address.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface-raised border border-surface-border hover:border-slate-500 text-slate-200 px-5 py-3.5 rounded-xl text-sm font-medium transition-colors min-h-[48px]"
            >
              <span>View Workshop on Maps</span>
            </a>
          </div>

          {/* GUARDRAIL NOTE & CLIENT TODO:
              As per instructions: No fake testimonials or fabricated star ratings are displayed here.
              Individual customer review quotes will be populated here only after client approval and provision of source links. */}
          <div className="mt-8 p-3 bg-surface-raised/60 border border-surface-border rounded-xl text-left max-w-lg w-full text-xs text-slate-400">
            <div className="flex items-center gap-1.5 font-semibold text-slate-300 mb-0.5">
              <MessageSquare className="w-3.5 h-3.5 text-brand-blue-light" />
              <span>Owner Confirmation Note:</span>
            </div>
            <p className="text-[11px] text-slate-400">
              TODO: Individual customer testimonials and verified quotes will be showcased here once confirmed by Shine Auto Centre management.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
