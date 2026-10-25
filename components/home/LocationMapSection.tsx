import React from "react";
import { MapPin, Phone, Mail, Navigation, MessageCircle, Clock, Car } from "lucide-react";
import { BUSINESS_CONFIG } from "@/lib/business";

export function LocationMapSection() {
  return (
    <section id="location" className="py-16 sm:py-24 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-amber">
            Convenient Workshop Location
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Visit Our Stanwell Workshop
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Conveniently located on London Road serving Ashford, Staines-upon-Thames, Feltham, Sunbury, and Heathrow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Business Details & Parking Card */}
          <div className="lg:col-span-5 bg-surface border border-surface-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-amber block mb-1">
                  Workshop Address
                </span>
                <p className="text-lg font-black text-white">{BUSINESS_CONFIG.address.full}</p>
                <p className="text-xs text-slate-400 mt-1">Surrey, United Kingdom</p>
              </div>

              {/* Direct Communications */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 bg-surface-raised rounded-xl border border-surface-border">
                  <Phone className="w-4 h-4 text-brand-amber shrink-0" />
                  <div className="flex flex-col text-xs">
                    <span className="text-slate-400 font-medium">Workshop Landline:</span>
                    <a href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`} className="text-white font-mono font-bold hover:text-brand-amber">
                      {BUSINESS_CONFIG.phoneLandline}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-surface-raised rounded-xl border border-surface-border">
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <div className="flex flex-col text-xs">
                    <span className="text-slate-400 font-medium">Mobile &amp; WhatsApp:</span>
                    <a href={BUSINESS_CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white font-mono font-bold hover:text-[#25D366]">
                      {BUSINESS_CONFIG.phoneMobile}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-surface-raised rounded-xl border border-surface-border">
                  <Mail className="w-4 h-4 text-brand-amber shrink-0" />
                  <div className="flex flex-col text-xs">
                    <span className="text-slate-400 font-medium">Direct Email:</span>
                    <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-white font-medium hover:text-brand-amber">
                      {BUSINESS_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Customer Drop-off & Parking Notice */}
              <div className="p-4 bg-surface-raised rounded-2xl border border-surface-border text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <Car className="w-4 h-4 text-brand-amber" />
                  <span>Customer Parking &amp; Vehicle Drop-off:</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  Free customer parking and vehicle drop-off bays are located directly in front of the workshop entrance off London Road. Courtesy car handovers are arranged at reception.
                </p>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-surface-border">
              <a
                href={BUSINESS_CONFIG.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-amber to-brand-amber-hover text-slate-950 font-black py-4 px-6 rounded-xl text-sm transition-all shadow-lg shadow-brand-amber/20 hover:brightness-110 min-h-[48px]"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Google Maps Directions</span>
              </a>
            </div>

          </div>

          {/* Interactive Styled Google Maps Card */}
          <div className="lg:col-span-7 bg-surface border border-surface-border rounded-3xl overflow-hidden min-h-[360px] flex flex-col relative shadow-xl">
            <iframe
              title="Shine Auto Centre Stanwell Workshop Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.643336495034!2d-0.48028752338575815!3d51.44634287180026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487673934336c5df%3A0xc39f997db83e2da0!2s540-542%20London%20Rd%2C%20Stanwell%2C%20Ashford%20TW15%203AE!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full flex-1 filter grayscale invert contrast-125 opacity-90 hover:opacity-100 transition-opacity"
            />
            
            <div className="p-4 bg-surface-raised border-t border-surface-border flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">Coordinates: 51.446° N, 0.480° W</span>
              <a
                href={BUSINESS_CONFIG.address.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-amber hover:underline font-bold"
              >
                Open Full Map ↗
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
