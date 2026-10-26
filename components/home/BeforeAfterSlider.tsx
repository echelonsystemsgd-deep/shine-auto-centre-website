"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { 
  ArrowLeftRight, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Sparkles, 
  Wrench, 
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export interface GalleryShowcaseItem {
  id: string;
  category: string;
  title: string;
  vehicle: string;
  turnaround: string;
  damageType: string;
  repairedWith: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

const SHOWCASE_CASES: GalleryShowcaseItem[] = [
  {
    id: "bumper-repair",
    category: "Bumper SMART Repair",
    title: "Rear Bumper Impact & Corner Scuff",
    vehicle: "BMW Saloon",
    turnaround: "Same Day (6 Hours)",
    damageType: "Deep plastic fracture, corner road rash and dislodged bumper alignment clip.",
    repairedWith: "Thermoplastic structural welding, computerized PPG paint matching, and baked high-gloss clearcoat.",
    beforeImage: "/images/gallery/pair-6-before.webp",
    afterImage: "/images/gallery/pair-6-after.webp",
    beforeAlt: "BMW rear bumper impact damage and deep corner scuff before repair at Shine Auto Centre",
    afterAlt: "BMW rear bumper completely restored with flawless factory finish at Shine Auto Centre",
  },
  {
    id: "dent-scratch",
    category: "Dent & Scratch Removal",
    title: "Quarter Panel Crease & Paint Scrape",
    vehicle: "Mercedes-Benz C-Class",
    turnaround: "24 Hours",
    damageType: "Car park door crease dent with deep paint transfer penetrating the clearcoat.",
    repairedWith: "Paintless dent pulling (PDR), primer leveling, micro-spray color blending, and machine polish.",
    beforeImage: "/images/gallery/pair-2-before.webp",
    afterImage: "/images/gallery/pair-2-after.webp",
    beforeAlt: "Mercedes-Benz quarter panel crease dent and scratch before repair at Shine Auto Centre",
    afterAlt: "Mercedes-Benz quarter panel smooth factory finish after repair at Shine Auto Centre",
  },
  {
    id: "alloy-refurb",
    category: "Alloy Wheel Refurbishment",
    title: "Kerbed Diamond-Cut Alloy Wheel",
    vehicle: "Audi S-Line 19\" Rim",
    turnaround: "Same Day (4 Hours)",
    damageType: "Severe curb rash, rim gouging, and salt oxidation along the outer lip.",
    repairedWith: "Precision metal reprofiling, chemical degreasing, electrostatic powder coat, and UV-resistant lacquer.",
    beforeImage: "/images/gallery/pair-7-before.webp",
    afterImage: "/images/gallery/pair-7-after.webp",
    beforeAlt: "Kerbed alloy wheel with severe rim rash before refurbishment at Shine Auto Centre",
    afterAlt: "Refurbished alloy wheel in showroom condition after restoration at Shine Auto Centre",
  },
  {
    id: "respray-lacquer",
    category: "Full Panel Respray",
    title: "Bonnet & Wing Multi-Panel Respray",
    vehicle: "Volkswagen Golf GTI",
    turnaround: "48 Hours",
    damageType: "Heavy stone chip pitting, peeling lacquer coat, and sun-bleached front panels.",
    repairedWith: "Double-stage rotary sanding, epoxy primer, spectrophotometer color formula, and infrared oven cure.",
    beforeImage: "/images/gallery/pair-4-before.webp",
    afterImage: "/images/gallery/pair-4-after.webp",
    beforeAlt: "Car bonnet and front wing paint damage before respray at Shine Auto Centre",
    afterAlt: "High-gloss mirror paint finish on car bonnet after spray booth bake at Shine Auto Centre",
  },
  {
    id: "collision-rebuild",
    category: "Accident Collision Repair",
    title: "Front Wing & Panel Alignment",
    vehicle: "BMW 3 Series",
    turnaround: "3 Days",
    damageType: "Major collision impact deformities, buckled wing metal, and shattered mounting points.",
    repairedWith: "Hydraulic chassis alignment, replacement OEM brackets, structural panel reshape, and factory respray.",
    beforeImage: "/images/gallery/pair-10-before.webp",
    afterImage: "/images/gallery/pair-10-after.webp",
    beforeAlt: "BMW 3 Series accident impact damage before reconstruction at Shine Auto Centre",
    afterAlt: "BMW 3 Series perfectly aligned and painted after collision repair at Shine Auto Centre",
  },
];

export function BeforeAfterSlider() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = SHOWCASE_CASES[activeCaseIndex];

  // Calculate position from mouse or touch event
  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const clamped = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPosition(Math.round(clamped * 10) / 10);
  }, []);

  // Pointer event handlers with PointerCapture for silky-smooth drag without boundary loss
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
      
      {/* Category Tab Selector for Real Workshop Repairs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none select-none">
        {SHOWCASE_CASES.map((item, idx) => {
          const isActive = idx === activeCaseIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 min-h-[44px] flex items-center gap-2 border ${
                isActive
                  ? "bg-brand-amber text-slate-950 border-brand-amber shadow-lg shadow-brand-amber/20 scale-[1.02]"
                  : "bg-surface hover:bg-surface-raised text-slate-300 hover:text-white border-surface-border"
              }`}
            >
              <span>{item.category}</span>
            </button>
          );
        })}
      </div>

      {/* Featured Job Header & Caption */}
      <div className="bg-surface p-5 sm:p-6 rounded-2xl border border-surface-border flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-amber/15 text-brand-amber border border-brand-amber/30">
              {activeCase.vehicle}
            </span>
            <div className="inline-flex items-center gap-1 text-xs text-emerald-400 font-mono font-semibold bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
              <Clock className="w-3.5 h-3.5" />
              <span>{activeCase.turnaround}</span>
            </div>
            <span className="text-xs text-slate-400">• Stanwell Workshop Repair</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {activeCase.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            <strong className="text-amber-400">Damage:</strong> {activeCase.damageType}{" "}
            <span className="text-slate-400">|</span>{" "}
            <strong className="text-emerald-400">Repair:</strong> {activeCase.repairedWith}
          </p>
        </div>

        <a
          href="#estimator"
          className="inline-flex items-center justify-center gap-2 text-xs font-black bg-gradient-to-r from-brand-amber to-brand-amber-hover text-slate-950 px-5 py-3 rounded-xl transition-transform hover:scale-105 active:scale-98 shadow-md shadow-brand-amber/20 self-start md:self-center shrink-0 min-h-[48px]"
        >
          <Sparkles className="w-4 h-4 text-slate-950" />
          <span>Get Quote for Similar Damage</span>
        </a>
      </div>

      {/* Interactive Split Comparison Viewport */}
      <div className="relative flex flex-col gap-3">
        <div
          ref={containerRef}
          role="slider"
          aria-label="Interactive before and after car repair comparison"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={sliderPosition}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          style={{ touchAction: "none" }}
          className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border-2 border-surface-border bg-slate-950 cursor-ew-resize select-none focus:outline-none focus:ring-2 focus:ring-brand-amber group"
        >
          {/* LAYER 1 (BOTTOM): AFTER IMAGE (Factory Restored) */}
          <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
            <Image
              src={activeCase.afterImage}
              alt={activeCase.afterAlt}
              fill
              className="object-cover object-center pointer-events-none"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
            {/* After Floating Badge */}
            <div className="absolute top-4 right-4 z-10 bg-emerald-950/90 backdrop-blur-md text-emerald-300 border border-emerald-500/40 text-[11px] sm:text-xs font-black px-3 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 pointer-events-none transition-opacity duration-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>AFTER: FACTORY FINISH</span>
            </div>
          </div>

          {/* LAYER 2 (TOP): BEFORE IMAGE (Initial Damage) */}
          {/* Uses CSS clipPath so BOTH images remain identically scaled with ZERO stretching or squishing */}
          <div
            className="absolute inset-0 w-full h-full select-none pointer-events-none overflow-hidden"
            style={{
              clipPath: `polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%)`,
              WebkitClipPath: `polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%)`,
              transition: isDragging ? "none" : "clip-path 0.15s ease-out",
            }}
          >
            <Image
              src={activeCase.beforeImage}
              alt={activeCase.beforeAlt}
              fill
              className="object-cover object-center pointer-events-none"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
            {/* Before Floating Badge */}
            <div className="absolute top-4 left-4 z-10 bg-amber-950/90 backdrop-blur-md text-amber-300 border border-amber-500/40 text-[11px] sm:text-xs font-black px-3 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 pointer-events-none transition-opacity duration-200">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>BEFORE: DAMAGE</span>
            </div>
          </div>

          {/* DIVIDER VERTICAL LINE */}
          <div
            className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] pointer-events-none"
            style={{
              left: `${sliderPosition}%`,
              transition: isDragging ? "none" : "left 0.15s ease-out",
            }}
          >
            {/* Circular Tactile Grip Handle */}
            <div 
              className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-950 text-brand-amber shadow-[0_0_24px_rgba(0,0,0,0.8)] flex items-center justify-center border-2 border-brand-amber transition-transform duration-150 ${
                isDragging ? "scale-115 ring-4 ring-brand-amber/40" : "group-hover:scale-105"
              }`}
            >
              <div className="flex items-center gap-0.5">
                <ChevronLeft className="w-4 h-4 text-brand-amber -mr-1" />
                <div className="w-0.5 h-4 bg-brand-amber/60 rounded-full" />
                <ChevronRight className="w-4 h-4 text-brand-amber -ml-1" />
              </div>
            </div>
          </div>

          {/* Drag Overlay Hint */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 bg-black/85 backdrop-blur-md text-slate-200 text-[11px] font-semibold px-4 py-1.5 rounded-full border border-slate-700 pointer-events-none shadow-md flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
            <ArrowLeftRight className="w-3.5 h-3.5 text-brand-amber" />
            <span>Drag slider or tap anywhere to inspect repair</span>
          </div>

          {/* Invisible Native Range Input for ARIA Accessibility */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            aria-label="Before and after split comparison percentage"
            className="sr-only"
          />
        </div>

        {/* Quick Jump Buttons (One-Tap 100% Before, 50/50 Split, 100% After) */}
        <div className="flex items-center justify-between text-xs text-slate-400 px-1 pt-1">
          <button
            type="button"
            onClick={() => setSliderPosition(100)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
              sliderPosition >= 95
                ? "bg-amber-950/60 text-amber-300 border-amber-500/50 font-bold"
                : "bg-surface hover:bg-surface-raised text-slate-300 border-surface-border"
            }`}
          >
            ← View 100% Before
          </button>

          <button
            type="button"
            onClick={() => setSliderPosition(50)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
              sliderPosition >= 45 && sliderPosition <= 55
                ? "bg-brand-amber/20 text-brand-amber border-brand-amber/50 font-bold"
                : "bg-surface hover:bg-surface-raised text-slate-300 border-surface-border"
            }`}
          >
            50/50 Split View
          </button>

          <button
            type="button"
            onClick={() => setSliderPosition(0)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
              sliderPosition <= 5
                ? "bg-emerald-950/60 text-emerald-300 border-emerald-500/50 font-bold"
                : "bg-surface hover:bg-surface-raised text-slate-300 border-surface-border"
            }`}
          >
            View 100% After →
          </button>
        </div>
      </div>

    </div>
  );
}
