import { Calendar, MapPin, Users2, Trophy, Target, Eye } from 'lucide-react';

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
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Calendar className="h-6 w-6 text-accent" />
              <span className="text-accent font-semibold">Desde 1974</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              Medio Siglo de
              <span className="text-secondary"> Excelencia Profesional</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Félix Reyes Contadores S.A. de C.V. fue fundada en 1974 por Antonio Félix Ramírez 
              y Lilia Guadalupe Reyes Serrano, con la visión de brindar servicios contables y 
              fiscales de la más alta calidad.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A lo largo de cinco décadas, hemos evolucionado y crecido junto con nuestros clientes, 
              adaptándonos a los cambios normativos y tecnológicos, pero manteniendo siempre nuestro 
              compromiso con la excelencia y la integridad profesional.
            </p>

            {/* Location */}
            <div className="flex items-center space-x-3 mb-8 p-4 bg-muted/50 rounded-lg">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">
                Guadalajara, Jalisco, México
              </span>
            </div>

            <button className="btn-primary">
              Conocer Más
            </button>
          </div>

          {/* Mission, Vision & Values */}
          <div className="space-y-8">
            {/* Mission */}
            <div className="card-elegant">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-heading font-bold text-primary">Misión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Brindar servicios integrales de contabilidad, auditoría y asesoría fiscal 
                con los más altos estándares de calidad, ayudando a nuestros clientes a 
                alcanzar sus objetivos empresariales y cumplir con sus obligaciones legales.
              </p>
            </div>

            {/* Vision */}
            <div className="card-elegant">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-heading font-bold text-secondary">Visión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser la firma de contadores de referencia en la región, reconocida por nuestra 
                excelencia profesional, innovación en servicios y compromiso inquebrantable 
                con el éxito de nuestros clientes.
              </p>
            </div>

            {/* Values */}
            <div className="card-elegant">
              <h3 className="text-xl font-heading font-bold text-accent mb-6">Nuestros Valores</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <value.icon className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};