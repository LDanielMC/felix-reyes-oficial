import {
  Calculator,
  FileText,
  Search,
  TrendingUp,
  Shield,
  Users,
  PieChart,
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { StaggerContainer, StaggerItem } from './AnimatedComponents';

// --- Variantes de Animación Optimizadas ---

// Variante para la aparición inicial de la sección
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// Variante para la descripción (ahora controla su estado activo/inactivo)
const descriptionVariants = {
  initial: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  active: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
};

// Variante para las características (con animación escalonada)
const featuresVariants = {
  initial: { opacity: 0, y: 20, transition: { duration: 0.3, ease: "easeIn" } },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.08 // Animación más rápida para cada item
    }
  }
};

// Variante para cada ítem de la lista de características
const featureItemVariants = {
  initial: { opacity: 0, x: -15 },
  active: { opacity: 1, x: 0 },
};


export const Services = () => {
  const services = [
    // ... Tu array de servicios no necesita cambios ...
    { icon: Calculator, title: 'Contabilidad General', description: 'Llevamos la contabilidad completa de su empresa con precisión y cumplimiento normativo.', features: ['Registro contable', 'Estados financieros', 'Conciliaciones bancarias'] },
    { icon: FileText, title: 'Asesoría Fiscal', description: 'Orientación experta para el cumplimiento de sus obligaciones fiscales y optimización tributaria.', features: ['Declaraciones fiscales', 'Planeación fiscal', 'Defensa fiscal'] },
    { icon: Search, title: 'Auditorías', description: 'Auditorías financieras, fiscales y de control interno con los más altos estándares profesionales.', features: ['Auditoría financiera', 'Auditoría fiscal', 'Control interno'] },
    { icon: TrendingUp, title: 'Asesoría Financiera', description: 'Análisis y consultoría para la toma de decisiones financieras estratégicas.', features: ['Análisis financiero', 'Proyecciones', 'Indicadores'] },
    { icon: Shield, title: 'Asesoría Patrimonial', description: 'Protección y estructuración del patrimonio personal y empresarial.', features: ['Estructuración patrimonial', 'Sucesiones', 'Fideicomisos'] },
    { icon: Users, title: 'Asesoría Laboral', description: 'Cumplimiento de obligaciones laborales y seguridad social.', features: ['Nóminas', 'Cálculos de IMSS', 'Infonavit'] },
    { icon: PieChart, title: 'Precios de Transferencia', description: 'Estudios especializados para cumplimiento de régimen de precios de transferencia.', features: ['Estudios PT', 'Documentación', 'Defensa'] },
    { icon: BookOpen, title: 'Asesoría Administrativa', description: 'Optimización de procesos administrativos y mejora operacional.', features: ['Procesos', 'Sistemas', 'Capacitación'] }
  ];

  // Un único estado para la tarjeta activa (funciona con hover y con click)
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="servicios" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Header (sin cambios) */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Nuestros Servicios Profesionales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios diseñados para impulsar el crecimiento de su empresa.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                className="card-elegant group flex flex-col h-full cursor-pointer"
                // --- MANEJO DE EVENTOS PARA MÓVIL Y ESCRITORIO ---
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => setActiveIndex(isActive ? null : index)} // Para toggle en móvil
                
                // Animación de entrada de la tarjeta
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.05 } }}
                viewport={{ once: true, amount: 0.3 }}
                
                // Efecto de elevación al estar activa
                animate={{ y: isActive ? -10 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Icono y Título */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 ${isActive ? 'bg-primary' : 'bg-primary/10'}`}>
                    <service.icon className={`h-8 w-8 transition-colors duration-300 ${isActive ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                </div>

                {/* Contenedor para descripción y características (con Cross-fade) */}
                <div className="flex-grow min-h-[150px] relative">
                  {/* Descripción */}
                  <motion.p
                    className="text-muted-foreground leading-relaxed absolute top-0 left-0"
                    variants={descriptionVariants}
                    animate={isActive ? 'active' : 'initial'}
                  >
                    {service.description}
                  </motion.p>

                  {/* Características */}
                  <motion.ul
                    className="space-y-3 absolute top-0 left-0"
                    variants={featuresVariants}
                    animate={isActive ? 'active' : 'initial'}
                    initial="initial" // Aseguramos que inicie oculto
                  >
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center text-sm text-foreground"
                        variants={featureItemVariants}
                      >
                        <CheckCircle2 className="w-4 h-4 text-secondary mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                
                {/* CTA que se empuja hacia abajo */}
                <div className={`mt-auto pt-6 border-t transition-colors duration-300 ${isActive ? 'border-primary/50' : 'border-border'}`}>
                  <div className="text-primary font-semibold text-sm inline-flex items-center">
                    Más información
                    <motion.span
                       className="ml-1"
                       animate={{ x: isActive ? 5 : 0 }}
                       transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                       →
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA (sin cambios) */}
      </div>
    </section>
  );
};