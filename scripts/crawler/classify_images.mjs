import fs from 'node:fs/promises';

async function classify() {
  const images = JSON.parse(await fs.readFile('extracted_raw/all_images_list.json', 'utf8'));
  console.log(`Analyzing ${images.length} images...`);

  const prefixes = {};
  for (const img of images) {
    const rawUrl = img.fileId || img.url;
    const filename = rawUrl.split('/').pop().split('?')[0];
    const prefix = filename.split('_')[0];
    prefixes[prefix] = (prefixes[prefix] || 0) + 1;
  }
  console.log('Image count by prefix:', prefixes);

  for (const img of images) {
    const rawUrl = img.fileId || img.url;
    const fn = rawUrl.split('/').pop().split('?')[0];
    if (img.alt || img.foundOn.some(f => ['home', 'services', 'quote'].includes(f))) {
      console.log(`[${img.foundOn.join(',')}] ${fn} -> alt: "${img.alt || ''}"`);
    }
  }
}

classify();
