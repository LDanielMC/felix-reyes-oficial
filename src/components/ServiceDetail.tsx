import React, { memo } from 'react';
import { motion, Variants } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { servicesData } from './ServicioDetalles/ServiceDetailData';
import { ServiceDetailNotFound } from './ServicioDetalles/ServiceDetailNotFound';
import { ServiceDetailHeader } from './ServicioDetalles/ServiceDetailHeader';
import { ServiceDetailContent } from './ServicioDetalles/ServiceDetailContent';
import { ServiceDetailNextServices } from './ServicioDetalles/ServiceDetailNextServices';
import { ServiceDetailFloatingCTA } from './ServicioDetalles/ServiceDetailFloatingCTA';

/**
 * ServiceDetail component
 * Main component that displays detailed information about a specific service.
 * Refactored into smaller, reusable subcomponents for better maintainability.
 */
export const ServiceDetail = memo(() => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return <ServiceDetailNotFound />;
  }

  // Page animation variants
  const pageVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: [0.4, 0, 0.6, 1] }
    }
  };

  // Item animation variants
  const itemVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  return (
    <div className="relative pt-40">
      <motion.div
        className="min-h-screen bg-background pb-24 sm:pb-0"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        key={serviceId}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={itemVariants}
          >
            <Link
              to="/servicios"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a servicios
            </Link>
          </motion.div>

          <motion.div
            className="bg-background rounded-2xl shadow-xl overflow-hidden"
            variants={itemVariants}
          >
            <div className="p-8 md:p-12 lg:flex lg:items-start lg:gap-12">
              <ServiceDetailHeader service={service} />
              <ServiceDetailContent service={service} />
            </div>
          </motion.div>
        </div>

        <ServiceDetailNextServices currentServiceId={serviceId!} />
        <ServiceDetailFloatingCTA />
      </motion.div>
    </div>
  );
});