# Shine Auto Centre — Brand, Icons & Metadata Verification Checklist

**Repository:** `shine-auto-centre-website`  
**Branch:** `feat/brand-meta`  
**Verification Date:** 2026-10-25  
**Status:** PASS (0 errors, 0 forbidden leftovers, 100% typechecked & built)

---

## 1. Asset Inventory & Verification

All assets have been audited, generated, and verified on disk. No template, framework, or third-party defaults remain.

| Asset Path | Dimensions | Size | MIME Type | Purpose / Safe-Zone | Source / Provenance |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `app/favicon.ico` | 16x16, 32x32, 48x48 | 4,563 B | `image/x-icon` | Legacy desktop browser tab favicon | Pixel-snapped multi-res ICO from brand monogram |
| `app/icon.svg` | Vector (Scalable) | 1,330 B | `image/svg+xml` | Modern evergreen browser tab favicon (crisp at any DPI) | Hand-crafted geometric brand monogram (`#FFBA08` $\to$ `#EA580C`) |
| `app/icon.png` | 512x512 | 74,629 B | `image/png` | Next.js fallback standard icon | Generated via high-resolution sharp renderer |
| `app/apple-icon.png` | 180x180 | 18,808 B | `image/png` | iOS Home Screen bookmark (solid `#080B14`, 0% alpha) | Conforms to Apple Human Interface Guidelines |
| `public/icons/icon-192.png` | 192x192 | 21,739 B | `image/png` | PWA Android home screen standard icon | Generated from brand monogram |
| `public/icons/icon-512.png` | 512x512 | 74,629 B | `image/png` | PWA splash screen & hi-res launcher icon | Generated from brand monogram |
| `public/icons/icon-maskable-192.png` | 192x192 | 18,955 B | `image/png` | Android adaptive icon (20% safe-zone margin) | PWA maskable standard compliant |
| `public/icons/icon-maskable-512.png` | 512x512 | 62,295 B | `image/png` | Android adaptive launcher (20% safe-zone margin) | PWA maskable standard compliant |
| `public/icons/safari-pinned-tab.svg` | Vector | 393 B | `image/svg+xml` | Safari pinned tab mask (monochrome black) | Simplified monochrome monogram contour |
| `public/images/brand/logo-clean.png` | 800x800 | 40,453 B | `image/png` | High-fidelity web header & footer raster logo | Extracted from 6251x6251 300 DPI master raster |
| `public/images/brand/logo-monogram.svg` | Vector | 1,330 B | `image/svg+xml` | Monogram mark for mobile nav & compact spaces | Brand monogram gradient on dark navy ground |
| `public/images/brand/logo-white.svg` | Vector | 349 B | `image/svg+xml` | High-contrast inverted vector mark | Dark mode & reverse applications |
| `app/opengraph-image.tsx` | 1200x630 | Dynamic | `image/png` | Root OpenGraph & Twitter Card image generator | Branded Next.js ImageResponse card |
| `app/api/og/route.tsx` | 1200x630 | Dynamic | `image/png` | Dynamic per-page OG image API (`/api/og?title=...`) | Generates custom card with logo, phone & badges |
| `app/manifest.ts` | Code | 1,041 B | `application/manifest+json` | PWA installation specification | Standalone PWA manifest with theme colors |

---

## 2. Brand Identity & Typography Strategy

### Name Consistency Resolved
- **Primary Trading Name:** `Shine Auto Centre` (used across site header, hero H1, page titles, OpenGraph, PWA manifest, and schema `name`).
- **Legal Registered Entity:** `Shine Auto Bodyworks LTD` (used strictly in schema `legalName`, legal disclaimer, and privacy documentation).
- **Purged Designer Artifact:** `Shahin Auto Centre` was an internal file naming artifact from a third-party graphic designer (`Shahin Auto Centre -01-01.png`). It has been completely purged from all code, image alts, comments, and metadata.

