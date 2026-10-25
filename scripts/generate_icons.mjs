import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const BRAND_DARK = { r: 8, g: 11, b: 20, alpha: 1 }; // #080B14
const BRAND_AMBER = '#F59E0B';
const BRAND_GOLD = '#FFBA08';
const BRAND_ORANGE = '#EA580C';

// 1. Helper to encode PNGs into a multi-resolution ICO file
function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(count, 4); // Number of images

  let offset = 6 + count * 16;
  const entries = [];
  const datas = [];

  for (const { width, height, buffer } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(width === 256 ? 0 : width, 0);
    entry.writeUInt8(height === 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // Image size
    entry.writeUInt32LE(offset, 12); // Offset
    entries.push(entry);
    datas.push(buffer);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...entries, ...datas]);
}

// 2. Monogram SVG (for small legible favicons and vector icon)
function generateMonogramSvg(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${size}" height="${size}">
  <defs>
    <linearGradient id="shineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${BRAND_GOLD}"/>
      <stop offset="50%" stop-color="${BRAND_AMBER}"/>
      <stop offset="100%" stop-color="${BRAND_ORANGE}"/>
    </linearGradient>
    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#141824"/>
      <stop offset="100%" stop-color="#080B14"/>
    </linearGradient>
  </defs>
  <!-- Background Badge -->
  <rect width="100" height="100" rx="22" fill="url(#shieldGrad)"/>
  <rect x="2" y="2" width="96" height="96" rx="20" fill="none" stroke="url(#shineGrad)" stroke-width="3" stroke-opacity="0.8"/>
  
  <!-- Stylized Geometric 'S' Monogram derived from Shine typography -->
  <!-- TODO: Owner approval for simplified favicon mark -->
  <path d="M 68 28 
           C 68 28, 38 24, 34 36 
           C 30 46, 70 48, 66 64 
           C 62 76, 32 72, 32 72
           M 32 72
           L 32 64
           C 32 64, 58 67, 56 57
           C 54 48, 18 47, 24 33
           C 29 20, 68 20, 68 20
           Z" 
        fill="url(#shineGrad)"/>
  
  <!-- Tiny subtle sparkle crown -->
  <polygon points="50,11 52,15 56,17 52,19 50,23 48,19 44,17 48,15" fill="${BRAND_GOLD}"/>
</svg>`;
}

async function main() {
  console.log('--- Generating Brand Icons and Favicon Suite ---');
  const masterLogoPath = 'public/images/brand/logo.png';
  const masterTrimmed = await sharp(masterLogoPath).trim().toBuffer();

  // A. Generate SVG monogram and vector icon
  const iconSvgContent = generateMonogramSvg(512);
  fs.writeFileSync('app/icon.svg', iconSvgContent);
  fs.writeFileSync('public/images/brand/logo-monogram.svg', iconSvgContent);
  console.log('✓ Created app/icon.svg and public/images/brand/logo-monogram.svg');

  // B. Generate Monochrome Safari Pinned Tab Mask
  const safariPinnedSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <!-- Monochrome Safari Pinned Tab Mask Icon for Shine Auto Centre -->
  <path d="M 68 28 C 68 28 38 24 34 36 C 30 46 70 48 66 64 C 62 76 32 72 32 72 L 32 64 C 32 64 58 67 56 57 C 54 48 18 47 24 33 C 29 20 68 20 68 20 Z" fill="#000000"/>
  <polygon points="50,11 52,15 56,17 52,19 50,23 48,19 44,17 48,15" fill="#000000"/>
</svg>`;
  fs.writeFileSync('public/icons/safari-pinned-tab.svg', safariPinnedSvg);
  console.log('✓ Created public/icons/safari-pinned-tab.svg');

  // C. Generate White Monochrome Logo Variant
  const logoWhiteSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <!-- White-on-dark variant for Shine Auto Centre -->
  <rect width="100" height="100" rx="20" fill="#080B14"/>
  <path d="M 68 28 C 68 28 38 24 34 36 C 30 46 70 48 66 64 C 62 76 32 72 32 72 L 32 64 C 32 64 58 67 56 57 C 54 48 18 47 24 33 C 29 20 68 20 68 20 Z" fill="#FFFFFF"/>
</svg>`;
  fs.writeFileSync('public/images/brand/logo-white.svg', logoWhiteSvg);
  console.log('✓ Created public/images/brand/logo-white.svg');

  // D. Generate Favicon PNGs (16, 32, 48) from monogram for sharp rendering
  const png16 = await sharp(Buffer.from(generateMonogramSvg(16))).resize(16, 16).png().toBuffer();
  const png32 = await sharp(Buffer.from(generateMonogramSvg(32))).resize(32, 32).png().toBuffer();
  const png48 = await sharp(Buffer.from(generateMonogramSvg(48))).resize(48, 48).png().toBuffer();

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 },
  ]);
  fs.writeFileSync('app/favicon.ico', icoBuffer);
  console.log('✓ Created app/favicon.ico (16x16, 32x32, 48x48 multi-res)');

  // E. Generate Apple Touch Icon (180x180, solid #080B14 background, NO transparency)
  const logoForApple = await sharp(masterTrimmed)
    .resize(130, 130, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: BRAND_DARK,
    },
  })
    .composite([{ input: logoForApple, gravity: 'center' }])
    .png()
    .toFile('app/apple-icon.png');
  console.log('✓ Created app/apple-icon.png (180x180 solid background)');

  // F. Generate PWA standard icons (192x192, 512x512)
  const logo192Inner = await sharp(masterTrimmed)
    .resize(150, 150, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 192,
      height: 192,
      channels: 4,
      background: BRAND_DARK,
    },
  })
    .composite([{ input: logo192Inner, gravity: 'center' }])
    .png()
    .toFile('public/icons/icon-192.png');
  console.log('✓ Created public/icons/icon-192.png');

  const logo512Inner = await sharp(masterTrimmed)
    .resize(420, 420, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: BRAND_DARK,
    },
  })
    .composite([{ input: logo512Inner, gravity: 'center' }])
    .png()
    .toFile('public/icons/icon-512.png');
  // Also put icon.png into app/ for Next.js automatic app/icon.png fallback
  await sharp('public/icons/icon-512.png').toFile('app/icon.png');
  console.log('✓ Created public/icons/icon-512.png and app/icon.png');

  // G. Generate Maskable PWA icons (with 20% safe-zone margin)
  // Inner mark should fit inside 70% of canvas
  const logoMaskable192 = await sharp(masterTrimmed)
    .resize(130, 130, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 192,
      height: 192,
      channels: 4,
      background: BRAND_DARK,
    },
  })
    .composite([{ input: logoMaskable192, gravity: 'center' }])
    .png()
    .toFile('public/icons/icon-maskable-192.png');

  const logoMaskable512 = await sharp(masterTrimmed)
    .resize(350, 350, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: BRAND_DARK,
    },
  })
    .composite([{ input: logoMaskable512, gravity: 'center' }])
    .png()
    .toFile('public/icons/icon-maskable-512.png');
  console.log('✓ Created maskable icons: icon-maskable-192.png & icon-maskable-512.png');

  // H. Clean optimized web version of the master logo
  await sharp(masterTrimmed)
    .resize(800, 800, { fit: 'inside' })
    .png({ quality: 90, compressionLevel: 9 })
    .toFile('public/images/brand/logo-clean.png');
  console.log('✓ Created public/images/brand/logo-clean.png');

  console.log('All brand and icon assets successfully generated!');
}

main().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
