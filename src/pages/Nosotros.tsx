import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useCallback, useEffect, memo, useMemo, Suspense, lazy } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Handshake, Landmark, Users, Building, Quote, Lightbulb, Gem, Shield, ShieldCheck, HeartHandshake, Scale, Target, Eye, ChevronLeft, ChevronRight, X } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import heroAboutUs from '/Equipo1.webp';

// Lazy load Lightbox for better initial performance
const Lightbox = lazy(() => import('yet-another-react-lightbox'));

// --- SUB-COMPONENTES PARA MAYOR CLARIDAD ---

// Optimized animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
};

// Tarjeta para la sección de Equipo - Optimizada
interface TeamMemberProps {
  name: string;
  role: string;
  image?: string;
  delay?: number;
}

const TeamMember = memo(({ name, role, image, delay = 0 }: TeamMemberProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className={`bg-card border border-border rounded-xl shadow-sm overflow-hidden text-center hover:shadow-lg transition-all duration-300 transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <img 
        src={image || '/placeholder-team.jpg'} 
        alt={name}
        className="w-full h-72 object-cover object-top"
        loading="lazy"
        decoding="async"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground font-serif">{name}</h3>
        <p className="text-primary font-medium font-sans">{role}</p>
      </div>
    </div>
  );
});

// Tarjeta para la sección de Estadísticas - Optimizada
interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
}

const StatCard = memo(({ number, label, delay = 0 }: StatCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    
    return(
        <div
            ref={ref}
            className={`text-center p-6 bg-card transition-all duration-500 transform ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: `${delay * 100}ms` }}
        >
            <div className="text-5xl font-bold text-primary font-serif mb-2">{number}</div>
            <div className="text-muted-foreground font-sans">{label}</div>
        </div>
    )
});

// Tarjeta para la sección de Testimonios
const TestimonialCard = ({ quote, name, company, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    return(
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            className="bg-muted/50 p-8 rounded-lg border border-border space-y-4"
        >
            <Quote className="text-primary w-8 h-8 opacity-50" />
            <p className="text-foreground italic">"{quote}"</p>
            <div className="pt-2">
                <p className="font-bold text-foreground font-serif">{name}</p>
                <p className="text-sm text-muted-foreground">{company}</p>
            </div>
        </motion.div>
    )
}

// Tarjeta para la sección de Valores - Ultra Optimizada
interface ValueCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
}

