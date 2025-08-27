import { useState, useEffect } from 'react';

export const useHeaderScroll = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Detectar si está scrolleando hacia abajo o arriba
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolleando hacia abajo - ocultar header
        setIsVisible(false);
      } else {
        // Scrolleando hacia arriba - mostrar header
        setIsVisible(true);
      }
      
      // Detectar si está en la parte superior
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      
      // Detectar si está scrolleado para cambiar el fondo
      setIsScrolled(currentScrollY > 50);
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return { isVisible, isScrolled };
};

