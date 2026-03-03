import React from 'react';
import { motion } from 'framer-motion';
import teamPhoto from '/Equipo1.webp';

/**
 * NosotrosTrayectoria component
 * Displays the trajectory/history section with a static team photo and company description.
 */
export const NosotrosTrayectoria: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 order-2 md:order-1"
          >
            <img
              src={teamPhoto}
              alt="Equipo de Félix Reyes Contadores"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6 order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">Nuestra Trayectoria</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed font-sans">
              <p>Félix Reyes Contadores es una empresa familiar fundada hace más de cinco décadas por el Contador Público Antonio Félix y su esposa Lilia Reyes. Actualmente, sus hijas Carmen, Rocío y Lucía conforman la alta gerencia.</p>
              <p>Nuestra filosofía es la búsqueda constante de la excelencia y la aplicación de la experiencia a los requerimientos financieros que demanda el país, priorizando siempre la información transparente y la más alta calidad.</p>
              <p>El uso de la tecnología y el dominio del idioma inglés nos ha permitido expandir nuestros servicios a clientes en toda la República Mexicana, así como a interesados en Estados Unidos y Canadá, consolidándonos como un referente en el sector.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
