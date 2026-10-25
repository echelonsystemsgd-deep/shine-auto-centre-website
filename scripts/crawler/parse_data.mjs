import fs from 'node:fs/promises';
import path from 'node:path';

async function parse() {
  const files = await fs.readdir('extracted_raw');
  const results = {};

  for (const f of files) {
    if (!f.endsWith('.html')) continue;
    const pageName = f.replace('.html', '');
    const html = await fs.readFile(path.join('extracted_raw', f), 'utf8');

    // Extract warmup data
    const warmupMatch = html.match(/id="wix-warmup-data">([^<]+)<\/script>/);
    let warmupJson = null;
    if (warmupMatch) {
      try {
        warmupJson = JSON.parse(warmupMatch[1]);
      } catch (e) {
        console.warn('Failed parsing warmup json for', f);
      }
    }

    // Extract typography / fonts
    const fontMatches = [...html.matchAll(/fonts\.googleapis\.com\/css\?family=([^"&']+)/g)].map(m => m[1]);
    const wixFontMatches = [...html.matchAll(/static\.parastorage\.com\/services\/third-party\/fonts\/user-site-fonts\/fonts\/([^"&']+)/g)].map(m => m[1]);

    // Extract all images
    const imgMatches = [...html.matchAll(/<img[^>]+src="([^">]+)"[^>]*>/g)].map(m => m[0]);
    const wixStaticMedia = [...html.matchAll(/https:\/\/static\.wixstatic\.com\/media\/([a-zA-Z0-9_%~.-]+)/g)].map(m => m[0]);

    // Extract meta title, description
    const titleMatch = html.match(/<title>([^<]+)<\/title>/);
    const descMatch = html.match(/<meta[^>]+name="description"[^>]+content="([^">]+)"/i);

    results[pageName] = {
      title: titleMatch ? titleMatch[1] : '',
      description: descMatch ? descMatch[1] : '',
      fontMatches: [...new Set(fontMatches)],
      wixFonts: [...new Set(wixFontMatches)],
      mediaUrls: [...new Set(wixStaticMedia)],
      warmupKeys: warmupJson ? Object.keys(warmupJson) : []
    };

    if (warmupJson) {
      await fs.writeFile(path.join('extracted_raw', `${pageName}_warmup.json`), JSON.stringify(warmupJson, null, 2), 'utf8');
    }
  }

  await fs.writeFile('extracted_raw/summary.json', JSON.stringify(results, null, 2), 'utf8');
  console.log('Saved summary.json and warmup files');
}

parse();
