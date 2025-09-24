import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ImageCarousel, CarouselSkeleton } from './NosotrosComponents';
import { galleryImages } from './NosotrosData';

/**
 * NosotrosTrayectoria component
 * Displays the trajectory/history section with image carousel and company description.
 */
export const NosotrosTrayectoria: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload critical images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = galleryImages.slice(0, 2).map(img => {
        return new Promise((resolve) => {
          const image = new Image();
          image.onload = resolve;
          image.onerror = resolve;
          image.src = img.src;
        });
      });
      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };
    preloadImages();
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-full min-h-[450px]"
          >
            {imagesLoaded ? (
              <ImageCarousel images={galleryImages} />
            ) : (
              <CarouselSkeleton />
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">Nuestra Trayectoria</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed font-sans">
              <p>Félix Reyes Contadores es una empresa familiar fundada hace más de cinco décadas por el Contador Público Antonio Félix y su esposa Lilia Guadalupe Reyes. Actualmente, sus hijas Carmen, Rocío y Lucía conforman la alta gerencia.</p>
              <p>Nuestra filosofía es la búsqueda constante de la excelencia y la aplicación de la experiencia a los requerimientos financieros que demanda el país, priorizando siempre la información transparente y la más alta calidad.</p>
              <p>El uso de la tecnología y el dominio del idioma inglés nos ha permitido expandir nuestros servicios a clientes en toda la República Mexicana, así como a interesados en Estados Unidos y Canadá, consolidándonos como un referente en el sector.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};