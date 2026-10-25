import React from "react";
import type { Metadata } from "next";
import { BUSINESS_CONFIG } from "@/lib/business";
import Link from "next/link";
import { ShieldCheck, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Shine Auto Bodyworks LTD",
  description: "Privacy policy for Shine Auto Centre (Shine Auto Bodyworks LTD). Learn how we handle your personal data when requesting car repair quotes.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-glow">Legal Policy</span>
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
              <li>Contacting you via telephone, SMS, or WhatsApp regarding your requested quotation.</li>
              <li>Scheduling workshop appointments and servicing bookings at our Stanwell facility.</li>
              <li>Complying with statutory accounting and legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">4. Data Sharing &amp; Third Parties</h2>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal information to third-party advertisers. Data is only shared where necessary to service your vehicle (such as ordering specialist manufacturer parts with approved UK automotive distributors) or where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">5. Data Retention &amp; Security</h2>
            <p>
              We apply technical and organisational measures to protect your personal details against unauthorised access, alteration, or loss. Quote requests are retained only as long as necessary to facilitate your repair booking and satisfy legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">6. Your Rights</h2>
            <p>
              Under UK data protection law, you have the right to request access to your personal information, request corrections to inaccurate records, request deletion of your data, or object to processing. To exercise any of these rights, contact our Data Protection Officer at {BUSINESS_CONFIG.email}.
            </p>
          </section>

          <section className="pt-4 border-t border-surface-border">
            <h2 className="text-lg font-bold text-white mb-2">7. Contact Details</h2>
            <p>For any questions or privacy enquiries, please write to us at:</p>
            <div className="mt-3 p-4 bg-surface-raised rounded-xl border border-surface-border text-xs space-y-1">
              <p><strong>{BUSINESS_CONFIG.legalName}</strong></p>
              <p>{BUSINESS_CONFIG.address.full}</p>
              <p>Email: <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-brand-blue-glow hover:underline">{BUSINESS_CONFIG.email}</a></p>
              <p>Telephone: {BUSINESS_CONFIG.phoneLandline}</p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
