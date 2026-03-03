import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { ServiceDetailProps } from './ServiceDetailData';

/**
 * ServiceDetailContent component
 * Displays the service details list and contact section.
 * Handles the right side of the service detail layout.
 */
export const ServiceDetailContent: React.FC<ServiceDetailProps> = ({ service }) => {
  return (
    <div className="lg:w-2/3 lg:pl-12 mt-12 lg:mt-0">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* AQUI SE AGREGO font-heading */}
        <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">Detalles del servicio</h2>
        
        <div className="space-y-6">
          {service.details.map((detail, i) => (
            <motion.div
              key={i}
              className="flex items-start group"
              initial={{ x: 20, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.2 + (i * 0.05),
                  type: 'spring',
                  stiffness: 300,
                  damping: 24
                }
              }}
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="flex items-start">
                <motion.div
                  className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 5 }}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                </motion.div>
                <p className="text-foreground">{detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-12 pt-8 border-t border-border"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {/* AQUI SE AGREGO font-heading */}
        <h3 className="text-xl font-heading font-semibold text-foreground mb-4">¿Necesitas más información?</h3>
        
        <p className="text-muted-foreground mb-6">Nuestro equipo de expertos está listo para atender tus consultas y ofrecerte soluciones personalizadas.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* WhatsApp button - hidden on mobile */}
          <motion.a
            href="https://wa.me/527773141829?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#25D366] hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] transition-all duration-200 flex-1 text-center"
            whileHover={{
              scale: 1.02,
              y: -2,
              boxShadow: '0 4px 12px rgba(37, 211, 102, 0.15)'
            }}
            whileTap={{
              scale: 0.98,
              y: 0,
              boxShadow: '0 2px 8px rgba(37, 211, 102, 0.1)'
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <motion.span
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
            </motion.span>
            <span>WhatsApp</span>
          </motion.a>
          <motion.a
            href="tel:7773128687"
            className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-foreground bg-background hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 flex-1 text-center"
            whileHover={{
              scale: 1.02,
              y: -2,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
            }}
            whileTap={{
              scale: 0.98,
              y: 0,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Llamar Ahora
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};