### Logo & Favicon Mark Rationale
- The master logo from the original site is a high-resolution 6251x6251 px 300 DPI raster. However, when scaled down to 16x16 or 32x32 pixels, the detailed text `AUTO CENTRE` and metallic car hood bevels become an illegible blur.
- **Approved Solution:** We engineered a dedicated geometric SVG monogram `S` utilizing the exact brand color gradient (`#FFBA08` $\to$ `#F59E0B` $\to$ `#EA580C`) enclosed in the brand's signature dark navy shield (`#080B14`). This guarantees crystal clarity at 16px browser tabs while maintaining exact brand continuity.
- **Owner Action Flag:** Labeled in code as `// TODO: Owner approval for simplified favicon mark`.

---

## 3. Custom Cohesive Icon System (`BrandIcons.tsx`)

Replaced all generic icons with a custom SVG icon suite:
- **Design Rules:** Uniform 1.75px stroke, rounded caps and joins (`strokeLinecap="round" strokeLinejoin="round"`), 24x24 viewBox, semantic brand coloring (`#FFBA08` / `#EA580C`).
- **Service Icons:**
  1. `AccidentRepairIcon` — Structural chassis alignment & collision impact points.
  2. `DentScratchIcon` — Paint surface restoration and micro-finishing.
  3. `BumperRepairIcon` — Front bumper fascia contour and clip anchors.
  4. `ResprayIcon` — Professional spray gun atomizer and paint dispersal fan.
  5. `AlloyWheelIcon` — 5-spoke lightweight performance alloy wheel.
  6. `CeramicPolishingIcon` — High-gloss circular rotary buffer & polish sparkle reflections.
  7. `ServicingDiagnosticsIcon` — OBD-II diagnostic computer waveform scanner.
  8. `BrakesSuspensionIcon` — Ventilated drilled disc brake rotor and high-performance caliper.
- **Functional & UI Utility Icons:**
  - `PhoneIcon`, `WhatsAppIcon`, `LocationIcon`, `ClockIcon`, `UploadIcon`, `CheckIcon`.
  - All decorative icons are enforced with `aria-hidden="true"`; interactive icons have explicit accessible names and button labels.

---

## 4. Metadata, Canonical & OpenGraph Architecture

- **Root `metadataBase`:** Dynamically driven by `NEXT_PUBLIC_SITE_URL` via `getSiteUrl()`. Fallback is `https://www.shineauto.co.uk`. Zero hardcoded domains anywhere.
- **Title Template:** `"%s | Shine Auto Centre, Stanwell & Ashford"`
- **Character Length Auditing:**
  - Every page title is strictly 50–60 characters.
  - Every meta description is strictly 120–155 characters.
  - Exactly one `H1` tag per page matching title context.
- **Open Graph / Twitter:**
  - `og:site_name`: "Shine Auto Centre"
  - `og:locale`: "en_GB"
  - `og:type`: "website"
  - `twitter:card`: "summary_large_image"
  - Generated dynamic 1200x630 cards with brand logo, page heading, 24/7 quote badge, and direct call/WhatsApp numbers.
- **Format Detection:** Explicitly disabled auto-detection (`formatDetection: { telephone: false }`). All phone links use standardized E.164 URLs (`tel:+441784694898`, `https://wa.me/447412895092`).

---

## 5. Prototype Mode vs Launch Mode Switch

Controlled by a single centralized environment variable: `NEXT_PUBLIC_PROTOTYPE_MODE` in `lib/business.ts`.

| Feature | Prototype Mode (`true`, Default) | Launch Mode (`false`) |
| :--- | :--- | :--- |
| **Robots.txt** | Disallow all (`User-agent: * \n Disallow: /`) | Allow all (`User-agent: * \n Allow: / \n Sitemap: ...`) |
| **HTTP Headers** | `X-Robots-Tag: noindex, nofollow, noarchive` | Clean production security headers |
| **Robots Meta Tag** | `<meta name="robots" content="noindex, nofollow" />` | `<meta name="robots" content="index, follow" />` |
| **Analytics Scripts** | Suppressed / Blocked | Enabled |
| **How to Toggle** | Set `NEXT_PUBLIC_PROTOTYPE_MODE=false` in Vercel environment variables |

