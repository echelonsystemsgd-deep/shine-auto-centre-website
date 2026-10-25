import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  AlertCircle
} from "lucide-react";
import { SERVICES, BUSINESS_CONFIG, getSiteUrl } from "@/lib/business";
import { ServiceIcon } from "@/components/icons/BrandIcons";
import { WhatHappensNext } from "@/components/home/WhatHappensNext";
import { ClosingCta } from "@/components/home/ClosingCta";

const siteUrl = getSiteUrl();

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const title = `${service.title} | Stanwell & Ashford Bodyshop`;
  const description = `${service.shortDescription} Located at 540-542 London Rd, Stanwell TW15 3AE. Free quotes in under 2 hours.`.slice(0, 155);

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Shine Auto Centre Ashford`,
      description,
      url: `${siteUrl}/services/${slug}`,
      siteName: "Shine Auto Centre",
      locale: "en_GB",
      type: "article",
      images: [
        {
          url: `${siteUrl}/api/og?title=${encodeURIComponent(service.title)}&subtitle=Stanwell%20%26%20Ashford%20TW15%203AE%20%E2%80%A2%20Fast%202-Hour%20Quotes`,
          width: 1200,
          height: 630,
          alt: `${service.title} - Shine Auto Centre`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Shine Auto Centre Ashford`,
      description,
      images: [`${siteUrl}/api/og?title=${encodeURIComponent(service.title)}&subtitle=Stanwell%20%26%20Ashford%20TW15%203AE%20%E2%80%A2%20Fast%202-Hour%20Quotes`],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "AutoRepair",
      name: BUSINESS_CONFIG.name,
      telephone: BUSINESS_CONFIG.phoneLandlineRaw,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS_CONFIG.address.line1,
        addressLocality: BUSINESS_CONFIG.address.town,
        postalCode: BUSINESS_CONFIG.address.postcode,
        addressCountry: "GB",
      },
    },
    areaServed: ["Stanwell", "Ashford", "Staines-upon-Thames", "Heathrow"],
    url: `${siteUrl}/services/${service.slug}`,
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      
      {/* Service Hero */}
      <section className="py-12 sm:py-20 border-b border-surface-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-medium">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-amber/15 border border-brand-amber/30 text-brand-amber text-xs font-bold">
                  <ServiceIcon slug={service.slug} className="w-3.5 h-3.5" />
                  <span>{service.category} • Stanwell &amp; Ashford</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {service.title} in Ashford
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                {service.heroSnippet}
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <Clock className="w-4 h-4" />
                <span>{BUSINESS_CONFIG.responseClaim}</span>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={`/quote?service=${service.slug}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-amber to-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl text-base shadow-xl shadow-brand-amber/20 hover:brightness-110 active:scale-98 transition-all min-h-[50px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
                >
                  <span>Get quote for this repair</span>
                  <ChevronRight className="w-5 h-5 text-slate-950" />
                </Link>

                <a
                  href={`${BUSINESS_CONFIG.whatsappLink}?text=${encodeURIComponent(
                    `Hello Shine Auto Centre, I'd like a quote for ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface-raised hover:bg-surface-elevated text-white border border-surface-border hover:border-emerald-500/50 px-6 py-4 rounded-xl text-sm font-semibold transition-all min-h-[50px]"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span>Send Photos on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Service Image / Tile */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-surface-border shadow-2xl bg-slate-900">
                <Image
                  src={service.image}
                  alt={service.altText}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-surface/90 backdrop-blur-md border border-surface-border flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Workshop Location:</span>
                    <span className="text-xs text-white font-bold">{BUSINESS_CONFIG.address.full}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-400 block font-medium">Pricing Anchor:</span>
                    <span className="text-xs text-brand-amber font-mono font-black">{service.startingPrice || "Free Estimate"}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Detail breakdown: What We Do & When You Need It */}
      <section className="py-16 sm:py-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* What we do */}
            <div className="bg-surface border border-surface-border p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-amber/15 border border-brand-amber/30 text-brand-amber flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  What Our Technicians Do
                </h2>
              </div>

              <ul className="space-y-4">
                {service.whatWeDo.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* When you need it */}
            <div className="bg-surface border border-surface-border p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-amber/15 border border-brand-amber/30 text-brand-amber flex items-center justify-center">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  When Your Vehicle Needs This
                </h2>
              </div>

              <ul className="space-y-4">
                {service.whenYouNeedIt.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber shrink-0 mt-2" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* How we quote guarantee */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-surface to-surface-raised border border-surface-border flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-amber block mb-1">
                Transparent Pricing Guarantee
              </span>
              <h3 className="text-lg font-bold text-white">How We Quote For {service.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {service.howWeQuote}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneLandlineRaw}`}
                className="inline-flex items-center gap-2 bg-surface hover:bg-surface-border text-white text-xs font-bold px-5 py-3 rounded-xl border border-surface-border transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-brand-amber" />
                <span>Call {BUSINESS_CONFIG.phoneLandline}</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Standard roadmap */}
      <WhatHappensNext />

      {/* Global Closing CTA */}
      <ClosingCta />

    </div>
  );
}
