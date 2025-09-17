import React, { useState, useRef, useEffect, memo } from 'react';
import { motion, Variants, Transition } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroAccounting from '@/assets/hero-service.webp';
import { 
  Calculator, FileText, Search, TrendingUp, Shield, 
  Users, PieChart, BookOpen, CheckCircle2, ArrowRight,
  ChevronLeft, ChevronRight, ChevronDown
} from 'lucide-react';

// TypeScript interfaces
interface Service {
  id: string;
  title: string;
  icon: React.ReactElement;
  description: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  isMobile?: boolean;
}

interface NavigationButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
  canScroll: boolean;
}

const services: Service[] = [
  {
    id: 'contabilidad-general',
    title: 'Contabilidad General',
    icon: <Calculator className="w-6 h-6" />,
    description: 'Suministramos información precisa y oportuna para la evaluación, el control y la toma de decisiones.'
  },
  {
    id: 'contabilidad-gubernamental',
    title: 'Contabilidad Gubernamental',
    icon: <FileText className="w-6 h-6" />,
    description: 'Generamos información financiera y presupuestal que cumpla con las normativas gubernamentales.'
  },
  {
    id: 'asesoria-contable',
    title: 'Asesoría Contable',
    icon: <Search className="w-6 h-6" />,
    description: 'Orientación en registros contables para un excelente control interno y cumplimiento fiscal.'
  },
  {
    id: 'asesoria-administrativa',
    title: 'Asesoría Administrativa',
    icon: <TrendingUp className="w-6 h-6" />,
    description: 'Suministramos información clara de las operaciones para la planeación y dirección de la empresa.'
  },
  {
    id: 'asesoria-laboral',
    title: 'Asesoría Laboral',
    icon: <Users className="w-6 h-6" />,
    description: 'Te brindamos la asesoría necesaria para la administración del talento humano.'
  },
  {
    id: 'asesoria-financiera',
    title: 'Asesoría Financiera',
    icon: <PieChart className="w-6 h-6" />,
    description: 'Analizamos tus necesidades para la correcta gestión de tus finanzas y el establecimiento de metas.'
  },
  {
    id: 'asesoria-patrimonial',
    title: 'Asesoría Patrimonial',
    icon: <Shield className="w-6 h-6" />,
    description: 'Organizamos y protegemos tus bienes, ayudándote a tomar decisiones para hacerlos crecer.'
  },
  {
    id: 'asesoria-fiscal',
    title: 'Asesoría Fiscal',
    icon: <BookOpen className="w-6 h-6" />,
    description: 'Determinamos impuestos y establecemos estrategias para el correcto cumplimiento de obligaciones fiscales.'
  },
  {
    id: 'auditorias',
    title: 'Auditorías',
    icon: <CheckCircle2 className="w-6 h-6" />,
    description: 'Vigilamos y evaluamos la ejecución de controles internos para garantizar el cumplimiento normativo.'
  },
  {
    id: 'precios-transferencia',
    title: 'Estudios de Precios de Transferencia',
    icon: <ArrowRight className="w-6 h-6" />,
    description: 'Determinamos los ingresos acumulables y deducciones autorizadas para negocios con partes relacionadas.'
  }
];

