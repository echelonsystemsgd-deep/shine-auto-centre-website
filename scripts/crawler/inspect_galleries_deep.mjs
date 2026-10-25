import fs from 'node:fs/promises';

async function checkGalleries() {
  const g = JSON.parse(await fs.readFile('extracted_raw/all_galleries.json', 'utf8'));
  console.log('Galleries found:', Object.keys(g));

  const items1 = g['about-1_warmup.json_comp-m39kab9u_galleryData'] || [];
  const items2 = g['about_warmup.json_comp-m39jwsod_galleryData'] || [];

  console.log(`Gallery comp-m39kab9u has ${items1.length} items`);
  console.log(`Gallery comp-m39jwsod has ${items2.length} items`);

  // Let's inspect the filenames and any titles or dimensions
  console.log('\n--- Gallery 1 (24 items) ---');
  items1.forEach((it, i) => {
    console.log(`Item ${i+1}: ${it.url} | ${it.width}x${it.height}`);
  });

  console.log('\n--- Gallery 2 (12 items) ---');
  items2.forEach((it, i) => {
    console.log(`Item ${i+1}: ${it.url} | ${it.width}x${it.height}`);
  });
}

checkGalleries();
