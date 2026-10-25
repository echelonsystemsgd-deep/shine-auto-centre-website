"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, Clock, ChevronRight } from "lucide-react";
import { BUSINESS_CONFIG, getGarageStatus } from "@/lib/business";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState(() => getGarageStatus());
  const pathname = usePathname();

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getGarageStatus());
    }, 60000); // Check every minute
    return () => clearInterval(timer);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Before & After", href: "/gallery" },
    { name: "FAQs", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-md border-b border-surface-border transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo & Subtitle */}
          <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-glow rounded-lg p-1">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-surface border border-surface-border p-1 group-hover:border-brand-blue transition-colors">
              <Image
                src="/images/brand/logo.png"
                alt="Shine Auto Centre Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-lg leading-tight tracking-tight text-white group-hover:text-brand-blue-glow transition-colors">
                SHINE AUTO CENTRE
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Stanwell • Ashford
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white bg-surface-raised border border-brand-blue/30"
                      : "text-slate-300 hover:text-white hover:bg-surface/60"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-glow`}
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
                  : "bg-slate-900/80 text-slate-400 border-slate-700/50"
              }`}
              title={status.nextOpenText}
            >
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? "bg-emerald-400 animate-pulse" : "bg-slate-500"}`} />
              <span>{status.statusBadge}</span>
            </div>

            {/* Direct Call Button (Visible on all screen sizes) */}
            <a
              href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`}
              className="flex items-center gap-2 bg-surface-raised hover:bg-surface-elevated text-white border border-surface-border hover:border-brand-blue/50 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-glow min-h-[44px]"
              aria-label={`Call Shine Auto Centre on ${BUSINESS_CONFIG.phoneLandline}`}
            >
              <Phone className="w-4 h-4 text-brand-blue-light" />
              <span className="hidden md:inline font-mono text-xs">{BUSINESS_CONFIG.phoneLandline}</span>
              <span className="md:hidden text-xs">Call</span>
            </a>

            {/* Get a Quote Header CTA */}
            <Link
              href="/quote"
              className="hidden sm:inline-flex items-center gap-1.5 bg-brand-blue hover:bg-brand-blue-hover text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-brand-blue/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-glow min-h-[44px]"
            >
              <span>Get my quote</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-surface border border-surface-border min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-glow"
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
          className="fixed inset-0 top-20 z-30 bg-background/95 backdrop-blur-xl lg:hidden border-b border-surface-border overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="p-6 flex flex-col gap-6 max-w-md mx-auto">
            
            {/* Live Status on Mobile */}
            <div className={`flex items-center gap-2 p-3 rounded-xl border ${
              status.isOpen 
                ? "bg-emerald-950/40 border-emerald-500/20 text-emerald-300"
                : "bg-surface border-surface-border text-slate-300"
            }`}>
              <Clock className="w-4 h-4 text-brand-blue-light shrink-0" />
              <div className="flex flex-col text-xs">
                <span className="font-semibold">{status.statusText} • {status.statusBadge}</span>
                <span className="text-slate-400">{status.nextOpenText}</span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all min-h-[48px] ${
                      isActive 
                        ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20"
                        : "text-slate-200 hover:bg-surface border border-surface-border/50"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-5 h-5 opacity-70" />
                  </Link>
                );
              })}
            </nav>

            {/* Quote Primary CTA */}
            <Link
              href="/quote"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-amber to-brand-amber-hover text-slate-950 font-bold py-4 px-6 rounded-xl shadow-lg shadow-brand-amber/20 text-center min-h-[52px]"
            >
              <span>Get My Quote (Under 2h Reply)</span>
              <ChevronRight className="w-5 h-5" />
            </Link>

            {/* Direct Contact Options */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`}
                className="flex items-center justify-center gap-2 bg-surface-raised border border-surface-border py-3.5 px-4 rounded-xl text-white font-medium text-sm hover:border-brand-blue transition-colors min-h-[48px]"
              >
                <Phone className="w-4 h-4 text-brand-blue-light" />
                <span>Call Workshop</span>
              </a>
              <a
                href={BUSINESS_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-surface-raised border border-surface-border py-3.5 px-4 rounded-xl text-white font-medium text-sm hover:border-emerald-500 transition-colors min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Location & Times info */}
            <div className="text-xs text-slate-400 pt-4 border-t border-surface-border text-center">
              <p className="font-semibold text-slate-300">{BUSINESS_CONFIG.address.full}</p>
              <p className="mt-1">Mon - Sat: 9:00 AM – 6:00 PM • Closed Sunday</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
