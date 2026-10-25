import fs from 'node:fs/promises';

async function extractFAQsAndGalleries() {
  const aboutHtml = await fs.readFile('extracted_raw/about.html', 'utf8');
  const about1Html = await fs.readFile('extracted_raw/about-1.html', 'utf8');

  // Let's search for FAQ Q&As in warmup or html
  const warmup = JSON.parse(await fs.readFile('extracted_raw/about_warmup.json', 'utf8'));
  const warmup1 = JSON.parse(await fs.readFile('extracted_raw/about-1_warmup.json', 'utf8'));

  // Write out formatted inspection of warmup data
  await fs.writeFile('extracted_raw/about_warmup_pretty.json', JSON.stringify(warmup, null, 2));
  await fs.writeFile('extracted_raw/about-1_warmup_pretty.json', JSON.stringify(warmup1, null, 2));

  console.log('Saved pretty warmups');
}

extractFAQsAndGalleries();
