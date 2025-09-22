import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useHeaderScroll } from '@/hooks/use-header-scroll';
import { Logo } from './Logo';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isVisible, isScrolled } = useHeaderScroll();
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '#contacto' },
  ];

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const homeSection = document.getElementById('inicio');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Delay for page transition
    } else {
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border transition-all duration-300 ${
          isScrolled ? 'bg-background/95 shadow-lg' : 'bg-background/90'
        }`}
        initial={{ y: -100 }}
        animate={{
          y: isVisible ? 0 : -120,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }}
      >
        {/* Top Bar */}
        <div className="border-b border-border/50 hidden sm:block">
          <div className="container-custom">
            <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
              <div className="hidden md:block">
                <span className="text-primary font-semibold">Más de 50 años de experiencia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container-custom">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center" onClick={handleHomeClick}>
                <Logo className="h-12 sm:h-16 md:h-20 w-auto text-primary cursor-pointer transition-transform hover:scale-105 duration-200" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => {
                if (item.name === 'Contacto') {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={handleContactClick}
                      className="text-foreground hover:text-primary transition-all duration-200 font-medium block hover:-translate-y-0.5 cursor-pointer"
                    >
                      {item.name}
                    </a>
                  );
                }
                if (item.name === 'Inicio') {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={handleHomeClick}
                      className="text-foreground hover:text-primary transition-all duration-200 font-medium block hover:-translate-y-0.5"
                    >
                      {item.name}
                    </Link>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-all duration-200 font-medium block hover:-translate-y-0.5"
                  >
                    {item.name}
                  </Link>
                );
              })} 
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button onClick={handleContactClick} className="btn-secondary transition-transform hover:scale-105 active:scale-95 duration-200">
                Solicitar consulta
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 transition-transform hover:scale-110 active:scale-90 duration-150"
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`lg:hidden border-t border-border transition-all duration-300 ${
                isScrolled ? 'bg-background/95' : 'bg-background/90'
              }`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="container-custom py-3 sm:py-4">
                <nav className="flex flex-col space-y-3 sm:space-y-4">
                  {navigationItems.map((item) => {
                    if (item.name === 'Contacto') {
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={handleContactClick}
                          className="text-foreground/90 hover:text-primary transition-colors px-2 sm:px-3 py-2 text-sm font-medium block rounded-lg hover:bg-primary/5 cursor-pointer"
                        >
                          {item.name}
                        </a>
                      );
                    }
                    if (item.name === 'Inicio') {
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={handleHomeClick}
                          className="text-foreground/90 hover:text-primary transition-colors px-2 sm:px-3 py-2 text-sm font-medium block rounded-lg hover:bg-primary/5"
                        >
                          {item.name}
                        </Link>
                      );
                    }
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-foreground/90 hover:text-primary transition-colors px-2 sm:px-3 py-2 text-sm font-medium block rounded-lg hover:bg-primary/5"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  <button onClick={handleContactClick} className="btn-secondary mt-3 sm:mt-4 text-sm transition-transform hover:scale-105 active:scale-95 duration-200">
                    Solicitar consulta
                  </button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Floating Navigation Button */}
      <AnimatePresence>
        {!isVisible && (
          <motion.div
            className="fixed top-4 right-4 z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors hover:scale-110 active:scale-90 duration-200"
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
};