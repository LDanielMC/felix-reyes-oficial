import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Calculator, FileText, Search, TrendingUp, Shield, 
  Users, PieChart, BookOpen, CheckCircle2, ArrowRight, ChevronRight
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  features: string[];
}

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
  }
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isServicesPage = location.pathname === '/servicios';

  const nextService = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevService = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  // Always show full view for services page
  if (isServicesPage) {
    return (
      <section id="servicios" className="py-40 bg-gradient-to-b from-background to-muted/10">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-muted-foreground mb-8">
              Ofrecemos una gama completa de servicios contables y fiscales para ayudar a tu negocio a crecer y cumplir con sus obligaciones legales.
            </p>
            <Link
              to="/contacto#contact-form"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              onClick={(e) => {
                if (window.location.pathname === '/contacto') {
                  e.preventDefault();
                  const element = document.getElementById('contact-form');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Solicitar asesoría
            </Link>
          </motion.div>

          {/* Mobile/Tablet Carousel */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-card p-6 rounded-lg shadow-lg mb-6"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {React.createElement(services[activeIndex].icon, { className: "h-8 w-8 text-primary" })}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {services[activeIndex].title}
                </h3>
                <p className="text-muted-foreground text-center mb-4">
                  {services[activeIndex].description}
                </p>
                <ul className="space-y-2 mb-6">
                  {services[activeIndex].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                  <Link
                    to={`/servicios/${services[activeIndex].id}`}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    Ver detalles
                    <motion.span
                      animate={{
                        x: isHovered ? 5 : 0,
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevService}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="Previous service"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <div className="flex space-x-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                    aria-label={`Go to service ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextService}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="Next service"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:block">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={item}
                  custom={index}
                  className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-center mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center">
                    <Link
                      to={`/servicios/${service.id}`}
                      className="inline-flex items-center text-primary font-medium hover:underline"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      Ver detalles
                      <motion.span
                        animate={{
                          x: isHovered ? 5 : 0,
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {!isServicesPage && (
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  to="/servicios"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
                >
                  Ver todos los servicios
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Full view for services page
  return (
    <section id="servicios" className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-muted-foreground">
            Ofrecemos una gama completa de servicios contables y fiscales para ayudar a tu negocio a crecer y cumplir con sus obligaciones legales.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={item}
              custom={index}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-center mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <Link
                  to={`/servicios/${service.id}`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Ver detalles
                  <motion.span
                    animate={{
                      x: isHovered ? 5 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Link>
              </div>
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