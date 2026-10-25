import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_CONFIG } from "@/lib/business";
import { PhoneIcon } from "@/components/icons/BrandIcons";

export default function NotFound() {
  return (
    <div className="py-20 sm:py-32 flex items-center justify-center text-center px-4">
      <div className="max-w-lg mx-auto bg-surface border border-surface-border p-8 sm:p-12 rounded-3xl shadow-2xl flex flex-col items-center">
        
        {/* Branded Logo Badge */}
        <div className="w-20 h-20 rounded-2xl bg-surface-raised border border-brand-amber/40 p-2 flex items-center justify-center mb-6 shadow-lg shadow-brand-amber/10">
          <Image
            src="/images/brand/logo-clean.png"
            alt="Shine Auto Centre"
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </div>

        <span className="font-mono text-xs font-bold px-3.5 py-1 rounded-full bg-surface-raised border border-surface-border text-brand-amber mb-3">
          Error 404 • Page Not Found
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Let&apos;s get you back on track
        </h1>

        <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-sm">
          The repair page or resource you are looking for does not exist or has moved. Choose an option below:
        </p>

        <div className="mt-8 flex flex-col w-full gap-3">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-amber to-amber-600 hover:brightness-110 text-slate-950 font-bold py-3.5 px-6 rounded-xl text-sm transition-all min-h-[48px] shadow-md shadow-brand-amber/20"
          >
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="flex items-center justify-center gap-2 bg-surface-raised border border-surface-border hover:border-slate-500 text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-colors min-h-[48px]"
          >
            <span>View All Repair Services</span>
          </Link>

          <a
            href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`}
            className="flex items-center justify-center gap-2 bg-surface-raised border border-surface-border text-slate-200 hover:text-white py-3.5 px-6 rounded-xl text-sm font-semibold transition-colors min-h-[48px]"
          >
            <PhoneIcon className="w-4 h-4 text-brand-amber" />
            <span>Call Workshop ({BUSINESS_CONFIG.phoneLandline})</span>
          </a>
        </div>

      </div>
    </div>
  );
}
