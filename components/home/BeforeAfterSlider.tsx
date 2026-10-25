"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { ArrowLeftRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export interface RepairPair {
  id: number;
  title: string;
  category: string;
  description: string;
  beforeImg: string;
  afterImg: string;
}

const REPAIR_PAIRS: RepairPair[] = [
  {
    id: 1,
    title: "Rear Quarter Panel & Bumper Dent",
    category: "Dent & Scratch Repair",
    description: "Deep crease dent and paint damage across the rear arch and bumper seam restored to factory profile.",
    beforeImg: "/images/gallery/pair-1-before.webp",
    afterImg: "/images/gallery/pair-1-after.webp",
  },
  {
    id: 2,
    title: "Side Door Collision Crease",
    category: "Bodywork & Paint Match",
    description: "Multi-point door skin impact smoothed, filled, primed, and sprayed with precision color blending.",
    beforeImg: "/images/gallery/pair-2-before.webp",
    afterImg: "/images/gallery/pair-2-after.webp",
  },
  {
    id: 3,
    title: "Front Bumper Impact Crack",
    category: "Bumper Repair",
    description: "Cracked plastic bumper welded, corner clips realigned, and color-matched clearcoat applied.",
    beforeImg: "/images/gallery/pair-3-before.webp",
    afterImg: "/images/gallery/pair-3-after.webp",
  },
  {
    id: 4,
    title: "Rear Wing Heavy Scuff & Respray",
    category: "Re-Spray & Clearcoat",
    description: "Scuffed paintwork stripped back and resprayed in our spray booth with high-gloss automotive lacquer.",
    beforeImg: "/images/gallery/pair-4-before.webp",
    afterImg: "/images/gallery/pair-4-after.webp",
  },
  {
    id: 5,
    title: "Door Panel Deep Key Scratch",
    category: "Scratch Repair",
    description: "Primer-deep scratch line eliminated with precision filler and computerised paint matching.",
    beforeImg: "/images/gallery/pair-5-before.webp",
    afterImg: "/images/gallery/pair-5-after.webp",
  },
  {
    id: 6,
    title: "Rear Bumper Corner Scrape",
    category: "Bumper Restoration",
    description: "Severe parking barrier scrape repaired and repainted with seamless bodyline blending.",
    beforeImg: "/images/gallery/pair-6-before.webp",
    afterImg: "/images/gallery/pair-6-after.webp",
  },
  {
    id: 7,
    title: "Alloy Arch & Wheel Guard Scuff",
    category: "Cosmetic Repair",
    description: "Restored wheel flare contour and color matched paintwork eliminating rough abrasion.",
    beforeImg: "/images/gallery/pair-7-before.webp",
    afterImg: "/images/gallery/pair-7-after.webp",
  },
  {
    id: 8,
    title: "Tailgate Corner Split & Alignment",
    category: "Accident Repair",
    description: "Panel re-alignment and high-gloss spray finish on rear hatch assembly.",
    beforeImg: "/images/gallery/pair-8-before.webp",
    afterImg: "/images/gallery/pair-8-after.webp",
  },
  {
    id: 9,
    title: "Front Wing High-Impact Dent",
    category: "Accident Repair",
    description: "Panel pulled and reshaped back to original geometry before flawless spray and polish.",
    beforeImg: "/images/gallery/pair-9-before.webp",
    afterImg: "/images/gallery/pair-9-after.webp",
  },
  {
    id: 10,
    title: "Lower Door Sill Abrasion",
    category: "Sill & Panel Repair",
    description: "Rough road debris and kerb impact smoothed, stone-chip protected, and painted.",
    beforeImg: "/images/gallery/pair-10-before.webp",
    afterImg: "/images/gallery/pair-10-after.webp",
  },
  {
    id: 11,
    title: "Full Rear Quarter Collision Repair",
    category: "Structural Bodywork",
    description: "Major collision impact restructured, replacement panel fitted, welded, and refinished.",
    beforeImg: "/images/gallery/pair-11-before.webp",
    afterImg: "/images/gallery/pair-11-after.webp",
  },
  {
    id: 12,
    title: "Multi-Panel Paint Scratch Correction",
    category: "Polishing & Ceramic Finish",
    description: "Complete paint correction across side panels finished with protective ceramic wax gloss.",
    beforeImg: "/images/gallery/pair-12-before.webp",
    afterImg: "/images/gallery/pair-12-after.webp",
  },
];

