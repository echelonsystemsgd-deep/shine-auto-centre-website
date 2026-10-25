"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS_CONFIG } from "@/lib/business";

export function StickyMobileActionBar() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    // Detect mobile virtual keyboard via visualViewport
    const handleResize = () => {
      if (window.visualViewport) {
        const heightDiff = window.innerHeight - window.visualViewport.height;
        setIsKeyboardOpen(heightDiff > 150);
      }
    };

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

  if (isKeyboardOpen) return null;

  return (
    <aside 
      aria-label="Mobile Quick Action Bar"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-lg border-t border-surface-border px-3 pt-2.5 pb-[calc(0.6rem+env(safe-area-inset-bottom,0px))] shadow-2xl transition-transform duration-200"
    >
      {/* 50/50 Split Bottom Buttons */}
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        
        {/* Left Button (Dark Surface): Call Garage */}
        <a
          href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`}
          className="flex items-center justify-center gap-2 bg-surface border border-surface-borderHover active:bg-surface-raised text-white rounded-xl py-3 px-2 text-xs font-bold min-h-[48px] shadow-sm transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
          aria-label="Call Garage on 01784 694898"
        >
          <Phone className="w-4 h-4 text-brand-amber shrink-0" />
          <span className="truncate">Call Garage (01784 694898)</span>
        </a>

        {/* Right Button (Emerald WhatsApp): WhatsApp Photos */}
        <a
          href="https://wa.me/447412895092?text=Hi%20Shine%20Auto,%20I'd%20like%20a%20quote%20for%20my%20car"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] active:bg-emerald-600 text-slate-950 font-black rounded-xl py-3 px-2 text-xs min-h-[48px] shadow-lg shadow-emerald-500/20 transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-label="Send damage photos to Shine Auto on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-slate-950 shrink-0" />
          <span className="truncate">WhatsApp Photos</span>
        </a>

      </div>
    </aside>
  );
}
