import { describe, it, expect } from "vitest";
import fs from "node:fs/promises";
import path from "node:path";
import manifest from "../app/manifest";
import { BUSINESS_CONFIG, SERVICES, getSiteUrl, isPrototypeMode } from "../lib/business";

describe("Phase 1 & 2: Brand, Icons, and Metadata Verification", () => {
  it("verifies all required icon files exist with non-zero size", async () => {
    const rootDir = path.resolve(__dirname, "..");
    const iconFiles = [
      "app/favicon.ico",
      "app/icon.svg",
      "app/icon.png",
      "app/apple-icon.png",
      "public/icons/icon-192.png",
      "public/icons/icon-512.png",
      "public/icons/icon-maskable-192.png",
      "public/icons/icon-maskable-512.png",
      "public/icons/safari-pinned-tab.svg",
      "public/images/brand/logo-clean.png",
      "public/images/brand/logo-monogram.svg",
      "public/images/brand/logo-white.svg",
    ];

    for (const relPath of iconFiles) {
      const fullPath = path.join(rootDir, relPath);
      const stat = await fs.stat(fullPath);
      expect(stat.size).toBeGreaterThan(50); // Ensure not empty
    }
  });

  it("verifies PWA manifest conforms to specification", () => {
    const data = manifest();
    expect(data.name).toBe("Shine Auto Centre");
    expect(data.short_name).toBe("Shine Auto");
    expect(data.start_url).toBe("/");
    expect(data.display).toBe("standalone");
    expect(data.theme_color).toBe("#080B14");
    expect(data.background_color).toBe("#080B14");
    expect(data.categories).toContain("automotive");
    expect(data.icons?.length).toBeGreaterThanOrEqual(4);

    const maskable = data.icons?.filter(i => i.purpose?.includes("maskable"));
    expect(maskable?.length).toBeGreaterThanOrEqual(2);
  });

  it("verifies single source of truth and E.164 phone consistency", () => {
    expect(BUSINESS_CONFIG.name).toBe("Shine Auto Centre");
    expect(BUSINESS_CONFIG.legalName).toBe("Shine Auto Bodyworks LTD");
    expect(BUSINESS_CONFIG.phoneLandlineRaw).toBe("+441784694898");
    expect(BUSINESS_CONFIG.phoneMobileRaw).toBe("+447412895092");
    expect(BUSINESS_CONFIG.whatsappLink).toBe("https://wa.me/447412895092");
    expect(BUSINESS_CONFIG.address.full).toContain("540-542 London Rd");
    expect(BUSINESS_CONFIG.address.postcode).toBe("TW15 3AE");
    expect(Array.isArray(BUSINESS_CONFIG.sameAs)).toBe(true);
  });

  it("verifies zero forbidden leftover strings in active application code", async () => {
    const forbiddenList = [
      { name: "Wix", regex: /\bstatic\.wixstatic\.com\b/i },
      { name: "London ICT", regex: /london\s*ict/i },
      { name: "Shahin", regex: /\bshahin\b/i },
      { name: "example.com", regex: /example\.com/i },
      { name: "chitramtv", regex: /chitramtv/i },
      { name: "mercianwealth", regex: /mercianwealth/i },
    ];

    async function getCodeFiles(dir: string): Promise<string[]> {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      const results: string[] = [];
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (["node_modules", ".git", ".next", "extracted_raw", "docs", "scripts"].includes(entry.name)) {
          continue;
        }
        if (entry.isDirectory()) {
          results.push(...(await getCodeFiles(fullPath)));
        } else if (/\.(tsx|ts|jsx|js|json)$/.test(entry.name) && !entry.name.includes(".test.")) {
          results.push(fullPath);
        }
      }
      return results;
    }

    const appFiles = await getCodeFiles(path.resolve(__dirname, "../app"));
    const componentFiles = await getCodeFiles(path.resolve(__dirname, "../components"));
    const libFiles = await getCodeFiles(path.resolve(__dirname, "../lib"));
    const filesToScan = [...appFiles, ...componentFiles, ...libFiles];

    for (const file of filesToScan) {
      const content = await fs.readFile(file, "utf8");
      for (const { name, regex } of forbiddenList) {
        if (regex.test(content)) {
          throw new Error(`Forbidden string '${name}' found in ${file}`);
        }
      }
    }
  });

  it("verifies PROTOTYPE_MODE single switch behavior", () => {
    expect(typeof isPrototypeMode()).toBe("boolean");
    expect(typeof getSiteUrl()).toBe("string");
    expect(getSiteUrl()).toMatch(/^https?:\/\//);
  });
});
