import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useHeaderScroll } from '@/hooks/use-header-scroll';
import { Logo } from './Logo';
import { HeaderTopBar } from './Header/HeaderTopBar';
import { DesktopNav } from './Header/DesktopNav';
import { MobileNav } from './Header/MobileNav';
import { FloatingButton } from './Header/FloatingButton';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isVisible, isScrolled } = useHeaderScroll();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
    return () => {
        document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

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
    
    // 1. Cerramos el menú INMEDIATAMENTE para desbloquear el body
    setIsMenuOpen(false);

    // 2. Usamos un setTimeout para esperar a que la animación de cierre termine
    // y el 'overflow-hidden' desaparezca antes de intentar hacer scroll.
    setTimeout(() => {
      if (window.location.pathname !== '/') {
        navigate('/');
        // Si cambiamos de página, esperamos un poco más a que cargue el Home
        setTimeout(() => {
          const contactSection = document.getElementById('contacto');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300); 
      } else {
        // Si ya estamos en Home, buscamos la sección y hacemos scroll
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn("No se encontró la sección con id='contacto'");
        }
      }
    }, 300); // 300ms es un buen tiempo si tu animación dura 0.2s o 0.3s
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
        <HeaderTopBar />
        <div className="container-custom relative">
          <div className="flex items-center justify-between py-1">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center" onClick={handleHomeClick}>
                {/* CAMBIOS REALIZADOS:
                  1. h-12 -> h-16 (Móvil: de 48px a 64px)
                  2. sm:h-16 -> sm:h-20 (Tablet: de 64px a 80px)
                  3. md:h-20 -> md:h-28 (Escritorio: de 80px a 112px)
                */}
                <Logo className="h-16 sm:h-20 md:h-28 w-auto text-primary cursor-pointer transition-transform hover:scale-105 duration-200 -mb-4" />
              </Link>
            </div>

            <DesktopNav 
              location={location} 
              handleContactClick={handleContactClick} 
              handleHomeClick={handleHomeClick} 
              navigate={navigate}
            />

            <div className="hidden lg:block">
              <button onClick={handleContactClick} className="btn-secondary transition-transform hover:scale-105 active:scale-95 duration-200">
                Solicitar Consulta
              </button>
            </div>

            <MobileNav 
              isMenuOpen={isMenuOpen} 
              setIsMenuOpen={setIsMenuOpen} 
              isScrolled={isScrolled}
              location={location}
              handleContactClick={handleContactClick}
              handleHomeClick={handleHomeClick}
            />
          </div>
        </div>
      </motion.header>

      <FloatingButton isVisible={isVisible} />
    </>
  );
};
