import React from 'react';
import { motion } from 'framer-motion';
import heroAccounting from '@/assets/hero-service.webp';

/**
 * ServiciosHeader component
 * Renders the hero section for the Services page with title, description, and contact button.
 * This component is responsible for displaying the introductory banner of the services section.
 */
export const ServiciosHeader: React.FC = () => {
  return (
    <section
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary">
        <img src={heroAccounting} alt="Servicios Contables" className="w-full h-full object-cover opacity-80" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-serif">
            Soluciones Contables que Impulsan tu Éxito
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto font-sans">
            Descubre nuestro portafolio completo de servicios contables, fiscales, administrativos  y financieros. Cada servicio está diseñado para satisfacer las necesidades específicas de tu empresa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/#contacto"
              className="px-8 py-3.5 bg-secondary text-secondary-foreground font-medium rounded-xl hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Contáctanos</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};