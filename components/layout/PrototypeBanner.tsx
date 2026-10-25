"use client";

import React, { useState } from "react";
import { Info, X } from "lucide-react";

export function PrototypeBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-amber-500/15 border-b border-amber-500/30 text-amber-200 px-4 py-2 text-xs font-medium flex items-center justify-between z-50 relative backdrop-blur-sm">
      <div className="flex items-center gap-2 max-w-7xl mx-auto w-full">
        <Info className="w-4 h-4 text-amber-400 shrink-0" />
        <span className="flex-1">
          <strong className="text-amber-300">Prototype for review:</strong> Created for Shine Auto Centre. All forms operate in demonstration mode.
        </span>
        <button
          onClick={() => setIsVisible(false)}
          className="text-amber-400/80 hover:text-amber-200 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center rounded transition-colors"
          aria-label="Dismiss prototype notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
