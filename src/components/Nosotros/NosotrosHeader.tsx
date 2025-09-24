import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroAboutUs from '/Equipo1.webp';

/**
 * NosotrosHeader component
 * Displays the hero section for the About Us page with background image, title, description, and CTA button.
 */
export const NosotrosHeader: React.FC = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary">
        <img src={heroAboutUs} alt="Sobre Nosotros" className="w-full h-full object-cover opacity-80" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 transform ${
            isHeroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-serif">
            Un Legado de Confianza: Más de 5 Décadas de Excelencia Financiera
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto font-sans">
            Desde una fundación familiar hasta convertirnos en un referente nacional e internacional, combinamos tradición con innovación para impulsar su crecimiento.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild style={{ backgroundColor: 'hsl(var(--secondary))', color: 'hsl(var(--secondary-foreground))' }} size="lg">
              <Link to="/#contacto">Agendar una Cita</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};