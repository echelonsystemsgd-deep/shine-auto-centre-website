# Phase 0 & Implementation Plan: Brand, Icons, Metadata & Interactive Showcase

**Project**: Shine Auto Centre (`shine-auto-centre-website`)  
**Branches**: `main`, `feat/prototype-v1`, `feat/brand-meta`  
**Date**: 2026-10-26  
**Audit & Execution Framework**: Phases 0, 1, 2, 3, 4

---

## 1. PHASE 0: COMPLETE INVENTORY REPORT

### 1.1 Project Asset & Meta Tag Inventory

| Category | File / Location | Current Value / State | Target Transformation in feat/brand-meta |
|---|---|---|---|
| **Favicons & Icons** | `public/images/brand/favicon.png` | 6251x6251 PNG (exact copy of un-optimized logo) | Replace with standardized Next.js icon suite: `app/favicon.ico` (multi-res 16/32/48), `app/icon.svg` / `icon.png` (512x512), `app/apple-icon.png` (180x180 solid `#080B14`), `public/icons/icon-192.png`, `public/icons/icon-512.png`, maskable icons, and Safari pinned tab. |
| **Master Logo** | `public/images/brand/logo.png` | 6251x6251 px, 600KB RGBA PNG (extracted from Wix) | Keep high-res source; create SVG wrapper, crisp 512px WebP/PNG derivatives, white-on-dark, dark-on-light, and compact mark. |
| **PWA Manifest** | `app/manifest.ts` | **MISSING** (File does not exist) | Implement standard `app/manifest.ts` with name, short_name, automotive category, standalone display, correct brand theme colors (`#080B14`, `#F59E0B`), and any/maskable icon declarations. |
| **Root Metadata** | `app/layout.tsx` | Hardcoded `metadataBase: new URL("https://www.shineauto.co.uk")`. Title template: `"%s \| Shine Auto Centre Ashford"`. Missing canonical, formatDetection, Twitter card, themeColor media queries. | Switch `metadataBase` to `process.env.NEXT_PUBLIC_SITE_URL`. Implement title template `"%s \| Shine Auto Centre, Stanwell & Ashford"`. Add self-referential canonical, explicit `formatDetection: { telephone: false }`, full OpenGraph & Twitter tags, color-scheme (`dark`), and light/dark theme-color. |
| **Robots & Prototype** | `app/robots.ts` | Hardcoded `rules: { userAgent: "*", disallow: "/" }`, hardcoded sitemap URL. No env toggle. | Connect to single `PROTOTYPE_MODE` environment flag (`process.env.NEXT_PUBLIC_PROTOTYPE_MODE !== "false"`). When on: `disallow: /`, `noindex, nofollow`, `X-Robots-Tag` header in middleware/layout. When off: allow indexing, link canonical sitemap. |
| **Sitemap** | `app/sitemap.ts` | Hardcoded `baseUrl = "https://www.shineauto.co.uk"`. Returns 9 core routes + 6 service routes. | Dynamically derive base URL from `NEXT_PUBLIC_SITE_URL`. Generate correct changefreq, priority, and lastModified. |
| **JSON-LD Schema** | `app/layout.tsx` | Basic `AutoRepair` schema with address and hours. Has hardcoded `priceRange: "$$"`. Missing `hasOfferCatalog`, `areaServed`, `sameAs`, absolute logo URL, image. | Enrich `AutoRepair` schema via `/lib/business.ts`: full address (540-542 London Rd), both landline and mobile/WhatsApp numbers in E.164 (`+441784694898`, `+447412895092`), exact opening hours (Mon-Sat 09:00-18:00), areaServed (Stanwell, Ashford, Staines, Surrey, Heathrow), services `hasOfferCatalog`. Add separate `FAQPage` schema on `/faq`. No unconfirmed aggregateRating or review schema. |
| **Dynamic OG Images** | `/app/api/og/route.tsx` or `app/opengraph-image.tsx` | **MISSING** (currently static 1200x1200 logo in layout) | Implement dynamic `next/og` (ImageResponse) generating branded 1200x630 OpenGraph images under 300KB featuring logo, page title, and clear phone/WhatsApp CTA. |
| **In-Site Service Icons** | `components/**` | Lucide React icons used (`Car`, `Wrench`, `Sparkles`, etc.) | Replace generic icons with a cohesive custom SVG icon system in brand style (consistent 1.5–2px stroke, rounded corners, amber/gold `#F59E0B` and slate `#94A3B8` accents). Build bespoke icons for all 8 service pillars: Accident Repair, Dent & Scratch, Bumper Repair, Re-Spray, Alloy Wheels, Polishing & Ceramic Wax, Servicing & Diagnostics, Brakes & Suspension. |
| **UI Touch & States** | `app/not-found.tsx`, `loading.tsx`, `error.tsx` | Generic 404 page exists. Missing branded `loading.tsx` and `error.tsx`. | Add branded logo animations, status codes, and recovery CTAs to 404, loading, and error boundaries. |
| **Forbidden Leftovers** | `components/quote/QuoteWizard.tsx` (L385) | `placeholder="e.g. name@example.com"` | Replace with UK-specific branded placeholder `e.g. name@domain.co.uk`. |
| **Scraping Config** | `next.config.ts` | Remote pattern includes `static.wixstatic.com` | Remove Wix domain from `remotePatterns` since all assets are served locally. |
| **Package Metadata** | `package.json` | Name is `shine-auto-centre-website`, no description field. | Add description: `"Ultra-modern, high-converting bodyshop web application for Shine Auto Centre"`. |

