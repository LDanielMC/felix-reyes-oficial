import { 
  Calculator, 
  FileText, 
  Search, 
  TrendingUp, 
  Shield, 
  Users,
  PieChart,
  BookOpen
} from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Contabilidad General',
      description: 'Llevamos la contabilidad completa de su empresa con precisión y cumplimiento normativo.',
      features: ['Registro contable', 'Estados financieros', 'Conciliaciones bancarias']
    },
    {
      icon: FileText,
      title: 'Asesoría Fiscal',
      description: 'Orientación experta para el cumplimiento de sus obligaciones fiscales y optimización tributaria.',
      features: ['Declaraciones fiscales', 'Planeación fiscal', 'Defensa fiscal']
    },
    {
      icon: Search,
      title: 'Auditorías',
      description: 'Auditorías financieras, fiscales y de control interno con los más altos estándares profesionales.',
      features: ['Auditoría financiera', 'Auditoría fiscal', 'Control interno']
    },
    {
      icon: TrendingUp,
      title: 'Asesoría Financiera',
      description: 'Análisis y consultoría para la toma de decisiones financieras estratégicas.',
      features: ['Análisis financiero', 'Proyecciones', 'Indicadores de gestión']
    },
    {
      icon: Shield,
      title: 'Asesoría Patrimonial',
      description: 'Protección y estructuración del patrimonio personal y empresarial.',
      features: ['Estructuración patrimonial', 'Sucesiones', 'Fideicomisos']
    },
    {
      icon: Users,
      title: 'Asesoría Laboral',
      description: 'Cumplimiento de obligaciones laborales y seguridad social.',
      features: ['Nóminas', 'IMSS', 'Infonavit']
    },
    {
      icon: PieChart,
      title: 'Precios de Transferencia',
      description: 'Estudios especializados para cumplimiento de régimen de precios de transferencia.',
      features: ['Estudios PT', 'Documentación', 'Defensa ante autoridades']
    },
    {
      icon: BookOpen,
      title: 'Asesoría Administrativa',
      description: 'Optimización de procesos administrativos y mejora operacional.',
      features: ['Procesos', 'Sistemas', 'Capacitación']
    }
  ];

  return (
    <section id="servicios" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Nuestros Servicios Profesionales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios contables, fiscales y de auditoría 
            diseñados para impulsar el crecimiento y éxito de su empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-elegant hover-lift group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-border">
                <button className="text-primary hover:text-secondary font-semibold text-sm transition-colors duration-200">
                  Más información →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-elegant max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              ¿Necesita una consulta personalizada?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestros expertos están listos para analizar sus necesidades específicas 
              y ofrecer la mejor solución para su empresa.
            </p>
            <button className="btn-secondary">
              Agendar Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};