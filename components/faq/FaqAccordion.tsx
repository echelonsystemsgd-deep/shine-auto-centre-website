"use client";

import React, { useState } from "react";
import { ChevronDown, CheckCircle2, ShieldCheck } from "lucide-react";
import { FAQS } from "@/lib/business";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3" role="region" aria-label="Frequently Asked Questions">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const headingId = `faq-heading-${idx}`;
        const contentId = `faq-content-${idx}`;

        return (
          <div
            key={faq.question}
            className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
              isOpen 
                ? "bg-surface-raised border-brand-amber/40 shadow-lg"
                : "bg-surface hover:bg-surface-raised/70 border-surface-border"
            }`}
          >
            <h3>
              <button
                id={headingId}
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber min-h-[56px]"
              >
                <span className="leading-snug">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-amber shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>

            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={headingId}
                className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-surface-border/50 pt-3 animate-in fade-in duration-150"
              >
                <p>{faq.answer}</p>
                
                <div className="mt-3 flex items-center gap-1.5 text-xs text-brand-amber">
                  <ShieldCheck className="w-4 h-4 text-brand-amber" />
                  <span>Verified Shine Auto Centre Workshop Guarantee</span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
