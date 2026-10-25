import fs from 'node:fs/promises';
import path from 'node:path';

async function downloadImages() {
  await fs.mkdir('public/images/extracted', { recursive: true });
  await fs.mkdir('public/images/gallery', { recursive: true });
  await fs.mkdir('public/images/brand', { recursive: true });

  const images = JSON.parse(await fs.readFile('extracted_raw/all_images_list.json', 'utf8'));

  // Let's filter to real images
  // We want:
  // 1. Logo & Favicon
  // 2. Real gallery photos (8bb438, 25c959)
  // 3. Service images
  // 4. Hero/Quote images

  const downloadList = [];

  for (const img of images) {
    let url = img.url;
    // ensure full resolution from wix
    // if url contains /v1/fill... we want the master original media url
    const fileIdMatch = url.match(/https:\/\/static\.wixstatic\.com\/media\/([^/]+)/);
    if (fileIdMatch) {
      const fileId = fileIdMatch[1];
      const masterUrl = `https://static.wixstatic.com/media/${fileId}`;
      if (!downloadList.some(d => d.fileId === fileId)) {
        downloadList.push({
          fileId,
          url: masterUrl,
          alt: img.alt || img.title || '',
          foundOn: img.foundOn
        });
      }
    }
  }

  console.log(`Downloading ${downloadList.length} master images...`);
  const results = [];

  for (let i = 0; i < downloadList.length; i++) {
    const item = downloadList[i];
    const cleanName = item.fileId.replace(/[^a-zA-Z0-9_.~-]/g, '_');
    const destPath = path.join('public/images/extracted', cleanName);

    try {
      const res = await fetch(item.url);
      if (res.ok) {
        const buffer = Buffer.from(await res.arrayBuffer());
        await fs.writeFile(destPath, buffer);
        results.push({
          ...item,
          localPath: `/images/extracted/${cleanName}`,
          sizeBytes: buffer.length
        });
        console.log(`[${i+1}/${downloadList.length}] Saved ${cleanName} (${(buffer.length / 1024).toFixed(1)} KB)`);
      } else {
        console.warn(`Failed ${item.url} (${res.status})`);
      }
    } catch (e) {
      console.warn(`Error downloading ${item.url}:`, e.message);
    }
  }

  await fs.writeFile('extracted_raw/downloaded_assets.json', JSON.stringify(results, null, 2));
  console.log(`Successfully downloaded ${results.length} images.`);
}

downloadImages();
