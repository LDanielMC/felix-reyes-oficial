import { useState, useEffect, useCallback, useRef } from 'react';

// Throttle function for better performance
const throttle = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;
  return (...args: any[]) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

export const useHeaderScroll = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        
        // Detectar si está scrolleando hacia abajo o arriba
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
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
        
        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  const throttledHandleScroll = useCallback(
    throttle(handleScroll, 16), // ~60fps
    [handleScroll]
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [throttledHandleScroll]);

  return { isVisible, isScrolled };
};

