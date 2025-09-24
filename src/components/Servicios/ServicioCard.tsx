import React, { memo } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ServiceCardProps } from './servicesData';

// Animation variants for the card
const cardVariants: Variants = {
  hidden: (i: number) => ({
    y: 40,
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }),
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.8
    }
  }),
  hover: {
    y: -8,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
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
    }
  },
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: 15,
    scale: 0.95
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: 0.2 + (i * 0.05),
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      scale: {
        type: 'spring',
        stiffness: 300,
        damping: 12
      }
    }
  })
};

const arrowVariants: Variants = {
  rest: {
    x: 0,
    opacity: 0.8,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  hover: {
    x: 6,
    opacity: 1,
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

/**
 * ServicioCard component
 * Renders an individual service card with icon, title, description, and link.
 * Includes animations and responsive design.
 */
export const ServicioCard = memo(({ service, index, isMobile = false }: ServiceCardProps) => {
  return (
    <motion.div
      className="w-full snap-center shrink-0 basis-full sm:basis-[calc(50%-0.75rem)] md:basis-[calc(33.333%-1rem)] lg:basis-auto lg:w-auto"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      whileHover="hover"
    >
      <Link
        to={`/servicios/${service.id}`}
        className="block h-full"
        aria-label={`Saber más sobre ${service.title}`}
      >
        <motion.div
          className={`group relative flex flex-col p-6 sm:p-8 rounded-3xl h-full overflow-hidden border transition-all duration-500 ${service.bgColor} ${service.hoverColor} border-transparent hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10`}
          style={{ minHeight: isMobile ? '380px' : '320px' }}
        >
          <div
            className="absolute inset-0 bg-repeat opacity-[0.02]"
            style={{
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="%239C92AC" fill-opacity="0.4" fill-rule="evenodd"><path d="M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z"/></g></svg>')`,
                  backgroundSize: '20px 20px',
                }}
          />

          <div className="relative z-10">
            <motion.div
              className={`w-16 h-16 rounded-2xl bg-white/70 flex items-center justify-center mb-6 ${service.color} shadow-sm group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}
              variants={iconVariants}
              custom={index}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {React.cloneElement(service.icon, {
                className: 'w-7 h-7 relative z-10',
                strokeWidth: 1.75
              })}
            </motion.div>

            <h3 className={`${isMobile ? 'text-2xl' : 'text-xl'} font-bold ${service.color} mb-4 transition-colors duration-500`}>
              {service.title}
            </h3>

            <p className="text-black/60 text-base mb-6 leading-relaxed">
              {service.description}
            </p>

            <motion.div
              className={`inline-flex items-center text-sm font-medium ${service.color} transition-colors duration-500 mt-auto pt-4 border-t border-black/10 ${isMobile ? 'w-full justify-between' : ''}`}
              variants={arrowVariants}
              custom={index}
            >
              <span className="font-semibold">
                {isMobile ? 'Más información' : 'Ver detalles'}
              </span>
              <motion.div
                className={`w-7 h-7 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-all duration-500 ${isMobile ? '' : 'ml-2'}`}
                variants={{
                  rest: { rotate: 0 },
                  hover: { rotate: 45 }
                }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </motion.div>
      </Link>
    </motion.div>
  );
});