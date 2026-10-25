"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, CheckCircle2 } from "lucide-react";
import { FAQS, FaqItem } from "@/lib/business";

export function FaqAccordion({ limit }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Quotes & Process", "Repairs & Paint", "Booking & Practical"];

  const filteredFaqs = FAQS.filter(f => {
    if (selectedCategory === "All") return true;
    return f.category === selectedCategory;
  });

  const displayFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      
      {/* Category Pills (Only show if no limit specified) */}
      {!limit && (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all min-h-[40px] ${
                selectedCategory === cat
                  ? "bg-brand-blue text-white border-brand-blue-glow shadow-md shadow-brand-blue/20"
                  : "bg-surface hover:bg-surface-raised text-slate-300 border-surface-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Accordion List */}
      <div className="space-y-3" role="region" aria-label="Frequently Asked Questions">
        {displayFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const headingId = `faq-heading-${idx}`;
          const contentId = `faq-content-${idx}`;

          return (
            <div
              key={faq.question}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                isOpen 
                  ? "bg-surface-raised border-brand-blue/40 shadow-md"
                  : "bg-surface hover:bg-surface-raised/60 border-surface-border"
              }`}
            >
              <h3>
                <button
                  id={headingId}
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-white text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-glow min-h-[52px]"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-blue-glow shrink-0 transition-transform duration-200 ${
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
                  
                  {/* Subtle Confirmation Indicator */}
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Based on official Shine Auto Centre service standards</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
