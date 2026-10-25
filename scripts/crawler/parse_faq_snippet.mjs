import fs from 'node:fs/promises';

async function parseFaqSnippet() {
  const text = await fs.readFile('extracted_raw/faq_snippet.html', 'utf8');
  // strip tags and print clean lines
  const clean = text.replace(/<[^>]+>/g, '\n').split('\n').map(l => l.trim()).filter(Boolean);
  console.log(clean.slice(0, 80).join('\n'));
}

parseFaqSnippet();
