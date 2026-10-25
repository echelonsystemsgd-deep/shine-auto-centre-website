"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { BUSINESS_CONFIG } from "@/lib/business";

export function StickyMobileActionBar() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    // Detect mobile virtual keyboard via visualViewport
    const handleResize = () => {
      if (window.visualViewport) {
        const heightDiff = window.innerHeight - window.visualViewport.height;
        // Keyboard typically occupies 150px+ of viewport
        setIsKeyboardOpen(heightDiff > 150);
      }
    };

    // Also listen to focus events on form fields
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT")) {
        setIsKeyboardOpen(true);
      }
    };

    const handleFocusOut = () => {
      setIsKeyboardOpen(false);
    };

    window.visualViewport?.addEventListener("resize", handleResize);
    window.addEventListener("focusin", handleFocusIn);
    window.addEventListener("focusout", handleFocusOut);

    return () => {
      window.visualViewport?.removeEventListener("resize", handleResize);
      window.removeEventListener("focusin", handleFocusIn);
      window.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  // Hide sticky bar when virtual keyboard is open to avoid obstruction
  if (isKeyboardOpen) return null;

  return (
    <aside 
      aria-label="Quick Action Bar"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-lg border-t border-surface-border px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] shadow-2xl transition-transform duration-200"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* Button 1: Call */}
        <a
          href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`}
          className="flex flex-col items-center justify-center gap-1 bg-surface-raised active:bg-surface-elevated text-slate-100 border border-surface-border rounded-xl py-2 px-1 text-xs font-semibold min-h-[50px] transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-glow"
          aria-label={`Call workshop on ${BUSINESS_CONFIG.phoneLandline}`}
        >
          <Phone className="w-4 h-4 text-brand-blue-light" />
          <span>Call</span>
        </a>

        {/* Button 2: WhatsApp */}
        <a
          href={BUSINESS_CONFIG.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 bg-surface-raised active:bg-surface-elevated text-emerald-400 border border-surface-border rounded-xl py-2 px-1 text-xs font-semibold min-h-[50px] transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-label="Message Shine Auto Centre on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        {/* Button 3: Get a Quote */}
        <Link
          href="/quote"
          className="flex flex-col items-center justify-center gap-1 bg-gradient-to-r from-brand-amber to-brand-amber-hover text-slate-950 font-bold rounded-xl py-2 px-1 text-xs shadow-md shadow-brand-amber/20 min-h-[50px] transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber-light"
          aria-label="Get a repair quote"
        >
          <FileText className="w-4 h-4 text-slate-950" />
          <span>Get Quote</span>
        </Link>

      </div>
    </aside>
  );
}
