"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, Clock, ChevronRight, MapPin } from "lucide-react";
import { BUSINESS_CONFIG, getGarageStatus } from "@/lib/business";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState(() => getGarageStatus());
  const pathname = usePathname();

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getGarageStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Reg Estimator", href: "/#estimator" },
    { name: "Services", href: "/services" },
    { name: "Before & After", href: "/gallery" },
    { name: "FAQs", href: "/faq" },
    { name: "Contact & Map", href: "/contact" },
  ];

  return (
    <>
      {/* 1. TOP MICRO-BAR (CRITICAL QUICK CONVERSION) */}
      <div className="bg-surface border-b border-surface-border text-xs text-slate-300 py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Location & Hours */}
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-amber" />
              <span>540-542 London Rd, Stanwell, Ashford TW15 3AE</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-amber" />
              <span>Open Mon–Sat: 9:00 AM – 6:00 PM</span>
            </span>
          </div>

          {/* Direct Phone & WhatsApp Access */}
          <div className="flex items-center gap-4 text-[11px] font-mono font-bold">
            <a 
              href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`}
              className="hover:text-white flex items-center gap-1 text-slate-300"
            >
              <Phone className="w-3 h-3 text-brand-amber" />
              <span>01784 694898</span>
            </a>
            <span className="text-slate-600">•</span>
            <a 
              href={BUSINESS_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:brightness-110 flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp: 07412 895092</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-md border-b border-surface-border transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo & Subtitle */}
          <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber rounded-lg p-1">
            <div className="relative w-11 h-11 rounded-full overflow-hidden bg-surface border border-surface-border p-1 group-hover:border-brand-amber transition-colors">
              <Image
                src="/images/brand/logo.png"
                alt="Shine Auto Centre Logo"
                width={44}
                height={44}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-lg leading-tight tracking-tight text-white group-hover:text-brand-amber transition-colors">
                SHINE AUTO CENTRE
              </span>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide">
                Stanwell • Ashford (TW15 3AE)
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-white bg-surface-raised border border-brand-amber/30"
                      : "text-slate-300 hover:text-white hover:bg-surface/80"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Actions & Status Badge */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Live Open / Closed indicator */}
            <div 
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${
                status.isOpen 
                  ? "bg-emerald-950/60 text-emerald-300 border-emerald-500/30"
                  : "bg-surface-raised text-slate-400 border-surface-border"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? "bg-emerald-400 animate-pulse" : "bg-slate-500"}`} />
              <span>{status.statusBadge}</span>
            </div>

            {/* Direct Call Button */}
            <a
              href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`}
              className="flex items-center gap-2 bg-surface-raised hover:bg-surface-elevated text-white border border-surface-border hover:border-brand-amber/50 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all min-h-[44px]"
              aria-label={`Call workshop on ${BUSINESS_CONFIG.phoneLandline}`}
            >
              <Phone className="w-4 h-4 text-brand-amber" />
              <span className="hidden md:inline font-mono text-xs">{BUSINESS_CONFIG.phoneLandline}</span>
              <span className="md:hidden text-xs">Call</span>
            </a>

            {/* Reg Estimator Trigger CTA */}
            <Link
              href="/#estimator"
              className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-brand-amber to-brand-amber-hover text-slate-950 font-black px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md shadow-brand-amber/20 hover:brightness-110 min-h-[44px]"
            >
              <span>Reg Estimator</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-surface border border-surface-border min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-20 z-30 bg-background/98 backdrop-blur-xl lg:hidden border-b border-surface-border overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="p-6 flex flex-col gap-5 max-w-md mx-auto">
            
            {/* Live Status on Mobile */}
            <div className={`flex items-center gap-2.5 p-3.5 rounded-2xl border ${
              status.isOpen 
                ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-300"
                : "bg-surface border-surface-border text-slate-300"
            }`}>
              <Clock className="w-4 h-4 text-brand-amber shrink-0" />
              <div className="flex flex-col text-xs">
                <span className="font-bold">{status.statusText} • {status.statusBadge}</span>
                <span className="text-slate-400">{status.nextOpenText}</span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-bold text-slate-200 hover:bg-surface border border-surface-border/60 transition-colors min-h-[48px]"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-5 h-5 text-brand-amber opacity-80" />
                </Link>
              ))}
            </nav>

            {/* Instant Reg Estimate Trigger */}
            <Link
              href="/#estimator"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-amber to-brand-amber-hover text-slate-950 font-black py-4 px-6 rounded-2xl shadow-lg shadow-brand-amber/20 text-center min-h-[52px]"
            >
              <span>Instant Reg Plate Estimate 🇬🇧</span>
              <ChevronRight className="w-5 h-5" />
            </Link>

            {/* WhatsApp Photos Trigger */}
            <a
              href="https://wa.me/447412895092?text=Hi%20Shine%20Auto,%20I'd%20like%20a%20quote%20for%20my%20car"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-emerald-600 text-slate-950 font-black py-4 px-6 rounded-2xl shadow-lg shadow-emerald-500/20 text-center min-h-[52px]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Damage Photos (Fast)</span>
            </a>

            {/* Direct Workshop Contact Info */}
            <div className="text-xs text-slate-400 pt-3 border-t border-surface-border text-center">
              <p className="font-semibold text-slate-300">540-542 London Rd, Stanwell, Ashford TW15 3AE</p>
              <p className="mt-1 font-mono text-brand-amber">01784 694898 • 07412 895092</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
