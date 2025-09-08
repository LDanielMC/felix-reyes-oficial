import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Handshake, Landmark, Users, Building, Quote, Lightbulb, Gem, Shield, ShieldCheck, HeartHandshake, Scale, Target, Eye, ChevronLeft, ChevronRight, X } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// --- SUB-COMPONENTES PARA MAYOR CLARIDAD ---

// Tarjeta para la sección de Equipo
const TeamMember = ({ name, role, image, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-card border border-border rounded-xl shadow-sm overflow-hidden text-center hover:shadow-lg transition-shadow duration-300"
    >
      <img 
        src={image || '/placeholder-team.jpg'} 
        alt={name}
        className="w-full h-72 object-cover object-top"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground font-serif">{name}</h3>
        <p className="text-primary font-medium font-sans">{role}</p>
      </div>
    </motion.div>
  );
};

// Tarjeta para la sección de Estadísticas
const StatCard = ({ number, label, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    return(
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            className="text-center p-6 bg-card"
        >
            <div className="text-5xl font-bold text-primary font-serif mb-2">{number}</div>
            <div className="text-muted-foreground font-sans">{label}</div>
        </motion.div>
    )
}

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

// Tarjeta para la sección de Valores
const ValueCard = ({ icon: Icon, title, description, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.2 }
            }}
            transition={{ 
                duration: 0.5, 
                delay,
                type: 'spring',
                stiffness: 100
            }}
            className="group relative bg-card p-6 rounded-xl border border-border hover:border-primary/20 transition-all duration-300 overflow-hidden"
        >
            {/* Background highlight on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Icon with hover effect */}
            <motion.div 
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 relative z-10"
                whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    backgroundColor: 'hsl(var(--primary))',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
            </motion.div>
            
            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground font-serif mb-3 group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>
                <motion.p 
                    className="text-muted-foreground text-sm leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    {description}
                </motion.p>
            </div>
            
            {/* Animated border bottom */}
            <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full"
                transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
        </motion.div>
    );
};

// Definición de tipos
interface ImageProps {
    src: string;
    alt: string;
    onClick: () => void;
    className: string;
}

// Componente de imagen optimizado
const OptimizedImage = React.memo<ImageProps>(({ src, alt, onClick, className }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    
    return (
        <div className={className}>
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setIsLoaded(true)}
                onClick={onClick}
                decoding="async"
                width="800"
                height="450"
            />
            {!isLoaded && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
        </div>
    );
}, (prevProps, nextProps) => {
    // Solo volver a renderizar si cambian las props relevantes
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

// Componente de Carousel ultra-optimizado para móviles
const ImageCarousel = ({ images }: ImageCarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: true,
        dragFree: false,
        duration: 15, // Transición más rápida
        skipSnaps: false,
    });
    
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState<boolean[]>(new Array(images.length).fill(false));
    
    // Funciones de navegación ultra-simplificadas
    const scrollPrev = useCallback(() => {
        emblaApi?.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        emblaApi?.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback((index: number) => {
        emblaApi?.scrollTo(index);
    }, [emblaApi]);

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
                                loading={index === 0 ? 'eager' : 'lazy'}
                                className={`h-[350px] md:h-[400px] w-full object-cover cursor-pointer ${
                                    isLoaded[index] ? 'opacity-100' : 'opacity-0'
                                } transition-opacity duration-300`}
                                onClick={() => openLightbox(index)}
                                onLoad={() => handleImageLoad(index)}
                                decoding="async"
                                width="800"
                                height="400"
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Botones de navegación ultra-simplificados */}
            <button 
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg z-10 touch-manipulation active:scale-95"
                onClick={scrollPrev}
                aria-label="Anterior"
            >
                <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg z-10 touch-manipulation active:scale-95"
                onClick={scrollNext}
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
                            className={`w-2 h-2 rounded-full touch-manipulation ${
                                index === selectedIndex ? 'bg-white' : 'bg-white/40'
                            }`}
                            aria-label={`Imagen ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            
            {/* Lightbox condicional */}
            {isOpen && (
                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    slides={images.map(img => ({ src: img.src }))}
                    index={selectedIndex}
                    controller={{ closeOnBackdropClick: true }}
                />
            )}
        </div>
    );
};


// Componente principal de la página
const Nosotros = () => {
    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true });
  
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
  
    return (
      <div className="bg-background">
        {/* Hero Section - Actualizado con el legado de décadas */}
        <section 
          ref={heroRef}
          className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white overflow-hidden"
          style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(16, 65%, 22%))' }}
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
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
            </motion.div>
          </div>
        </section>
  
        {/* NUEVA SECCIÓN: Nuestra Trayectoria */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-full min-h-[450px]"
              >
                <ImageCarousel images={galleryImages} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }} className="space-y-6"
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="flex items-start gap-4">
                <Target className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold text-foreground font-serif mb-3">Misión</h2>
                  <p className="text-muted-foreground leading-relaxed">Generar y proponer estrategias financieras y administrativas a partir de procesos y herramientas innovadoras del más alto nivel, colaborando a su vez en la formación de profesionistas capaces de crecer.</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
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
              <motion.div initial={{opacity: 0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once: true}} transition={{duration:0.6}} className="text-center max-w-3xl mx-auto mb-12">
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
        
        {/* Socios y Colaboradores Section */}
        <section className="py-16 md:py-24 bg-muted/50">
            {/* ...código de la sección Socios y Colaboradores sin cambios... */}
        </section>
      </div>
    );
  };
  
  export default Nosotros;