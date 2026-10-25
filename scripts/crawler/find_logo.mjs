import fs from 'node:fs/promises';

async function findLogo() {
  const homeHtml = await fs.readFile('extracted_raw/home.html', 'utf8');
  const idx = homeHtml.indexOf('Shahin Auto Centre');
  if (idx !== -1) {
    console.log('Snippet around Shahin Auto Centre:');
    console.log(homeHtml.slice(Math.max(0, idx - 400), Math.min(homeHtml.length, idx + 400)));
  }
}

findLogo();
