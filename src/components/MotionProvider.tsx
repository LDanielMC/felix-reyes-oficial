import { createContext, useContext, useEffect, useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';

interface MotionContextType {
  reducedMotion: boolean;
  setReducedMotion: (value: boolean) => void;
}

const MotionContext = createContext<MotionContextType | undefined>(undefined);

export const useMotion = () => {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error('useMotion must be used within a MotionProvider');
  }
  return context;
};

interface MotionProviderProps {
  children: React.ReactNode;
}

export const MotionProvider = ({ children }: MotionProviderProps) => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user's motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const motionConfig = {
    reducedMotion: reducedMotion ? 'always' : 'never',
  };

  return (
    <MotionContext.Provider value={{ reducedMotion, setReducedMotion }}>
      <MotionConfig {...motionConfig}>
        {children}
      </MotionConfig>
    </MotionContext.Provider>
  );
};

// Componente wrapper que respeta las preferencias de movimiento
export const RespectMotionPreferences = ({ 
  children, 
  fallback 
}: { 
  children: React.ReactNode; 
  fallback?: React.ReactNode;
}) => {
  const { reducedMotion } = useMotion();

  if (reducedMotion && fallback) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

// Hook para obtener variantes de animación que respetan las preferencias
export const useMotionVariants = () => {
  const { reducedMotion } = useMotion();

  const fadeInUp = {
    hidden: reducedMotion ? {} : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: reducedMotion ? 0 : 0,
      transition: {
        duration: reducedMotion ? 0 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const fadeInLeft = {
    hidden: reducedMotion ? {} : { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: reducedMotion ? 0 : 0,
      transition: {
        duration: reducedMotion ? 0 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const fadeInRight = {
    hidden: reducedMotion ? {} : { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: reducedMotion ? 0 : 0,
      transition: {
        duration: reducedMotion ? 0 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const scaleIn = {
    hidden: reducedMotion ? {} : { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: reducedMotion ? 1 : 1,
      transition: {
        duration: reducedMotion ? 0 : 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.1,
        delayChildren: reducedMotion ? 0 : 0.1
      }
    }
  };

  const staggerItem = {
    hidden: reducedMotion ? {} : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: reducedMotion ? 0 : 0,
      transition: {
        duration: reducedMotion ? 0 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerContainer,
    staggerItem,
    reducedMotion
  };
};

