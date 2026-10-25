import fs from 'node:fs/promises';

async function listAllPairs() {
  const data = JSON.parse(await fs.readFile('extracted_raw/about-1_warmup.json', 'utf8'));
  const gallery = data.appsWarmupData['14271d6f-ba62-d045-549b-ab972ae1f70e']['comp-m39kab9u_galleryData'];
  
  console.log(`=== BEFORE/AFTER GALLERY (${gallery.items.length} items) ===`);
  gallery.items.forEach((item, idx) => {
    console.log(`[${idx+1}] File: "${item.metaData.fileName}" | Media: ${item.mediaUrl} (${item.metaData.width}x${item.metaData.height})`);
  });

  const gallery2 = data.appsWarmupData['14271d6f-ba62-d045-549b-ab972ae1f70e']['comp-m39k63pq6_galleryData'];
  console.log(`\n=== SECOND GALLERY (${gallery2.items.length} items) ===`);
  gallery2.items.forEach((item, idx) => {
    console.log(`[${idx+1}] File: "${item.metaData.fileName}" | Media: ${item.mediaUrl} (${item.metaData.width}x${item.metaData.height})`);
  });
}

listAllPairs();
