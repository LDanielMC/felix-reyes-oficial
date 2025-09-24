import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ServiceDetailProps } from './ServiceDetailData';

/**
 * ServiceDetailHeader component
 * Displays the service icon, title, description, benefits (if any), and CTA button.
 * Handles the left side of the service detail layout.
 */
export const ServiceDetailHeader: React.FC<ServiceDetailProps> = ({ service }) => {
  return (
    <motion.div
      className="lg:w-1/3"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl mb-6">
        {service.icon}
      </div>
      <h1 className="text-4xl font-bold text-foreground mb-4">{service.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{service.description}</p>

      {service.benefits && (
        <motion.div
          className="bg-primary/5 p-6 rounded-xl mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.h3
            className="font-medium text-foreground mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Beneficios:
          </motion.h3>
          <motion.ul
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              staggerChildren: 0.05
            }}
          >
            {service.benefits.map((benefit, i) => (
              <motion.li
                className="flex items-start"
                key={i}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.span
                  className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.span>
                <span className="text-foreground/90">{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className="w-full"
        >
          <Link
            to="/contacto#contact-form"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 w-full"
            onClick={(e) => {
              if (window.location.pathname === '/contacto') {
                e.preventDefault();
                const element = document.getElementById('contact-form');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Solicitar asesoría
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};