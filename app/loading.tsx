import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="relative flex items-center justify-center">
        {/* Pulsing ring */}
        <div className="w-20 h-20 rounded-2xl border-2 border-brand-amber/30 animate-ping absolute" />
        
        {/* Logo box */}
        <div className="w-20 h-20 rounded-2xl bg-surface border border-surface-border p-2 flex items-center justify-center relative shadow-xl">
          <Image
            src="/images/brand/logo-clean.png"
            alt="Shine Auto Centre Loading"
            width={60}
            height={60}
            className="w-full h-full object-contain animate-pulse"
            priority
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-1.5">
        <span className="text-sm font-bold text-white tracking-wide">
          SHINE AUTO CENTRE
        </span>
        <span className="text-xs text-slate-400">
          Loading workshop data...
        </span>
      </div>
    </div>
  );
}
