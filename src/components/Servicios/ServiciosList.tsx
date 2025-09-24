import React from 'react';
import { motion } from 'framer-motion';
import { ServiciosCarousel } from './ServiciosCarousel';
import { ServiciosGrid } from './ServiciosGrid';

/**
 * ServiciosList component
 * Orchestrates the display of services in carousel (mobile) and grid (desktop) layouts.
 * Includes background animations, decorative elements, and responsive design.
 */
export const ServiciosList: React.FC = () => {
  return (
    <section id="servicios" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-primary/10 rounded-full mix-blend-multiply filter blur-[100px] animate-blob opacity-70"></div>
        <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] bg-secondary/10 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000 opacity-70"></div>
        <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-accent/10 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000 opacity-70"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-5"></div>
      </div>

      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%) opacity-50"></div>
      </div>

      <div className="relative container px-4 sm:px-6 lg:px-4 mx-auto max-w-7xl pt-8 sm:pt-12">
        <ServiciosCarousel />
        <ServiciosGrid />
      </div>

      {/* Decorative elements with improved animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-gradient-to-tr from-secondary/10 to-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [0.9, 1, 0.9],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            delay: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      </div>
    </section>
  );
};