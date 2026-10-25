import React from "react";
import Link from "next/link";
import { Wrench, ChevronRight, Home, Phone, FileText } from "lucide-react";
import { BUSINESS_CONFIG } from "@/lib/business";

export default function NotFound() {
  return (
    <div className="py-20 sm:py-32 flex items-center justify-center text-center px-4">
      <div className="max-w-lg mx-auto bg-surface border border-surface-border p-8 sm:p-12 rounded-3xl shadow-2xl flex flex-col items-center">
        
        <div className="w-16 h-16 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-blue-light flex items-center justify-center mb-6">
          <Wrench className="w-8 h-8" />
        </div>

        <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-surface-raised border border-surface-border text-brand-blue-glow mb-2">
          Error 404 • Page Not Found
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Let&apos;s get you back on track
        </h1>

        <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-sm">
          The page you are looking for has been moved or does not exist. Choose one of our main options below:
        </p>

        <div className="mt-8 flex flex-col w-full gap-3">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-colors min-h-[48px]"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/quote"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-amber to-brand-amber-hover text-slate-950 font-bold py-3.5 px-6 rounded-xl text-sm transition-all min-h-[48px]"
          >
            <FileText className="w-4 h-4" />
            <span>Get a Repair Quote</span>
          </Link>

          <a
            href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`}
            className="flex items-center justify-center gap-2 bg-surface-raised border border-surface-border text-slate-200 hover:text-white py-3.5 px-6 rounded-xl text-sm font-semibold transition-colors min-h-[48px]"
          >
            <Phone className="w-4 h-4 text-brand-blue-light" />
            <span>Call Workshop ({BUSINESS_CONFIG.phoneLandline})</span>
          </a>
        </div>

      </div>
    </div>
  );
}
