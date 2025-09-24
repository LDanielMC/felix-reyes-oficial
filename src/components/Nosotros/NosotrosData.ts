import { ShieldCheck, Gem, Users, HeartHandshake, Scale } from 'lucide-react';

/**
 * TypeScript interfaces and data for Nosotros components
 */

export interface ValueItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface CarouselImage {
  src: string;
  alt: string;
}

// Values data
export const values: ValueItem[] = [
  { icon: ShieldCheck, title: "Responsabilidad", description: "Acatamos los lineamientos y normas determinadas, contribuyendo al desarrollo armónico de la comunidad." },
  { icon: Gem, title: "Calidad", description: "Buscamos satisfacer o superar las expectativas de nuestros clientes en cada servicio que ofrecemos." },
  { icon: Users, title: "Trabajo en equipo", description: "Fomentamos un ambiente laboral sano y de apoyo mutuo para potenciar nuestros resultados como equipo." },
  { icon: HeartHandshake, title: "Personas", description: "Nos centramos en el crecimiento de nuestros empleados y en ofrecer servicios que realmente ayuden a quienes los solicitan." },
  { icon: Scale, title: "Honestidad", description: "Promovemos la integridad y la verdad como un catalizador de confianza y credibilidad en todas nuestras actividades." }
];

// Gallery images data
export const galleryImages: CarouselImage[] = [
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