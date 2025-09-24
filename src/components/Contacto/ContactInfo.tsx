import React from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInUp } from '@/hooks/use-animations';
import { StaggerContainer, StaggerItem } from '../AnimatedComponents';
import { contactInfo } from './ContactData';

/**
 * ContactInfo component
 * Displays the contact information cards and call-to-action section.
 */
export const ContactInfo: React.FC = () => {
  return (
    <motion.div
      className="lg:col-span-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInLeft}
      transition={{ duration: 0.8 }}
    >
      <motion.h3
        className="text-2xl font-heading font-bold text-primary mb-8"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        Información de Contacto
      </motion.h3>

      <StaggerContainer delay={0.1}>
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="card-elegant"
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.2)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <info.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <a
                        key={idx}
                        href={info.title === 'Teléfono' ? `tel:${detail.replace(/\s/g, '')}` : info.title === 'Email' ? `mailto:${detail}` : info.title === 'Dirección' ? info.action : '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block text-muted-foreground text-sm mb-1 ${info.title !== 'Horario' ? 'hover:text-primary transition-colors duration-300' : 'cursor-default'}`}
                      >
                        {detail}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>

      {/* CTA */}
      <motion.div
        className="mt-8 p-6 bg-primary rounded-xl text-white"
        variants={fadeInUp}
        transition={{ delay: 0.6 }}
        whileHover={{
          scale: 1.02,
          transition: { type: "spring", stiffness: 400, damping: 17 }
        }}
      >
        <h4 className="font-heading font-bold text-xl mb-3">
          ¿Necesita atención inmediata?
        </h4>
        <p className="text-white/90 mb-4">
          Llámenos ahora para una consulta telefónica gratuita.
        </p>
        <a href="tel:+527773121547">
          <motion.button
            className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-200 w-full"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 17 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Llamar Ahora
          </motion.button>
        </a>
      </motion.div>
    </motion.div>
  );
};