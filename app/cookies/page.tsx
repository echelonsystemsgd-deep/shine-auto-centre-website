import React from "react";
import type { Metadata } from "next";
import { BUSINESS_CONFIG, getSiteUrl } from "@/lib/business";
import Link from "next/link";
import { Cookie, ShieldCheck } from "lucide-react";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Cookie Policy | Shine Auto Centre, Stanwell",
  description: "Cookie policy for Shine Auto Centre website prototype. Details on essential local storage and cookie usage for estimating car repairs.",
  alternates: {
    canonical: `${siteUrl}/cookies`,
  },
  openGraph: {
    title: "Cookie Policy | Shine Auto Centre Ashford",
    description: "Learn how Shine Auto Centre uses strictly essential session storage with zero third-party advertising cookies.",
    url: `${siteUrl}/cookies`,
    siteName: "Shine Auto Centre",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Shine Auto Centre Ashford",
    description: "Learn how Shine Auto Centre uses strictly essential session storage with zero third-party advertising cookies.",
  },
};

export default function CookiesPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-amber">Compliance</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Cookie Policy
          </h1>
          <p className="text-slate-400 text-xs mt-2">
            Last Updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })} • {BUSINESS_CONFIG.legalName}
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-300 leading-relaxed bg-surface border border-surface-border p-6 sm:p-10 rounded-3xl">
          
          <section>
            <h2 className="text-lg font-bold text-white mb-2">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your computer or mobile device when you browse websites. They help the website remember your preferences, keep navigation smooth, and ensure essential features function correctly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">2. Strictly Necessary Technical Cookies</h2>
            <p>
              This website prototype uses strictly necessary session storage to manage your interactive quote wizard progress (remembering selected service options between steps) and user interface states (such as closing prototype notices). These do not track personal browsing across external websites.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">3. Zero Third-Party Advertising Cookies</h2>
            <p>
              In accordance with our strict data privacy principles and prototype guardrails, <strong>this website does not deploy third-party advertising cookies, retargeting pixels, or invasive behavioral trackers</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">4. Managing Browser Cookies</h2>
            <p>
              You can control or disable cookies through your browser settings. However, disabling all cookies may prevent the repair wizard from functioning smoothly during your session.
            </p>
          </section>

          <div className="pt-6 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <span>Trading as {BUSINESS_CONFIG.name}</span>
            <Link href="/" className="text-brand-amber font-semibold hover:underline">
              Return to Homepage →
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
