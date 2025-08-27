import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, FileText, Search, TrendingUp, Shield, 
  Users, PieChart, BookOpen, CheckCircle2, ArrowRight, ChevronRight
} from 'lucide-react';

// --- Variantes de Animación ---
import type { Variants, Variant } from 'framer-motion';

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item: Variant = {
  y: 20, 
  opacity: 0,
  transition: {
    duration: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94] as const
  }
};

const visibleItem: Variant = {
  y: 0,
  opacity: 1,
  transition: {
    duration: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94] as const
  }
};

const cardHover = {
  scale: 1.03,
  y: -5,
  transition: {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94] as const
  }
};

const cardTap = {
  scale: 0.98
};

type Service = {
  id: string;
  title: string;
  icon: any;
  description: string;
  features: string[];
};

export const Services = () => {
  const services: Service[] = [
    {
      id: 'contabilidad-general',
      title: 'Contabilidad General',
      icon: Calculator,
      description: 'Registramos, codificamos y capturamos la información contable con precisión y oportunidad.',
      features: ['Registro contable', 'Estados financieros', 'Conciliaciones bancarias']
    },
    {
      id: 'contabilidad-gubernamental',
      title: 'Contabilidad Gubernamental',
      icon: FileText,
      description: 'Especialistas en el procesamiento y reconocimiento de operaciones del sector público.',
      features: ['Normativas gubernamentales', 'Información financiera', 'Control de recursos']
    },
    {
      id: 'asesoria-contable',
      title: 'Asesoría Contable',
      icon: Search,
      description: 'Orientación experta en registros contables y cumplimiento fiscal.',
      features: ['Control interno', 'Cálculo de impuestos', 'Declaraciones fiscales']
    },
    {
      id: 'asesoria-administrativa',
      title: 'Asesoría Administrativa',
      icon: BookOpen,
      description: 'Información clara para la toma de decisiones estratégicas.',
      features: ['Análisis operacional', 'Planeación empresarial', 'Optimización de procesos']
    },
    {
      id: 'asesoria-laboral',
      title: 'Asesoría Laboral',
      icon: Users,
      description: 'Soluciones integrales para la gestión del talento humano.',
      features: ['Administración de personal', 'Prestaciones sociales', 'Relaciones laborales']
    },
    {
      id: 'asesoria-financiera',
      title: 'Asesoría Financiera',
      icon: TrendingUp,
      description: 'Estrategias para la gestión óptima de tus finanzas.',
      features: ['Planeación financiera', 'Decisiones de inversión', 'Análisis de viabilidad']
    },
    {
      id: 'asesoria-patrimonial',
      title: 'Asesoría Patrimonial',
      icon: Shield,
      description: 'Protección y crecimiento de tus activos.',
      features: ['Estructuración patrimonial', 'Protección de activos', 'Planificación sucesoria']
    },
    {
      id: 'asesoria-fiscal',
      title: 'Asesoría Fiscal',
      icon: FileText,
      description: 'Cumplimiento estratégico de obligaciones fiscales.',
      features: ['Planeación fiscal', 'Cumplimiento normativo', 'Defensa fiscal']
    },
    {
      id: 'auditorias',
      title: 'Auditorías',
      icon: Search,
      description: 'Evaluación integral de controles y cumplimiento.',
      features: ['Auditoría fiscal', 'Auditoría financiera', 'Control interno']
    },
    {
      id: 'precios-transferencia',
      title: 'Precios de Transferencia',
      icon: PieChart,
      description: 'Cumplimiento normativo en operaciones con partes relacionadas.',
      features: ['Estudios de precios', 'Documentación', 'Reporte país por país']
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-20 md:py-40 bg-gradient-to-b from-background to-muted/10">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full "
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Nuestros Servicios
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Soluciones a la medida para tu negocio
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Ofrecemos una amplia gama de servicios profesionales diseñados para optimizar
            las operaciones de tu empresa y garantizar el cumplimiento normativo.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: item,
                visible: visibleItem
              }}
              className="group relative"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Link to={`/servicios/${service.id}`}>
                <motion.div 
                  className="h-full bg-background rounded-2xl shadow-lg overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col"
                  whileHover={cardHover}
                  whileTap={cardTap}
                >
                  <div className="p-6 pb-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${activeIndex === index ? 'bg-primary/10' : 'bg-muted/50'}`}>
                      <service.icon className={`w-7 h-7 ${activeIndex === index ? 'text-primary' : 'text-foreground'}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-3">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center text-primary font-medium text-sm mt-auto pt-4 border-t border-border/50">
                      <span>Ver detalles</span>
                      <motion.span
                        animate={{ x: activeIndex === index ? 5 : 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="ml-1"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </Link>
              
              {/* Efecto de resaltado al hacer hover */}
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
                initial={false}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            ¿Necesitas una solución personalizada?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Nuestro equipo de expertos está listo para entender tus necesidades y ofrecerte 
            soluciones contables y financieras a la medida de tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contacto" 
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Contáctanos
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+525512345678"
              className="px-8 py-4 border border-border bg-background rounded-xl font-medium hover:bg-muted/50 transition-colors flex items-center justify-center gap-2"
            >
              Llamar ahora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};