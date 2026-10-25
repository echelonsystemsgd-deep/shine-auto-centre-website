import fs from 'node:fs/promises';
import path from 'node:path';

const pages = [
  { url: 'https://www.shineauto.co.uk', name: 'home' },
  { url: 'https://www.shineauto.co.uk/services', name: 'services' },
  { url: 'https://www.shineauto.co.uk/quote', name: 'quote' },
  { url: 'https://www.shineauto.co.uk/about', name: 'about' },
  { url: 'https://www.shineauto.co.uk/about-1', name: 'about-1' },
  { url: 'https://www.shineauto.co.uk/privacy-policy', name: 'privacy-policy' },
  { url: 'https://www.shineauto.co.uk/accessibility-statement', name: 'accessibility-statement' }
];

async function main() {
  await fs.mkdir('extracted_raw', { recursive: true });
  for (const p of pages) {
    console.log(`Fetching ${p.url}...`);
    try {
      const res = await fetch(p.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      const html = await res.text();
      await fs.writeFile(path.join('extracted_raw', `${p.name}.html`), html, 'utf8');
      console.log(`Saved ${p.name}.html (${html.length} bytes)`);
    } catch (err) {
      console.error(`Error fetching ${p.url}:`, err);
    }
  }
}

main();
