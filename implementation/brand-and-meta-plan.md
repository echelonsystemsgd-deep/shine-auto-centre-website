# Phase 0 & Implementation Plan: Brand, Icons, and Metadata Pass

**Project**: Shine Auto Centre (`shine-auto-centre-website`)  
**Branch**: `feat/brand-meta`  
**Date**: 2026-10-25  
**Audit & Execution Framework**: Phases 0, 1, 2, 3

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
   - **Gold / Highlight Yellow**: `#FFBA08` / `#FFC018`
   - **Warm Amber Accent**: `#F59E0B` / `#F88820`
   - **Deep Red-Orange Accent**: `#EA580C` / `#EA6020`
   - **Chrome White / High Contrast**: `#FFFFFF` / `#F8FAFC`
3. **Exact Business Name Inconsistency Analysis**:
   - **Variant A: "Shine Auto Centre"** — Appears on site title, hero heading, page copy, and the logo artwork itself ("SHINE AUTO CENTRE").
   - **Variant B: "Shine Auto Bodyworks LTD"** — Appears in the original website footer legal copyright line ("© 2024 Shine Auto Bodyworks LTD. Designed by London ICT").
   - **Variant C: "Shahin Auto Centre"** — Appears in the raw uploaded image filename (`Shahin Auto Centre -01-01.png`) and image `alt` attribute generated by Wix.
   - **Action Required**: Presented to user in Phase 0 decision block (do not unilaterally pick). Recommended standard: Trading name = *"Shine Auto Centre"*, Legal company name = *"Shine Auto Bodyworks LTD"*, *"Shahin"* purged completely as an asset export artifact.

---

### 1.3 Logo Quality Assessment & Strategy

1. **Assessment**:
   - **Resolution**: Very high raster resolution (6251x6251 px, 300 DPI). Not blurry, excellent source for large exports.
   - **Format Limitation**: Raster PNG, not SVG vector. Scaling down to 16px/32px creates severe pixelation and unreadable text.
   - **Color Variants**: Only a single colorway exists in client files (dark/amber gradient on transparent). No single-color, pure white, or dark-on-light exists.
2. **Owner Asset Request Recommendation**:
   - Request original vector artwork (`.ai`, `.eps`, `.svg`, or vector `.pdf`) from the original designer/printer.
   - Request standalone monogram/icon without small text.
   - Request official single-color white and single-color black versions for stationery and dark UI.
3. **Approved Fallback Strategy**:
   - **Large & Medium (Desktop Header, OG Image, 512px PWA)**: Clean, high-fidelity PNG/SVG export derived from the master 6251x6251 asset with sharp pixel preservation and transparent background.
   - **Tiny Sizes (16px, 32px, 48px Favicons)**: Hand-crafted simplified typographic monogram (`S` / `SAC`) matching the exact logo font geometry, amber-gold gradient (`#FFBA08` to `#EA580C`), and dark badge framing. Pixel-snapped for 100% legibility on browser tabs. Labeled: `<!-- TODO: Owner approval for simplified favicon mark -->`.

---

## 2. PHASE 1: LOGO & ICON SYSTEM IMPLEMENTATION PLAN

1. **Logo Variants**:
   - `public/images/brand/logo.png` — Optimized master PNG (1024x1024 / 512x512).
   - `public/images/brand/logo-full.svg` — Vector wrapper / high-definition logo presentation.
   - `public/images/brand/logo-monogram.svg` — Simplified icon mark for tiny viewports and app shortcuts.
   - `public/images/brand/logo-white.svg` — Clean monochrome white version for high-contrast dark themes.
2. **Complete Favicon Suite**:
   - `app/favicon.ico` — Multi-resolution ICO (16x16, 32x32, 48x48) generated with Sharp & png-to-ico.
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
   - Create `/components/icons/BrandIcons.tsx` with unified 1.5px stroke, rounded terminals, automotive styling:
     - 8 Service Icons: `AccidentRepairIcon`, `DentScratchIcon`, `BumperRepairIcon`, `ResprayIcon`, `AlloyWheelIcon`, `CeramicPolishingIcon`, `ServicingDiagnosticsIcon`, `BrakesSuspensionIcon`.
     - Functional Icons: `PhoneIcon`, `WhatsAppIcon`, `LocationPinIcon`, `ClockIcon`, `UploadCloudIcon`, `VerifiedCheckIcon`.
   - Ensure all decorative icons have `aria-hidden="true"` and interactive icons have accessible labels (`sr-only` or `aria-label`).
