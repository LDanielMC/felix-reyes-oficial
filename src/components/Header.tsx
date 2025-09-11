import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useHeaderScroll } from '@/hooks/use-header-scroll';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isVisible, isScrolled } = useHeaderScroll();

  const navigationItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  return (
    <>
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border transition-all duration-300 ${isScrolled ? 'bg-background/95 shadow-lg' : 'bg-background/90'}`}
      initial={{ y: -100 }}
      animate={{ 
        y: isVisible ? 0 : -120,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ 
        duration: 0.4, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      {/* Top Bar */}
      <motion.div 
        className="border-b border-border/50 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
            <motion.div 
              className="hidden md:block"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="text-primary font-semibold">Más de 50 años de experiencia</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <div className="container-custom">
        <div className="flex items-center justify-between py-1 sm:py-2 md:py-3">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="/" className="flex items-center">
              <motion.img 
                src="/logo.png"
                alt="Félix Reyes Contadores - Logo"
                className="h-8 sm:h-10 md:h-16 w-auto object-contain cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                whileTap={{ scale: 0.98 }}
                loading="eager"
                decoding="async"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden lg:flex items-center space-x-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                <Link
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium block"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* CTA Button */}
          <motion.div 
            className="hidden lg:block"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <motion.button 
              className="btn-secondary"
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Consulta Gratuita
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={`lg:hidden border-t border-border transition-all duration-300 ${
              isScrolled ? 'bg-background/95' : 'bg-background/90'
            }`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="container-custom py-3 sm:py-4">
              <motion.nav 
                className="flex flex-col space-y-3 sm:space-y-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground/90 hover:text-primary transition-colors px-2 sm:px-3 py-2 text-sm font-medium block rounded-lg hover:bg-primary/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <motion.button 
                  className="btn-secondary mt-3 sm:mt-4 text-sm"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Consulta Gratuita
                </motion.button>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    
    {/* Floating Navigation Button - aparece cuando el header está oculto */}
    <AnimatePresence>
      {!isVisible && (
        <motion.div
          className="fixed top-4 right-4 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-200"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Volver al inicio"
          >
            <motion.div
              animate={{ 
                y: [0, -2, 0],
                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              ↑
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};