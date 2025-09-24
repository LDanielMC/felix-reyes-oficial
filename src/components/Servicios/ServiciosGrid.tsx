import React from 'react';
import { motion, Variants } from 'framer-motion';
import { services } from './servicesData';
import { ServicioCard } from './ServicioCard';

// Container animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

/**
 * ServiciosGrid component
 * Renders the desktop grid layout for services.
 * Displays services in a responsive grid for large screens.
 */
export const ServiciosGrid: React.FC = () => {
  return (
    <motion.div
      className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {services.map((service, index) => (
        <ServicioCard
          key={service.id}
          service={service}
          index={index}
          isMobile={false}
        />
      ))}
    </motion.div>
  );
};