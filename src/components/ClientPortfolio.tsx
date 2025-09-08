import { ExternalLink, Building, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Asumo que estos componentes y hooks personalizados existen en tu proyecto
// Si no, necesitarías crearlos. Framer Motion por sí solo puede hacer esto.
const StaggerContainer = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ staggerChildren: delay }}
  >
    {children}
  </motion.div>
);

const StaggerItem = ({ children }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const
      } 
    },
  };
  return <motion.div variants={itemVariants}>{children}</motion.div>;
};

// Componente para manejar logos con fallback
const ClientLogo = ({ src, alt, className = "" }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (imageError) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <Building className="h-7 w-7 text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Building className="h-7 w-7 text-muted-foreground animate-pulse" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-contain transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  );
};


export const ClientPortfolio = () => {
  // --- DATOS ---
  const clients = [
    { 
      id: 1, 
      name: 'TRUCK EXPRESS CIVAC SA DE CV',
      website: 'https://truckexpresscivac.com',
      logo: '/logos/truck-express.png'
    },
    { 
      id: 2, 
      name: 'CONVERPET GROUP S A P I DE CV',
      website: 'https://converpetgroup.com',
      logo: '/logos/converpet.png'
    },
    { 
      id: 3, 
      name: 'CONEXIONES JC SA DE CV',
      website: 'https://conexionesjc.com',
      logo: '/logos/conexiones-jc.png'
    },
    { 
      id: 4, 
      name: 'BIOFABRICA SIGLO XXI',
      website: 'https://biofabricasigloxxi.com',
      logo: '/logos/biofabrica.png'
    },
    { 
      id: 5, 
      name: 'ALIMENTOS DARB SA DE CV',
      website: 'https://alimentosdarb.com',
      logo: '/logos/alimentos-darb.png'
    },
    { 
      id: 6, 
      name: 'INSTITUTO EDUCATIVO LAS FUENTES',
      website: 'https://lasfuentes.edu.mx',
      logo: '/logos/las-fuentes.png'
    },
    { 
      id: 7, 
      name: 'FIDEICOMISO PARQUE CIENTÍFICO Y TECNOLÓGICO MORELOS',
      website: 'https://parquecientificomorelos.mx',
      logo: '/logos/parque-cientifico.png'
    },
    { 
      id: 8, 
      name: 'BDG STUDIOS MEXICO',
      website: 'https://bdgstudios.mx',
      logo: '/logos/bdg-studios.png'
    },
    { 
      id: 9, 
      name: 'TSI EMPRESARIAL DE MEXICO SA DE CV',
      website: 'https://tsiempresarial.com',
      logo: '/logos/tsi-empresarial.png'
    },
    { 
      id: 10, 
      name: 'ALARMAS DEL SUR SA DE CV',
      website: 'https://alarmasdelsur.com',
      logo: '/logos/alarmas-sur.png'
    },
    { 
      id: 11, 
      name: 'DIOCESIS DE CUERNAVACA, A.C.',
      website: 'https://diocesiscuernavaca.org',
      logo: '/logos/diocesis-cuernavaca.png'
    },
    { 
      id: 12, 
      name: 'SUKI YOI S.A. DE C.V.',
      website: 'https://sukiyoi.com',
      logo: '/logos/suki-yoi.png'
    },
    { 
      id: 13, 
      name: 'FUNERARIA HISPANO MEXICANA',
      website: 'https://funerariahispanomexicana.com',
      logo: '/logos/funeraria-hispano.png'
    },
    { 
      id: 14, 
      name: 'GRUPO PM',
      website: 'https://grupopm.mx',
      logo: '/logos/grupo-pm.png'
    },
    { 
      id: 15, 
      name: 'IZCALLI',
      website: 'https://izcalli.com',
      logo: '/logos/izcalli.png'
    },
  ];

  const stats = [
    { icon: Building, value: '150+', label: 'Empresas Activas', color: 'primary' },
    { icon: Users, value: '25+', label: 'Sectores Atendidos', color: 'secondary' },
    { icon: TrendingUp, value: '98%', label: 'Satisfacción del Cliente', color: 'accent' }
  ];

  // CORRECCIÓN 1: Objeto para mapear colores a clases estáticas que Tailwind CSS puede leer.
  const colorClasses = {
    primary: {
      text: 'text-primary',
      bg: 'bg-gradient-to-br from-primary/10 to-primary/5',
      border: 'border-primary/10'
    },
    secondary: {
      text: 'text-secondary',
      bg: 'bg-gradient-to-br from-secondary/10 to-secondary/5',
      border: 'border-secondary/10'
    },
    accent: {
      text: 'text-accent',
      bg: 'bg-gradient-to-br from-accent/10 to-accent/5',
      border: 'border-accent/10'
    }
  };

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* --- Encabezado de la Sección --- */}
        <StaggerContainer delay={0.2}>
            <div className="text-center mb-16">
                <StaggerItem>
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                        Empresas que Confían
                        <span className="text-secondary block"> en Nuestros Servicios</span>
                    </h2>
                </StaggerItem>
                <StaggerItem>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Trabajamos con empresas líderes de diversos sectores, brindando soluciones 
                        contables y fiscales que impulsan su crecimiento y éxito empresarial.
                    </p>
                </StaggerItem>
            </div>
        </StaggerContainer>

        {/* --- Fila de Estadísticas (CORREGIDA) --- */}
        {/* CORRECCIÓN 2: El StaggerContainer ahora es el contenedor del grid. */}
        <StaggerContainer delay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat) => {
            const colors = colorClasses[stat.color]; // Se obtienen las clases correctas del objeto.
            return (
              <StaggerItem key={stat.label}>
                <div className="text-center group">
                  <div 
                    className={`w-20 h-20 mx-auto mb-4 rounded-2xl border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${colors.bg} ${colors.border} ${colors.text}`}
                  >
                    <stat.icon className="h-9 w-9" />
                  </div>
                  <div className={`text-5xl font-bold ${colors.text} mb-2 font-serif`}>
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground font-medium text-lg">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* --- Grid de Clientes (CORREGIDA) --- */}
        {/* CORRECCIÓN 2: El StaggerContainer ahora es el contenedor del grid. */}
        <StaggerContainer delay={0.05} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mb-16">
          {clients.map((client) => (
            <StaggerItem key={client.id}>
              <motion.a
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full block"
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 15 }}}
              >
                <div className="card-elegant h-36 flex flex-col items-center justify-center p-4 text-center border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm">
                    <ClientLogo 
                      src={client.logo}
                      alt={`Logo de ${client.name}`}
                      className="w-12 h-12"
                    />
                  </div>
                  <p className="text-xs font-semibold text-foreground/80 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight flex-grow">
                    {client.name}
                  </p>
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="h-3 w-3 text-primary" />
                  </div>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* --- Llamada a la Acción (CTA) --- */}
        <StaggerContainer>
            <StaggerItem>
                <motion.div 
                    className="card-elegant bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 max-w-3xl mx-auto p-8 text-center"
                    whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 15 }}}
                >
                    <h3 className="text-3xl font-serif font-bold text-primary mb-4">
                        ¿Tu Empresa Será la Siguiente?
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                        Únete a las empresas líderes que han confiado en nosotros para 
                        optimizar sus procesos contables y fiscales.
                    </p>
                    <motion.a 
                        href="#contacto"
                        className="btn-primary inline-flex items-center space-x-2" // Usando tu clase personalizada
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Solicitar Propuesta</span>
                        <ExternalLink className="h-4 w-4" />
                    </motion.a>
                </motion.div>
            </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
