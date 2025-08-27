import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggerAnimation, fadeInUp } from '@/hooks/use-animations';

// Componente wrapper para animaciones
export const AnimatedSection = ({ children, className = "", ...props }: any) => {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Componente para animaciones escalonadas
export const StaggerContainer = ({ children, className = "", delay = 0.1, ...props }: any) => {
  const { ref, controls, containerVariants } = useStaggerAnimation(delay);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Componente para elementos individuales en animaciones escalonadas
export const StaggerItem = ({ children, className = "", ...props }: any) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

