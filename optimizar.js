import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// --- CONFIGURACIÓN ---
const rootFolders = [
    './public',
    './src/assets'
];

const MAX_WIDTH = 800;
const QUALITY = 50;

// 🛑 DESACTIVAR CACHÉ DE SHARP (Clave para Windows)
sharp.cache(false);

const getFiles = (dir) => {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(filePath));
        } else {
            if (filePath.match(/\.(jpg|jpeg|png|webp)$/i)) {
                results.push(filePath);
            }
        }
    });
    return results;
};

const optimizar = async () => {
    console.log('🚀 Iniciando optimización (Modo RAM)...');
    
    let allFiles = [];
    rootFolders.forEach(folder => {
        allFiles = allFiles.concat(getFiles(folder));
    });

    console.log(`📂 Procesando ${allFiles.length} imágenes...`);

    let totalAhorrado = 0;

    for (const filePath of allFiles) {
        const tempPath = filePath + '.temp_' + Date.now() + '.webp';
        
        try {
            // 1. LEER A RAM (Esto libera el archivo del disco inmediatamente)
            const inputBuffer = fs.readFileSync(filePath);
            const originalSize = inputBuffer.length;

            // 2. Procesar desde la RAM
            await sharp(inputBuffer)
                .resize({ width: MAX_WIDTH, withoutEnlargement: true })
                .webp({ quality: QUALITY })
                .toFile(tempPath);

            const newSize = fs.statSync(tempPath).size;

            // 3. Comparar y Reemplazar
            if (newSize < originalSize) {
                // Como ya lo leímos en RAM, el archivo original está "suelto"
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath); // Borrar original
                }
                fs.renameSync(tempPath, filePath); // Poner el nuevo
                
                const ahorro = (originalSize - newSize) / 1024;
                totalAhorrado += ahorro;
                console.log(`✅ ${(originalSize/1024).toFixed(0)}KB -> ${(newSize/1024).toFixed(0)}KB | ${path.basename(filePath)}`);
            } else {
                // Si no ahorra, borramos temporal
                fs.unlinkSync(tempPath);
            }

        } catch (err) {
            console.error(`❌ Error en ${path.basename(filePath)}:`, err.message);
            if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        }
    }
    
    console.log(`✨ ¡Terminado! Ahorro total estimado: ${(totalAhorrado/1024).toFixed(2)} MB`);
};

optimizar();