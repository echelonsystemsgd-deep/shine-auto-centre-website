import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ExternalLink, 
  Navigation, 
  CheckCircle2 
} from "lucide-react";
import { BUSINESS_CONFIG, getGarageStatus } from "@/lib/business";
import { ClosingCta } from "@/components/home/ClosingCta";

export const metadata: Metadata = {
  title: "Contact Shine Auto Centre | 540-542 London Rd, Stanwell",
  description: "Contact Shine Auto Centre in Stanwell, Ashford TW15 3AE. Call 01784 694898 or 07412 895092, WhatsApp us, or visit Monday to Saturday, 9am to 6pm.",
};

export default function ContactPage() {
  const status = getGarageStatus();

  return (
    <div className="flex flex-col">
      
      {/* Header */}
      <section className="py-12 sm:py-20 border-b border-surface-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-glow">
            Stanwell &amp; Ashford Workshop
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            Contact Shine Auto Centre
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Reach out via phone, send photos on WhatsApp for a swift estimate, or visit our workshop in person at 540-542 London Rd, Stanwell.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-16 sm:py-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Visit Workshop */}
            <div className="bg-surface border border-surface-border p-8 rounded-2xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/15 border border-brand-blue/30 text-brand-blue-light flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6" />
                </div>

                <h2 className="text-xl font-bold text-white mb-2">Workshop Address</h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {BUSINESS_CONFIG.address.full}
                </p>

                <p className="text-xs text-slate-400 mb-6">
                  Conveniently situated on London Road in Stanwell with easy customer parking and drop-off access.
                </p>
              </div>

              {/* Lightweight Google Maps directions link (no slow iframe) */}
              <a
                href={BUSINESS_CONFIG.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white font-semibold py-3.5 px-4 rounded-xl text-sm transition-colors min-h-[48px]"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

            {/* Card 2: Phone & WhatsApp */}
            <div className="bg-surface border border-surface-border p-8 rounded-2xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6" />
                </div>

                <h2 className="text-xl font-bold text-white mb-2">Call or WhatsApp</h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Speak directly to our repair team or message damage photos.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="p-3 bg-surface-raised rounded-xl border border-surface-border/60">
                    <span className="text-[11px] text-slate-400 block font-medium">Workshop Landline:</span>
                    <a
                      href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`}
                      className="text-white hover:text-brand-blue-glow font-mono font-bold text-base"
                    >
                      {BUSINESS_CONFIG.phoneLandline}
                    </a>
                  </div>

                  <div className="p-3 bg-surface-raised rounded-xl border border-surface-border/60">
                    <span className="text-[11px] text-slate-400 block font-medium">Mobile &amp; WhatsApp:</span>
                    <a
                      href={`tel:${BUSINESS_CONFIG.phoneMobileRaw}`}
                      className="text-white hover:text-brand-blue-glow font-mono font-bold text-base"
                    >
                      {BUSINESS_CONFIG.phoneMobile}
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={BUSINESS_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3.5 px-4 rounded-xl text-sm transition-colors min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

            {/* Card 3: Opening Hours & Response Claim */}
            <div className="bg-surface border border-surface-border p-8 rounded-2xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6" />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-white">Opening Hours</h2>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                    status.isOpen
                      ? "bg-emerald-950/60 text-emerald-300 border-emerald-500/30"
                      : "bg-slate-900 text-slate-400 border-slate-700"
                  }`}>
                    {status.statusText}
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-4">{status.nextOpenText}</p>

                <div className="space-y-1.5 text-xs text-slate-300 border-t border-surface-border/60 pt-3 mb-6">
                  {BUSINESS_CONFIG.hoursDetailed.map((h) => (
                    <div key={h.day} className="flex justify-between py-1 border-b border-surface-border/30 last:border-0">
                      <span className="font-medium">{h.day}</span>
                      <span className={h.isClosed ? "text-slate-500" : "font-mono"}>
                        {h.isClosed ? "Closed" : `${h.open} – ${h.close}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-brand-blue/10 border border-brand-blue/20 rounded-xl text-xs text-slate-300">
                <span className="font-semibold block text-brand-blue-glow mb-0.5">Response Time Claim:</span>
                <p>{BUSINESS_CONFIG.responseClaim}</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <ClosingCta />

    </div>
  );
}
