import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

/**
 * NosotrosMisionVision component
 * Displays the mission and vision section with icons and descriptions.
 */
export const NosotrosMisionVision: React.FC = () => {
  return (
    <section className="py-16 md:py-0">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <Target className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-foreground font-serif mb-3">Misión</h2>
                <p className="text-muted-foreground leading-relaxed">Generar y proponer estrategias financieras y administrativas a partir de procesos y herramientas innovadoras del más alto nivel, colaborando a su vez en la formación de profesionistas capaces de crecer.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <Eye className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-foreground font-serif mb-3">Visión</h2>
                <p className="text-muted-foreground leading-relaxed">Posicionarnos entre los despachos más importantes y reconocidos de México, impulsando nuestro crecimiento a través de la satisfacción de nuestros clientes.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};