5. **Touch & Polish**:
   - `theme-color` meta with light (`#080B14`) and dark (`#080B14`) media queries.
   - `color-scheme: dark`.
   - Branded `app/not-found.tsx`, `app/loading.tsx`, `app/error.tsx` displaying the logo and fast recovery actions.

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
   - Implement `app/api/og/route.tsx` using `@vercel/og` / `next/og` (`ImageResponse`).
   - Dynamic 1200x630 branded card showing Shine Auto Centre logo, page title, location tag ("Stanwell & Ashford TW15 3AE"), and conversion CTA ("01784 694898 • WhatsApp Photos").
   - Generated size strictly < 300KB.
   - `twitter:card: "summary_large_image"`, `og:locale: "en_GB"`.
4. **Unified Single-Switch Prototype Flag (`PROTOTYPE_MODE`)**:
   - Env switch: `NEXT_PUBLIC_PROTOTYPE_MODE` (default `true` during client review).
   - When `PROTOTYPE_MODE = true`:
     - `robots.ts` returns `userAgent: "*", disallow: "/"`.
     - `layout.tsx` sets `robots: { index: false, follow: false, nocache: true }`.
     - `headers()` or middleware adds `X-Robots-Tag: noindex, nofollow, noarchive`.
     - Prototype banner displayed; telemetry/analytics suppressed.
   - When `PROTOTYPE_MODE = false`:
     - Clean `allow: /` in robots.txt.
     - `index: true, follow: true`.
     - Valid `sitemap.xml` referenced.
5. **JSON-LD AutoRepair & FAQ Schema**:
   - Schema in `app/layout.tsx`: Valid `https://schema.org` `AutoRepair` (sub-type of `LocalBusiness`).
   - Fields: `name`, `legalName`, `url`, `logo`, `image`, `telephone` (both numbers), `email`, `address` (540-542 London Rd, Stanwell, Ashford TW15 3AE), `geo`, `openingHoursSpecification` (Mon–Sat 09:00–18:00, Sun closed), `areaServed`, `hasOfferCatalog`.
   - `app/faq/page.tsx`: Embedded `FAQPage` schema with real, verified questions & answers.
   - Strict guardrail: No unverified aggregateRating or review schema.
6. **Phone & WhatsApp Formatting**:
   - All telephone links formatted as E.164 (`tel:+441784694898`, `tel:+447412895092`).
   - WhatsApp link formatted as `https://wa.me/447412895092`.
   - Set `formatDetection: { telephone: false }` to prevent browser auto-link tampering.
7. **Single Source of Truth**:
   - All schema, headers, footers, contact page, and manifest draw strictly from `/lib/business.ts`.

---

## 4. PHASE 3: VERIFICATION PLAN

1. **Asset & Dimension Verification**:
   - Node script verifying existence, exact byte size, dimensions, and MIME types for:
     - `favicon.ico` (16, 32, 48)
     - `icon.svg`
     - `apple-icon.png` (180x180)
     - `icon-192.png`, `icon-512.png` (and maskable variants)
     - Dynamic OG images (1200x630, <300KB)
2. **Forbidden Artifact Scan**:
   - Automated grep across `/app`, `/components`, `/lib`, `/public`, and build output (`.next`) for:
     - "Wix", "London ICT", "Shahin", "lorem", "example.com", "chitramtv", "mercianwealth", "vercel.svg", "next.svg".
   - Report must confirm zero unexpected occurrences.
3. **Validation & Quality Checks**:
   - Schema markup validation (Schema.org / Google Rich Results schema model).
   - Manifest validation (W3C Web App Manifest spec).
   - Full build: `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build`.
4. **Deliverables**:
   - `/docs/brand-and-meta-checklist.md` documenting every asset, path, size, purpose, and source.
   - Icon contact sheet screenshot artifact.
   - Final report with owner clarification questions and preview deployment evidence.
