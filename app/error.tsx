"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_CONFIG } from "@/lib/business";
import { PhoneIcon } from "@/components/icons/BrandIcons";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    console.error("Runtime application error:", error);
  }, [error]);

  return (
    <div className="py-20 sm:py-32 flex items-center justify-center text-center px-4">
      <div className="max-w-lg mx-auto bg-surface border border-surface-border p-8 sm:p-12 rounded-3xl shadow-2xl flex flex-col items-center">
        
        {/* Branded Logo */}
        <div className="w-20 h-20 rounded-2xl bg-surface-raised border border-rose-500/30 p-2 flex items-center justify-center mb-6">
          <Image
            src="/images/brand/logo-clean.png"
            alt="Shine Auto Centre"
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </div>

        <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 mb-3">
          Temporary System Notice
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Something didn&apos;t load properly
        </h1>

        <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-sm">
          An unexpected issue occurred while rendering this page. You can reload or contact our Stanwell garage directly.
        </p>

        <div className="mt-8 flex flex-col w-full gap-3">
          <button
            onClick={() => reset()}
            className="w-full bg-gradient-to-r from-brand-amber to-amber-600 hover:brightness-110 text-slate-950 font-bold py-3.5 px-6 rounded-xl text-sm transition-all min-h-[48px]"
          >
            Try Loading Again
          </button>

          <Link
            href="/"
            className="w-full bg-surface-raised border border-surface-border hover:border-slate-500 text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-colors min-h-[48px] flex items-center justify-center"
          >
            Return to Homepage
          </Link>

          <a
            href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`}
            className="flex items-center justify-center gap-2 bg-surface-raised border border-surface-border text-slate-200 hover:text-white py-3.5 px-6 rounded-xl text-sm font-semibold transition-colors min-h-[48px]"
          >
            <PhoneIcon className="w-4 h-4 text-brand-amber" />
            <span>Call Garage ({BUSINESS_CONFIG.phoneLandline})</span>
          </a>
        </div>

      </div>
    </div>
  );
}
