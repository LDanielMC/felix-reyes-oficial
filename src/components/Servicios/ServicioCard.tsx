import React, { memo } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ServiceCardProps } from './servicesData';

// Animation variants for the outer wrapper (solo entrada, sin hover)
const cardVariants: Variants = {
  hidden: (i: number) => ({
    y: 40,
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 0.8,
    },
  }),
};

const iconVariants: Variants = {
  rest: {
    scale: 1,
    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.05))',
  },
  hover: {
    scale: 1.15,
    rotate: 0,
    filter: 'drop-shadow(0 8px 16px rgba(99, 102, 241, 0.2))',
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: 15,
    scale: 0.95,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: 0.2 + i * 0.05,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      scale: {
        type: 'spring',
        stiffness: 300,
        damping: 12,
      },
    },
  }),
};

const arrowVariants: Variants = {
  rest: {
    x: 0,
    opacity: 0.8,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  hover: {
    x: 6,
    opacity: 1,
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * ServicioCard component
 * Tarjeta individual de servicio (icono, título, descripción, link)
 */
export const ServicioCard = memo(
  ({ service, index, isMobile = false }: ServiceCardProps) => {
    // 🔴 Mapear text-* de tu paleta Pantone a border-* explícitamente
    const borderColorClass =
      service.color === 'text-cafeOscuro'
        ? 'border-cafeOscuro'
        : service.color === 'text-naranja'
        ? 'border-naranja'
        : service.color === 'text-amarillo'
        ? 'border-amarillo'
        : service.color === 'text-verde'
        ? 'border-verde'
        : service.color === 'text-rojo'
        ? 'border-rojo'
        : 'border-border';

    return (
      <motion.div
        className="w-full snap-center shrink-0 basis-[80%] sm:basis-[45%] md:basis-[31%] lg:basis-auto lg:w-auto"
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
      >
        <Link
          to={`/servicios/${service.id}`}
          className="block h-full"
          aria-label={`Saber más sobre ${service.title}`}
        >
          <motion.div
            // Hover suave: solo mueve la tarjeta hacia arriba
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`
              group relative flex flex-col p-6 sm:p-8 rounded-3xl h-full
              border-4 bg-card
              ${borderColorClass}
              transition-all duration-300
            `}
            style={{ minHeight: isMobile ? '380px' : '320px' }}
          >
            <div className="relative z-10">
              {/* Icono */}
              <motion.div
                className={`
                  w-16 h-16 rounded-2xl bg-white/70 flex items-center justify-center mb-6
                  ${service.color}
                  shadow-sm
                  transition-all duration-500
                `}
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                custom={index}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {React.cloneElement(service.icon, {
                  className: 'w-7 h-7 relative z-10',
                  strokeWidth: 1.75,
                })}
              </motion.div>

              {/* Título */}
              <h3
                className={`${
                  isMobile ? 'text-2xl' : 'text-xl'
                } font-heading font-bold ${service.color} mb-4 transition-colors duration-500`}
              >
                {service.title}
              </h3>

              {/* Descripción */}
              <p className="text-black/60 text-base mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* CTA */}
              <motion.div
                className={`
                  inline-flex items-center text-sm font-medium
                  ${service.color}
                  transition-colors duration-500 mt-auto pt-4 border-t border-black/10
                  ${isMobile ? 'w-full justify-between' : ''}
                `}
                variants={arrowVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                custom={index}
              >
                <span className="font-semibold">
                  {isMobile ? 'Más información' : 'Ver detalles'}
                </span>
                <motion.div
                  className={`
                    w-7 h-7 rounded-full bg-black/5 flex items-center justify-center
                    group-hover:bg-black/10 transition-all duration-500
                    ${isMobile ? '' : 'ml-2'}
                  `}
                  variants={{
                    rest: { rotate: 0 },
                    hover: { rotate: 45 },
                  }}
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    );
  }
);
