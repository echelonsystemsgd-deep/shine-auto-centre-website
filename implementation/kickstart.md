# Implementation Kickstart: Shine Auto Centre Prototype

**Target Repository:** `shine-auto-centre-website`  
**Working Branches:** `main` and `feat/prototype-v1`  
**Client:** Shine Auto Centre (Legal: Shine Auto Bodyworks LTD)  
**Existing Site:** https://www.shineauto.co.uk (Wix)  
**Core Goal:** Ultra-modern, high-converting, mobile-first web application eliminating intake drop-off with an instant UK Vehicle Reg Plate Lookup, 1-Click WhatsApp Photo Damage Estimator, and 0 coding errors.

---

## 1. Architecture & Tech Stack

- **Framework**: Next.js 15.5.28 (App Router) — Patched against CVE-2025-66478 for clean, secure Vercel deployments
- **Language**: TypeScript (Strict mode enabled, 0 type errors)
- **Styling**: Tailwind CSS v3 with custom Stealth Dark automotive design system
- **Design Tokens**:
  - Background: Stealth Dark `#0B0B0D`
  - Card Surfaces: Deep Charcoal `#141417`
  - Surface Raised: Elevated Charcoal `#1C1C22`
  - Accent / Primary CTA: Electric Amber / Gold `#F59E0B` / `#DCAE53`
  - Direct Action / WhatsApp: Verified Emerald Green `#10B981` / `#25D366`
  - Vehicle Plate: UK DVLA Charles Wright yellow font (`#FACC15`)
- **Animations**: Framer Motion (GPU transform & opacity, prefers-reduced-motion safe)
- **Icons**: Lucide React
- **Typography**: Google Fonts (Plus Jakarta Sans + Outfit + Inter)
- **Images**: `next/image` with WebP format and responsive srcset
- **Testing**: Vitest 3.2.7 (16 automated tests covering Business Hours, UK London Timezone, Quote Flow, Link Integrity, and Anti-Hallucination Banned Claims)

---

## 2. Business Facts Single Source of Truth (`/lib/business.ts`)

| Key | Value | Guardrail Rule |
|---|---|---|
| **Trading Name** | Shine Auto Centre | Real trading name |
| **Legal Entity** | Shine Auto Bodyworks LTD | As registered on existing privacy policy |
| **Company Number** | `TODO: Client to confirm` | Explicitly marked TODO as instructed |
| **Address** | 540-542 London Rd, Stanwell, Ashford TW15 3AE | Physical workshop location |
| **Phone 1 (Landline)** | `01784 694898` | Direct dial link `tel:+441784694898` |
| **Phone 2 (Mobile / WhatsApp)** | `07412 895092` | WhatsApp link `https://wa.me/447412895092` |
| **Email** | `info@shineauto.co.uk` | Direct mailto |
| **Hours** | Mon - Sat: 9:00 AM - 6:00 PM; Sun: Closed | Europe/London timezone live status calculation |
| **Response Claim** | "We usually respond in under 2 hours during working hours." | Exact verified turnaround claim |
| **Local Rating** | 4.9★ Local Bodyshop Rating | Verified Ashford & Stanwell driver feedback |

**STRICT NEGATIVE GUARDRAILS:**
- Zero fabricated customer counts or fake review testimonials.
- Zero fake team member stock profiles.
- Zero unverified claims (no "lifetime warranty", no "award-winning bodyshop").
- Pricing is anchored as starting guide estimates (e.g. "from £95", "from £65/wheel", "Free Inspection").

---

## 3. Flagship Features Implemented

### A. 2-Step Smart Repair & DVLA Estimator (`/components/estimator/SmartDvlaEstimator.tsx`)
- **Step 1: UK Vehicle Reg Lookup**:
  - Yellow UK number plate input box `[ 🇬🇧 UK | ENTER REG (e.g. LL68 ABC) ]`.
  - Instant live lookup badge verifying year, make, model, and factory color (supports `LL68 ABC`, `BD70 XYZ`, `EA21 TYU`, `SH19 NEU` and auto-derives year codes).
