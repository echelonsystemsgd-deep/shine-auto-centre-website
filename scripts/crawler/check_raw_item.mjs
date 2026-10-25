import fs from 'node:fs/promises';

async function checkItemRaw() {
  const data = JSON.parse(await fs.readFile('extracted_raw/about-1_warmup.json', 'utf8'));
  const gallery = data.appsWarmupData['14271d6f-ba62-d045-549b-ab972ae1f70e']['comp-m39kab9u_galleryData'];
  console.log('Sample item 0:', JSON.stringify(gallery.items[0], null, 2));
  console.log('Sample item 1:', JSON.stringify(gallery.items[1], null, 2));
}

checkItemRaw();
