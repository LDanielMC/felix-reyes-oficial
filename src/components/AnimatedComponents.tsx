import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { useScrollAnimation, useStaggerAnimation, fadeInUp } from '@/hooks/use-animations';
import { ReactNode } from 'react';

interface AnimatedSectionProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
}

interface StaggerContainerProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

interface StaggerItemProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
}

// Componente wrapper para animaciones
export const AnimatedSection = ({ children, className = "", ...props }: AnimatedSectionProps) => {
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
export const StaggerContainer = ({ children, className = "", delay = 0.1, ...props }: StaggerContainerProps) => {
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
export const StaggerItem = ({ children, className = "", ...props }: StaggerItemProps) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
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

