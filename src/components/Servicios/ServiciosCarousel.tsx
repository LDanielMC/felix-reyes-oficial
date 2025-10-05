import React from 'react';
import { motion } from 'framer-motion';
import { services } from './servicesData';
import { useServicios } from './useServicios';
import { NavigationButton } from './NavigationButton';
import { ServicioCard } from './ServicioCard';

/**
 * ServiciosCarousel component
 * Renders the mobile carousel for services with navigation buttons and scroll indicators.
 * Handles horizontal scrolling and slide indicators for mobile and tablet views.
 */
export const ServiciosCarousel: React.FC = () => {
  const { currentSlide, scrollRef, canScrollLeft, canScrollRight, scrollTo, scrollToCard, checkScrollButtons } = useServicios();

  return (
    <div id="servicios-grid" className="block lg:hidden">
      {/* Contenedor principal para el carrusel y las flechas */}
      <div className="relative">

        {/* Botón de navegación izquierda */}
        <NavigationButton
          direction="left"
          onClick={() => scrollTo('left')}
          disabled={!canScrollLeft}
          canScroll={canScrollLeft}
        />

        {/* Contenedor del scroll de las tarjetas */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px 0px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-12 px-16 scrollbar-hide snap-x snap-mandatory scroll-smooth gap-4 -mx-4"
            onScroll={checkScrollButtons}
          >
            {services.map((service, index) => (
              <ServicioCard
                key={service.id}
                service={service}
                index={index}
                isMobile={true}
              />
            ))}
          </div>
        </motion.div>

        {/* Botón de navegación derecha */}
        <NavigationButton
          direction="right"
          onClick={() => scrollTo('right')}
          disabled={!canScrollRight}
          canScroll={canScrollRight}
        />

      </div>

      {/* Enhanced scroll indicators */}
      <motion.div
        className="flex justify-center mt-6 gap-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {services.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => scrollToCard(index)}
            className={`relative h-1.5 rounded-full transition-all duration-500 ${
              currentSlide === index
                ? 'w-8 bg-gradient-to-r from-primary to-primary/80'
                : 'w-3 bg-primary/20 hover:bg-primary/40'
            }`}
            aria-label={`Ir al servicio ${index + 1}`}
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{
              scale: currentSlide === index ? 1 : 0.9,
              opacity: currentSlide === index ? 1 : 0.7,
              width: currentSlide === index ? '2rem' : '0.75rem'
            }}
            whileHover={{
              scale: 1.1,
              opacity: 1,
              width: currentSlide === index ? '2rem' : '1rem'
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
              duration: 0.3
            }}
          >
            {currentSlide === index && (
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full"
                layoutId="activeIndicator"
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30
                }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};