import { useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToHashElement = () => {
  const location = useLocation();

  const hash = useMemo(() => {
    return location.hash.replace('#', '');
  }, [location]);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Usamos un pequeño retraso para asegurarnos de que el elemento se haya renderizado
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    }
  }, [hash]);

  return null;
};
