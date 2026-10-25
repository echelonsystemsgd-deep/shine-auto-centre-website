"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { ArrowLeftRight, CheckCircle2, ChevronLeft, ChevronRight, Clock, Sparkles } from "lucide-react";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-5">
      
      {/* Featured Job Header & Caption */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface p-5 rounded-2xl border border-surface-border">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-bold px-3 py-0.5 rounded-full bg-brand-amber/15 text-brand-amber border border-brand-amber/30">
              Featured Damage Recovery
            </span>
            <div className="flex items-center gap-1 text-xs text-emerald-400 font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>Turnaround: 24 Hours</span>
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
            BMW 4 Series Rear Quarter &amp; Bumper Respray
          </h3>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Deep bumper scrape, cracked paint, and dented wing restored to a flawless, factory-mirror finish baked in our Stanwell spray booth.
          </p>
        </div>

        <a
          href="#estimator"
          className="inline-flex items-center gap-1.5 text-xs font-bold bg-surface-raised hover:bg-surface-elevated text-brand-amber border border-surface-border px-4 py-2.5 rounded-xl transition-colors self-start sm:self-center shrink-0 min-h-[44px]"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-amber" />
          <span>Get Quote for Similar Damage</span>
        </a>
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
        {/* AFTER Image (Right Layer / Flawless Factory Finish) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/gallery/pair-11-after.webp"
            alt="BMW 4 Series repaired with factory mirror finish at Shine Auto Centre"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
          <div className="absolute top-4 right-4 z-10 bg-emerald-950/90 backdrop-blur-md text-emerald-300 border border-emerald-500/40 text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 pointer-events-none">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>AFTER: FACTORY-MIRROR FINISH</span>
          </div>
        </div>

        {/* BEFORE Image (Left Layer / Deep Bumper Scrape) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-[100%]">
            <Image
              src="/images/gallery/pair-11-before.webp"
              alt="BMW 4 Series with bumper scrape and dented wing before repair at Shine Auto Centre"
              fill
              className="object-cover object-left"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
            <div className="absolute top-4 left-4 z-10 bg-amber-950/90 backdrop-blur-md text-amber-300 border border-amber-500/40 text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg pointer-events-none">
              BEFORE: DEEP SCRAPE &amp; DENT
            </div>
          </div>
        </div>

        {/* Divider Slider Handle */}
        <div
          className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_16px_rgba(0,0,0,0.9)] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 text-brand-amber shadow-2xl flex items-center justify-center border-2 border-brand-amber">
            <ArrowLeftRight className="w-4 h-4 text-brand-amber" />
          </div>
        </div>

        {/* Drag Hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 bg-slate-950/80 backdrop-blur-md text-slate-300 text-xs font-medium px-4 py-1.5 rounded-full border border-slate-700 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
          Drag slider or tap to compare before &amp; after
        </div>
      </div>

    </div>
  );
}
