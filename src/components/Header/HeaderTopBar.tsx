import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';

export const HeaderTopBar = () => (
  <div className="border-b border-border/50 hidden sm:block">
    <div className="container-custom">
      <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
        <div className="hidden md:block">
          <span className="text-primary font-semibold">Más de 50 años de experiencia</span>
        </div>
        <div className="flex items-center space-x-4">
          <motion.a
            href="https://www.facebook.com/felixreyescontadores/?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors duration-200"
            whileHover={{ scale: 1.2, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Facebook className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/felixreyescontadores/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors duration-200"
            whileHover={{ scale: 1.2, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Instagram className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </div>
  </div>
);
