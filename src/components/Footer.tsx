import { Phone, Mail, MapPin, Calendar, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const services = [
    'Contabilidad General',
    'Asesoría Fiscal',
    'Auditorías',
    'Asesoría Financiera',
    'Precios de Transferencia'
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold mb-2">
                Félix Reyes Contadores
              </h3>
              <p className="text-white/80 text-sm">S.A. de C.V.</p>
            </div>
            
            <p className="text-white/90 mb-6 leading-relaxed">
              Más de 50 años brindando servicios profesionales de contabilidad, 
              auditoría y asesoría fiscal. Comprometidos con la excelencia y 
              el éxito de nuestros clientes.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-white/90">+52 (33) 3615-4291</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-white/90">contacto@felixreyes.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-white/90">Guadalajara, Jalisco, México</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-4 w-4 text-accent" />
                <span className="text-white/90">Fundada en 1974</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h5 className="font-semibold mb-4 text-accent">Horarios de Atención</h5>
              <div className="text-sm text-white/80 space-y-1">
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 9:00 - 14:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h5 className="font-semibold mb-4 text-accent">Certificaciones</h5>
              <div className="text-sm text-white/80 space-y-1">
                <p>Colegio de Contadores Públicos</p>
                <p>Instituto Mexicano de Contadores</p>
                <p>Certificación en Normas de Información Financiera</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © {currentYear} Félix Reyes Contadores S.A. de C.V. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-accent transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="text-white/80 hover:text-accent transition-colors duration-200">
                Términos de Servicio
              </a>
              <a href="#" className="text-white/80 hover:text-accent transition-colors duration-200">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};