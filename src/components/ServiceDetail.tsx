import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';

type Service = {
  id: string;
  title: string;
  icon: any;
  description: string;
  details: string[];
  benefits?: string[];
};

// --- INICIO DE LA INFORMACIÓN CORREGIDA Y LIMPIA ---
const servicesData: Service[] = [
  {
    id: 'contabilidad-general',
    title: 'Contabilidad General',
    icon: '📊',
    description: 'Suministramos información precisa y oportuna para la evaluación, el control y la toma de decisiones.',
    details: [
      'Registro, codificación y captura de información contable',
      'Cumplimiento de las Normas de Información Financiera',
      'Cumplimiento de requerimientos contables en tiempo y forma',
      'Correcta determinación de impuestos',
    ],
  },
  {
    id: 'contabilidad-gubernamental',
    title: 'Contabilidad Gubernamental',
    icon: '🏛️',
    description: 'Generamos información financiera y presupuestal que cumpla con las normativas gubernamentales.',
    details: [
      'Identificación y análisis de operaciones que impactan a instituciones públicas',
      'Procesamiento y reconocimiento de operaciones',
      'Generación de información financiera y presupuestal',
      'Cumplimiento de normativas gubernamentales',
    ],
  },
  {
    id: 'asesoria-contable',
    title: 'Asesoría Contable',
    icon: '📈',
    description: 'Orientación en registros contables para un excelente control interno y cumplimiento fiscal.',
    details: [
      'Orientación sobre registros contables para tu empresa',
      'Implementación de un excelente sistema de control interno',
      'Cálculo de impuestos',
      'Presentación de declaraciones fiscales considerando la normatividad vigente',
    ],
  },
  {
    id: 'asesoria-administrativa',
    title: 'Asesoría Administrativa',
    icon: '📋',
    description: 'Suministramos información clara de las operaciones históricas para la planeación y dirección de la empresa.',
    details: [
      'Base para la planeación, organización y control',
      'Información elemental para la toma de decisiones',
    ],
  },
  {
    id: 'asesoria-laboral',
    title: 'Asesoría Laboral',
    icon: '👥',
    description: 'Te brindamos la asesoría necesaria para la administración del talento humano.',
    details: [
      'Administración del talento humano',
      'Correcto registro e incorporación a las prestaciones sociales vigentes',
    ],
  },
  {
    id: 'asesoria-financiera',
    title: 'Asesoría Financiera',
    icon: '💰',
    description: 'Analizamos tus necesidades para la correcta gestión de tus finanzas y el establecimiento de metas.',
    details: [
      'Establecimiento de metas financieras específicas',
      'Orientación en decisiones de inversión a corto, mediano y largo plazo',
      'Acceso a financiamiento bancario con las tasas de interés más bajas del mercado',
    ],
  },
  {
    id: 'asesoria-patrimonial',
    title: 'Asesoría Patrimonial',
    icon: '🏠',
    description: 'Organizamos y protegemos tus bienes, ayudándote a tomar decisiones para hacerlos crecer.',
    details: [
      'Organización y protección de tus bienes',
      'Toma de decisiones informadas para hacer crecer tus bienes',
      'Protección de tus activos',
    ],
  },
  {
    id: 'asesoria-fiscal',
    title: 'Asesoría Fiscal',
    icon: '📝',
    description: 'Determinamos impuestos y establecemos estrategias para el correcto cumplimiento de tus obligaciones fiscales.',
    details: [
      'Determinación de impuestos de acuerdo a la normatividad vigente',
      'Estrategias en congruencia con el marco legal',
      'Cumplimiento de obligaciones ante autoridades recaudadoras',
    ],
  },
  {
    id: 'auditorias',
    title: 'Auditorías',
    icon: '🔍',
    description: 'Vigilamos y evaluamos la ejecución de controles internos para garantizar el cumplimiento normativo.',
    details: [
      'Auditoría Fiscal, Financiera, de Seguridad Social y de Control Interno',
      'Garantía de cumplimiento contable, fiscal y financiero',
      'Certificación para la presentación de dictámenes oficiales ante el SAT y el IMSS',
    ],
  },
  {
    id: 'precios-transferencia',
    title: 'Estudios de Precios de Transferencia',
    icon: '🌐',
    description: 'Determinamos los ingresos acumulables y deducciones autorizadas para negocios con partes relacionadas.',
    details: [
      'Para contribuyentes con partes relacionadas nacionales o extranjeras',
      'Asesoría para la declaración maestra',
      'Asesoría para la declaración local',
      'Asesoría para la declaración país por país',
    ],
  }
];
// --- FIN DE LA INFORMACIÓN CORREGIDA ---

