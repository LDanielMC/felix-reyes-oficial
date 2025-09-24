import React from 'react';
import { motion } from 'framer-motion';
import { ValueCard } from './NosotrosComponents';
import { values } from './NosotrosData';

/**
 * NosotrosValores component
 * Displays the company values section with value cards in a grid layout.
 */
export const NosotrosValores: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">Nuestros Valores Fundamentales</h2>
          <p className="mt-4 text-lg text-muted-foreground">Son los pilares que guían cada una de nuestras acciones y decisiones, asegurando la confianza y credibilidad que nos define.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <ValueCard key={value.title} icon={value.icon} title={value.title} description={value.description} delay={index * 0.1}/>
          ))}
        </div>
      </div>
    </section>
  );
};