import fs from 'node:fs/promises';

async function printFaqs() {
  const faqs = JSON.parse(await fs.readFile('extracted_raw/faqs_parsed.json', 'utf8'));
  faqs.forEach((f, i) => {
    console.log(`Q${i+1}: ${f.question}`);
    console.log(`Text: ${f.snippet.slice(0, 200)}...\n`);
  });
}

printFaqs();
