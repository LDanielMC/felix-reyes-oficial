import { Award, ArrowRight, Users, Building2, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { memo, useRef } from 'react';
import lugar from '@/assets/lugar_Felix.webp';
import { Link } from 'react-router-dom';

// TypeScript interfaces
interface Highlight {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  color: string;
}

interface HighlightCardProps {
  highlight: Highlight;
  index: number;
}

// Optimized animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
};

// Memoized data to prevent re-creation
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

// Optimized highlight card component
const HighlightCard = memo(({ highlight, index }: HighlightCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <div 
      ref={ref}
      className={`card-elegant group cursor-pointer hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center space-x-6">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center ${highlight.color} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
          <highlight.icon className="h-8 w-8" />
        </div>
        
        <div className="flex-1">
          <div className={`text-3xl font-bold ${highlight.color} mb-1 transition-all duration-300`}>
            {highlight.value}
          </div>
          <p className="text-muted-foreground font-medium">
            {highlight.label}
          </p>
        </div>
        
        <div className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
          <ArrowRight className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
});

export const About = memo(() => {

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
            
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
              Líderes en Servicios
              <span className="text-secondary block"> Contables y Fiscales</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Cinco décadas de excelencia profesional respaldando el crecimiento 
              empresarial con soluciones contables integrales y asesoría especializada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                to="/nosotros"
                className="btn-primary inline-flex items-center space-x-2 hover:scale-105 active:scale-95 transition-transform duration-200"
              >
                <span>Conocer Nuestra Historia</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <a 
                href="#contacto"
                className="btn-outline inline-flex items-center space-x-2 hover:scale-105 active:scale-95 transition-transform duration-200"
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
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group hover:scale-[1.02] transition-transform duration-300">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 shadow-elegant">
                <div className="aspect-[4/5] bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center">
                  <img 
                    src={lugar}
                    alt="Félix Reyes Contadores - Oficina profesional"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
              </div>

              {/* Floating Badge - Simplified */}
              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-hover border border-primary/10 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">Oficina Central</p>
                    <p className="text-xs text-muted-foreground">Guadalajara, Jalisco</p>
                  </div>
                </div>
              </div>
            </div>
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
                <HighlightCard key={index} highlight={highlight} index={index} />
              ))}
            </div>

            {/* Trust Badge - Simplified */}
            <div className="card-elegant bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 hover:scale-[1.02] transition-transform duration-300">
              <div className="text-center">
                <div className="inline-block mb-4 animate-pulse">
                  <Award className="h-12 w-12 text-accent mx-auto" />
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2">
                  Certificación Profesional
                </h3>
                <p className="text-sm text-muted-foreground">
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