import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/hooks/use-animations';

/**
 * ContactHeader component
 * Displays the header section for the Contact page with title and description.
 */
export const ContactHeader: React.FC = () => {
  return (
    <motion.div
      className="text-center mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        Contáctanos
      </motion.h2>
      <motion.p
        className="text-xl text-muted-foreground max-w-3xl mx-auto"
        variants={fadeInUp}
        transition={{ delay: 0.4 }}
      >
        Estamos aquí para ayudarle. Comuníquese con nosotros para una consulta
        gratuita y descubra cómo podemos impulsar el éxito de su empresa.
      </motion.p>
    </motion.div>
  );
};