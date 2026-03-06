import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../hooks/use-animations';
import { StaggerContainer, StaggerItem } from './AnimatedComponents';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

// IMPORTA TU LOGO
import Logoblanco from './logoblanco';

export const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', href: '/#inicio' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  const services = [
    'Asesoría Fiscal',
    'Asesoría Laboral',
    'Asesoría Contable',
    'Asesoría Financiera',
    'Asesoría Patrimonial',
    'Asesoría Administrativa',
    'Contabilidad General',
    'Contabilidad Gubernamental',
    'Auditoría Fiscal',
    'Auditoría Financiera',
    'Auditoría de Control Interno',
    'Auditoría de Seguridad Social',
    'Estudios de Precios de Transferencia'
  ];

  const splitIntoColumns = (arr, cols = 2) => {
    const out = Array.from({ length: cols }, () => []);
    arr.forEach((item, i) => out[i % cols].push(item));
    return out;
  };

  const [col1, col2] = splitIntoColumns(services, 2);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white min-w-0 overflow-x-hidden">
      {/* Main Footer */}
      <div className="container-custom py-8 md:py-12 min-w-0">
        <StaggerContainer delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-full">

            {/* Company Info */}
            <StaggerItem>
              <div className="sm:col-span-2 max-w-full overflow-hidden">
                
                {/* LOGO */}
                <motion.div 
                  className="mb-4 flex items-start"
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                >
                  <Logoblanco className="w-40 h-auto opacity-95" />
                </motion.div>

                <motion.h4 
                  className="text-base md:text-lg font-heading font-semibold mb-4"
                  variants={fadeInUp}
                  transition={{ delay: 0.4 }}
                >
                  Información de Contacto
                </motion.h4>

                {/* Contact Info */}
                <StaggerContainer delay={0.1}>
                  <div className="space-y-2 max-w-full">
                    <StaggerItem>
                      <motion.div 
                        className="flex items-center space-x-3"
                        whileHover={{ x: 10 }}
                      >
                        <Phone className="h-4 w-4 text-accent" />
                        <span className="text-white/90 text-sm md:text-base">(777) 3121547</span>
                      </motion.div>
                    </StaggerItem>

                    <StaggerItem>
                      <motion.div 
                        className="flex items-center space-x-3"
                        whileHover={{ x: 10 }}
                      >
                        <Phone className="h-4 w-4 text-accent" />
                        <span className="text-white/90 text-sm md:text-base">(777) 3124048</span>
                      </motion.div>
                    </StaggerItem>

                    <StaggerItem>
                      <motion.div 
                        className="flex items-center space-x-3"
                        whileHover={{ x: 10 }}
                      >
                        <FaWhatsapp className="h-4 w-4 text-accent" />
                        <span className="text-white/90 text-sm md:text-base">(777) 3141829</span>
                      </motion.div>
                    </StaggerItem>

                    <StaggerItem>
                      <motion.div 
                        className="flex items-center space-x-3 max-w-full"
                        whileHover={{ x: 10 }}
                      >
                        <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-white/90 text-sm md:text-base break-all overflow-wrap-anywhere">
                          info@felixreyescontadores.com
                        </span>
                      </motion.div>
                    </StaggerItem>

                    <StaggerItem>
                      <motion.div 
                        className="flex items-center space-x-3 max-w-full"
                        whileHover={{ x: 10 }}
                      >
                        <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-white/90 text-sm md:text-base break-words">
                          Netzahualcoyotl 13, Cuernavaca Centro, 62000 Cuernavaca, Mor.
                        </span>
                      </motion.div>
                    </StaggerItem>
                  </div>
                </StaggerContainer>

                {/* Social Media */}
               
                  <motion.div
                    className="mt-6 max-w-full"
                    variants={fadeInUp}
                    transition={{ delay: 0.5 }}
                  >
                    <h5 className="font-semibold mb-3 text-accent">Síguenos</h5>
                    <div className="flex space-x-5 max-w-full">
                      <motion.a
                        href="https://www.facebook.com/felixreyescontadores/"
                        target="_blank"
                        className="text-white/80 hover:text-accent"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                      >
                        {/* MÁS GRANDES */}
                        <FaFacebook className="h-7 w-7 md:h-8 md:w-8" />
                      </motion.a>

                      <motion.a
                        href="https://www.instagram.com/felixreyescontadores/"
                        target="_blank"
                        className="text-white/80 hover:text-accent"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                      >
                        <FaInstagram className="h-7 w-7 md:h-8 md:w-8" />
                      </motion.a>

                      <motion.a
                        href="https://www.tiktok.com/@felixreyescontadores"
                        target="_blank"
                        className="text-white/80 hover:text-accent"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                      >
                        <FaTiktok className="h-7 w-7 md:h-8 md:w-8" />
                      </motion.a>
                    </div>
                  </motion.div>

              </div>
            </StaggerItem>

            {/* Quick Links */}
            <StaggerItem>
              <div className="max-w-full">
                <motion.h4 
                  className="text-base md:text-lg font-heading font-semibold mb-4"
                  variants={fadeInUp}
                  transition={{ delay: 0.4 }}
                >
                  Enlaces Rápidos
                </motion.h4>

                <StaggerContainer delay={0.1}>
                  <ul className="space-y-2 max-w-full">
                    {quickLinks.map((link, index) => (
                      <StaggerItem key={index}>
                        <motion.li whileHover={{ x: 10 }}>
                          <a 
                            href={link.href}
                            className="text-white/80 hover:text-accent flex items-center space-x-2"
                          >
                            <span>{link.name}</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </motion.li>
                      </StaggerItem>
                    ))}
                  </ul>
                </StaggerContainer>

                <motion.div 
                  className="mt-8"
                  variants={fadeInUp}
                  transition={{ delay: 0.6 }}
                >
                  <h5 className="font-semibold mb-4 text-accent">Horarios de Atención</h5>
                  <p className="text-sm text-white/80">Lunes a Viernes de 9:00 a 18:00.</p>
                </motion.div>
              </div>
            </StaggerItem>

            {/* Services */}
            <StaggerItem>
              <div className="max-w-full overflow-hidden">
                <motion.h4
                  className="text-base md:text-lg font-heading font-semibold mb-4"
                  variants={fadeInUp}
                  transition={{ delay: 0.5 }}
                >
                  Nuestros Servicios
                </motion.h4>

                <StaggerContainer delay={0.1}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 max-w-full">
                    {[col1, col2].map((col, colIndex) => (
                      <ul key={colIndex} className="space-y-2 list-disc pl-5 marker:text-white/60">
                        {col.map((service, index) => (
                          <StaggerItem key={index}>
                            <motion.li 
                              className="text-white/80 text-xs md:text-sm"
                              whileHover={{ x: 5 }}
                            >
                              {service}
                            </motion.li>
                          </StaggerItem>
                        ))}
                      </ul>
                    ))}
                  </div>
                </StaggerContainer>
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>

      {/* Bottom Bar */}
      <motion.div className="border-t border-white/20">
        <div className="container-custom py-4 min-w-0">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-white/80 gap-3">
            <span>© {currentYear} Félix Reyes Contadores S.A. de C.V.</span>
            
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent">Política de Privacidad</a>
              <a href="#" className="hover:text-accent">Términos</a>
              <a href="#" className="hover:text-accent">Aviso Legal</a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
