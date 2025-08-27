import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['+52 (33) 3615-4291', '+52 (33) 3615-4292'],
      action: 'tel:+523336154291'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contacto@felixreyes.com', 'info@felixreyes.com'],
      action: 'mailto:contacto@felixreyes.com'
    },
    {
      icon: MapPin,
      title: 'Dirección',
      details: ['Av. López Mateos Sur #2375', 'Col. Chapalita, Guadalajara, Jal.'],
      action: '#'
    },
    {
      icon: Clock,
      title: 'Horario',
      details: ['Lunes a Viernes: 9:00 - 18:00', 'Sábados: 9:00 - 14:00'],
      action: '#'
    }
  ];

  const services = [
    'Contabilidad General',
    'Asesoría Fiscal',
    'Auditorías',
    'Asesoría Financiera',
    'Asesoría Patrimonial',
    'Asesoría Laboral',
    'Precios de Transferencia',
    'Asesoría Administrativa'
  ];

  return (
    <section id="contacto" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para ayudarle. Comuníquese con nosotros para una consulta 
            gratuita y descubra cómo podemos impulsar el éxito de su empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-heading font-bold text-primary mb-8">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="card-elegant">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 p-6 bg-primary rounded-xl text-white">
              <h4 className="font-heading font-bold text-xl mb-3">
                ¿Necesita atención inmediata?
              </h4>
              <p className="text-white/90 mb-4">
                Llámenos ahora para una consulta telefónica gratuita.
              </p>
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-200">
                Llamar Ahora
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-elegant">
              <h3 className="text-2xl font-heading font-bold text-primary mb-8">
                Solicitar Consulta Gratuita
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Su nombre completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="su@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="+52 (33) 1234-5678"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Nombre de su empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Servicio de Interés *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Seleccione un servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Descríbanos sus necesidades específicas..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-secondary flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar Solicitud</span>
                </button>

                <p className="text-sm text-muted-foreground text-center">
                  Al enviar este formulario, acepta que nos comuniquemos con usted 
                  para proporcionarle la información solicitada.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};