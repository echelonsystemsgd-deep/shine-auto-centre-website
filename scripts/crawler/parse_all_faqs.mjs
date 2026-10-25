import fs from 'node:fs/promises';

async function extractAllFaqs() {
  const html = await fs.readFile('extracted_raw/about.html', 'utf8');
  
  // Find all accordion questions and answers
  // In Wix FAQ apps, questions and answers are usually together
  // Let's search for the list of questions we saw earlier:
  const questions = [
    'What types of car body repairs do you offer?',
    'Can you fix scratches, dents, and major collision damage?',
    'Do you offer color matching for paint jobs?',
    'Do you work on all car makes and models?',
    'How much will it cost to repair my car?',
    'Do you provide free estimates or quotes?',
    'Are there any hidden fees in your pricing?',
    'Can I get a discount on multiple services?',
    'How long does it take to complete a repair or paint job?',
    'What’s the process for booking an appointment?',
    'Can you do same-day repairs?',
    'Do I need to schedule in advance, or do you accept walk-ins?',
    'Do you offer a warranty on your repairs or paint jobs?',
    'What kind of paint do you use? Is it durable?',
    'How do you ensure the quality of your work?',
    'Can you match the exact color of my car?',
    'Do you offer detailing or polishing services?',
    'Can you help with insurance claims?',
    'What should I do right after an accident?',
    'Do you provide a courtesy car while mine is being repaired?'
  ];

  const qna = [];
  for (let q of questions) {
    const idx = html.indexOf(q);
    if (idx !== -1) {
      // Look forward 1500 chars to find answer
      const snippet = html.slice(idx, idx + 1500);
      const cleanSnippet = snippet.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
      qna.push({ question: q, snippet: cleanSnippet });
    }
  }

  await fs.writeFile('extracted_raw/faqs_parsed.json', JSON.stringify(qna, null, 2));
  console.log(`Extracted ${qna.length} FAQ snippets`);
}

extractAllFaqs();
