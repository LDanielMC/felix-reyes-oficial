const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const backupDir = path.join(__dirname, 'public', 'backup-original');

const imagesToReplace = [
  'reformasfiscales.webp',
  'reformasfiscales2.webp',
  'imagen1.webp',
  'imagen2.webp'
];

// Crear carpeta de backup si no existe
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

function replaceImage(filename) {
  const originalPath = path.join(publicDir, filename);
  const optimizedPath = path.join(publicDir, 'optimized_' + filename);
  const backupPath = path.join(backupDir, filename);

  try {
    // Verificar que existe la versión optimizada
    if (!fs.existsSync(optimizedPath)) {
      console.log(`⚠️  No se encontró optimized_${filename}, omitiendo...`);
      return;
    }

    // Hacer backup del original si aún no existe
    if (fs.existsSync(originalPath) && !fs.existsSync(backupPath)) {
      fs.copyFileSync(originalPath, backupPath);
      console.log(`📦 Backup creado: ${filename}`);
    }

    // Eliminar original si existe
    if (fs.existsSync(originalPath)) {
      fs.unlinkSync(originalPath);
    }

    // Renombrar optimizada a nombre original
    fs.renameSync(optimizedPath, originalPath);
    
    console.log(`✅ Reemplazada: ${filename}`);

  } catch (error) {
    console.error(`❌ Error reemplazando ${filename}:`, error.message);
  }
}

console.log('🔄 Reemplazando imágenes originales con versiones optimizadas...\n');

for (const image of imagesToReplace) {
  replaceImage(image);
}

console.log('\n✨ ¡Imágenes reemplazadas exitosamente!');
console.log('📁 Las originales están guardadas en: public/backup-original');
console.log('\n🚀 Ahora puedes ejecutar: npm run build && firebase deploy');
