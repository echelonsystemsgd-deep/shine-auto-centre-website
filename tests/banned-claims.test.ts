import { describe, it, expect } from "vitest";
import fs from "node:fs/promises";
import path from "node:path";

describe("Guardrail Verification: Absence of Banned Invented Claims", () => {
  // Prohibited phrases that must never be fabricated
  const BANNED_PATTERNS = [
    /over \d+ years in business/i,
    /\d+ years of experience/i,
    /\d+[,.]?\d*\s*(?:\+|plus)?\s*(?:happy|satisfied)\s*customers/i,
    /rated (?:4\.[89]|5\.0)\s*(?:\/|out of)\s*5/i,
    /lifetime guarantee/i,
    /100%\s*satisfaction guarantee/i,
    /award-winning body shop/i,
    /prices starting from £/i,
    /repairs from £\d+/i,
  ];

  async function getSourceFiles(dir: string): Promise<string[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files: string[] = [];
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!["node_modules", ".next", ".git", "extracted_raw", "scripts"].includes(entry.name)) {
          files.push(...(await getSourceFiles(fullPath)));
        }
      } else if (/\.(tsx|ts|jsx|js|md)$/.test(entry.name) && !entry.name.includes(".test.")) {
        files.push(fullPath);
      }
    }
    return files;
  }

  it("ensures no app code contains fabricated customer counts, star numbers, or years in business", async () => {
    const files = await getSourceFiles(path.resolve(__dirname, "../app"));
    const componentFiles = await getSourceFiles(path.resolve(__dirname, "../components"));
    const libFiles = await getSourceFiles(path.resolve(__dirname, "../lib"));
    const allFiles = [...files, ...componentFiles, ...libFiles];

    for (const file of allFiles) {
      const content = await fs.readFile(file, "utf8");
      for (const pattern of BANNED_PATTERNS) {
        const match = content.match(pattern);
        if (match) {
          throw new Error(`Banned claim violation found in ${file}: "${match[0]}"`);
        }
      }
    }
    expect(allFiles.length).toBeGreaterThan(5);
  });
});