const container = {
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

// Memoized Navigation Button Component
const NavigationButton = memo(({ direction, onClick, disabled, canScroll }: NavigationButtonProps) => {
  const isLeft = direction === 'left';
  const Icon = isLeft ? ChevronLeft : ChevronRight;
  
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`absolute ${isLeft ? 'left-0 -translate-x-2' : 'right-0 translate-x-2'} top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background/90 backdrop-blur-sm border border-border/30 flex items-center justify-center text-foreground/70 hover:text-white hover:bg-primary hover:border-primary/80 transition-all duration-300 shadow-lg hover:shadow-primary/20 ${
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

// Memoized Service Card Component
const ServiceCard = memo(({ service, index, isMobile = false }: ServiceCardProps) => {
  return (
    <motion.div
      className={isMobile ? "flex-shrink-0 w-80 sm:w-96 md:w-[28rem] px-3 snap-center" : "h-full"}
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px 0px -100px 0px" }}
    >
      <Link to={`/servicios/${service.id}`} className="group block h-full">
        <motion.div 
          className={`h-full bg-gradient-to-b from-card/80 to-card/60 backdrop-blur-sm border border-border/30 rounded-2xl ${isMobile ? 'p-7 sm:p-8' : 'p-8'} flex flex-col transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden relative group-hover:bg-card/90`}
          whileHover="hover"
          initial="rest"
          animate="rest"
          variants={cardVariants}
        >
          {/* Hover effect background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" 
               style={{
                 backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
                 backgroundSize: '20px 20px',
               }}
          />
          
          <div className="relative z-10">
            <motion.div 
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center mb-6 text-primary shadow-sm group-hover:shadow-primary/20 group-hover:scale-110 transition-all duration-500"
              variants={iconVariants}
              custom={index}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {React.cloneElement(service.icon, { 
                className: 'w-7 h-7 relative z-10',
                strokeWidth: 1.75
              })}
            </motion.div>
            
            <h3 className={`${isMobile ? 'text-2xl' : 'text-xl'} font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-500`}>
              {service.title}
            </h3>
            
            <p className="text-muted-foreground text-base mb-6 leading-relaxed">
              {service.description}
            </p>
            
            <motion.div 
              className={`inline-flex items-center text-sm font-medium text-primary/90 group-hover:text-primary transition-colors duration-500 mt-auto pt-4 border-t border-border/20 group-hover:border-primary/30 ${isMobile ? 'w-full justify-between' : ''}`}
              variants={arrowVariants}
              custom={index}
            >
              <span className="font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {isMobile ? 'Más información' : 'Ver detalles'}
              </span>
              <motion.div
                className={`w-7 h-7 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-500 ${isMobile ? '' : 'ml-2'}`}
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

export const Services = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const isAtStart = scrollLeft < 10;
      const isAtEnd = scrollLeft > scrollWidth - clientWidth - 10;
      
      setCanScrollLeft(!isAtStart);
      setCanScrollRight(!isAtEnd);
      
      // Update current slide based on scroll position
      if (scrollRef.current.children.length > 0) {
        const scrollContainer = scrollRef.current;
        // Adjusting for the removed padding divs at start/end
        const cards = Array.from(scrollContainer.children) as HTMLElement[];
        
        if (cards.length > 0) {
          const scrollPosition = scrollLeft + scrollContainer.offsetWidth / 2;
          let closestCardIndex = 0;
          let minDistance = Infinity;
          
          cards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const containerRect = scrollContainer.getBoundingClientRect();
            const cardCenter = cardRect.left - containerRect.left + cardRect.width / 2;
            const distance = Math.abs(scrollPosition - cardCenter);
            
            if (distance < minDistance) {
              minDistance = distance;
              closestCardIndex = index;
            }
          });
          
          setCurrentSlide(closestCardIndex);
        }
      }
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      // Recalcular al redimensionar la ventana
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const containerWidth = container.clientWidth;
      const scrollAmount = containerWidth * 0.8; // Scroll 80% of container width
      
      const targetScroll = direction === 'left' 
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      
      // Update scroll state after animation
      setTimeout(() => {
        checkScrollButtons();
      }, 300);
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[index] as HTMLElement;
      if (card) {
        const container = scrollRef.current;
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const containerWidth = container.clientWidth;
        const scrollLeft = cardLeft - (containerWidth - cardWidth) / 2;
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      {/* Hero Section - Banner estilo Nosotros */}
      <section 
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary">
          <img src={heroAccounting} alt="Servicios Contables" className="w-full h-full object-cover opacity-80" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-serif">
              Soluciones Contables que Impulsan tu Éxito
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto font-sans">
              Descubre nuestro portafolio completo de servicios contables y financieros.Cada servicio está diseñado para satisfacer las necesidades específicas de tu empresa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a 
                href="#contacto"
                className="px-8 py-3.5 bg-secondary text-secondary-foreground font-medium rounded-xl hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Contáctanos</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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

        {/* Enhanced Mobile Carousel - Visible en pantallas pequeñas y medianas, oculto en grandes */}
        <div id="servicios-grid" className="block lg:hidden">
          {/* Contenedor principal para el carrusel y las flechas, usa Flexbox */}
          <div className="relative flex items-center">
            
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
                className="flex overflow-x-auto pb-12 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
                onScroll={checkScrollButtons}
              >
                {services.map((service, index) => (
                  <ServiceCard
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

        {/* Desktop Grid - Visible solo en pantallas grandes */}
        <motion.div 
          className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isMobile={false}
            />
          ))}
        </motion.div>

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
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
      </section>
    </>
  );
});