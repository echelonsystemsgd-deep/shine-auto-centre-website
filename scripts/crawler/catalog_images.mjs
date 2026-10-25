import fs from 'node:fs/promises';
import path from 'node:path';

async function getAllImages() {
  const pages = ['home', 'services', 'quote', 'about', 'about-1', 'privacy-policy', 'accessibility-statement'];
  const imageMap = new Map();

  for (const p of pages) {
    const html = await fs.readFile(`extracted_raw/${p}.html`, 'utf8');
    
    // Pattern 1: wixstatic media URLs
    const matches1 = html.matchAll(/https:\/\/static\.wixstatic\.com\/media\/([a-zA-Z0-9_%~.-]+)/g);
    for (const m of matches1) {
      const full = m[0];
      const filename = m[1];
      if (!imageMap.has(full)) {
        imageMap.set(full, { url: full, fileId: filename, foundOn: [p] });
      } else {
        imageMap.get(full).foundOn.push(p);
      }
    }

    // Pattern 2: wix URI format wix:image://v1/8bb438_...
    const matches2 = html.matchAll(/wix:image:\/\/v1\/([a-zA-Z0-9_%~.-]+)\/([a-zA-Z0-9_%~.-]+)#originWidth=(\d+)&amp;originHeight=(\d+)/g);
    for (const m of matches2) {
      const fileId = m[1];
      const origName = m[2];
      const width = m[3];
      const height = m[4];
      const full = `https://static.wixstatic.com/media/${fileId}`;
      if (!imageMap.has(full)) {
        imageMap.set(full, { url: full, fileId, origName, width, height, foundOn: [p] });
      }
    }

    // Pattern 3: <img ... src="..." alt="...">
    const imgTags = html.matchAll(/<img[^>]+src="([^">]+)"[^>]*>/gi);
    for (const img of imgTags) {
      const src = img[1];
      const altMatch = img[0].match(/alt="([^">]*)"/i);
      const alt = altMatch ? altMatch[1] : '';
      if (imageMap.has(src)) {
        imageMap.get(src).alt = alt;
      } else if (src.startsWith('https://static.wixstatic.com/media/')) {
        imageMap.set(src, { url: src, alt, foundOn: [p] });
      }
    }
  }

  // Also check all_galleries.json
  const galleries = JSON.parse(await fs.readFile('extracted_raw/all_galleries.json', 'utf8'));
  for (const [gKey, items] of Object.entries(galleries)) {
    for (const item of items) {
      const urlPart = item.url || item.mediaUrl || item.src;
      if (urlPart) {
        let cleanUrl = urlPart;
        if (!cleanUrl.startsWith('http')) {
          cleanUrl = `https://static.wixstatic.com/media/${cleanUrl}`;
        }
        if (!imageMap.has(cleanUrl)) {
          imageMap.set(cleanUrl, {
            url: cleanUrl,
            fileId: urlPart,
            title: item.title,
            description: item.description,
            width: item.width,
            height: item.height,
            foundOn: [gKey]
          });
        }
      }
    }
  }

  const list = Array.from(imageMap.values());
  console.log(`Total unique image assets found: ${list.length}`);
  await fs.writeFile('extracted_raw/all_images_list.json', JSON.stringify(list, null, 2));
}

getAllImages();
