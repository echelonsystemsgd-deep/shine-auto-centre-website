import fs from 'node:fs/promises';

async function extractGalleries() {
  const files = ['about_warmup.json', 'about-1_warmup.json', 'home_warmup.json'];
  const allGalleries = {};

  for (const f of files) {
    const data = JSON.parse(await fs.readFile(`extracted_raw/${f}`, 'utf8'));
    const apps = data.appsWarmupData || {};
    for (const [appId, appVal] of Object.entries(apps)) {
      for (const [k, v] of Object.entries(appVal)) {
        if (k.includes('galleryData') && v.items) {
          console.log(`Found gallery in ${f} -> ${k} with ${v.items.length} items`);
          allGalleries[`${f}_${k}`] = v.items.map(item => ({
            itemId: item.itemId,
            title: item.title,
            description: item.description,
            url: item.url,
            mediaUrl: item.mediaUrl,
            src: item.src,
            width: item.width,
            height: item.height,
            metadata: item.metadata
          }));
        }
      }
    }
  }

  await fs.writeFile('extracted_raw/all_galleries.json', JSON.stringify(allGalleries, null, 2));
  console.log('Saved all_galleries.json');
}

extractGalleries();
