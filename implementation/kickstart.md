# Implementation Kickstart: Shine Auto Centre Prototype

**Target Repository:** `shine-auto-centre-website`  
**Working Branch:** `feat/prototype-v1`  
**Client:** Shine Auto Centre (Legal: Shine Auto Bodyworks LTD)  
**Existing Site:** https://www.shineauto.co.uk  
**Core Goal:** High-converting, mobile-optimised sales prototype with frictionless next steps, truthful verified content, zero invented claims, and 0 coding errors.

---

## 1. Architecture & Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (Strict mode enabled)
- **Styling**: Tailwind CSS v3 / PostCSS
- **Animations**: Framer Motion (GPU transform & opacity only, prefers-reduced-motion safe)
- **Icons**: Lucide React
- **Typography**: `next/font/google` (Plus Jakarta Sans + Inter)
- **Images**: `next/image` with WebP/AVIF and responsive dimensions
- **Testing**: Vitest / React Testing Library (Quote validation, Live Open/Closed indicator, Link integrity, Banned claims guardrail)

---

## 2. Business Facts Single Source of Truth (`/lib/business.ts`)

| Key | Value | Guardrail Rule |
|---|---|---|
| **Trading Name** | Shine Auto Centre | Real trading name |
| **Legal Entity** | Shine Auto Bodyworks LTD | As registered on existing privacy policy |
| **Company Number** | `TODO: Client to confirm` | Must NOT be invented |
| **Address** | 540-542 London Rd, Stanwell, Ashford TW15 3AE | Physical workshop location |
| **Phone 1 (Landline)** | `01784 694898` | Direct dial link `tel:01784694898` |
| **Phone 2 (Mobile / WhatsApp)** | `07412895092` | WhatsApp link `https://wa.me/447412895092` |
| **Email** | `info@shineauto.co.uk` | Direct mailto |
| **Hours** | Mon - Sat: 9:00 AM - 6:00 PM; Sun: Closed | Europe/London timezone |
| **Response Claim** | "We usually respond in under 2 hours during working hours." | Exact claim from their live site |
| **Services** | Accident repair, Dent & scratch repair, Bumper repair, Re-spray, Alloy wheel refurb, Polishing & ceramic wax, General maintenance, Diagnostics & repairs, Brakes & suspension, Bodywork & cosmetic repairs | Exactly matching site offerings |

**STRICT NEGATIVE GUARDRAILS:**
- NO fabricated customer reviews or star counts. (Official Google Reviews profile link provided; individual reviews marked TODO for client confirmation).
- NO fake staff profiles (Derek Smith, Dave West etc. template placeholders discarded).
- NO invented guarantees, warranties or prices.

---

## 3. Site Navigation & Information Architecture

- `/` – Homepage (Hero with instant CTAs, Live Open Status, Real Before/After Slider, Services Grid, What Happens Next, Google Reviews bridge, FAQ preview, Closing CTA band)
- `/services` – Complete Services Overview with categorised Bodywork & Mechanical repair cards
- `/services/accident-repair` – Dedicated accident repair page with outcome-led copy & direct quote trigger
- `/services/dent-and-scratch-repair` – Panel dent removal, scratch repair, paint blending
- `/services/bumper-repair` – Cracked, scuffed and misaligned bumper repair
- `/services/re-spray` – Full & partial paint respray with precision colour matching
- `/services/alloy-wheel-refurb` – Scuffed, kerbed and pitted alloy restoration
- `/services/polishing-and-ceramic-wax` – Paint correction, machine polishing & high-gloss protective wax
- `/services/servicing-and-diagnostics` – Routine servicing, oil changes, engine diagnostics
- `/services/brakes-and-suspension` – Brake pads, discs, shock absorbers & suspension inspections
- `/gallery` – 12 authentic workshop Before/After repair interactive split-sliders
- `/faq` – Full interactive accordion FAQ with verified answers from their live site
- `/contact` – Click-to-call, WhatsApp, email, hours, and Google Maps directions link
- `/quote` – 3-Step Wizard:
  1. Service selection chips
  2. Name, mobile number & optional photo/video (or WhatsApp upload)
  3. Optional details (make, model, registration, message)
  - Confirmation screen with "under 2 hours" timeline and Prototype Notice
- `/privacy-policy` – Complete privacy statement tailored to Shine Auto Bodyworks LTD
- `/cookies` – Transparent cookie policy
- `/accessibility-statement` – WCAG 2.2 AA statement
- `not-found.tsx` – Polished 404 recovery page

---

## 4. Mobile-First Optimization Matrix

- **Viewport Targets**: 320px, 360px, 375px, 390px, 768px, 1024px, 1440px. Zero horizontal overflow (`overflow-x: hidden`).
- **Touch Targets**: Minimum 48×48px for all buttons, links, and chips.
- **Input Usability**: Base font size 16px to prevent iOS auto-zoom on focus. Proper input types (`type="tel"`, `type="email"`), autocomplete attributes.
- **Sticky Mobile Action Bar**: Fixed bottom bar featuring `📞 Call`, `💬 WhatsApp`, and `⚡ Get a quote`. Automatically hides when keyboard opens and respects `env(safe-area-inset-bottom)`.
- **Performance Budget**: Mobile LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms.

---

## 5. Security, Headers & Prototype Mode

- **Prototype Guardrails**:
  - `robots.txt`: Disallow all
  - Meta tags: `noindex, nofollow`
  - HTTP Header: `X-Robots-Tag: noindex, nofollow`
  - Floating top banner: "Prototype for Review Only"
  - Form submission: Disabled by default behind `FEATURE_FLAG_ENABLE_SUBMISSION = false` with mock delay and visible confirmation note.
- **Security Headers (`next.config.ts`)**:
  - `Strict-Transport-Security`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `Referrer-Policy: strict-origin-when-cross-origin`

---

## 6. Verification & Automated Testing Plan

1. **Quote Wizard Tests**: Validates required fields (Service, Name, Phone), accepts optional fields (Email, Reg, Make/Model), checks phone validation.
2. **Business Hours Indicator Tests**: Verifies "Open Now" vs "Opens at 9:00am" logic across Europe/London schedule.
3. **Banned Claims Guardrail Test**: Scans all pages to ensure no fabricated statistics or unverified claims appear.
4. **Link Checker Test**: Ensures zero broken anchors or loops (preventing the old `/contact` back to `/` bug).
5. **Typecheck & Production Build**: `tsc --noEmit` and `next build` executed with 0 errors.
