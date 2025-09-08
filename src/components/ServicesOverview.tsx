import { Users, FileText, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/hooks/use-animations';
import { StaggerContainer, StaggerItem } from './AnimatedComponents';

export const ServicesOverview = () => {
  const services = [
    {
      id: 'asesoria-laboral',
      icon: Users,
      title: 'Asesoría Laboral',
      description: 'Te brindamos la asesoría necesaria para la administración del talento humano.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      hoverColor: 'hover:bg-primary/20'
    },
    {
      id: 'contabilidad-general',
      icon: FileText,
      title: 'Contabilidad General',
      description: 'Registramos, codificamos y capturamos la información contable.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      hoverColor: 'hover:bg-secondary/20'
    },
    {
      id: 'auditorias',
      icon: Shield,
      title: 'Auditoría',
      description: 'Auditorías con los más altos estándares para garantizar el cumplimiento contable.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      hoverColor: 'hover:bg-accent/20'
    },
    {
      id: 'asesoria-financiera',
      icon: TrendingUp,
      title: 'Asesoría Financiera',
      description: 'Analizamos tus necesidades y objetivos para la correcta gestión de tus finanzas.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      hoverColor: 'hover:bg-primary/20'
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Soluciones a la Medida de su
            <span className="text-secondary"> Crecimiento</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Descubra nuestro amplio portafolio de servicios profesionales diseñados 
            para impulsar el éxito de su empresa en cada etapa de su desarrollo.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <StaggerContainer delay={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className={`card-elegant ${service.bgColor} ${service.hoverColor} border-0 text-center group cursor-pointer`}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-white shadow-md flex items-center justify-center ${service.color}`}
                    whileHover={{ 
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <service.icon className="h-8 w-8" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA Link */}
                  <motion.a 
                    href={`/servicios/${service.id}`}
                    className="flex items-center justify-center space-x-2 text-primary font-semibold group-hover:text-secondary transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span>Saber más</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a 
            href="/servicios"
            className="btn-primary inline-block"
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 17 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Todos los Servicios
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
