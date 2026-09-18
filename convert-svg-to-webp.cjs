const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const inputPath = path.join(publicDir, 'reforma laboral.svg');
const outputPath = path.join(publicDir, 'reforma-laboral.webp');

async function convertSvgToWebp() {
  try {
    const svgBuffer = fs.readFileSync(inputPath);

    await sharp(svgBuffer, { density: 150 })
      .resize(1200, null, { withoutEnlargement: true })
      .webp({ quality: 82, effort: 6, lossless: false })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    console.log(`✅ Convertido: reforma-laboral.webp`);
    console.log(`   Tamaño: ${(newStats.size / 1024).toFixed(2)} KB`);
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

convertSvgToWebp();
