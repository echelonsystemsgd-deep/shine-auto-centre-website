import fs from 'node:fs/promises';

async function scanWarmup(filename) {
  const data = JSON.parse(await fs.readFile(filename, 'utf8'));
  console.log('=== FILE:', filename, '===');
  
  function searchKeys(obj, path = '') {
    if (!obj || typeof obj !== 'object') return;
    for (const [k, v] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${k}` : k;
      if (k.toLowerCase().includes('faq') || k.toLowerCase().includes('gallery') || k.toLowerCase().includes('theme') || k.toLowerCase().includes('color') || k.toLowerCase().includes('font') || k.toLowerCase().includes('item')) {
        console.log(`Found relevant key: ${currentPath} (${typeof v}, isArray: ${Array.isArray(v)})`);
      }
      if (typeof v === 'object' && v !== null && path.split('.').length < 4) {
        searchKeys(v, currentPath);
      }
    }
  }

  searchKeys(data);
}

async function main() {
  await scanWarmup('extracted_raw/about_warmup.json');
  await scanWarmup('extracted_raw/about-1_warmup.json');
}

main();
