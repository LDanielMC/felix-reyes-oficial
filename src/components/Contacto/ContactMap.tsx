import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/hooks/use-animations';

/**
 * ContactMap component
 * Displays the map section with header and embedded Google Maps iframe.
 */
export const ContactMap: React.FC = () => {
  return (
    <section id="mapa" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Nuestra Ubicación
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Visítenos en nuestra oficina para una consulta personalizada.
          </motion.p>
        </motion.div>
        <motion.div
          className="card-elegant h-[500px] lg:h-[600px] w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.2458447874637!2d-99.235939!3d18.9205093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdde5293a4550d%3A0xbd2a33cab3881f4d!2sF%C3%89LIX%20REYES%20CONTADORES%20S.A.%20DE%20C.V!5e0!3m2!1ses!2smx!4v1758142465429!5m2!1ses!2smx"
            width="100%"
            height="100%"
            style={{ border:0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl w-full h-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};