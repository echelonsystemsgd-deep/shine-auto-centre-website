import fs from 'node:fs/promises';

async function inspectGalleries() {
  const g = JSON.parse(await fs.readFile('extracted_raw/all_galleries.json', 'utf8'));
  for (const [key, items] of Object.entries(g)) {
    console.log(`\n=== Gallery: ${key} (${items.length} items) ===`);
    items.forEach((it, idx) => {
      console.log(`[${idx + 1}] Title: "${it.title}" | Desc: "${it.description}" | URL: ${it.url || it.mediaUrl || it.src}`);
    });
  }
}

inspectGalleries();