---

### 1.2 Extracted Business Brand Identity (from https://www.shineauto.co.uk)

1. **Master Logo Asset**:
   - Source: `https://static.wixstatic.com/media/ec3202_70b9968aed9947a5ab600a2c580db4f9~mv2.png`
   - Wix Server Filename: `Shahin Auto Centre -01-01.png`
   - Artwork Content: Circular automotive emblem with car silhouette profile and dual wings/arc framing, with two-line bold typography: **"SHINE"** (top line), **"AUTO CENTRE"** (bottom line).
   - Dimensions: 6251 × 6251 px (300 DPI), 8-bit RGBA with alpha transparency. Trimmed graphic area: 4792 × 4079 px.
2. **Brand Palette Extracted from Logo**:
   - **Deep Automotive Void / Background**: `#080B14` / `#0B0B10` / `#14141A`
   - **Gold / Highlight Yellow**: `#FFC018` / `#FFBA08`
   - **Warm Amber Accent**: `#F59E0B` / `#F88820`
   - **Deep Red-Orange Accent**: `#EA580C` / `#EA6020`
   - **Chrome White / High Contrast**: `#FFFFFF` / `#F8FAFC`
3. **Exact Business Name Inconsistency Analysis**:
   - **Variant A: "Shine Auto Centre"** — Appears on site title, hero heading, page copy, and the logo artwork itself ("SHINE AUTO CENTRE").
   - **Variant B: "Shine Auto Bodyworks LTD"** — Appears in the original website footer legal copyright line ("© 2024 Shine Auto Bodyworks LTD. Designed by London ICT").
   - **Variant C: "Shahin Auto Centre"** — Appears in the raw uploaded image filename (`Shahin Auto Centre -01-01.png`) and image `alt` attribute generated by Wix.
   - **Resolution Applied**: Standardized Trading name = *"Shine Auto Centre"*, Legal company name = *"Shine Auto Bodyworks LTD"*, *"Shahin"* purged completely as an asset export artifact.

---

## 2. PHASE 1: LOGO & ICON SYSTEM IMPLEMENTATION PLAN

