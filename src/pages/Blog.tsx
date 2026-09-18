import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Youtube } from 'lucide-react';
import { useSeoMeta } from '../hooks/useSeoMeta';

type BaseCard = {
  id: string;
  title: string;
  excerpt: string;
  date: string;          // puedes seguir usando tu formatDate
  readTime: string;
  category: string;
  imageUrl: string;
};

type ArticleCard = BaseCard & {
  kind: 'article';
};

type VideoCard = BaseCard & {
  kind: 'video';
  externalUrl: string;   // url de YouTube
};

type ContentCard = ArticleCard | VideoCard;

// === Ejemplos: mezcla artículos y videos ===
const contentCards: ContentCard[] = [
  // Orden descendente por fecha: más reciente primero

  // 7 de agosto, 2026
  {
    kind: 'article',
    id: 'buzon-tributario-estatal-morelos',
    title: 'Nuevo Buzón Tributario Estatal de Morelos',
    excerpt: 'El Gobierno de Morelos puso en operación el Buzón Tributario Estatal: notificaciones con plena validez jurídica para contribuyentes del Registro Estatal.',
    date: '7 de agosto, 2026',
    readTime: '6 min de lectura',
    category: 'Fiscal',
    imageUrl: '/buzon-tributario.webp',
  },

  // 9 de julio, 2026
  {
    kind: 'article',
    id: 'depositos-efectivo-140000',
    title: 'Depósitos y retiros en efectivo de $140,000 o más',
    excerpt: '¿Existe una nueva obligación fiscal? Análisis jurídico y fiscal sobre la medida bancaria vigente desde el 1 de julio de 2026.',
    date: '9 de julio, 2026',
    readTime: '10 min de lectura',
    category: 'Fiscal',
    imageUrl: '/depositos-efectivo.webp',
  },

  // 9 de mayo, 2026
  {
    kind: 'article',
    id: 'reforma-laboral-2026',
    title: 'Reforma a la Ley Federal del Trabajo 2026',
    excerpt: 'Jornada de 40 horas, límites de horas extras y registros electrónicos: lo que toda empresa debe saber sobre la reforma laboral.',
    date: '9 de mayo, 2026',
    readTime: '8 min de lectura',
    category: 'Laboral',
    imageUrl: '/reforma-laboral.webp',
  },

  // 9 de abril, 2026
  {
    kind: 'article',
    id: 'declaracion-anual',
    title: 'Declaración Anual de Personas Físicas',
    excerpt: 'Conoce si estás obligado a presentarla, qué documentos necesitas y cómo cumplir antes del 30 de abril.',
    date: '9 de abril, 2026',
    readTime: '5 min de lectura',
    category: 'Fiscal',
    imageUrl: '/declaracion-anual.webp',
  },

  // 4 de marzo, 2026
  {
    kind: 'article',
    id: 'resumen-ejecutivo',
    title: 'Reformas Fiscales 2026: Resumen Ejecutivo',
    excerpt: 'Panorama de las reformas fiscales 2026: fiscalización, CFDI, due diligence, plataformas digitales y RESICO.',
    date: '4 de marzo, 2026',
    readTime: '15 min de lectura',
    category: 'Fiscal',
    imageUrl: '/reformasfiscales2.webp',
  },

  // 3 de marzo, 2026
  {
    kind: 'article',
    id: 'depositos-bancarios',
    title: 'Reformas fiscales 2026: Información complementaria',
    excerpt: 'Depósitos bancarios, tasas ISR/IEPS, repatriación de capitales, CFDI y plataformas digitales en las reformas 2026.',
    date: '3 de marzo, 2026',
    readTime: '8 min de lectura',
    category: 'Fiscal',
    imageUrl: '/reformasfiscales.webp',
  },

  // 24 de septiembre, 2025
  {
    kind: 'video',
    id: 'video-aniversario',
    title: 'Nuestro Aniversario! Celebrando 53 años',
    excerpt: 'Más de cinco décadas acompañando a nuestros clientes con confianza',
    date: '24 de septiembre, 2025',
    readTime: '51 seg',
    category: 'Video',
    imageUrl: '/Aniversario.webp',
    externalUrl: 'https://youtube.com/shorts/mTE1XUDXBDc?si=YyMUEBqDCfgTPESB',
  },

  {
    kind: 'video',
    id: 'video-SAT',
    title: '¿Qué es el SAT y por qué es importante estar al día?',
    excerpt: 'Conoce qué es el SAT y por qué es clave mantener tus obligaciones fiscales al día.',
    date: '24 de septiembre, 2025',
    readTime: '50 seg',
    category: 'Video',
    imageUrl: '/SAT.webp',
    externalUrl: 'https://youtube.com/shorts/xLJzge5zDuM?si=XMHrf15xSh8luuS3',
  },

  // 22 de septiembre, 2025
  {
    kind: 'video',
    id: 'video-plataformas',
    title: 'Así está cambiando la auditoría contable gracias a la IA',
    excerpt: ' La inteligencia artificial ya no es el futuro… ¡es el presente!.',
    date: '22 de septiembre, 2025',
    readTime: '37 seg',
    category: 'Video',
    imageUrl: '/IA-contable.webp',
    externalUrl: 'https://youtube.com/shorts/byoqu9yo92I?si=YWQ1s8dCGZnLpimr',
  },

  {
    kind: 'article',
    id: 'plataformas-tecnologicas',
    title: 'Régimen de Plataformas Tecnológicas',
    excerpt: 'Ingresos por Uber, Airbnb o Mercado Libre: conoce tus obligaciones fiscales en el Régimen de Plataformas.',
    date: '22 de septiembre, 2025',
    readTime: '11 min de lectura',
    category: 'Fiscal',
    imageUrl: '/tecnologias.webp',
  },

  // 28 de agosto, 2025
  {
    kind: 'article',
    id: 'criptomonedas',
    title: 'Criptomonedas: Regulación y Aspectos Fiscales',
    excerpt: 'Regulación de criptomonedas en México y los aspectos fiscales clave para su operación.',
    date: '28 de agosto, 2025',
    readTime: '9 min de lectura',
    category: 'Fiscal',
    imageUrl: '/criptomonedas.webp',
  },

  // 25 de agosto, 2025
  {
    kind: 'article',
    id: 'regimen-fiscal-624',
    title: 'Régimen Fiscal 624: Coordinados',
    excerpt: 'Régimen de Coordinados para autotransporte: requisitos, obligaciones y estímulos fiscales.',
    date: '25 de agosto, 2025',
    readTime: '7 min de lectura',
    category: 'Fiscal',
    imageUrl: '/regimen.webp',
  },

];

