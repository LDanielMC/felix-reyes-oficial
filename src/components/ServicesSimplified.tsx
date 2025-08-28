import { motion, Variants, easeInOut } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { 
  Calculator, FileText, Search, TrendingUp, Shield, 
  Users, PieChart, BookOpen, CheckCircle2, ArrowRight,
  ChevronLeft, ChevronRight
} from 'lucide-react';

const services = [
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
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    y: 30, 
    opacity: 0,
    scale: 0.95
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100
    }
  }
};

const iconVariants: Variants = {
  rest: { 
    scale: 1,
    rotate: 0,
    transition: { duration: 0.3, ease: easeInOut }
  },
  hover: { 
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.3, ease: easeInOut }
  }
};

const arrowVariants: Variants = {
  rest: { 
    x: 0,
    opacity: 0.7,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  hover: {
    x: 4,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export const ServicesSimplified = () => {
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
        const cards = Array.from(scrollContainer.children).filter(
          (_, i) => i > 0 && i < scrollContainer.children.length - 1
        ) as HTMLElement[];
        
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
      return () => scrollContainer.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 280; // Width of each card + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="servicios" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container px-4 sm:px-6 lg:px-4 mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block px-4 sm:px-6 py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-semibold text-primary bg-primary/10 rounded-full backdrop-blur-sm"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: 0.2, 
              duration: 0.5,
              type: "spring",
              stiffness: 150
            }}
          >
            Nuestros Servicios
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight px-4 sm:px-0"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.4, 
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            Soluciones a la medida para tu negocio
          </motion.h2>
        </motion.div>

        {/* Enhanced Mobile Carousel */}
        <div className="block lg:hidden relative py-6">
          <div className="relative overflow-hidden">
            {/* Navigation buttons with better visibility */}
            <motion.button
              onClick={() => scrollTo('left')}
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-border/70 flex items-center justify-center shadow-md transition-all duration-300 ${
                canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              disabled={!canScrollLeft}
              whileHover={canScrollLeft ? { scale: 1.1 } : {}}
              whileTap={canScrollLeft ? { scale: 0.95 } : {}}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: canScrollLeft ? 0 : -10, opacity: canScrollLeft ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </motion.button>
            
            <motion.button
              onClick={() => scrollTo('right')}
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-border/70 flex items-center justify-center shadow-md transition-all duration-300 ${
                canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              disabled={!canScrollRight}
              whileHover={canScrollRight ? { scale: 1.1 } : {}}
              whileTap={canScrollRight ? { scale: 0.95 } : {}}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: canScrollRight ? 0 : 10, opacity: canScrollRight ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </motion.button>

            {/* Enhanced scrollable container */}
            <motion.div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide px-4 py-6 -mx-4"
              onScroll={checkScrollButtons}
              style={{ 
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch',
                scrollPadding: '0 24px',
                maskImage: 'linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Add padding to first and last items for better centering */}
              <div className="flex-shrink-0 w-4" />
              
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="flex-shrink-0 w-[calc(100vw-4rem)] max-w-sm"
                  style={{ 
                    scrollSnapAlign: 'center',
                    scrollMargin: '0 1rem'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: 0.1 * index,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                  <Link to={`/servicios/${service.id}`} className="group block h-full">
                    <motion.div
                      className="relative h-full flex flex-col items-center text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/5 min-h-[320px]"
                      initial="rest"
                      whileHover="hover"
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Background gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                      
                      {/* Icon container */}
                      <motion.div 
                        className="relative mb-5 p-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 text-primary flex items-center justify-center group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-500 flex-shrink-0"
                        variants={iconVariants}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                        {service.icon}
                      </motion.div>
                      
                      {/* Title */}
                      <motion.h3 
                        className="text-lg font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300"
                      >
                        {service.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p 
                        className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-grow"
                      >
                        {service.description}
                      </motion.p>
                      
                      {/* CTA with arrow */}
                      <div className="mt-auto w-full">
                        <motion.div 
                          className="inline-flex items-center justify-center text-primary font-medium text-sm px-6 py-2.5 rounded-lg bg-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-300 w-full"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="mr-2">Ver detalles</span>
                          <motion.div variants={arrowVariants}>
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Subtle hover effect overlay */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
              
              {/* Add padding to last item for better centering */}
              <div className="flex-shrink-0 w-4" />
            </motion.div>
          </div>

          {/* Enhanced scroll indicators */}
          <div className="flex justify-center mt-4 gap-1.5">
            {services.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  if (scrollRef.current) {
                    const card = scrollRef.current.children[index + 1] as HTMLElement;
                    card?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'nearest',
                      inline: 'center'
                    });
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-primary w-6' 
                    : 'bg-primary/20 hover:bg-primary/40'
                }`}
                aria-label={`Ir al servicio ${index + 1}`}
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ 
                  scale: currentSlide === index ? 1.1 : 0.8,
                  opacity: currentSlide === index ? 1 : 0.5
                }}
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <motion.div 
          className="hidden lg:grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              custom={index}
              className="h-full"
            >
              <Link to={`/servicios/${service.id}`} className="group block h-full">
                <motion.div
                  className="relative h-full flex flex-col items-center text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/10"
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  {/* Icon container */}
                  <motion.div 
                    className="relative mb-6 p-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 text-primary flex items-center justify-center group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-500"
                    variants={iconVariants}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                    {service.icon}
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h3 
                    className="text-lg font-bold text-foreground mb-6 leading-tight group-hover:text-primary transition-colors duration-300"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  {/* CTA with arrow */}
                  <div className="mt-auto">
                    <motion.div 
                      className="inline-flex items-center justify-center text-primary font-medium text-sm px-4 py-2 rounded-lg bg-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="mr-2">Ver detalles</span>
                      <motion.div variants={arrowVariants}>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Subtle hover effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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
  );
};