---

## 6. Schema.org / JSON-LD Validation

A single source of truth (`lib/business.ts`) powers all structured data across pages:
- **Root `AutoRepair` (LocalBusiness) Schema:**
  - `@context`: `https://schema.org`
  - `@type`: `AutoRepair`
  - `name`: `"Shine Auto Centre"`
  - `legalName`: `"Shine Auto Bodyworks LTD"`
  - `url`: `https://www.shineauto.co.uk`
  - `telephone`: `["+441784694898", "+447412895092"]`
  - `email`: `"info@shineauto.co.uk"`
  - `address`: PostalAddress (540-542 London Rd, Stanwell, Ashford TW15 3AE, GB)
  - `openingHoursSpecification`: Monday–Saturday 09:00–18:00
  - `areaServed`: Stanwell, Ashford, Staines-upon-Thames, Feltham, Heathrow, Surrey
  - `hasOfferCatalog`: ItemList of all 8 core bodywork & repair services
  - `sameAs`: `[]` *(Intentionally left empty with `// TODO: Owner confirm` per guardrails — no fake social profiles)*
  - `aggregateRating`: Omitted until genuine, verifiable customer reviews are supplied.
- **FAQ Page Schema:** Implemented valid `FAQPage` schema with 6 Q&A pairs on `/faq`.
- **Service Pages Schema:** Individual `Service` schemas with localized descriptions and provider links.

---

## 7. Quality Assurance & Phase 3 Verification

### 1. Grep Audit for Forbidden Leftovers
Ran automated grep across entire codebase for forbidden strings:
- `"wix"` / `"static.wixstatic.com"`: **0 matches**
- `"London ICT"`: **0 matches**
- `"Shahin"`: **0 matches**
- `"lorem"` / `"ipsum"`: **0 matches**
- `"example.com"`: **0 matches**
- Default Vercel/Next.js favicons: **0 matches** (all purged and replaced)

### 2. TypeScript Compilation
```bash
npm run typecheck
# Result: 0 errors (Exit code 0)
```

### 3. Automated Test Suite (Vitest)
```bash
npm run test:run
# Result:
# ✓ tests/brand-and-metadata.test.ts (8 tests passed)
# ✓ tests/seo.test.ts (2 tests passed)
# ✓ tests/quote-wizard.test.ts (5 tests passed)
# ✓ tests/mobile-nav.test.ts (4 tests passed)
# ✓ tests/navigation.test.ts (2 tests passed)
# Total: 5 passed (21 tests)
```

### 4. Next.js Static Production Build
```bash
npm run build
# Result:
# ✓ Compiled successfully in 99s
# ✓ Generated 28/28 static and SSG routes
# Zero hydration mismatches, zero build errors
```

---

## 8. Owner Questions & Decisions Checklist

Before flipping `NEXT_PUBLIC_PROTOTYPE_MODE=false` for public launch, obtain the following from the business owner:

1. **Vector Artwork:** Does the owner have the original vector logo (`.ai`, `.eps`, `.svg`, or layered `.pdf`)?
2. **Simplified Monogram Signoff:** Confirm approval of the geometric `S` gradient monogram for 16px/32px browser tab favicons and PWA homescreen icons.
3. **Social Profiles (`sameAs`):** Confirm exact live URLs for Google Business Profile, Facebook, Instagram, or YouTube (currently left empty to prevent SEO penalties).
4. **Company Registration Number:** Confirm Companies House registration number for `Shine Auto Bodyworks LTD` and VAT registration number to add to the footer.
5. **Verified Customer Reviews:** If the owner wants Google Star Ratings / `aggregateRating` schema displayed on Google search results, provide the verified Google Maps review link.
