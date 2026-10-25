import React from "react";
import type { Metadata } from "next";
import { BUSINESS_CONFIG } from "@/lib/business";
import Link from "next/link";
import { Cookie, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Shine Auto Centre Ashford",
  description: "Cookie policy for Shine Auto Centre. Learn how cookies and local browser storage are used on our website prototype.",
};

export default function CookiesPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-glow">Compliance</span>
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
            <h2 className="text-lg font-bold text-white mb-2">4. How to Control Cookies</h2>
            <p>
              You can instruct your web browser to delete or refuse cookies by adjusting your browser settings (Chrome, Safari, Edge, Firefox). Please note that disabling essential cookies may impact interactive features such as the 3-step quote form.
            </p>
          </section>

          <section className="pt-4 border-t border-surface-border">
            <h2 className="text-lg font-bold text-white mb-2">5. Contact Us</h2>
            <p>
              If you have questions regarding our use of cookies, contact us at <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-brand-blue-glow hover:underline">{BUSINESS_CONFIG.email}</a>.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