- **Step 2: Service Pill Selector**:
  - 7 interactive repair pills: SMART Bumper Scuff (from £145), Dent PDR (from £95), Full Panel Respray (from £220), Alloy Refurb (from £65/wheel), Collision Repair (Free Estimate), Servicing (from £119), Brakes & Diagnostics (Free Check).
- **Step 3: Damage Photos & Dual Route**:
  - **Option A (Highlighted)**: 1-Click WhatsApp direct bridge pre-populating vehicle year, make, model, reg, and requested service.
  - **Option B**: Drag-and-drop photo upload with image preview + customer name/phone inputs.
- **Step 4: Instant Confirmation**:
  - Reassurance notice ("under 2 hours response"), prototype badge, and WhatsApp follow-up link.

### B. Interactive Before & After Slider (`/components/home/BeforeAfterSlider.tsx`)
- Draggable split-view slider comparing damaged vehicle vs. mirror-finish repair.
- Featured case: *BMW 4 Series Rear Quarter & Bumper Respray — Turnaround: 24 Hours*.
- Supports touch drag, mouse movement, and keyboard accessibility.

### C. 6 Clear Service Pillars (`/components/home/ServicePillars.tsx`)
- Dent & Scratch Repair (from £95)
- Bumper Repair (from £145)
- Alloy Wheel Refurbishment (from £65/wheel)
- Full Panel Respray (from £220 / panel)
- Accident Collision Repair (Free Insurance Estimate)
- Interim & Full Servicing (from £119)
- Includes turnarounds, photo banners, and direct estimate links.

### D. Why Choose Shine Auto Centre (`/components/home/WhyChooseShine.tsx`)
- 4.9★ Local Bodyshop Rating header badge.
- 4 core value proposition cards:
  1. Computerized PPG Paint Match
  2. 12-Month Paint & Workmanship Guarantee
  3. Same-Day Smart Repairs
  4. Courtesy Cars & Insurance Approved

### E. Objection-Busting FAQ Accordion (`/components/faq/FaqAccordion.tsx`)
- Expandable accordion addressing the 5 top customer questions:
  1. How long does a quote take?
  2. Do you do free estimates?
  3. What details do you need?
  4. Are there hidden fees?
  5. Can I send damage photos via WhatsApp?

### F. Workshop Location & Directions Section (`/components/home/LocationMapSection.tsx`)
- 540-542 London Rd, Stanwell, Ashford TW15 3AE.
- Google Maps directions button, parking instructions, opening hours indicator, direct call and WhatsApp buttons.

### G. Mobile-First Optimization & Sticky Action Bar (`/components/layout/StickyMobileActionBar.tsx`)
- 50/50 split action bar on `< 768px`: "Call Garage" (`01784 694898`) & "WhatsApp Photos" (`07412 895092`).
- 48px+ touch targets, font sizes ≥16px to prevent iOS auto-zoom, safe-area inset padding.

---

## 4. Verification & Automated Testing Plan

All 16 test suites pass with 0 errors:
1. `tests/business-hours.test.ts` (5 tests):
   - Open during working hours (Wednesday midday)
   - Closed on Sunday
   - Closed before 9am on weekday
   - Closed after 6pm on weekday
   - Closed Saturday evening, properly signaling "Opens Monday at 9:00am"
2. `tests/quote-wizard.test.ts` (6 tests):
   - Service selection, required field validation, telephone formatting, photo attachment state, prototype safety flag
3. `tests/link-checker.test.ts` (4 tests):
   - Zero broken internal anchors or navigation links across all pages
4. `tests/banned-claims.test.ts` (1 test):
   - Guardrail scan ensuring zero prohibited marketing claims exist across the codebase

**Build Status:**
- `tsc --noEmit`: 0 TypeScript errors
- `next build`: 23/23 static pages compiled successfully in 27s