// === Variants (igual que en tu código) ===
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 10 }
  },
  hover: {
    y: -5,
    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.1)',
    borderColor: 'rgba(59,130,246,0.5)',
    transition: { type: 'spring', stiffness: 300, damping: 10 }
  }
};

// === Helper para link interno/externo con mismo estilo ===
const CardLink: React.FC<{
  to: string;
  external?: boolean;
  children: React.ReactNode;
}> = ({ to, external, children }) =>
  external ? (
    <a href={to} target="_blank" rel="noopener noreferrer" className="block">
      {children}
    </a>
  ) : (
    <Link to={to} className="block">
      {children}
    </Link>
  );

// === Tu formateador de fecha (igual que el tuyo) ===
const formatDate = (dateString: string) => {
  const parts = dateString.split(' ');
  if (parts.length > 2) return `${parts.slice(2).join(' ')}`;
  return dateString;
};

export default function Blog() {
  useSeoMeta();
  return (
    <div className="min-h-screen bg-background pt-24 md:pt-32">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Nuestro Blog
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-sans text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Mantente informado con artículos, análisis y videos cortos de asesoría y cumplimiento fiscal.
          </motion.p>
        </motion.div>

        {/* Grid de tarjetas */}
        <motion.div
          variants={container} initial="hidden" animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {contentCards.map((card) => {
            const isVideo = card.kind === 'video';
            const linkTo = isVideo ? (card as VideoCard).externalUrl : `/blog/${card.id}`;

            return (
              <CardLink key={card.id} to={linkTo} external={isVideo}>
                <motion.article
                  variants={item}
                  whileHover="hover"
                  className="bg-card rounded-xl overflow-hidden h-full flex flex-col border border-border/50 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <motion.img
                      src={card.imageUrl}
                      alt={card.title}
                      className="w-full h-full object-cover"
                      variants={{ hover: { scale: 1.05 } }}
                      transition={{ duration: 0.3 }}
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-sans font-semibold rounded-full
                                         text-primary bg-primary/10">
                        {card.category}
                        {isVideo && <Youtube className="h-4 w-4" aria-hidden="true" />}
                      </span>
                    </div>

                    <h2 className="text-xl font-serif font-bold text-foreground mb-3 flex-grow">
                      {card.title}
                    </h2>

                    <p className="font-sans text-muted-foreground mb-5 line-clamp-3">
                      {card.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <span className="text-sm font-sans text-muted-foreground">
                        {formatDate(card.date)} · {card.readTime}
                      </span>

                      <div className="inline-flex items-center text-sm font-sans font-medium text-primary transition-colors">
                        {isVideo ? 'Ver video' : 'Leer más'} <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              </CardLink>
            );
          })}
        </motion.div>
      </main>
    </div>
  );
}
