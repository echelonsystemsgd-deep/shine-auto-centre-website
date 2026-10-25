# Shine Auto Centre — High-Converting Bodyshop Web Application

> **Ultra-modern, mobile-first web prototype for Shine Auto Centre (Ashford & Stanwell, Surrey TW15 3AE). Designed to eliminate intake drop-off with an instant UK Vehicle Reg Plate Lookup and 1-Click WhatsApp Photo Damage Estimator.**

[![Next.js 15](https://img.shields.io/badge/Next.js-15.5.28-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Tests-16%20Passed-brightgreen?style=flat&logo=vitest)](https://vitest.dev/)

---

## 🚀 Key Innovations & Features

### 1. 2-Step Smart Repair & DVLA Estimator
Replaces friction-heavy 8-field forms with an interactive, instant intake experience:
- **UK Yellow Registration Plate Lookup**: Interactive number plate box `[ 🇬🇧 UK | LL68 ABC ]` that validates registrations and displays instant vehicle specifications (Year, Make, Model, Factory Color).
- **Interactive Service Pills**: 7 clear options (Dent PDR, Bumper Scuff, Full Respray, Alloy Refurb, Collision, Servicing, Brakes) with transparent price anchors and turnaround expectations.
- **1-Click WhatsApp Bridge**: Generates pre-populated WhatsApp messages with vehicle year, make, model, reg, and selected repair to enable effortless photo damage submission in seconds.
- **Direct Upload Route**: Alternative drag-and-drop photo uploader with preview for customers preferring web intake.

### 2. Interactive Before & After Damage Recovery Slider
- Draggable split-screen comparison slider showcasing real bodyshop restorations.
- Highlighted case: *BMW 4 Series Rear Quarter & Bumper Respray — Turnaround: 24 Hours*.
- Full mobile touch drag support and responsive layout.

### 3. Clear Service Pillars & Transparent Pricing Anchors
6 core service cards with real workshop photos, price guidelines, and turnaround metrics:
- **Dent & Scratch Repair** — from £95 (Same-day turnaround)
- **Bumper Repair** — from £145 (Same-day turnaround)
- **Alloy Wheel Refurbishment** — from £65 / wheel (Same-day turnaround)
- **Full Panel Respray** — from £220 / panel (24–48 hours)
- **Accident Collision Repair** — Free Insurance Estimate (Priority turnaround)
- **Interim & Full Servicing** — from £119 (Same-day turnaround)

### 4. 100% Thumb-Zone Mobile Ergonomics
- **Fixed 50/50 Mobile Action Bar** on viewports `< 768px` featuring **Call Garage** (`01784 694898`) and **WhatsApp Photos** (`07412 895092`).
- 48px+ minimum touch targets, zero layout shift, input font sizes ≥16px to prevent iOS auto-zoom.
- Safe-area inset integration for notch devices.

### 5. Objection-Busting FAQ Accordion
- 5 targeted answers addressing turnaround speed, free quotes, required details, pricing transparency, and WhatsApp damage assessment.

### 6. Workshop Location & Google Map
- 540-542 London Rd, Stanwell, Ashford TW15 3AE.
- 1-click Google Maps GPS directions, on-site parking instructions, and live London-time open/closed status indicator.

---

## 🛠 Tech Stack

- **Framework**: Next.js 15.5.28 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v3 with Stealth Dark automotive palette (`#0B0B0D`, `#141417`, `#1C1C22`, `#F59E0B`, `#25D366`)
- **Animation**: Framer Motion (GPU accelerated, reduced-motion accessible)
- **Icons**: Lucide React
- **Testing**: Vitest 3.2.7

---

## 📋 Verified Business Facts (`/lib/business.ts`)

- **Name**: Shine Auto Centre
- **Legal Entity**: Shine Auto Bodyworks LTD
- **Address**: 540-542 London Rd, Stanwell, Ashford TW15 3AE
- **Landline**: 01784 694898 (`tel:+441784694898`)
- **Mobile / WhatsApp**: 07412 895092 (`https://wa.me/447412895092`)
- **Email**: info@shineauto.co.uk
- **Hours**: Monday – Saturday: 9:00 AM – 6:00 PM (Closed Sundays)
- **Turnaround Claim**: *"We usually respond in under 2 hours during working hours."*

---

## 🧪 Testing & Verification

Run the automated test suite:
```bash
npm run test
```

Run TypeScript compilation check:
```bash
npm run typecheck
```

Build for production:
```bash
npm run build
```

**Results:**
- **16/16 Vitest tests passing**
- **0 TypeScript errors**
- **23/23 static pages compiled successfully**

---

## 📦 Deployment

This repository is configured for automatic Vercel preview and production deployments.
- Next.js is pinned to `15.5.28` resolving previous dependency security blocks.
- Optimized for lightning-fast Edge delivery and zero serverless cold starts.
