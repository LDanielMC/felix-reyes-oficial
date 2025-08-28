import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 'criptomonedas',
    title: 'Criptomonedas: Guía Completa sobre su Regulación y Aspectos Fiscales',
    excerpt: 'Todo lo que necesitas saber sobre criptomonedas, su regulación en México y los aspectos fiscales relevantes para su operación.',
    date: '28 de agosto, 2025',
    readTime: '7 min de lectura',
    category: 'Fiscal',
  },
  {
    id: 'regimen-fiscal-624',
    title: 'Régimen Fiscal 624: Todo lo que necesitas saber',
    excerpt: 'Guía completa sobre el Régimen Fiscal 624 para el sector de autotransporte, incluyendo requisitos, obligaciones y estímulos fiscales.',
    date: '25 de agosto, 2025',
    readTime: '5 min de lectura',
    category: 'Fiscal',
  },
];

import { Variants } from 'framer-motion';

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
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Blog
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Mantente actualizado con las últimas noticias, guías y consejos sobre fiscalidad y asesoría para tu negocio.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={item}
              whileHover="hover"
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-sm text-muted-foreground">{post.date} · {post.readTime}</span>
                  <motion.div whileHover={{ x: 4 }}>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Leer más <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
