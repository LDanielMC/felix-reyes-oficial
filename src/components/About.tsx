import { Award, ArrowRight, Users, Building2, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import lugar from '@/assets/Lugar.webp';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/hooks/use-animations';
import { StaggerContainer, StaggerItem } from './AnimatedComponents';

export const About = () => {
  const highlights = [
    {
      icon: Award,
      value: '50+',
      label: 'Años de Experiencia',
      color: 'text-primary'
    },
    {
      icon: TrendingUp,
      value: '99%',
      label: 'Tasa de Retención',
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
          {/* Content - Optimized */}
          <motion.div
            className="xl:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Award className="h-6 w-6 text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Fundada en 1974</span>
            </div>
            
            <motion.h2 
              className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6 leading-tight"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Líderes en Servicios
              <span className="text-secondary block"> Contables y Fiscales</span>
            </h2>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              Cinco décadas de excelencia profesional respaldando el crecimiento 
              empresarial con soluciones contables integrales y asesoría especializada.
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
            >
              <motion.a 
                href="/nosotros"
                className="btn-primary inline-flex items-center space-x-2"
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Conocer Nuestra Historia</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <a 
                href="#contacto"
                className="btn-outline inline-flex items-center space-x-2"
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Solicitar Consulta</span>
                <TrendingUp className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Professional Image Section - Optimized */}
          <motion.div 
            className="xl:col-span-1 lg:order-last xl:order-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative group hover:scale-[1.01] transition-transform duration-500">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 shadow-elegant">
                {/* Image Placeholder - Replace src with your actual image */}
                <div className="aspect-[4/5] bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center">
                  <img 
                    src={lugar}
                    alt="Félix Reyes Contadores - Oficina profesional"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Overlay Gradient - Only show when image is loaded */}
                {imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                )}
                
                {/* Decorative Elements - Reduced motion */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl transition-opacity duration-500" style={{ opacity: imageLoaded ? 1 : 0 }}></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl transition-opacity duration-500" style={{ opacity: imageLoaded ? 1 : 0 }}></div>
              </div>

              {/* Floating Badge */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-hover border border-primary/10"
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
                    <p className="text-xs text-muted-foreground">Guadalajara, Jalisco</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Highlights Cards - Optimized */}
          <motion.div 
            className="xl:col-span-1 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-6">
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
                      
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="h-5 w-5 text-muted-foreground" />
                      </motion.div>
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
                <h3 className="text-lg font-heading font-bold text-primary mb-2">
                  Certificación Profesional
                </h3>
                <p className="text-sm text-muted-foreground font-sans">
                  Respaldados por las más altas certificaciones contables y fiscales
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});