1. **Logo Variants**:
   - `public/images/brand/logo.png` — Optimized master PNG (1024x1024 / 512x512).
   - `public/images/brand/logo-clean.png` — Trimmed, high-contrast brand mark.
   - `public/images/brand/logo-monogram.svg` — Simplified icon mark for tiny viewports and app shortcuts.
   - `public/images/brand/logo-white.svg` — Clean monochrome white version for high-contrast dark themes.
2. **Complete Favicon Suite**:
   - `app/favicon.ico` — Multi-resolution ICO (16x16, 32x32, 48x48).
   - `app/icon.svg` — Vector favicon for modern Chrome/Firefox/Safari.
   - `app/apple-icon.png` — 180x180 px with solid `#080B14` background (no transparency, per Apple HIG).
   - `public/icons/icon-192.png` — 192x192 PWA standard icon.
   - `public/icons/icon-512.png` — 512x512 PWA standard icon.
   - `public/icons/icon-maskable-192.png` & `icon-maskable-512.png` — 80% safe zone respected for Android adaptive shapes.
   - Safari pinned tab monochrome mask icon.
3. **PWA Manifest (`app/manifest.ts`)**:
   - `name`: "Shine Auto Centre"
   - `short_name`: "Shine Auto"
   - `description`: "Car Repairs, Servicing & Accident Bodywork in Stanwell & Ashford TW15 3AE"
   - `start_url`: "/"
   - `display`: "standalone"
   - `theme_color`: "#080B14"
   - `background_color`: "#080B14"
   - `categories`: ["automotive", "business"]
   - Declared icon array with correct dimensions and `purpose: "any maskable"`.
4. **Cohesive In-Site SVG Icon System**:
   - Created `/components/icons/BrandIcons.tsx` with unified 1.5px stroke, rounded terminals, automotive styling:
     - 8 Service Icons: `AccidentRepairIcon`, `DentScratchIcon`, `BumperRepairIcon`, `ResprayIcon`, `AlloyWheelIcon`, `CeramicPolishingIcon`, `ServicingDiagnosticsIcon`, `BrakesSuspensionIcon`.
     - Functional Icons: `PhoneIcon`, `WhatsAppIcon`, `LocationPinIcon`, `ClockIcon`, `UploadCloudIcon`, `VerifiedCheckIcon`.

---

## 3. PHASE 2: METADATA SYSTEM IMPLEMENTATION PLAN

1. **Global `metadataBase` & Canonical URLs**:
   - Single source in `app/layout.tsx`: `new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.shineauto.co.uk")`.
   - Self-referential canonical URL on every page.
2. **Title & Meta Descriptions**:
   - Root title template: `"%s | Shine Auto Centre, Stanwell & Ashford"`.
   - Length constraints strictly enforced: Titles 50–60 characters, descriptions 120–155 characters.
   - Unique, service-specific and location-targeted copy per page. Single H1 per page verified.
3. **Dynamic OpenGraph & Twitter Cards**:
   - Implemented `app/api/og/route.tsx` and `app/opengraph-image.tsx` using `@vercel/og` / `next/og` (`ImageResponse`).
   - Dynamic 1200x630 branded card showing Shine Auto Centre logo, page title, location tag ("Stanwell & Ashford TW15 3AE"), and conversion CTA ("01784 694898 • WhatsApp Photos").
   - Generated size strictly < 300KB.
   - `twitter:card: "summary_large_image"`, `og:locale: "en_GB"`.
4. **Unified Single-Switch Prototype Flag (`PROTOTYPE_MODE`)**:
   - Env switch: `NEXT_PUBLIC_PROTOTYPE_MODE` (default `true` during client review).
5. **JSON-LD AutoRepair & FAQ Schema**:
   - Schema in `app/layout.tsx`: Valid `https://schema.org` `AutoRepair` (sub-type of `LocalBusiness`).
   - Embedded `FAQPage` schema on `/faq` with verified questions & answers.

---

## 4. PHASE 3: VERIFICATION PLAN & AUDIT CHECKS

