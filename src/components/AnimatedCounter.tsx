import { motion, useInView } from 'framer-motion';
import { useCounterAnimation } from '@/hooks/use-animations';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const AnimatedCounter = ({ 
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '',
  className = ''
}: AnimatedCounterProps) => {
  const { count, ref } = useCounterAnimation(end, duration);

  return (
    <motion.span 
      ref={ref} 
      className={`counter ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      viewport={{ once: true, threshold: 0.5 }}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  );
};