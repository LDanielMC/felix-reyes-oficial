import { Phone, Mail, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/hooks/use-animations';
import { StaggerContainer, StaggerItem } from './AnimatedComponents';

export const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const services = [
    'Contabilidad General',
    'Asesoría Fiscal',
    'Auditorías',
    'Asesoría Financiera',
    'Precios de Transferencia'
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <StaggerContainer delay={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <StaggerItem>
              <div className="lg:col-span-2">
                <motion.div 
                  className="mb-6"
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    Félix Reyes Contadores
                  </h3>
                  <p className="text-white/80 text-sm">S.A. de C.V.</p>
                </motion.div>
                
                <motion.p 
                  className="text-white/90 mb-6 leading-relaxed"
                  variants={fadeInUp}
                  transition={{ delay: 0.3 }}
                >
                  Más de 50 años brindando servicios profesionales de contabilidad, 
                  auditoría y asesoría fiscal. Comprometidos con la excelencia y 
                  el éxito de nuestros clientes.
                </motion.p>

                {/* Contact Info */}
                <StaggerContainer delay={0.1}>
                  <div className="space-y-3">
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
                        <span className="text-white/90">+52 (33) 3615-4291</span>
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
                        <span className="text-white/90">contacto@felixreyes.com</span>
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
                        <span className="text-white/90">Guadalajara, Jalisco, México</span>
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
                          <Calendar className="h-4 w-4 text-accent" />
                        </motion.div>
                        <span className="text-white/90">Fundada en 1974</span>
                      </motion.div>
                    </StaggerItem>
                  </div>
                </StaggerContainer>
              </div>
            </StaggerItem>

            {/* Quick Links */}
            <StaggerItem>
              <div>
                <motion.h4 
                  className="text-lg font-heading font-semibold mb-6"
                  variants={fadeInUp}
                  transition={{ delay: 0.4 }}
                >
                  Enlaces Rápidos
                </motion.h4>
                <StaggerContainer delay={0.1}>
                  <ul className="space-y-3">
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
                        <p>Lunes a Viernes: 9:00 - 18:00</p>
                      </StaggerItem>
                      <StaggerItem>
                        <p>Sábados: 9:00 - 14:00</p>
                      </StaggerItem>
                      <StaggerItem>
                        <p>Domingos: Cerrado</p>
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
                  className="text-lg font-heading font-semibold mb-6"
                  variants={fadeInUp}
                  transition={{ delay: 0.5 }}
                >
                  Nuestros Servicios
                </motion.h4>
                <StaggerContainer delay={0.1}>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <StaggerItem key={index}>
                        <motion.li
                          whileHover={{ 
                            x: 10,
                            transition: { type: "spring", stiffness: 400, damping: 17 }
                          }}
                        >
                          <span className="text-white/80 text-sm">{service}</span>
                        </motion.li>
                      </StaggerItem>
                    ))}
                  </ul>
                </StaggerContainer>

                <motion.div 
                  className="mt-8"
                  variants={fadeInUp}
                  transition={{ delay: 0.7 }}
                >
                  <h5 className="font-semibold mb-4 text-accent">Certificaciones</h5>
                  <StaggerContainer delay={0.1}>
                    <div className="text-sm text-white/80 space-y-1">
                      <StaggerItem>
                        <p>Colegio de Contadores Públicos</p>
                      </StaggerItem>
                      <StaggerItem>
                        <p>Instituto Mexicano de Contadores</p>
                      </StaggerItem>
                      <StaggerItem>
                        <p>Certificación en Normas de Información Financiera</p>
                      </StaggerItem>
                    </div>
                  </StaggerContainer>
                </motion.div>
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
        viewport={{ once: true, threshold: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div 
              className="text-white/80 text-sm"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              © {currentYear} Félix Reyes Contadores S.A. de C.V. Todos los derechos reservados.
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-6 text-sm"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <motion.a 
                href="#" 
                className="text-white/80 hover:text-accent transition-colors duration-200"
                whileHover={{ 
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                Política de Privacidad
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white/80 hover:text-accent transition-colors duration-200"
                whileHover={{ 
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                Términos de Servicio
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white/80 hover:text-accent transition-colors duration-200"
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