import fs from 'node:fs/promises';
import path from 'node:path';

async function organizeAssets() {
  await fs.mkdir('public/images/brand', { recursive: true });
  await fs.mkdir('public/images/gallery', { recursive: true });

  // 1. Logo
  await fs.copyFile(
    'public/images/extracted/ec3202_70b9968aed9947a5ab600a2c580db4f9~mv2.png',
    'public/images/brand/logo.png'
  );
  await fs.copyFile(
    'public/images/extracted/ec3202_70b9968aed9947a5ab600a2c580db4f9~mv2.png',
    'public/images/brand/favicon.png'
  );

  // 2. Before/After pairs
  const pairs = [
    { num: 1, before: '25c959_70ca1baf6bcf4166acff3aeb890e6dff~mv2.webp', after: '25c959_b83d6ff65c4742e0bbbfb081803da40e~mv2.webp' },
    { num: 2, before: '25c959_f3978815206546ad9bb8a887f9052335~mv2.webp', after: '25c959_53abbc3df6b144918f48f5d480fe93ed~mv2.webp' },
    { num: 3, before: '25c959_9518e91dc91843b781fbdd1e447f03db~mv2.webp', after: '25c959_bd73bd6e62044b4a840db4b065807171~mv2.webp' },
    { num: 4, before: '25c959_718fe6a2e1de4dca81d8b6fd608dd8a1~mv2.webp', after: '25c959_571c7a7f934549b0b4bcd39f5fc21e7a~mv2.webp' },
    { num: 5, before: '25c959_aae105abac5d426c929e5f6a13b0a082~mv2.webp', after: '25c959_ae3924c26b0e4468ad5775df75231f88~mv2.webp' },
    { num: 6, before: '25c959_c11ab92647864a7e8167c79b69b9bd3a~mv2.webp', after: '25c959_e44d23a16dfe4661b07284661f1f8449~mv2.webp' },
    { num: 7, before: '25c959_7a296bdfc3984edfbf8e493222bc7d79~mv2.webp', after: '25c959_f34cec8b50c84160978c87f86f47f760~mv2.webp' },
    { num: 8, before: '25c959_cb22393190e44f2a968f2992b3f2247f~mv2.webp', after: '25c959_4f8fa454bfc04c8f9c48017d2173ef5a~mv2.webp' },
    { num: 9, before: '25c959_772d74ebd2804c559faafa8c8f0c5e4d~mv2.webp', after: '25c959_7883adc6657343bdabdf01dd8495b009~mv2.webp' },
    { num: 10, before: '25c959_bb1e59532dda478895547f914f9c9308~mv2.webp', after: '25c959_c65b0b1593ba4eb984abfc6ce16c8d1d~mv2.webp' },
    { num: 11, before: '25c959_706d95e68dd94d5e84e50add0ca1c4d1~mv2.webp', after: '25c959_8098768c2c424fec94417859199dbabf~mv2.webp' },
    { num: 12, before: '25c959_eeaac77d8e9b4ef4a16155def19e1fde~mv2.webp', after: '25c959_cd3e7b01f4ca4af69dc9723fc4fe7a4f~mv2.webp' }
  ];

  for (const p of pairs) {
    await fs.copyFile(`public/images/extracted/${p.before}`, `public/images/gallery/pair-${p.num}-before.webp`);
    await fs.copyFile(`public/images/extracted/${p.after}`, `public/images/gallery/pair-${p.num}-after.webp`);
  }

  console.log('Organized logo, favicon, and 12 before/after pairs into public/images/');
}

organizeAssets();
