import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from './ServiceDetailData';

interface ServiceDetailNextServicesProps {
  currentServiceId: string;
}

/**
 * ServiceDetailNextServices component
 * Displays a grid of other services excluding the current one.
 * Provides navigation to explore other services.
 */
export const ServiceDetailNextServices: React.FC<ServiceDetailNextServicesProps> = ({ currentServiceId }) => {
  return (
    <motion.div
      className="py-16 px-4 bg-background/50 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-2xl font-semibold text-foreground mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Explora Nuestros Servicios
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData
            .filter(s => s.id !== currentServiceId) // Excluir el servicio actual
            .slice(0, 3) // Mostrar hasta 3 servicios
            .map((nextService, index) => (
              <motion.div
                key={nextService.id}
                className="bg-card p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border h-full group"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    delay: 0.1 * index,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }
                }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
                viewport={{ once: true, margin: "-30px" }}
              >
                <Link
                  to={`/servicios/${nextService.id}`}
                  className="block h-full"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <motion.div
                    className="flex items-start h-full"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mr-4 flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 5 }}
                    >
                      {nextService.icon}
                    </motion.div>
                    <div>
                      <motion.h3
                        className="text-lg font-medium text-foreground mb-1"
                        layoutId={`service-title-${nextService.id}`}
                      >
                        {nextService.title}
                      </motion.h3>
                      <motion.p
                        className="text-sm text-muted-foreground line-clamp-2"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {nextService.description}
                      </motion.p>
                      <motion.span
                        className="inline-flex items-center mt-3 text-sm font-medium text-primary group-hover:underline"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        Ver detalles
                        <motion.span
                          className="ml-1"
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                        >
                          →
                        </motion.span>
                      </motion.span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link
            to="/servicios"
            className="group inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Ver todos los servicios
            </motion.span>
            <motion.span
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};