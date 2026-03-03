import { Award, Building2, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import lugar from '@/assets/Lugar.webp';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/hooks/use-animations';
import { StaggerContainer, StaggerItem } from './AnimatedComponents';
import { memo } from 'react';

export const About = memo(() => {
  const highlights = [
    {
      icon: Award,
      value: '50+',
      label: 'Años de experiencia',
      color: 'text-primary'
    },
    {
      icon: TrendingUp,
      value: '99%',
      label: 'Tasa de retención',
      color: 'text-secondary'
    },
    {
      icon: Building2,
      value: '100%',
      label: 'Compromiso',
      color: 'text-accent'
    }
  ];

  return (
    <section id="nosotros" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            className="xl:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Award className="h-8 w-8 text-accent" />
              <span className="text-accent font-semibold text-lg tracking-wider">Fundada en 1974</span>
            </div>
            
            <motion.h2 
              className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6 leading-tight font-serif"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Líderes en Servicios
              <span className="text-secondary block"> Contables y Fiscales</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 leading-relaxed font-sans"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              Cinco décadas de excelencia profesional respaldando el crecimiento 
              empresarial con soluciones contables integrales y asesoría especializada.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
            >
              <motion.a 
                href="/nosotros"
                className="btn-primary inline-flex items-center space-x-2 transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              >
                <span>Nuestra Historia</span>
              </motion.a>
              
              <motion.a 
                href="#contacto"
                className="btn-outline inline-flex items-center space-x-2 transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              >
                <span>Consulta</span>
                <TrendingUp className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Professional Image Section */}
          <motion.div 
            className="xl:col-span-1 lg:order-last xl:order-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="relative group"
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 shadow-elegant">
                {/* Image Placeholder */}
                <div className="aspect-[5/5] bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center">
                  <img 
                    src={lugar}
                    alt="Félix Reyes Contadores - Oficina profesional"
                    className="w-full h-full object-cover object-right transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
              </div>

              {/* Floating Badge */}
              <motion.a // ¡CAMBIO IMPORTANTE: Ahora es motion.a!
                href="https://maps.app.goo.gl/c7szB5GUw1R9HJ958" // AÑADIDO: El link de Google Maps
                target="_blank" // AÑADIDO: Para abrir en una nueva pestaña
                rel="noopener noreferrer" // AÑADIDO: Buena práctica de seguridad para enlaces externos
                className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-hover border border-primary/10 cursor-pointer" // Añadí cursor-pointer para mejor UX
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center">
                   <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                   <p className="text-sm font-bold text-primary">Oficina Central</p>
                   <p className="text-xs text-muted-foreground font-sans">Cuernavaca, Morelos</p>
                  </div>
                </div>
              </motion.a> {/* ¡Cierre con motion.a! */}
              </motion.div>
              </motion.div>

          {/* Highlights Cards */}
          <motion.div 
            className="xl:col-span-1 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <StaggerContainer delay={0.1}>
              {highlights.map((highlight, index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    className="card-elegant group cursor-pointer"
                    whileHover={{ 
                      scale: 1.03,
                      y: -5,
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                  >
                    <div className="flex items-center space-x-6">
                      <motion.div 
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${highlight.color.split('-')[1]}/10 to-${highlight.color.split('-')[1]}/5 border border-${highlight.color.split('-')[1]}/10 flex items-center justify-center ${highlight.color} group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ 
                          rotate: 360,
                          transition: { duration: 0.6 }
                        }}
                      >
                        <highlight.icon className="h-8 w-8" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.div 
                          className={`text-3xl font-bold ${highlight.color} mb-1`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                        >
                          {highlight.value}
                        </motion.div>
                        <p className="text-muted-foreground font-medium">
                          {highlight.label}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Trust Badge */}
            <motion.div 
              className="card-elegant bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20"
              variants={fadeInUp}
              transition={{ delay: 1.0 }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <div className="text-center">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 3, repeat: Infinity, repeatDelay: 2 }
                  }}
                  className="inline-block mb-4"
                >
                  <Award className="h-12 w-12 text-accent mx-auto" />
                </motion.div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2 font-serif">
                  Certificación Profesional
                </h3>
                <p className="text-sm text-muted-foreground">
                  Respaldados por las más altas certificaciones contables y fiscales
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});