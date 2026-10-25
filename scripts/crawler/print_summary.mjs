import fs from 'node:fs/promises';

async function readExtracted() {
  const data = JSON.parse(await fs.readFile('extracted_raw/extracted_content.json', 'utf8'));
  for (const [page, c] of Object.entries(data)) {
    console.log(`=== PAGE: ${page} ===`);
    console.log('H1:', c.h1s);
    console.log('H2:', c.h2s);
    console.log('H3:', c.h3s);
    console.log('Buttons:', c.buttons);
    console.log('Sample Ps:', c.ps.slice(0, 5));
    console.log('Links count:', c.links.length);
    console.log('Imgs count:', c.imgs.length);
    console.log('BgImages count:', c.bgImages.length);
  }
}

readExtracted();
