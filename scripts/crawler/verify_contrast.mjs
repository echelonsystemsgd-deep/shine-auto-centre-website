function luminance(r, g, b) {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const num = parseInt(hex, 16);
  return [num >> 16, (num >> 8) & 255, num & 255];
}

function contrast(hex1, hex2) {
  const [r1, g1, b1] = hexToRgb(hex1);
  const [r2, g2, b2] = hexToRgb(hex2);
  const lum1 = luminance(r1, g1, b1);
  const lum2 = luminance(r2, g2, b2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

const palettes = {
  "Option 1: Midnight Royal & Electric Cobalt (Direct Brand Evolution)": {
    background: "#080B14",
    surface: "#101626",
    surfaceRaised: "#161F36",
    border: "#233054",
    textPrimary: "#F8FAFC",
    textMuted: "#94A3B8",
    primaryButtonBg: "#2563EB", // Royal Blue
    primaryButtonText: "#FFFFFF",
    accentOrange: "#F97316", // Amber Orange CTA
    accentOrangeText: "#0F172A",
    focusRing: "#60A5FA" // Focus outline
  },
  "Option 2: Deep Slate & Warm Amber Glow (Automotive Precision)": {
    background: "#090D16",
    surface: "#111827",
    surfaceRaised: "#1F2937",
    border: "#374151",
    textPrimary: "#FFFFFF",
    textMuted: "#9CA3AF",
    primaryButtonBg: "#EA580C", // Precision Orange
    primaryButtonText: "#FFFFFF",
    accentBlue: "#3B82F6",
    accentBlueText: "#FFFFFF",
    focusRing: "#FDBA74"
  },
  "Option 3: Crisp Daylight & Deep Obsidian (Modern High-Contrast Clean)": {
    background: "#FFFFFF",
    surface: "#F8FAFC",
    surfaceRaised: "#F1F5F9",
    border: "#E2E8F0",
    textPrimary: "#090D16",
    textMuted: "#64748B",
    primaryButtonBg: "#0B1528", // Deep Obsidian Navy
    primaryButtonText: "#FFFFFF",
    accentOrange: "#C2410C", // Accessible High-Contrast Orange
    accentOrangeText: "#FFFFFF",
    focusRing: "#2563EB"
  }
};

console.log("=== WCAG AA CONTRAST RATIO VERIFICATION ===");
for (const [name, p] of Object.entries(palettes)) {
  console.log(`\n--- ${name} ---`);
  
  const textOnBg = contrast(p.textPrimary, p.background);
  const textOnSurface = contrast(p.textPrimary, p.surface);
  const mutedOnBg = contrast(p.textMuted, p.background);
  const btnTextOnBtnBg = contrast(p.primaryButtonText, p.primaryButtonBg);
  const focusOnBg = contrast(p.focusRing, p.background);

  console.log(`Text Primary on Background: ${textOnBg.toFixed(2)}:1 (AA Target >= 4.5:1) -> ${textOnBg >= 4.5 ? 'PASS' : 'FAIL'}`);
  console.log(`Text Primary on Surface: ${textOnSurface.toFixed(2)}:1 (AA Target >= 4.5:1) -> ${textOnSurface >= 4.5 ? 'PASS' : 'FAIL'}`);
  console.log(`Muted Text on Background: ${mutedOnBg.toFixed(2)}:1 (AA Target >= 4.5:1) -> ${mutedOnBg >= 4.5 ? 'PASS' : 'FAIL'}`);
  console.log(`Button Text on Button BG: ${btnTextOnBtnBg.toFixed(2)}:1 (AA Target >= 4.5:1) -> ${btnTextOnBtnBg >= 4.5 ? 'PASS' : 'FAIL'}`);
  console.log(`Focus Ring on Background: ${focusOnBg.toFixed(2)}:1 (AA Target >= 3.0:1) -> ${focusOnBg >= 3.0 ? 'PASS' : 'FAIL'}`);
}
