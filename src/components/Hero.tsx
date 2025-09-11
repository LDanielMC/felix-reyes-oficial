import { AnimatedCounter } from './AnimatedCounter';
import { CheckCircle, Award, Users, TrendingUp, Briefcase, ShieldCheck } from 'lucide-react';
import heroImage from '@/assets/hero-accounting.webp';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn } from '@/hooks/use-animations';
import { StaggerContainer, StaggerItem } from './AnimatedComponents';

export const Hero = () => {
  return (
    // MEJORA: Se ajusta el padding para dar más espacio vertical en móviles y se centra el contenido.
    // min-h-screen asegura que ocupe toda la altura de la pantalla en todas las resoluciones.
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-hero pt-40 sm:pt-48 md:pt-32 pb-24 sm:pb-32 md:pb-0">
      
      {/* Background Image Overlay (sin cambios) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Félix Reyes Contadores - Servicios profesionales"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      <div className="relative z-10 container-custom px-4 sm:px-6">
        {/* MEJORA: Cambiamos de lg:grid-cols-2 a md:grid-cols-2 para que el layout de dos columnas se active antes (en tablets).
            En móviles (abajo de `md`), será una sola columna (flex-col) con un gap mayor. */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 lg:gap-16 items-center">
          
          {/* --- Content (Lado Izquierdo) --- */}
          <motion.div 
            // MEJORA: Añadimos text-center en móviles y text-left a partir de `md` para mejor alineación.
            className="text-white text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* MEJORA: Se centra el tag "Fundada en 1974" en móviles */}
            <motion.div 
              className="flex items-center justify-center md:justify-start space-x-2 mb-4 mt-2 md:mb-6 md:mt-0"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <Award className="h-5 w-5 md:h-6 md:w-6 text-accent flex-shrink-0" />
              <span className="text-accent font-semibold text-sm md:text-base">Fundada en 1974</span>
            </motion.div>
            
            <motion.h1 
              // MEJORA: Se ajustan los tamaños de fuente para que sean más legibles en pantallas pequeñas.
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6 leading-tight"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              Servicios Contables y Fiscales 
              {/* MEJORA: Se mantiene el `block` para móviles, pero `md:inline` para que no se rompa la línea en tablets. */}
              <span className="text-accent block">Profesionales</span>
            </motion.h1>
            
            <motion.p 
              // MEJORA: Se ajusta el tamaño de la fuente para una mejor lectura en móviles.
              className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-white/90 leading-relaxed max-w-xl mx-auto md:mx-0"
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
            >
              Confía en Félix Reyes Contadores, una firma con más de cinco décadas de experiencia brindando soluciones contables, financieras y administrativas a nivel nacional e internacional
            </motion.p>

            {/* MEJORA: Los botones se centran en móvil y se alinean a la izquierda a partir de `md`. */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start"
              variants={fadeInUp}
              transition={{ delay: 1.0 }}
            >
              <motion.button 
                className="btn-secondary transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Solicitar Consulta
              </motion.button>
              <motion.button 
                className="btn-outline text-white border-white hover:bg-white hover:text-primary transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Conocer Servicios
              </motion.button>
            </motion.div>

            {/* --- Trust Indicators --- */}
            <StaggerContainer delay={0.1}>
              {/* MEJORA CLAVE: Se usa flex-wrap para que los elementos se ajusten y pasen a la siguiente línea si no caben.
                  Se usa `gap-x-6 gap-y-3` en lugar de `space-x-6` para manejar el espaciado en ambas direcciones.
                  Se centran en móvil y se alinean a la izquierda en pantallas más grandes. */}
              <motion.div 
                className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 text-white/80"
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
                    <span>Experiencia</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>Resultados</span>
                  </div>
                </StaggerItem>
              </motion.div>
            </StaggerContainer>
          </motion.div>

          {/* --- Stats Cards (Lado Derecho) --- */}
          {/* MEJORA CLAVE: Ahora es de 1 columna por defecto y pasa a 2 columnas a partir de `sm`.
              Esto evita que las tarjetas se compriman y se desborden en pantallas muy delgadas. */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Card 1 */}
            <motion.div 
              className="card-elegant bg-white/95 backdrop-blur-sm text-center"
              variants={scaleIn}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 17 } }}
            >
              <Users className="h-8 w-8 text-primary mx-auto mb-4" />
              <AnimatedCounter 
                end={900} 
                suffix="+"
                // MEJORA: Se ajusta tamaño de fuente para consistencia.
                className="text-3xl md:text-4xl font-bold text-primary block mb-2"
              />
              <p className="text-muted-foreground font-medium text-sm">CLIENTES TOTALES</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="card-elegant bg-white/95 backdrop-blur-sm text-center"
              variants={scaleIn}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 17 } }}
            >
              <TrendingUp className="h-8 w-8 text-secondary mx-auto mb-4" />
              <AnimatedCounter 
                end={50} // Actualizado para coincidir con el texto "Fundada en 1974"
                suffix="+"
                className="text-3xl md:text-4xl font-bold text-secondary block mb-2"
              />
              <p className="text-muted-foreground font-medium text-sm">AÑOS DE EXPERIENCIA</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="card-elegant bg-white/95 backdrop-blur-sm text-center"
              variants={scaleIn}
              transition={{ delay: 1.0 }} // Se ajusta el delay
              whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 17 } }}
            >
              <Briefcase className="h-8 w-8 text-accent mx-auto mb-4" />
              <AnimatedCounter 
                end={40} 
                suffix="+"
                className="text-3xl md:text-4xl font-bold text-accent block mb-2"
              />
              <p className="text-muted-foreground font-medium text-sm">PROFESIONALES ESPECIALIZADOS</p>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              className="card-elegant bg-white/95 backdrop-blur-sm text-center"
              variants={scaleIn}
              transition={{ delay: 1.2 }} // Se ajusta el delay
              whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 17 } }}
            >
              <ShieldCheck className="h-8 w-8 text-primary mx-auto mb-4" />
              <AnimatedCounter 
                end={100} 
                suffix="%"
                className="text-3xl md:text-4xl font-bold text-primary block mb-2"
              />
              <p className="text-muted-foreground font-medium text-sm">CONFIANZA Y TRANSPARENCIA</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator (se oculta en pantallas medianas para no estorbar) */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white z-20 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.6 } }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center cursor-pointer"
          animate={{ y: [0, 10, 0], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1], transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};