export function BeforeAfterSlider({ initialPairId = 1 }: { initialPairId?: number }) {
  const [selectedPairIndex, setSelectedPairIndex] = useState(() => {
    const idx = REPAIR_PAIRS.findIndex(p => p.id === initialPairId);
    return idx !== -1 ? idx : 0;
  });
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activePair = REPAIR_PAIRS[selectedPairIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(clampedPos);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  const nextPair = () => {
    setSelectedPairIndex((prev) => (prev + 1) % REPAIR_PAIRS.length);
    setSliderPosition(50);
  };

  const prevPair = () => {
    setSelectedPairIndex((prev) => (prev - 1 + REPAIR_PAIRS.length) % REPAIR_PAIRS.length);
    setSliderPosition(50);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
      
      {/* Repair Selector Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface p-4 rounded-2xl border border-surface-border">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-blue/20 text-brand-blue-glow border border-brand-blue/30">
              {activePair.category}
            </span>
            <span className="text-xs text-slate-400">
              Case {selectedPairIndex + 1} of {REPAIR_PAIRS.length}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white tracking-tight">{activePair.title}</h3>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">{activePair.description}</p>
        </div>

        {/* Previous / Next Controls */}
        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
          <button
            onClick={prevPair}
            className="p-2.5 rounded-xl bg-surface-raised hover:bg-surface-elevated text-slate-200 border border-surface-border hover:border-brand-blue transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-glow"
            aria-label="View previous repair example"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextPair}
            className="p-2.5 rounded-xl bg-surface-raised hover:bg-surface-elevated text-slate-200 border border-surface-border hover:border-brand-blue transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-glow"
            aria-label="View next repair example"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Interactive Split Comparison Viewport */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-surface-border select-none touch-none bg-slate-950 cursor-ew-resize group"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        role="region"
        aria-label="Interactive Before and After image comparison"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setSliderPosition((p) => Math.max(0, p - 5));
          if (e.key === "ArrowRight") setSliderPosition((p) => Math.min(100, p + 5));
        }}
      >
        {/* AFTER Image (Full Layer at back) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={activePair.afterImg}
            alt={`${activePair.title} after completion at Shine Auto Centre`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
          <div className="absolute top-4 right-4 z-10 bg-emerald-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/40 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 pointer-events-none">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>AFTER REPAIR</span>
          </div>
        </div>

        {/* BEFORE Image (Clipped Layer on top) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-[100%]">
            <Image
              src={activePair.beforeImg}
              alt={`${activePair.title} before repair at Shine Auto Centre`}
              fill
              className="object-cover object-left"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
            <div className="absolute top-4 left-4 z-10 bg-amber-950/80 backdrop-blur-md text-amber-300 border border-amber-500/40 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg pointer-events-none">
              BEFORE REPAIR
            </div>
          </div>
        </div>

        {/* Divider Slider Handle */}
        <div
          className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)] pointer-events-none transition-opacity"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center border-2 border-brand-blue">
            <ArrowLeftRight className="w-4 h-4 text-brand-blue" />
          </div>
        </div>

        {/* Drag Hint on bottom */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 bg-slate-900/80 backdrop-blur-md text-slate-300 text-[11px] font-medium px-3 py-1 rounded-full border border-slate-700 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
          Drag slider or tap to compare
        </div>
      </div>

      {/* Thumbnail Case Switcher */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {REPAIR_PAIRS.map((pair, idx) => (
          <button
            key={pair.id}
            onClick={() => {
              setSelectedPairIndex(idx);
              setSliderPosition(50);
            }}
            className={`flex-shrink-0 px-3 py-2 rounded-xl text-xs font-semibold border transition-all text-left min-h-[44px] ${
              selectedPairIndex === idx
                ? "bg-brand-blue text-white border-brand-blue-glow shadow-md shadow-brand-blue/20"
                : "bg-surface hover:bg-surface-raised text-slate-300 border-surface-border"
            }`}
          >
            <span className="block text-[10px] text-slate-300 opacity-80">Case {idx + 1}</span>
            <span className="truncate max-w-[140px] block">{pair.title}</span>
          </button>
        ))}
      </div>

    </div>
  );
}
