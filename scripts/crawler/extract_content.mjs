import fs from 'node:fs/promises';
import path from 'node:path';

// Let's inspect CSS styles, colors, and all text elements
async function extractContent() {
  const pages = ['home', 'services', 'quote', 'about', 'about-1', 'privacy-policy', 'accessibility-statement'];
  const data = {};

  for (const p of pages) {
    const html = await fs.readFile(path.join('extracted_raw', `${p}.html`), 'utf8');

    // Extract headings
    const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => cleanText(m[1]));
    const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => cleanText(m[1]));
    const h3s = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => cleanText(m[1]));
    const h4s = [...html.matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/gi)].map(m => cleanText(m[1]));
    const h5s = [...html.matchAll(/<h5[^>]*>([\s\S]*?)<\/h5>/gi)].map(m => cleanText(m[1]));
    const h6s = [...html.matchAll(/<h6[^>]*>([\s\S]*?)<\/h6>/gi)].map(m => cleanText(m[1]));
    const ps = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(m => cleanText(m[1])).filter(t => t.length > 0);
    const spans = [...html.matchAll(/<span[^>]*>([\s\S]*?)<\/span>/gi)].map(m => cleanText(m[1])).filter(t => t.length > 0);
    const buttons = [...html.matchAll(/<button[^>]*>([\s\S]*?)<\/button>/gi)].map(m => cleanText(m[1])).filter(t => t.length > 0);
    const links = [...html.matchAll(/<a[^>]+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)].map(m => ({ href: m[1], text: cleanText(m[2]) }));

    // Extract images with alt and src
    const imgs = [...html.matchAll(/<img[^>]+(?:src="([^"]*)")?[^>]*(?:alt="([^"]*)")?[^>]*>/gi)].map(m => ({
      raw: m[0],
      src: m[1] || '',
      alt: m[2] || ''
    }));

    // Wix image tags often have data-pin-media or src or srcset or background-image
    const bgImages = [...html.matchAll(/url\((['"]?)(https:\/\/static\.wixstatic\.com\/media\/[^'")]+)\1\)/gi)].map(m => m[2]);

    data[p] = {
      h1s,
      h2s,
      h3s,
      h4s,
      h5s,
      h6s,
      ps: [...new Set(ps)],
      buttons: [...new Set(buttons)],
      links: links.filter(l => l.text.length > 0 || l.href.length > 0),
      imgs,
      bgImages: [...new Set(bgImages)]
    };
  }

  await fs.writeFile('extracted_raw/extracted_content.json', JSON.stringify(data, null, 2), 'utf8');
  console.log('Saved extracted_content.json');
}

function cleanText(str) {
  return str.replace(/<[^>]+>/g, ' ')
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/\s+/g, ' ')
            .trim();
}

extractContent();
