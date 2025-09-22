import { Phone, Mail, MapPin, Calendar, ExternalLink, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../hooks/use-animations';
import { StaggerContainer, StaggerItem } from './AnimatedComponents';

export const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const services = [
    'Contabilidad General',
    'Contabilidad Gubernamental',
    'Asesoría Administrativa',
    'Asesoría Contable',
    'Asesoría Laboral',
    'Asesoría Fiscal',
    'Asesoría Financiera',
    'Asesoría Patrimonial',
    'Auditoría de control interno',
    'Auditoría Financiera',
    'Auditoría Fiscal',
    'Auditoría de Seguridad Social',
    'Estudios de Precios de transferencia'
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container-custom py-8 md:py-12">
        <StaggerContainer delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Company Info */}
            <StaggerItem>
              <div className="sm:col-span-2">
                <motion.div 
                  className="mb-4"
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-1">
                    Félix Reyes Contadores
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm">S.A. de C.V.</p>
                </motion.div>
                
                <motion.p 
                  className="text-white/90 mb-4 text-sm md:text-base leading-relaxed"
                  variants={fadeInUp}
                  transition={{ delay: 0.3 }}
                >
                    Confía en Félix Reyes Contadores, una firma con más de cinco décadas de experiencia brindando soluciones contables, financieras y administrativas a nivel nacional e internacional
                </motion.p>

                {/* Contact Info */}
                <StaggerContainer delay={0.1}>
                  <div className="space-y-2">
                    <StaggerItem>
                      <motion.div 
                        className="flex items-center space-x-3"
                        whileHover={{ 
                          x: 10,
                          transition: { type: "spring", stiffness: 400, damping: 17 }
                        }}
                      >
                        <motion.div
                          whileHover={{ 
                            rotate: 360,
                            transition: { duration: 0.6 }
                          }}
                        >
                          <Phone className="h-4 w-4 text-accent" />
                        </motion.div>
                        <span className="text-white/90 text-sm md:text-base">(777) 3121547</span>
                      </motion.div>
                    </StaggerItem>
                    <StaggerItem>
                      <motion.div 
                        className="flex items-center space-x-3"
                        whileHover={{ 
                          x: 10,
                          transition: { type: "spring", stiffness: 400, damping: 17 }
                        }}
                      >
                        <motion.div
                          whileHover={{ 
                            rotate: 360,
                            transition: { duration: 0.6 }
                          }}
                        >
                          <Phone className="h-4 w-4 text-accent" />
                        </motion.div>
                        <span className="text-white/90 text-sm md:text-base">(777) 3124048</span>
                      </motion.div>
                    </StaggerItem>
                    <StaggerItem>
                      <motion.div 
                        className="flex items-center space-x-3"
                        whileHover={{ 
                          x: 10,
                          transition: { type: "spring", stiffness: 400, damping: 17 }
                        }}
                      >
                        <motion.div
                          whileHover={{ 
                            rotate: 360,
                            transition: { duration: 0.6 }
                          }}
                        >
                          <Phone className="h-4 w-4 text-accent" />
                        </motion.div>
                        <span className="text-white/90 text-sm md:text-base">(777) 3141829</span>
                      </motion.div>
                    </StaggerItem>
                    <StaggerItem>
                      <motion.div 
                        className="flex items-center space-x-3"
                        whileHover={{ 
                          x: 10,
                          transition: { type: "spring", stiffness: 400, damping: 17 }
                        }}
                      >
                        <motion.div
                          whileHover={{ 
                            rotate: 360,
                            transition: { duration: 0.6 }
                          }}
                        >
                          <Mail className="h-4 w-4 text-accent" />
                        </motion.div>
                        <span className="text-white/90 text-sm md:text-base break-all">info@felixreyescontadores.com</span>
                      </motion.div>
                    </StaggerItem>
                    <StaggerItem>
                      <motion.div 
                        className="flex items-center space-x-3"
                        whileHover={{ 
                          x: 10,
                          transition: { type: "spring", stiffness: 400, damping: 17 }
                        }}
                      >
                        <motion.div
                          whileHover={{ 
                            rotate: 360,
                            transition: { duration: 0.6 }
                          }}
                        >
                          <MapPin className="h-4 w-4 text-accent" />
                        </motion.div>
                        <span className="text-white/90 text-sm md:text-base">Netzahualcoyotl 13, Cuernavaca Centro, Centro, 62000 Cuernavaca, Mor.</span>
                      </motion.div>
                    </StaggerItem>
                    
                  </div>
                </StaggerContainer>

                {/* Social Media Links */}
                <motion.div
                  className="mt-6"
                  variants={fadeInUp}
                  transition={{ delay: 0.5 }}
                >
                  <h5 className="font-semibold mb-3 text-accent">Síguenos</h5>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://www.facebook.com/felixreyescontadores/?locale=es_LA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-accent transition-colors duration-200"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Facebook className="h-6 w-6" />
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/felixreyescontadores/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-accent transition-colors duration-200"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Instagram className="h-6 w-6" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </StaggerItem>

            {/* Quick Links */}
            <StaggerItem>
              <div>
                <motion.h4 
                  className="text-base md:text-lg font-heading font-semibold mb-4"
                  variants={fadeInUp}
                  transition={{ delay: 0.4 }}
                >
                  Enlaces Rápidos
                </motion.h4>
                <StaggerContainer delay={0.1}>
                  <ul className="space-y-2">
                    {quickLinks.map((link, index) => (
                      <StaggerItem key={index}>
                        <motion.li
                          whileHover={{ 
                            x: 10,
                            transition: { type: "spring", stiffness: 400, damping: 17 }
                          }}
                        >
                          <a 
                            href={link.href}
                            className="text-white/80 hover:text-accent transition-colors duration-200 flex items-center space-x-2"
                          >
                            <span>{link.name}</span>
                            <motion.div
                              whileHover={{ 
                                rotate: 45,
                                transition: { duration: 0.3 }
                              }}
                            >
                              <ExternalLink className="h-3 w-3" />
                            </motion.div>
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
                  <StaggerContainer delay={0.1}>
                    <div className="text-sm text-white/80 space-y-1">
                      <StaggerItem>
                        <p>Lunes a Viernes de 9:00 a 17:00. </p>
                      </StaggerItem>
                    </div>
                  </StaggerContainer>
                </motion.div>
              </div>
            </StaggerItem>

            {/* Services */}
            <StaggerItem>
              <div>
                <motion.h4 
                  className="text-base md:text-lg font-heading font-semibold mb-4"
                  variants={fadeInUp}
                  transition={{ delay: 0.5 }}
                >
                  Nuestros Servicios
                </motion.h4>
                <StaggerContainer delay={0.1}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {services.map((service, index) => (
                      <StaggerItem key={index}>
                        <motion.div
                          className="flex items-start"
                          whileHover={{ 
                            x: 5,
                            transition: { type: "spring", stiffness: 400, damping: 17 }
                          }}
                        >
                          <span className="text-white/80 text-xs md:text-sm leading-tight">• {service}</span>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-white/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container-custom py-4">
          <div className="flex flex-col space-y-3 text-center sm:text-left sm:flex-row sm:justify-between sm:items-center">
            <motion.div 
              className="text-white/80 text-xs sm:text-sm"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              © {currentYear} Félix Reyes Contadores S.A. de C.V.
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <motion.a 
                href="#" 
                className="text-white/80 hover:text-accent transition-colors duration-200 whitespace-nowrap"
                whileHover={{ 
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                Política de Privacidad
              </motion.a>
              <span className="text-white/40 hidden sm:inline">•</span>
              <motion.a 
                href="#" 
                className="text-white/80 hover:text-accent transition-colors duration-200 whitespace-nowrap"
                whileHover={{ 
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                Términos
              </motion.a>
              <span className="text-white/40 hidden sm:inline">•</span>
              <motion.a 
                href="#" 
                className="text-white/80 hover:text-accent transition-colors duration-200 whitespace-nowrap"
                whileHover={{ 
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                Aviso Legal
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};