import fs from 'node:fs/promises';
import path from 'node:path';

async function inspectAssets() {
  const downloaded = JSON.parse(await fs.readFile('extracted_raw/downloaded_assets.json', 'utf8'));
  console.log(`Downloaded ${downloaded.length} images.`);

  // Find logo, favicon, hero, etc.
  for (const item of downloaded) {
    if (item.fileId.includes('70b9968aed9947a5ab600a2c580db4f9')) {
      console.log('FAVICON / ICON:', item);
    }
    if (item.fileId.toLowerCase().includes('shahin') || item.fileId.toLowerCase().includes('logo') || item.alt.toLowerCase().includes('shahin') || item.alt.toLowerCase().includes('shine auto')) {
      console.log('POTENTIAL LOGO:', item);
    }
  }

  // Check fonts in raw html files
  const pages = ['home', 'services', 'quote', 'about', 'about-1', 'privacy-policy', 'accessibility-statement'];
  const allFonts = new Set();
  const allColors = new Set();

  for (const p of pages) {
    const html = await fs.readFile(`extracted_raw/${p}.html`, 'utf8');
    
    // Google fonts
    const gfMatches = [...html.matchAll(/fonts\.googleapis\.com\/css2?\?family=([^"'&]+)/g)];
    for (const m of gfMatches) allFonts.add(decodeURIComponent(m[1]));

    // Wix fonts
    const wixFonts = [...html.matchAll(/font-family:\s*([^;]+);/g)];
    for (const m of wixFonts) allFonts.add(m[1].trim());

    // Hex colors
    const hexes = [...html.matchAll(/#([0-9a-fA-F]{3,8})\b/g)];
    for (const h of hexes) allColors.add(h[0].toLowerCase());

    // rgb/rgba colors
    const rgbs = [...html.matchAll(/rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+(?:\s*,\s*[\d.]+\s*)?\)/g)];
    for (const r of rgbs) allColors.add(r[0]);
  }

  console.log('\n--- FONTS FOUND ---');
  console.log(Array.from(allFonts).slice(0, 30));

  console.log('\n--- ALL COLORS (Summary) ---');
  const hexList = Array.from(allColors).filter(c => c.startsWith('#'));
  console.log('Hex count:', hexList.length, 'Sample:', hexList.slice(0, 30));

  await fs.writeFile('extracted_raw/fonts_and_colors.json', JSON.stringify({
    fonts: Array.from(allFonts),
    colors: Array.from(allColors)
  }, null, 2));
}

inspectAssets();
