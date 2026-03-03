// src/components/ServicioDetalles/ServiceDetailNextServices.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from './ServiceDetailData';

interface ServiceDetailNextServicesProps {
  currentServiceId: string;
}

/**
 * Helper: devuelve clases de color (texto y borde)
 * según el id del servicio, usando la misma paleta Pantone
 * que en la grilla principal.
 */
function getServiceColorsById(serviceId: string) {
  switch (serviceId) {
    case 'contabilidad-general':
      return { textColor: 'text-cafeOscuro', borderColor: 'border-cafeOscuro' };
    case 'contabilidad-gubernamental':
      return { textColor: 'text-naranja', borderColor: 'border-naranja' };
    case 'asesoria-contable':
      return { textColor: 'text-amarillo', borderColor: 'border-amarillo' };
    case 'asesoria-administrativa':
      return { textColor: 'text-verde', borderColor: 'border-verde' };
    case 'asesoria-laboral':
      return { textColor: 'text-rojo', borderColor: 'border-rojo' };
    case 'asesoria-financiera':
      return { textColor: 'text-verde', borderColor: 'border-verde' };
    case 'asesoria-patrimonial':
      return { textColor: 'text-cafeOscuro', borderColor: 'border-cafeOscuro' };
    case 'asesoria-fiscal':
      return { textColor: 'text-naranja', borderColor: 'border-naranja' };
    case 'auditorias':
      return { textColor: 'text-rojo', borderColor: 'border-rojo' };
    case 'precios-transferencia':
      return { textColor: 'text-amarillo', borderColor: 'border-amarillo' };
    default:
      // fallback neutro
      return { textColor: 'text-foreground', borderColor: 'border-border' };
  }
}

/**
 * ServiceDetailNextServices component
 * Displays a grid of the next 3 services based on the current one,
 * wrapping around to the beginning of the list if necessary.
 */
export const ServiceDetailNextServices: React.FC<ServiceDetailNextServicesProps> = ({
  currentServiceId,
}) => {
  // 1️⃣ Encontrar el índice del servicio actual
  const currentIndex = servicesData.findIndex((s) => s.id === currentServiceId);

  // 2️⃣ Reordenar la lista para que empiece en el siguiente servicio
  const orderedServices =
    currentIndex === -1
      ? servicesData
      : [
          ...servicesData.slice(currentIndex + 1), // servicios después del actual
          ...servicesData.slice(0, currentIndex), // servicios antes del actual
        ];

  // 3️⃣ Tomar solo los 3 siguientes
  const nextThreeServices = orderedServices.slice(0, 3);

  return (
    <motion.div
      className="py-16 px-4 bg-background/50 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-2xl font-heading font-semibold text-foreground mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Explora Nuestros Servicios
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nextThreeServices.map((nextService, index) => {
            // 👇 sacamos las clases de color según el id
            const { textColor, borderColor } = getServiceColorsById(
              nextService.id
            );

            // OJO: aquí asumimos que nextService.icon es un componente React
            const Icon: any = nextService.icon;

            return (
              <motion.div
                key={nextService.id}
                className={`
                  bg-card p-6 rounded-xl border-2 h-full group
                  transition-all duration-300
                  ${borderColor}
                `}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    delay: 0.1 * index,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                  },
                }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
                viewport={{ once: true, margin: '-30px' }}
              >
                <Link
                  to={`/servicios/${nextService.id}`}
                  className="block h-full"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                >
                  <motion.div
                    className="flex items-start h-full"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {/* Icono con color Pantone */}
                    <motion.div
                      className={`
                        w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center
                        text-2xl mr-4 flex-shrink-0
                        transition-all duration-300
                        ${textColor}
                      `}
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 5,
                      }}
                    >
                      {Icon && <Icon className="w-6 h-6" />}
                    </motion.div>

                    <div>
                      {/* Título con color Pantone */}
                      <motion.h3
                        className={`
                          text-lg font-heading font-semibold mb-1
                          ${textColor}
                        `}
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

                      {/* Ver detalles con color Pantone */}
                      <motion.span
                        className={`
                          inline-flex items-center mt-3 text-sm font-medium
                          group-hover:underline
                          ${textColor}
                        `}
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        Ver detalles
                        <motion.span
                          className="ml-1"
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          →
                        </motion.span>
                      </motion.span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
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
              Explorar Servicios
            </motion.span>
            <motion.span
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
