import { Calendar, MapPin, Users2, Trophy, Target, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, useHoverAnimation } from '@/hooks/use-animations';
import { StaggerContainer, StaggerItem } from './AnimatedComponents';

export const About = () => {
  const values = [
    {
      icon: Trophy,
      title: 'Excelencia',
      description: 'Comprometidos con la calidad y precisión en cada servicio que ofrecemos.'
    },
    {
      icon: Target,
      title: 'Integridad',
      description: 'Actuamos con transparencia, ética y honestidad en todas nuestras relaciones.'
    },
    {
      icon: Users2,
      title: 'Compromiso',
      description: 'Dedicados al éxito de nuestros clientes y al crecimiento conjunto.'
    }
  ];

  return (
    <section id="nosotros" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, threshold: 0.3 }}
            variants={fadeInLeft}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <Calendar className="h-6 w-6 text-accent" />
              <span className="text-accent font-semibold">Desde 1974</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              Medio Siglo de
              <span className="text-secondary"> Excelencia Profesional</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              Félix Reyes Contadores S.A. de C.V. fue fundada en 1974 por Antonio Félix Ramírez 
              y Lilia Guadalupe Reyes Serrano, con la visión de brindar servicios contables y 
              fiscales de la más alta calidad.
            </motion.p>

            <motion.p 
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
            >
              A lo largo de cinco décadas, hemos evolucionado y crecido junto con nuestros clientes, 
              adaptándonos a los cambios normativos y tecnológicos, pero manteniendo siempre nuestro 
              compromiso con la excelencia y la integridad profesional.
            </motion.p>

            {/* Location */}
            <motion.div 
              className="flex items-center space-x-3 mb-8 p-4 bg-muted/50 rounded-lg"
              variants={fadeInUp}
              transition={{ delay: 1.0 }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 2, repeat: Infinity, repeatDelay: 3 }
                }}
              >
                <MapPin className="h-5 w-5 text-primary" />
              </motion.div>
              <span className="text-foreground font-medium">
                Guadalajara, Jalisco, México
              </span>
            </motion.div>

            <motion.button 
              className="btn-primary"
              variants={fadeInUp}
              transition={{ delay: 1.2 }}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Conocer Más
            </motion.button>
          </motion.div>

          {/* Mission, Vision & Values */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, threshold: 0.3 }}
            variants={fadeInRight}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Mission */}
            <motion.div 
              className="card-elegant"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    transition: { duration: 3, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <Target className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-heading font-bold text-primary">Misión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Brindar servicios integrales de contabilidad, auditoría y asesoría fiscal 
                con los más altos estándares de calidad, ayudando a nuestros clientes a 
                alcanzar sus objetivos empresariales y cumplir con sus obligaciones legales.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              className="card-elegant"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Eye className="h-6 w-6 text-secondary" />
                </motion.div>
                <h3 className="text-xl font-heading font-bold text-secondary">Visión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser la firma de contadores de referencia en la región, reconocida por nuestra 
                excelencia profesional, innovación en servicios y compromiso inquebrantable 
                con el éxito de nuestros clientes.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div 
              className="card-elegant"
              variants={fadeInUp}
              transition={{ delay: 0.8 }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <h3 className="text-xl font-heading font-bold text-accent mb-6">Nuestros Valores</h3>
              <StaggerContainer delay={0.1}>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <StaggerItem key={index}>
                      <motion.div 
                        className="flex items-start space-x-3"
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
                          <value.icon className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                          <p className="text-sm text-muted-foreground">{value.description}</p>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};