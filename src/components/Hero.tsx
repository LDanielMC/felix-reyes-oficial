import { AnimatedCounter } from './AnimatedCounter';
import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-accounting.jpg';

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-hero">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Félix Reyes Contadores - Servicios profesionales"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6">
              <Award className="h-6 w-6 text-accent" />
              <span className="text-accent font-semibold">Fundada en 1974</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Servicios Contables y Fiscales 
              <span className="text-accent"> Profesionales</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              Más de 50 años de experiencia brindando soluciones integrales en contabilidad, 
              auditoría y asesoría fiscal para empresas de todos los tamaños.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-secondary">
                Solicitar Consulta
              </button>
              <button className="btn-outline text-white border-white hover:bg-white hover:text-primary">
                Conocer Servicios
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Certificados</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Experiencia Comprobada</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Resultados Garantizados</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Stats Card 1 */}
            <div className="card-elegant bg-white/95 backdrop-blur-sm text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-4" />
              <AnimatedCounter 
                end={900} 
                suffix="+"
                className="text-3xl lg:text-4xl font-bold text-primary block mb-2"
              />
              <p className="text-muted-foreground font-medium">Clientes Satisfechos</p>
            </div>

            {/* Stats Card 2 */}
            <div className="card-elegant bg-white/95 backdrop-blur-sm text-center">
              <TrendingUp className="h-8 w-8 text-secondary mx-auto mb-4" />
              <AnimatedCounter 
                end={652} 
                suffix="+"
                className="text-3xl lg:text-4xl font-bold text-secondary block mb-2"
              />
              <p className="text-muted-foreground font-medium">Casos de Éxito</p>
            </div>

            {/* Stats Card 3 */}
            <div className="card-elegant bg-white/95 backdrop-blur-sm text-center col-span-2">
              <Award className="h-8 w-8 text-accent mx-auto mb-4" />
              <AnimatedCounter 
                end={50} 
                suffix="+"
                className="text-3xl lg:text-4xl font-bold text-accent block mb-2"
              />
              <p className="text-muted-foreground font-medium">Años de Experiencia Profesional</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};