import fs from 'node:fs/promises';

async function exportFullText() {
  const content = JSON.parse(await fs.readFile('extracted_raw/extracted_content.json', 'utf8'));
  let md = '# Full Extracted Text from Existing Site (https://www.shineauto.co.uk)\n\n';

  for (const [page, data] of Object.entries(content)) {
    md += `## Page: /${page === 'home' ? '' : page}\n\n`;
    if (data.h1s.length) md += `### H1 Headings\n${data.h1s.map(h => `- ${h}`).join('\n')}\n\n`;
    if (data.h2s.length) md += `### H2 Headings\n${data.h2s.map(h => `- ${h}`).join('\n')}\n\n`;
    if (data.h3s.length) md += `### H3 Headings\n${data.h3s.map(h => `- ${h}`).join('\n')}\n\n`;
    if (data.buttons.length) md += `### Buttons\n${data.buttons.map(b => `- [${b}]`).join('\n')}\n\n`;
    if (data.ps.length) md += `### Paragraphs & Body Text\n${data.ps.map(p => `> ${p}\n`).join('\n')}\n\n`;
    md += '---\n\n';
  }

  await fs.mkdir('docs', { recursive: true });
  await fs.writeFile('docs/extracted_text.md', md, 'utf8');
  console.log('Saved docs/extracted_text.md');
}

exportFullText();
