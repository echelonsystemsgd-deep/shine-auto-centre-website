import fs from 'node:fs/promises';

async function extractFAQs() {
  const html = await fs.readFile('extracted_raw/about.html', 'utf8');
  
  // Look for accordion or FAQ structure in about.html
  // Let's find all questions and answers
  // In Wix, FAQ answers often appear inside specific divs or paragraphs
  // Let's dump all text elements inside about.html to inspect them
  const lines = html.split('\n');
  const relevant = [];
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l.includes('What types of car body') || l.includes('Can you fix scratches') || l.includes('How much will it cost') || l.includes('Do you provide free estimates')) {
      relevant.push(...lines.slice(Math.max(0, i - 10), Math.min(lines.length, i + 100)));
    }
  }

  await fs.writeFile('extracted_raw/faq_snippet.html', relevant.join('\n'));
  console.log('Saved faq_snippet.html, length:', relevant.length);
}

extractFAQs();