const ValueCard = memo(({ icon: Icon, title, description, delay = 0 }: ValueCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    
    return (
        <div
            ref={ref}
            className={`group relative bg-card p-6 rounded-xl border border-border hover:border-primary/20 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 overflow-hidden transform ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: `${delay * 100}ms` }}
        >
            {/* Background highlight on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Icon with hover effect */}
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 relative z-10 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary transition-all duration-300">
                <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground font-serif mb-3 group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:opacity-100 transition-opacity duration-200">
                    {description}
                </p>
            </div>
            
            {/* Animated border bottom */}
            <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />
        </div>
    );
});

// Definición de tipos
interface ImageProps {
    src: string;
    alt: string;
    onClick: () => void;
    className: string;
}

// Componente de imagen ultra-optimizado
const OptimizedImage = memo<ImageProps>(({ src, alt, onClick, className }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    
    const handleLoad = useCallback(() => {
        setIsLoaded(true);
    }, []);
    
    return (
        <div className={className}>
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className={`w-full h-full object-cover transition-opacity duration-200 cursor-pointer ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={handleLoad}
                onClick={onClick}
                decoding="async"
                width="800"
                height="450"
                {...({ fetchpriority: "low" } as any)}
            />
            {!isLoaded && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
        </div>
    );
}, (prevProps, nextProps) => {
    return prevProps.src === nextProps.src && 
           prevProps.alt === nextProps.alt && 
           prevProps.className === nextProps.className;
});

interface CarouselImage {
    src: string;
    alt: string;
}

interface ImageCarouselProps {
    images: CarouselImage[];
}

// Componente de Carousel ultra-optimizado para máximo rendimiento
const ImageCarousel = memo(({ images }: ImageCarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: true,
        dragFree: false,
        duration: 8, // Transición más rápida
        skipSnaps: false,
        containScroll: 'trimSnaps',
        slidesToScroll: 1,
    });
    
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState<boolean[]>(() => new Array(images.length).fill(false));
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    // Funciones de navegación con throttling para evitar spam
    const scrollPrev = useCallback(() => {
        if (!isTransitioning && emblaApi) {
            setIsTransitioning(true);
            emblaApi.scrollPrev();
            setTimeout(() => setIsTransitioning(false), 100);
        }
    }, [emblaApi, isTransitioning]);

    const scrollNext = useCallback(() => {
        if (!isTransitioning && emblaApi) {
            setIsTransitioning(true);
            emblaApi.scrollNext();
            setTimeout(() => setIsTransitioning(false), 100);
        }
    }, [emblaApi, isTransitioning]);

    const scrollTo = useCallback((index: number) => {
        if (!isTransitioning && emblaApi) {
            setIsTransitioning(true);
            emblaApi.scrollTo(index);
            setTimeout(() => setIsTransitioning(false), 100);
        }
    }, [emblaApi, isTransitioning]);

    // Manejo de eventos mínimo
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    // Efecto único y simple
    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        onSelect();
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSelect]);

    const openLightbox = useCallback((index: number) => {
        setSelectedIndex(index);
        setIsOpen(true);
    }, []);

    const handleImageLoad = useCallback((index: number) => {
        setIsLoaded(prev => {
            if (prev[index]) return prev; // Evitar re-renders innecesarios
            const newLoaded = [...prev];
            newLoaded[index] = true;
            return newLoaded;
        });
    }, []);

    return (
        <div className="relative w-full h-full">
            <div 
                className="overflow-hidden rounded-xl shadow-lg" 
                ref={emblaRef}
            >
                <div className="flex">
                    {images.map((img, index) => (
                        <div 
                            key={index}
                            className="flex-[0_0_100%] min-w-0 relative bg-muted"
                        >
                            {!isLoaded[index] && (
                                <div className="absolute inset-0 bg-muted animate-pulse" />
                            )}
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading={index <= 1 ? 'eager' : 'lazy'}
                                className={`h-[350px] md:h-[400px] w-full object-cover cursor-pointer select-none ${
                                    isLoaded[index] ? 'opacity-100' : 'opacity-0'
                                } transition-opacity duration-150`}
                                onClick={() => openLightbox(index)}
                                onLoad={() => handleImageLoad(index)}
                                decoding="async"
                                width="800"
                                height="400"
                                {...({ fetchpriority: index === 0 ? 'high' : 'low' } as any)}
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Botones de navegación optimizados */}
            <button 
                className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md z-10 touch-manipulation transition-all duration-150 ${
                    isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white active:scale-95'
                }`}
                onClick={scrollPrev}
                disabled={isTransitioning}
                aria-label="Anterior"
            >
                <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button 
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md z-10 touch-manipulation transition-all duration-150 ${
                    isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white active:scale-95'
                }`}
                onClick={scrollNext}
                disabled={isTransitioning}
                aria-label="Siguiente"
            >
                <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
            
            {/* Indicadores minimalistas */}
            <div className="absolute bottom-3 left-0 right-0">
                <div className="flex justify-center gap-1">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            disabled={isTransitioning}
                            className={`w-2 h-2 rounded-full touch-manipulation transition-all duration-150 ${
                                index === selectedIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                            } ${isTransitioning ? 'cursor-not-allowed' : ''}`}
                            aria-label={`Imagen ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            
            {/* Lightbox lazy-loaded */}
            {isOpen && (
                <Suspense fallback={<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                </div>}>
                    <Lightbox
                        open={isOpen}
                        close={() => setIsOpen(false)}
                        slides={images.map(img => ({ src: img.src }))}
                        index={selectedIndex}
                        controller={{ closeOnBackdropClick: true }}
                    />
                </Suspense>
            )}
        </div>
    );
});


// Memoized data to prevent re-creation
const values = [
  { icon: ShieldCheck, title: "Responsabilidad", description: "Acatamos los lineamientos y normas determinadas, contribuyendo al desarrollo armónico de la comunidad." },
  { icon: Gem, title: "Calidad", description: "Buscamos satisfacer o superar las expectativas de nuestros clientes en cada servicio que ofrecemos." },
  { icon: Users, title: "Trabajo en equipo", description: "Fomentamos un ambiente laboral sano y de apoyo mutuo para potenciar nuestros resultados como equipo." },
  { icon: HeartHandshake, title: "Personas", description: "Nos centramos en el crecimiento de nuestros empleados y en ofrecer servicios que realmente ayuden a quienes los solicitan." },
  { icon: Scale, title: "Honestidad", description: "Promovemos la integridad y la verdad como un catalizador de confianza y credibilidad en todas nuestras actividades." }
];

const galleryImages = [
  {
    src: "/Equipo1.webp",
    alt: "Equipo directivo de Félix Reyes Contadores"
  },
  {
    src: "/Equipo2.webp",
    alt: "Nuestras instalaciones"
  },
  {
    src: "/Equipo3.webp",
    alt: "Reunión de equipo"
  },
  {
    src: "/Equipo4.webp",
    alt: "Reunión con clientes"
  },
  {
    src: "/Equipo5.webp",
    alt: "Reconocimientos y premios"
  }
];

// Loading skeleton component
const CarouselSkeleton = () => (
    <div className="relative h-[350px] md:h-[400px] bg-muted animate-pulse rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse" />
        <div className="absolute bottom-3 left-0 right-0">
            <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-white/30" />
                ))}
            </div>
        </div>
    </div>
);

// Componente principal de la página - Ultra Optimizado
const Nosotros = memo(() => {
    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true });
    const [imagesLoaded, setImagesLoaded] = useState(false);
    
    // Preload critical images
    useEffect(() => {
        const preloadImages = async () => {
            const imagePromises = galleryImages.slice(0, 2).map(img => {
                return new Promise((resolve) => {
                    const image = new Image();
                    image.onload = resolve;
                    image.onerror = resolve;
                    image.src = img.src;
                });
            });
            await Promise.all(imagePromises);
            setImagesLoaded(true);
        };
        preloadImages();
    }, []);
  
    return (
      <div className="bg-background">
        {/* Hero Section - Actualizado con el legado de décadas */}
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
  
        {/* NUEVA SECCIÓN: Nuestra Trayectoria */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
                transition={{ duration: 0.6 }}
                className="relative h-full min-h-[450px]"
              >
                {imagesLoaded ? (
                    <ImageCarousel images={galleryImages} />
                ) : (
                    <CarouselSkeleton />
                )}
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">Nuestra Trayectoria</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed font-sans">
                  <p>Félix Reyes Contadores es una empresa familiar fundada hace más de cinco décadas por el Contador Público Antonio Félix y su esposa Lilia Guadalupe Reyes. Actualmente, sus hijas Carmen, Rocío y Lucía conforman la alta gerencia.</p>
                  <p>Nuestra filosofía es la búsqueda constante de la excelencia y la aplicación de la experiencia a los requerimientos financieros que demanda el país, priorizando siempre la información transparente y la más alta calidad.</p>
                  <p>El uso de la tecnología y el dominio del idioma inglés nos ha permitido expandir nuestros servicios a clientes en toda la República Mexicana, así como a interesados en Estados Unidos y Canadá, consolidándonos como un referente en el sector.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
  
        {/* Misión y Visión Section */}
      <section className="py-16 md:py-0">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <Target className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold text-foreground font-serif mb-3">Misión</h2>
                  <p className="text-muted-foreground leading-relaxed">Generar y proponer estrategias financieras y administrativas a partir de procesos y herramientas innovadoras del más alto nivel, colaborando a su vez en la formación de profesionistas capaces de crecer.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <Eye className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
                <div>
                    <h2 className="text-3xl font-bold text-foreground font-serif mb-3">Visión</h2>
                    <p className="text-muted-foreground leading-relaxed">Posicionarnos entre los despachos más importantes y reconocidos de México, impulsando nuestro crecimiento a través de la satisfacción de nuestros clientes.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  
    {/* Valores Section */}
      <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto mb-12"
              >
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">Nuestros Valores Fundamentales</h2>
                  <p className="mt-4 text-lg text-muted-foreground">Son los pilares que guían cada una de nuestras acciones y decisiones, asegurando la confianza y credibilidad que nos define.</p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {values.map((value, index) => (
                      <ValueCard key={value.title} icon={value.icon} title={value.title} description={value.description} delay={index * 0.1}/>
                  ))}
              </div>
          </div>
      </section>
      </div>
    );
  });
  
export default Nosotros;