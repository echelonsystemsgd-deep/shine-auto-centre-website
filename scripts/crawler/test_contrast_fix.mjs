function luminance(r, g, b) {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const num = parseInt(hex, 16);
  return [num >> 16, (num >> 8) & 255, num & 255];
}

function contrast(hex1, hex2) {
  const [r1, g1, b1] = hexToRgb(hex1);
  const [r2, g2, b2] = hexToRgb(hex2);
  const lum1 = luminance(r1, g1, b1);
  const lum2 = luminance(r2, g2, b2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

console.log("White on #C2410C:", contrast("#FFFFFF", "#C2410C").toFixed(2));
console.log("Dark #090D16 on #F97316:", contrast("#090D16", "#F97316").toFixed(2));
console.log("White on #2563EB:", contrast("#FFFFFF", "#2563EB").toFixed(2));
console.log("White on #1D4ED8:", contrast("#FFFFFF", "#1D4ED8").toFixed(2));
console.log("Dark #030712 on Amber #FBBF24:", contrast("#030712", "#FBBF24").toFixed(2));
