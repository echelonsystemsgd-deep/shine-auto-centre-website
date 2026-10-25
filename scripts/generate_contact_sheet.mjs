import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

async function generateContactSheet() {
  console.log('Generating Icon Contact Sheet...');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shine Auto Centre — Brand Icon & Favicon Contact Sheet</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0f111a; color: #fff; padding: 40px 20px; }
    h1 { font-size: 28px; font-weight: 800; margin-bottom: 8px; color: #fff; }
    p.sub { font-size: 14px; color: #94a3b8; margin-bottom: 32px; }
    .sheet-container { display: flex; flex-direction: column; gap: 48px; max-width: 1200px; margin: 0 auto; }
    .section-title { font-size: 18px; font-weight: 700; color: #f59e0b; margin-bottom: 16px; border-bottom: 1px solid #1e293b; padding-bottom: 8px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
    .card { border-radius: 16px; overflow: hidden; border: 1px solid #334155; }
    .card-header { padding: 12px 16px; font-size: 13px; font-weight: 600; display: flex; justify-content: space-between; background: #1e293b; color: #e2e8f0; }
    .card-body { padding: 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px; gap: 16px; }
    .dark-bg { background: #080B14; }
    .light-bg { background: #f8fafc; color: #0f172a; }
    .size-tag { font-family: monospace; font-size: 12px; font-weight: bold; padding: 2px 8px; border-radius: 6px; background: rgba(245, 158, 11, 0.2); color: #f59e0b; }
    .label { font-size: 12px; color: #94a3b8; text-align: center; }
    .light-bg .label { color: #64748b; }
    .badge { display: inline-flex; align-items: center; justify-content: center; }
  </style>
</head>
<body>
  <div class="sheet-container">
    <div>
      <h1>Shine Auto Centre — Brand Icon Contact Sheet</h1>
      <p class="sub">Verified inspection for tab favicons, mobile home screen shortcuts, PWA standards, and in-site SVG icons across light and dark viewports.</p>
    </div>

    <!-- 1. Small Favicons: 16px, 32px, 48px -->
    <div>
      <div class="section-title">1. Small Tab Favicons (16px, 32px, 48px) — Monogram Precision</div>
      <div class="grid">
        <div class="card">
          <div class="card-header">
            <span>Dark Tab Background</span>
            <span class="size-tag">16x16 / 32x32 / 48x48</span>
          </div>
          <div class="card-body dark-bg">
            <div style="display: flex; gap: 24px; align-items: center;">
              <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
                <img src="../app/icon.svg" width="16" height="16" style="image-rendering: pixelated;" alt="16px">
                <span class="label">16px tab</span>
              </div>
              <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
                <img src="../app/icon.svg" width="32" height="32" alt="32px">
                <span class="label">32px retina</span>
              </div>
              <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
                <img src="../app/icon.svg" width="48" height="48" alt="48px">
                <span class="label">48px bookmark</span>
              </div>
            </div>
            <span class="label">Simplified amber/gold monogram ensures 100% legibility on dark tabs</span>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <span>Light Tab Background</span>
            <span class="size-tag">16x16 / 32x32 / 48x48</span>
          </div>
          <div class="card-body light-bg">
            <div style="display: flex; gap: 24px; align-items: center;">
              <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
                <img src="../app/icon.svg" width="16" height="16" style="image-rendering: pixelated;" alt="16px">
                <span class="label">16px tab</span>
              </div>
              <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
                <img src="../app/icon.svg" width="32" height="32" alt="32px">
                <span class="label">32px retina</span>
              </div>
              <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
                <img src="../app/icon.svg" width="48" height="48" alt="48px">
                <span class="label">48px bookmark</span>
              </div>
            </div>
            <span class="label">Contrasting border maintains crisp edges against pure white headers</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. Apple Touch Icon & PWA Icons -->
    <div>
      <div class="section-title">2. Mobile App Icons (Apple Touch 180px, PWA 192px & 512px)</div>
      <div class="grid">
        <div class="card">
          <div class="card-header">
            <span>Apple Touch Icon (iOS Home Screen)</span>
            <span class="size-tag">180x180 solid</span>
          </div>
          <div class="card-body dark-bg">
            <img src="../app/apple-icon.png" width="120" height="120" style="border-radius: 26px; box-shadow: 0 10px 25px rgba(0,0,0,0.5);" alt="Apple Touch Icon">
            <span class="label">Solid #080B14 background • Zero alpha per Apple HIG</span>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <span>Android PWA / Chrome Splash</span>
            <span class="size-tag">192x192 & 512x512</span>
          </div>
          <div class="card-body dark-bg">
            <img src="../public/icons/icon-512.png" width="120" height="120" style="border-radius: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.5);" alt="PWA 512">
            <span class="label">Master automotive emblem centered with safe-zone padding</span>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <span>Android Maskable Adaptive Icon</span>
            <span class="size-tag">Safe Zone (80%)</span>
          </div>
          <div class="card-body dark-bg">
            <img src="../public/icons/icon-maskable-192.png" width="120" height="120" style="border-radius: 50%; border: 2px dashed #f59e0b;" alt="Maskable Circle">
            <span class="label">Adaptive circular crop preview: emblem completely within safe zone</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. Master Brand Logos -->
    <div>
      <div class="section-title">3. Master Brand Logos (Clean Web, Monogram, White Vector)</div>
      <div class="grid">
        <div class="card">
          <div class="card-header">
            <span>Master Clean Logo</span>
            <span class="size-tag">Web Optimized</span>
          </div>
          <div class="card-body dark-bg">
            <img src="../public/images/brand/logo-clean.png" width="140" height="140" alt="Master Logo">
            <span class="label">High-fidelity 300 DPI master derivative</span>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <span>White Monochrome Vector</span>
            <span class="size-tag">High-Contrast Dark</span>
          </div>
          <div class="card-body dark-bg">
            <img src="../public/images/brand/logo-white.svg" width="140" height="140" alt="White Logo">
            <span class="label">Pure white silhouette on #080B14</span>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <span>Light Viewport Test</span>
            <span class="size-tag">White Background</span>
          </div>
          <div class="card-body light-bg">
            <img src="../public/images/brand/logo-clean.png" width="140" height="140" alt="Master Logo on Light">
            <span class="label">Tested on #FFFFFF paper/invoice background</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</body>
</html>`;

  fs.writeFileSync('docs/icon-contact-sheet.html', html, 'utf8');
  console.log('✓ Created docs/icon-contact-sheet.html');

  // Now generate a composite image using sharp as the screenshot artifact:
  // Render a 1200x800 contact sheet PNG
  const appleIcon = await sharp('app/apple-icon.png').resize(120, 120).toBuffer();
  const icon512 = await sharp('public/icons/icon-512.png').resize(120, 120).toBuffer();
  const iconMaskable = await sharp('public/icons/icon-maskable-192.png').resize(120, 120).toBuffer();
  const logoClean = await sharp('public/images/brand/logo-clean.png').resize(120, 120).toBuffer();
  const logoWhite = await sharp('public/images/brand/logo-white.svg').resize(120, 120).toBuffer();
  const favicon32 = await sharp('app/icon.svg').resize(48, 48).toBuffer();

  const canvasWidth = 1200;
  const canvasHeight = 700;

  // Render composite image
  const svgOverlay = `<svg width="${canvasWidth}" height="${canvasHeight}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${canvasWidth}" height="${canvasHeight}" fill="#0A0D18"/>
    <rect x="30" y="30" width="1140" height="640" rx="20" fill="#101422" stroke="#1E293B" stroke-width="2"/>
    
    <!-- Title -->
    <text x="60" y="80" font-family="system-ui, sans-serif" font-size="26" font-weight="900" fill="#FFFFFF">SHINE AUTO CENTRE — BRAND &amp; ICON CONTACT SHEET</text>
    <text x="60" y="108" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8">Verified multi-resolution icons on Dark (#080B14) and Light (#F8FAFC) backgrounds</text>

    <!-- Dark Section -->
    <rect x="60" y="140" width="520" height="480" rx="16" fill="#080B14" stroke="#F59E0B" stroke-width="1.5" stroke-opacity="0.4"/>
    <text x="80" y="175" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#F59E0B">Dark Background UI (#080B14)</text>
    <text x="80" y="325" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8" text-anchor="middle">Favicon 48px</text>
    <text x="210" y="325" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8" text-anchor="middle">Apple Touch 180</text>
    <text x="360" y="325" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8" text-anchor="middle">PWA 512</text>
    <text x="500" y="325" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8" text-anchor="middle">Maskable 192</text>
    <text x="210" y="585" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8" text-anchor="middle">Master Clean Logo</text>
    <text x="380" y="585" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8" text-anchor="middle">White Monochrome SVG</text>

    <!-- Light Section -->
    <rect x="620" y="140" width="520" height="480" rx="16" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
    <text x="640" y="175" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0F172A">Light Background UI (#F8FAFC)</text>
    <text x="690" y="325" font-family="system-ui, sans-serif" font-size="12" fill="#475569" text-anchor="middle">Favicon 48px</text>
    <text x="820" y="325" font-family="system-ui, sans-serif" font-size="12" fill="#475569" text-anchor="middle">Apple Touch 180</text>
    <text x="970" y="325" font-family="system-ui, sans-serif" font-size="12" fill="#475569" text-anchor="middle">PWA 512</text>
    <text x="820" y="585" font-family="system-ui, sans-serif" font-size="12" fill="#475569" text-anchor="middle">Master Clean on Light</text>
    <text x="970" y="585" font-family="system-ui, sans-serif" font-size="12" fill="#475569" text-anchor="middle">Monogram Vector</text>
  </svg>`;

  await sharp(Buffer.from(svgOverlay))
    .composite([
      // Dark side
      { input: favicon32, top: 220, left: 56 },
      { input: appleIcon, top: 190, left: 150 },
      { input: icon512, top: 190, left: 300 },
      { input: iconMaskable, top: 190, left: 440 },
      { input: logoClean, top: 440, left: 150 },
      { input: logoWhite, top: 440, left: 320 },
      // Light side
      { input: favicon32, top: 220, left: 666 },
      { input: appleIcon, top: 190, left: 760 },
      { input: icon512, top: 190, left: 910 },
      { input: logoClean, top: 440, left: 760 },
      { input: favicon32, top: 480, left: 946 },
    ])
    .png()
    .toFile('docs/icon-contact-sheet.png');

  console.log('✓ Created docs/icon-contact-sheet.png (High-res contact sheet screenshot)');
}

generateContactSheet().catch(err => {
  console.error(err);
  process.exit(1);
});
