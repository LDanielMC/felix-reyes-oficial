import { AnimatedCounter } from './AnimatedCounter';
import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-accounting.jpg';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn } from '@/hooks/use-animations';
import { StaggerContainer, StaggerItem } from './AnimatedComponents';

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-hero">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Félix Reyes Contadores - Servicios profesionales"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="text-white"
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <Award className="h-6 w-6 text-accent" />
              <span className="text-accent font-semibold">Fundada en 1974</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              Servicios Contables y Fiscales 
              <span className="text-accent"> Profesionales</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed"
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
            >
              Más de 50 años de experiencia brindando soluciones integrales en contabilidad, 
              auditoría y asesoría fiscal para empresas de todos los tamaños.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={fadeInUp}
              transition={{ delay: 1.0 }}
            >
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Solicitar Consulta
              </motion.button>
              <motion.button 
                className="btn-outline text-white border-white hover:bg-white hover:text-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Conocer Servicios
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <StaggerContainer delay={0.1}>
              <motion.div 
                className="flex items-center space-x-6 text-white/80"
                variants={fadeInUp}
              >
                <StaggerItem>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>Certificados</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>Experiencia Comprobada</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>Resultados Garantizados</span>
                  </div>
                </StaggerItem>
              </motion.div>
            </StaggerContainer>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Stats Card 1 */}
            <motion.div 
              className="card-elegant bg-white/95 backdrop-blur-sm text-center"
              variants={scaleIn}
              transition={{ delay: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
              </motion.div>
              <AnimatedCounter 
                end={900} 
                suffix="+"
                className="text-3xl lg:text-4xl font-bold text-primary block mb-2"
              />
              <p className="text-muted-foreground font-medium">Clientes Satisfechos</p>
            </motion.div>

            {/* Stats Card 2 */}
            <motion.div 
              className="card-elegant bg-white/95 backdrop-blur-sm text-center"
              variants={scaleIn}
              transition={{ delay: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <TrendingUp className="h-8 w-8 text-secondary mx-auto mb-4" />
              </motion.div>
              <AnimatedCounter 
                end={652} 
                suffix="+"
                className="text-3xl lg:text-4xl font-bold text-secondary block mb-2"
              />
              <p className="text-muted-foreground font-medium">Casos de Éxito</p>
            </motion.div>

            {/* Stats Card 3 */}
            <motion.div 
              className="card-elegant bg-white/95 backdrop-blur-sm text-center col-span-2"
              variants={scaleIn}
              transition={{ delay: 1.0 }}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="h-8 w-8 text-accent mx-auto mb-4" />
              </motion.div>
              <AnimatedCounter 
                end={50} 
                suffix="+"
                className="text-3xl lg:text-4xl font-bold text-accent block mb-2"
              />
              <p className="text-muted-foreground font-medium">Años de Experiencia Profesional</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 1.5, duration: 0.6 }
        }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center cursor-pointer"
          animate={{ 
            y: [0, 10, 0],
            transition: { 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ 
              opacity: [1, 0.3, 1],
              transition: { 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};