import { describe, it, expect } from "vitest";
import { BUSINESS_CONFIG, SERVICES } from "../lib/business";
import fs from "node:fs/promises";
import path from "node:path";

describe("Link Integrity & Defect Regression Checks", () => {
  it("verifies accurate phone dial links and WhatsApp target", () => {
    expect(BUSINESS_CONFIG.phoneLandlineRaw).toBe("+441784694898");
    expect(BUSINESS_CONFIG.phoneMobileRaw).toBe("+447412895092");
    expect(BUSINESS_CONFIG.whatsappLink).toContain("https://wa.me/447412895092");
    expect(BUSINESS_CONFIG.email).toBe("info@shineauto.co.uk");
  });

  it("verifies that all 8 service slugs exist and have non-empty titles and descriptions", () => {
    expect(SERVICES.length).toBe(8);
    const requiredSlugs = [
      "accident-repair",
      "dent-and-scratch-repair",
      "bumper-repair",
      "re-spray",
      "alloy-wheel-refurb",
      "polishing-and-ceramic-wax",
      "servicing-and-diagnostics",
      "brakes-and-suspension"
    ];

    for (const slug of requiredSlugs) {
      const found = SERVICES.find(s => s.slug === slug);
      expect(found).toBeDefined();
      expect(found?.title.length).toBeGreaterThan(3);
      expect(found?.whatWeDo.length).toBeGreaterThan(2);
      expect(found?.whenYouNeedIt.length).toBeGreaterThan(1);
    }
  });

  it("ensures Header component links to /contact rather than looping to homepage", async () => {
    const headerPath = path.resolve(__dirname, "../components/layout/Header.tsx");
    const content = await fs.readFile(headerPath, "utf8");
    
    // In the old Wix site, CONTACT US pointed back to https://www.shineauto.co.uk
    // In our new Header, it must point to "/contact"
    expect(content).toContain('href: "/contact"');
  });

  it("ensures all core page directories exist", async () => {
    const requiredRoutes = [
      "quote",
      "services",
      "gallery",
      "faq",
      "contact",
      "privacy-policy",
      "cookies",
      "accessibility-statement",
    ];

    for (const route of requiredRoutes) {
      const pageFile = path.resolve(__dirname, `../app/${route}/page.tsx`);
      const exists = await fs.stat(pageFile).then(() => true).catch(() => false);
      expect(exists).toBe(true);
    }
  });
});
