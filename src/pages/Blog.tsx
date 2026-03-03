import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Youtube } from 'lucide-react';

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
  
  // 3 de marzo, 2026
  {
    kind: 'article',
    id: 'depositos-bancarios',
    title: 'Reformas fiscales 2026: Información complementaria',
    excerpt: 'Todo sobre las Reformas Fiscales 2026: depósitos bancarios, tasas ISR/IEPS, repatriación, CFDI y plataformas digitales.',
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
    excerpt: 'Conoce qué es el SAT, para qué sirve y por qué es clave mantener tus obligaciones fiscales al día.',
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
    excerpt: 'Si obtienes ingresos a través de plataformas como Uber, Airbnb o Mercado Libre, este régimen es para ti. Conoce tus obligaciones.',
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
    excerpt: 'Todo lo que necesitas saber sobre criptomonedas, su regulación en México y los aspectos fiscales relevantes para su operación.',
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
    excerpt: 'Guía completa sobre el Régimen de Coordinados para el sector de autotransporte, incluyendo requisitos, obligaciones y estímulos fiscales.',
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