export const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      // MODIFICADO: Aumentado el padding superior para evitar el header
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 pt-40 pb-16 px-4">
        <div className="text-center p-8 max-w-2xl">
          <h1 className="text-4xl font-bold text-foreground mb-4">Servicio no encontrado</h1>
          <p className="text-muted-foreground text-lg mb-8">El servicio que estás buscando no existe o ha sido movido.</p>
          <Link
            to="/servicios"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a servicios
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative pt-40">
      <motion.div 
        className="min-h-screen bg-background pb-24 sm:pb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
        >
          <Link
            to="/servicios"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            {/* MODIFICADO: Corregida la altura del ícono (h-10 a h-4) para que no se vea estirado */}
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a servicios
          </Link>
        </motion.div>

        <motion.div
          className="bg-background rounded-2xl shadow-xl overflow-hidden"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="p-8 md:p-12 lg:flex lg:items-start lg:gap-12">
            <motion.div
              className="lg:w-1/3"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl mb-6">
                {service.icon}
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{service.title}</h1>
              <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
              
              {service.benefits && (
                <motion.div
                  className="bg-primary/5 p-6 rounded-xl mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="font-semibold text-lg text-foreground mb-3">Beneficios clave</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + (i * 0.05) }}
                      >
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-foreground">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="w-full"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="w-full"
                >
                  <Link
                    to="/contacto#contact-form"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 w-full"
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
              </motion.div>
            </motion.div>

            <div className="lg:w-2/3 lg:pl-12 mt-12 lg:mt-0">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold text-foreground mb-6">Detalles del servicio</h2>
                <div className="space-y-6">
                  {service.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.05) }}
                    >
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      </div>
                      <p className="text-foreground">{detail}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="mt-12 pt-8 border-t border-border"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">¿Necesitas más información?</h3>
                <p className="text-muted-foreground mb-6">Nuestro equipo de expertos está listo para atender tus consultas y ofrecerte soluciones personalizadas.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* WhatsApp button - hidden on mobile */}
                  <motion.a
                    href="https://wa.me/527773128687?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#25D366] hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] transition-all duration-200 flex-1 text-center"
                    whileHover={{ 
                      scale: 1.02,
                      y: -2,
                      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.15)'
                    }}
                    whileTap={{ 
                      scale: 0.98,
                      y: 0,
                      boxShadow: '0 2px 8px rgba(37, 211, 102, 0.1)'
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <motion.span 
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse'
                      }}
                    >
                      <MessageCircle className="h-5 w-5" />
                    </motion.span>
                    <span>WhatsApp</span>
                  </motion.a>
                  <motion.a
                    href="tel:7773128687"
                    className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-foreground bg-background hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 flex-1 text-center"
                    whileHover={{ 
                      scale: 1.02,
                      y: -2,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                    }}
                    whileTap={{ 
                      scale: 0.98,
                      y: 0,
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Llamar ahora
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating WhatsApp CTA for mobile */}
      <motion.div 
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 sm:hidden"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', damping: 20, stiffness: 300 }}
      >
        <motion.a
          href="https://wa.me/527773128687?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl p-4 shadow-lg shadow-[#128C7E]/30 flex items-center justify-between w-full"
          whileHover={{ 
            scale: 1.02, 
            boxShadow: '0 10px 25px -5px rgba(18, 140, 126, 0.3), 0 10px 10px -5px rgba(18, 140, 126, 0.2)' 
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center">
            <div className="bg-white/20 p-2 rounded-lg mr-3">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-sm">¿Necesitas ayuda?</p>
              <p className="text-xs opacity-90">Chatea por WhatsApp</p>
            </div>
          </div>
          <span className="bg-white text-[#128C7E] font-semibold px-4 py-2 rounded-lg text-sm flex items-center">
            Abrir chat
            <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </motion.a>
      </motion.div>
    </motion.div>
    
    </div>
  );
};