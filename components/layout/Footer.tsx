import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ShieldCheck, ExternalLink } from "lucide-react";
import { BUSINESS_CONFIG, SERVICES } from "@/lib/business";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-surface-border text-slate-400 text-sm mt-auto pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-background border border-surface-border p-1">
                <Image
                  src="/images/brand/logo-clean.png"
                  alt="Shine Auto Centre Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-sans font-bold text-base text-white tracking-tight">SHINE AUTO CENTRE</span>
                <p className="text-xs text-slate-500">Stanwell & Ashford Bodywork Specialists</p>
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed">
              Ashford & Stanwell local car body repairs, panel resprays, accident restoration, routine servicing and diagnostics.
            </p>

            <div className="bg-background/80 rounded-xl p-3 border border-surface-border/70 text-xs">
              <span className="text-slate-300 font-semibold block mb-0.5">Response Time Guarantee:</span>
              <p className="text-slate-400">{BUSINESS_CONFIG.responseClaim}</p>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Our Services</h3>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5 py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-light" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Find & Contact Us</h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue-light shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 block font-medium">{BUSINESS_CONFIG.address.line1}</span>
                  <span>{BUSINESS_CONFIG.address.area}, {BUSINESS_CONFIG.address.town} {BUSINESS_CONFIG.address.postcode}</span>
                  <a
                    href={BUSINESS_CONFIG.address.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue-glow hover:underline flex items-center gap-1 mt-1 font-medium"
                  >
                    <span>Get Google Maps Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue-light shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`} className="hover:text-white font-mono">
                    {BUSINESS_CONFIG.phoneLandline} (Landline)
                  </a>
                  <a href={`tel:${BUSINESS_CONFIG.phoneMobileRaw}`} className="hover:text-white font-mono">
                    {BUSINESS_CONFIG.phoneMobile} (Mobile / WhatsApp)
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-blue-light shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-white">
                  {BUSINESS_CONFIG.email}
                </a>
              </li>

              <li className="flex items-start gap-2.5 pt-2 border-t border-surface-border/60">
                <Clock className="w-4 h-4 text-brand-blue-light shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 font-medium block">Workshop Hours:</span>
                  <p>Mon – Sat: 9:00 AM – 6:00 PM</p>
                  <p className="text-slate-500">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust & Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Trust & Legal</h3>
            <div className="space-y-3 text-xs">
              <div className="bg-background/60 p-3 rounded-xl border border-surface-border">
                <div className="flex items-center gap-1.5 text-slate-200 font-medium mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Google Reviews</span>
                </div>
                <p className="text-slate-400 mb-2">Read authentic customer experiences directly on Google Maps.</p>
                <a
                  href={BUSINESS_CONFIG.address.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brand-blue-glow font-medium hover:underline"
                >
                  <span>See our Google reviews ↗</span>
                </a>
              </div>

              <div className="text-[11px] text-slate-500 leading-normal">
                <p><strong className="text-slate-400">Legal Entity:</strong> {BUSINESS_CONFIG.legalName}</p>
                <p><strong className="text-slate-400">Company No:</strong> {BUSINESS_CONFIG.companyNumber}</p>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-2 text-xs">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                <Link href="/accessibility-statement" className="hover:text-white transition-colors">Accessibility</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {BUSINESS_CONFIG.legalName}. All rights reserved.</p>
          <p className="text-center sm:text-right">
            540-542 London Rd, Stanwell, Ashford TW15 3AE • Prototype demonstration mode
          </p>
        </div>
      </div>
    </footer>
  );
}