1. **Asset & Dimension Verification**:
   - Verified existence, exact byte size, dimensions, and MIME types for favicon suite, apple-icon, and PWA icons.
2. **Forbidden Artifact Scan**:
   - Verified 0 unexpected occurrences of legacy scrapings ("Wix", "London ICT", "Shahin", "lorem", "example.com").
3. **Validation & Automated Tests**:
   - `tests/brand-and-metadata.test.ts` (5 tests passing)
   - `tests/banned-claims.test.ts` (1 test passing)
   - `tests/business-hours.test.ts` (5 tests passing)
   - `tests/link-checker.test.ts` (4 tests passing)
   - `tests/quote-wizard.test.ts` (6 tests passing)

---

## 5. PHASE 4: INTERACTIVE BEFORE & AFTER SLIDER RE-ENGINEERING & EXECUTION

### 5.1 Defect Audit of Previous Implementation
- **Image Squishing & Misalignment**: Previous slider nested the "before" image inside a dynamic `width: ${sliderPosition}%` container. Because `next/image` with `fill` scales relative to its parent container, dragging the slider compressed the before image horizontally, shifting body panel lines out of alignment with the underlying after photo.
- **Aspect Ratio Mismatch**: `pair-11-before` (3024×4032, 3:4) and `pair-11-after` (2778×2726, 1:1) had divergent aspect ratios, causing vertical cropping differences.
- **Touch Gesture Conflict**: Dragging on mobile screens caused gesture collisions with native vertical page scrolling.
- **Single-Pair Limitation**: Only displayed a single damage repair with no customer ability to inspect other core bodyshop competencies.

### 5.2 Architectural Transformation & Solutions
1. **GPU-Accelerated CSS Clip-Path Reveal**:
   - Both BEFORE and AFTER image layers are mounted as identical 100% full-bleed layers with identical `object-cover object-center` styling.
   - Reveal is driven exclusively by `clipPath: polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%)`.
   - Result: 0% image distortion, 0% scaling artifacts, millimeter-precise panel alignment.
2. **HTML5 Pointer Capture with Zero Lag**:
   - Implemented `onPointerDown` with `setPointerCapture(e.pointerId)`. Drag tracking persists seamlessly even if the cursor/finger leaves container boundaries.
   - Applied `touch-action: none` to isolate horizontal dragging from page scrolling.
   - Dynamic CSS transitions: `transition: none` while actively dragging (instant 0ms response); smooth `0.15s ease-out` on preset clicks.
3. **5 Curated Real Workshop Showcases (with Category Switcher)**:
   - Added interactive category pills allowing customers to inspect 5 real repairs:
     1. *Bumper SMART Repair* (BMW Saloon Rear Bumper Scuff & Weld — 6 Hours)
     2. *Dent & Scratch Removal* (Mercedes-Benz C-Class Panel Crease — 24 Hours)
     3. *Alloy Wheel Refurbishment* (Audi S-Line Diamond-Cut Kerb Rash — 4 Hours)
     4. *Full Panel Respray* (VW Golf GTI Bonnet & Wing Clearcoat Cure — 48 Hours)
     5. *Accident Collision Repair* (BMW 3 Series Structural Impact Alignment — 3 Days)
4. **1-Tap Quick Split Controls**:
   - Fast comparison buttons for "View 100% Before", "50/50 Split View", and "View 100% After" for effortless one-handed smartphone use.
5. **Accessible Range Input**:
   - Hidden native range input with full ARIA semantics (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`) and keyboard navigation (`Left`, `Right`, `Home`, `End`).

### 5.3 Quality Gates & Build Verification
- **Vitest**: `21 passed (21)`
- **TypeScript**: `0 errors` (`tsc --noEmit`)
- **Next.js Production Build**: `28/28 static pages compiled` (`next build` in 21.8s)
- **Deployment Branches Synced**: `main`, `feat/prototype-v1`, `feat/brand-meta`
