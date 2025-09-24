import React, { useState, useRef, useCallback, useEffect, memo, Suspense, lazy } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { CarouselImage, ValueItem } from './NosotrosData';

// Lazy load Lightbox for better initial performance
const Lightbox = lazy(() => import('yet-another-react-lightbox'));

/**
 * ValueCard component for displaying individual values
 */
interface ValueCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
}

export const ValueCard = memo(({ icon: Icon, title, description, delay = 0 }: ValueCardProps) => {
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

/**
 * ImageCarousel component for displaying gallery images
 */
interface ImageCarouselProps {
  images: CarouselImage[];
}

export const ImageCarousel = memo(({ images }: ImageCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    duration: 8,
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
                {...({ fetchpriority: index === 0 ? 'high' : 'low' } as React.ImgHTMLAttributes<HTMLImageElement>)}
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

// Loading skeleton component
export const CarouselSkeleton = () => (
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

// Import useInView from framer-motion
import { useInView } from 'framer-motion';