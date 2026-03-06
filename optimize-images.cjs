const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Imágenes de los artículos que necesitan optimización
const imagesToOptimize = [
  'reformasfiscales.webp',      // DepositosBancariosPost
  'reformasfiscales2.webp',     // ResumenEjecutivoPost
  'imagen1.webp',               // ResumenEjecutivoPost - Esquema EFOS
  'imagen2.webp'                // ResumenEjecutivoPost - Materialidad
];

const publicDir = path.join(__dirname, 'public');
const backupDir = path.join(__dirname, 'public', 'backup-original');

// Crear carpeta de backup si no existe
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

async function optimizeImage(filename) {
  const inputPath = path.join(publicDir, filename);
  const backupPath = path.join(backupDir, filename);
  const tempOutputPath = path.join(publicDir, 'optimized_' + filename);

  try {
    // Verificar si el archivo existe
    if (!fs.existsSync(inputPath)) {
      console.log(`❌ No se encontró: ${filename}`);
      return;
    }

    // Obtener tamaño original
    const originalStats = fs.statSync(inputPath);
    const originalSize = (originalStats.size / 1024).toFixed(2);

    // Optimizar imagen con sharp a un archivo temporal
    await sharp(inputPath)
      .webp({
        quality: 80,           // Calidad 80% (buen balance)
        effort: 6,             // Esfuerzo de compresión (0-6, mayor = mejor compresión)
        lossless: false        // Usar compresión con pérdida
      })
      .toFile(tempOutputPath);

    // Obtener nuevo tamaño
    const newStats = fs.statSync(tempOutputPath);
    const newSize = (newStats.size / 1024).toFixed(2);
    const reduction = ((1 - newStats.size / originalStats.size) * 100).toFixed(1);

    console.log(`✅ ${filename}:`);
    console.log(`   Original: ${originalSize} KB`);
    console.log(`   Optimizada: ${newSize} KB (guardada como optimized_${filename})`);
    console.log(`   Reducción: ${reduction}%\n`);

  } catch (error) {
    console.error(`❌ Error optimizando ${filename}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Iniciando optimización de imágenes...\n');

  for (const image of imagesToOptimize) {
    await optimizeImage(image);
  }

  console.log('✨ Proceso completado!');
  console.log('\n� SIGUIENTE PASO:');
  console.log('   1. Detén el servidor de desarrollo (npm run dev)');
  console.log('   2. Ejecuta el siguiente comando para reemplazar las imágenes:');
  console.log('      node replace-optimized.cjs');
  console.log('   3. Vuelve a iniciar el servidor\n');
}

main();
