import React from "react";
import Link from "next/link";
import { Send, Clock, Wrench, ChevronRight } from "lucide-react";
import { BUSINESS_CONFIG } from "@/lib/business";

export function WhatHappensNext() {
  const steps = [
    {
      num: "01",
      icon: Send,
      title: "1. Request Your Quote",
      description: "Select your repair, provide your name and phone number, and optionally attach a photo or message us on WhatsApp.",
    },
    {
      num: "02",
      icon: Clock,
      title: "2. Fast Accurate Estimate",
      description: "Our technicians inspect the damage and calculate parts & labor. We usually respond in under 2 hours during working hours.",
    },
    {
      num: "03",
      icon: Wrench,
      title: "3. Drop Off & Repair",
      description: "Bring your car to our Stanwell workshop (540-542 London Rd). We restore your vehicle with factory-grade color matching.",
    },
  ];

  return (
    <section className="py-16 bg-surface-raised/40 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-glow">
            Simple 3-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            What Happens Next
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            No endless back-and-forth or hidden surprises. Here is exactly what happens from your initial quote to getting your car back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="bg-surface border border-surface-border p-6 rounded-2xl relative flex flex-col justify-between hover:border-brand-blue/40 transition-colors shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/30 text-brand-blue-light flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-700">{st.num}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{st.description}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-surface-border/50 flex items-center justify-between text-xs text-slate-400">
                  {idx === 0 && <span>Takes less than 2 minutes</span>}
                  {idx === 1 && <span className="text-emerald-400 font-medium">Under 2h guarantee</span>}
                  {idx === 2 && <span>Stanwell, TW15 3AE</span>}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
