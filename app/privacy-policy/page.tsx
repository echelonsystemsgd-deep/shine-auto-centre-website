import React from "react";
import type { Metadata } from "next";
import { BUSINESS_CONFIG, getSiteUrl } from "@/lib/business";
import Link from "next/link";
import { ShieldCheck, Mail, MapPin } from "lucide-react";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Privacy Policy | Shine Auto Bodyworks LTD",
  description: "Privacy policy for Shine Auto Centre (Shine Auto Bodyworks LTD). How we handle your personal data when requesting car repair estimates.",
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | Shine Auto Centre & Bodyworks",
    description: "Learn how Shine Auto Centre (Shine Auto Bodyworks LTD) protects your personal information and vehicle data under UK GDPR.",
    url: `${siteUrl}/privacy-policy`,
    siteName: "Shine Auto Centre",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Shine Auto Centre & Bodyworks",
    description: "Learn how Shine Auto Centre (Shine Auto Bodyworks LTD) protects your personal information and vehicle data under UK GDPR.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-amber">Legal Policy</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-xs mt-2">
            Last Updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })} • {BUSINESS_CONFIG.legalName}
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-300 leading-relaxed bg-surface border border-surface-border p-6 sm:p-10 rounded-3xl">
          
          <section>
            <h2 className="text-lg font-bold text-white mb-2">1. Introduction &amp; Who We Are</h2>
            <p>
              {BUSINESS_CONFIG.legalName} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), trading as {BUSINESS_CONFIG.name}, operates the workshop located at {BUSINESS_CONFIG.address.full}. We respect your privacy and are committed to protecting your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">2. Information We Collect</h2>
            <p>When you contact us or request a vehicle repair quote through our website, we may collect:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
              <li><strong>Contact Information:</strong> Your full name, telephone or mobile phone number, and optional email address.</li>
              <li><strong>Vehicle Information:</strong> Vehicle make, model, year, registration mark, and damage descriptions.</li>
              <li><strong>Photographs &amp; Video Media:</strong> Images of damaged bodywork or mechanical components voluntarily supplied to assist quoting.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">3. How We Use Your Data</h2>
            <p>We process your personal information strictly for legitimate business purposes:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
              <li>Formulating accurate parts and labor estimates for your vehicle repair.</li>
              <li>Contacting you via WhatsApp, SMS, phone, or email regarding your booking.</li>
              <li>Ordering correct paint codes, OEM or aftermarket panels, and mechanical components.</li>
              <li>Maintaining warranty and repair records.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">4. Third-Party Disclosures</h2>
            <p>
              We do not sell, rent, or trade your personal information. Data may be shared only with vetted sub-processors essential to garage operations (such as WhatsApp Business API for customer messaging and cloud hosting infrastructure).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">5. Data Retention &amp; Security</h2>
            <p>
              Repair intake records and damage photographs are retained for a maximum of 3 years following job completion for warranty validation and insurance recordkeeping, after which they are securely deleted.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">6. Your Rights</h2>
            <p>
              Under UK GDPR, you have the right to request access to, rectification of, or erasure of your personal data held by {BUSINESS_CONFIG.legalName}. To exercise these rights, please contact our data controller at <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-brand-amber underline">{BUSINESS_CONFIG.email}</a>.
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
