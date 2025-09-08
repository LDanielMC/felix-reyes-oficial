import { useState, useMemo, memo } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useHeaderScroll } from '@/hooks/use-header-scroll';

// Memoized navigation items to prevent re-creation
const navigationItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '/#contacto' },
];

// Optimized animation variants
const headerVariants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: -120, opacity: 0 }
};

const mobileMenuVariants = {
  open: { height: "auto", opacity: 1 },
  closed: { height: 0, opacity: 0 }
};

const floatingButtonVariants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.8 }
};

export const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isVisible, isScrolled } = useHeaderScroll();

  // Memoize class names to prevent recalculation
  const headerClasses = useMemo(() => 
    `fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border transition-all duration-300 ${
      isScrolled ? 'bg-background/95 shadow-lg' : 'bg-background/90'
    }`, [isScrolled]
  );

  const mobileMenuClasses = useMemo(() => 
    `lg:hidden border-t border-border transition-all duration-300 ${
      isScrolled ? 'bg-background/95' : 'bg-background/90'
    }`, [isScrolled]
  );

  return (
    <>
    <motion.header 
      className={headerClasses}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={headerVariants}
      transition={{ 
        duration: 0.3, 
        ease: "easeInOut"
      }}
    >
      {/* Top Bar - Simplified animations */}
      <div className="border-b border-border/50 hidden sm:block">
        <div className="container-custom">
          <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
            <div className="flex items-center space-x-2 sm:space-x-6">
              <div className="flex items-center space-x-1 sm:space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">+52 (33) 3615-4291</span>
                <span className="xs:hidden">Tel</span>
              </div>
              <a 
                href="mailto:info@felixreyescontadores.com"
                className="flex items-center space-x-1 sm:space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">info@felixreyescontadores.com</span>
                <span className="sm:hidden">Email</span>
              </a>
            </div>
            <div className="hidden md:block">
              <span className="text-primary font-semibold">Más de 50 años de experiencia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom">
        <div className="flex items-center justify-between py-1 sm:py-2 md:py-3">
          {/* Logo - Optimized */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png"
                alt="Félix Reyes Contadores - Logo"
                className="h-8 sm:h-10 md:h-16 w-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-200"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Simplified */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary hover:-translate-y-0.5 transition-all duration-200 font-medium block"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Simplified */}
          <div className="hidden lg:block">
            <button className="btn-secondary hover:scale-105 active:scale-95 transition-transform duration-200">
              Consulta Gratuita
            </button>
          </div>

          {/* Mobile Menu Button - Optimized */}
          <button
            className="lg:hidden p-2 hover:scale-110 active:scale-90 transition-transform duration-150"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Optimized */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={mobileMenuClasses}
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="container-custom py-3 sm:py-4">
              <nav className="flex flex-col space-y-3 sm:space-y-4">
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
                <button className="btn-secondary mt-3 sm:mt-4 text-sm hover:scale-105 active:scale-95 transition-transform duration-200">
                  Consulta Gratuita
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    
    {/* Floating Navigation Button - Optimized */}
    <AnimatePresence>
      {!isVisible && (
        <motion.div
          className="fixed top-4 right-4 z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={floatingButtonVariants}
          transition={{ duration: 0.2 }}
        >
          <button
            className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 hover:scale-110 active:scale-90 transition-all duration-200"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            title="Volver al inicio"
            aria-label="Volver al inicio"
          >
            <div className="animate-bounce">
              ↑
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
});