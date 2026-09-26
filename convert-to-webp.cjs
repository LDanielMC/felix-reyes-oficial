/**
 * Convierte imágenes (SVG, PNG, JPG) a WebP optimizado para el sitio.
 *
 * Uso:
 *   node convert-to-webp.cjs <entrada> [salida.webp] [ancho]
 *
 * Ejemplos:
 *   node convert-to-webp.cjs "image-sources/portada.png"
 *   node convert-to-webp.cjs "image-sources/portada.svg" public/mi-post.webp 1000
 *
 * Por omisión: ancho máximo 1000 px (el estándar de las portadas del blog),
 * calidad 82 y salida en public/ con el mismo nombre base.
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const [, , input, outputArg, widthArg] = process.argv;

if (!input) {
  console.error('Uso: node convert-to-webp.cjs <entrada> [salida.webp] [ancho]');
  process.exit(1);
}

const width = Number(widthArg) || 1000;
const output = outputArg || path.join('public', `${path.basename(input, path.extname(input))}.webp`);

async function convert() {
  try {
    const before = fs.statSync(input).size;
    const buffer = fs.readFileSync(input);

    // density solo aplica a SVG; en rasters sharp la ignora.
    await sharp(buffer, { density: 150 })
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(output);

    const after = fs.statSync(output).size;
    console.log(`✅ ${output}`);
    console.log(`   ${(before / 1024).toFixed(1)} KB → ${(after / 1024).toFixed(1)} KB  (-${(100 - (after / before) * 100).toFixed(1)}%)  ${width}px`);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

convert();
