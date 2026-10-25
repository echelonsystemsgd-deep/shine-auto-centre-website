import fs from 'node:fs/promises';

async function analyze() {
  const homeWarmup = JSON.parse(await fs.readFile('extracted_raw/home_warmup.json', 'utf8'));
  console.log('Home warmup top keys:', Object.keys(homeWarmup));

  // Let's inspect sub-keys
  for (const k of Object.keys(homeWarmup)) {
    console.log(`Key: ${k}`, typeof homeWarmup[k]);
  }
}

analyze();
