import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 'criptomonedas',
    title: 'Criptomonedas: Regulación y Aspectos Fiscales',
    excerpt: 'Todo lo que necesitas saber sobre criptomonedas, su regulación en México y los aspectos fiscales relevantes para su operación.',
    date: '28 de agosto, 2025',
    readTime: '9 min de lectura',
    category: 'Fiscal',
    imageUrl: '/criptomonedas.webp',
  },
  {
    id: 'regimen-fiscal-624',
    title: 'Régimen Fiscal 624: Coordinados',
    excerpt: 'Guía completa sobre el Régimen de Coordinados para el sector de autotransporte, incluyendo requisitos, obligaciones y estímulos fiscales.',
    date: '25 de agosto, 2025',
    readTime: '7 min de lectura',
    category: 'Fiscal',
    imageUrl: '/regimen.webp',
  },
  {
    id: 'plataformas-tecnologicas',
    title: 'Régimen de Plataformas Tecnológicas',
    excerpt: 'Si obtienes ingresos a través de plataformas como Uber, Airbnb o Mercado Libre, este régimen es para ti. Conoce tus obligaciones.',
    date: '22 de septiembre, 2025',
    readTime: '11 min de lectura',
    category: 'Fiscal',
    imageUrl: '/tecnologias.webp',
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    borderColor: 'rgba(59, 130, 246, 0.5)',
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

const formatDate = (dateString: string) => {
  const parts = dateString.split(' ');
  if (parts.length > 2) {
    return `${parts.slice(2).join(' ')}`;
  }
  return dateString;
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-background pt-24 md:pt-32">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Nuestro Blog
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl font-sans text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Manténgase informado con artículos, análisis y consejos de expertos en asesoría y cumplimiento fiscal.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="block">
              <motion.article
                variants={item}
                whileHover="hover"
                className="bg-card rounded-xl overflow-hidden h-full flex flex-col border border-border/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <motion.img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                    variants={{ hover: { scale: 1.05 } }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-sans font-semibold text-primary bg-primary/10 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3 flex-grow">
                    {post.title}
                  </h2>
                  <p className="font-sans text-muted-foreground mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                    <span className="text-sm font-sans text-muted-foreground">{formatDate(post.date)} · {post.readTime}</span>
                    <div className="inline-flex items-center text-sm font-sans font-medium text-primary transition-colors">
                      Leer más <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
