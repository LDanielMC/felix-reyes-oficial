import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NavigationButtonProps } from './servicesData';

/**
 * NavigationButton component
 * Renders navigation buttons for the services carousel.
 * Handles left and right scrolling with animations and accessibility.
 */
export const NavigationButton = memo(({ direction, onClick, disabled, canScroll }: NavigationButtonProps) => {
  const isLeft = direction === 'left';
  const Icon = isLeft ? ChevronLeft : ChevronRight;

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`absolute ${isLeft ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background/90 backdrop-blur-sm border border-border/30 flex items-center justify-center text-foreground/70 hover:text-white hover:bg-primary hover:border-primary/80 transition-all duration-300 shadow-lg hover:shadow-primary/20 ${
        !canScroll ? 'opacity-0 pointer-events-none' : ''
      }`}
      aria-label={`${isLeft ? 'Anterior' : 'Siguiente'} servicio`}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.3)' }}
      whileTap={{ scale: 0.95 }}
      initial={{ x: isLeft ? -10 : 10, opacity: 0 }}
      animate={{
        x: canScroll ? 0 : (isLeft ? -10 : 10),
        opacity: canScroll ? 1 : 0,
        transition: {
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
    >
       <Icon className="w-6 h-6" />
    </motion.button>
  );
});