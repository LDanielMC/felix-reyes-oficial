import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/hooks/use-animations';
import { StaggerContainer, StaggerItem } from './AnimatedComponents';

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
      details: ['+52 (777) 312 15 47', '+52 (777) 312 40 48', '+52 (777) 314 18 29'],
      action: 'tel:+523336154291'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@felixreyescontadores.com'],
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
      details: ['Lunes a Viernes: 9:00 - 17:00'],
      action: '#'
    }
  ];

  const services = [
    'Contabilidad General',
    'Contabilidad Gubernamental',
    'Asesoría Contable',
    'Asesoría Administrativa',
    'Asesoría Laboral',
    'Asesoría Financiera',
    'Asesoría Patrimonial',
    'Asesoría Fiscal',
    'Auditorías',
    'Estudios de Precios de Transferencia'
  ];

  return (
    <section id="contacto" className="section-padding bg-gradient-subtle pt-40">
      <div className="container-custom">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Contáctanos
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Estamos aquí para ayudarle. Comuníquese con nosotros para una consulta 
            gratuita y descubra cómo podemos impulsar el éxito de su empresa.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
            transition={{ duration: 0.8 }}
          >
            <motion.h3 
              className="text-2xl font-heading font-bold text-primary mb-8"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Información de Contacto
            </motion.h3>
            
            <StaggerContainer delay={0.1}>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <StaggerItem key={index}>
                    <motion.div 
                      className="card-elegant"
                      whileHover={{ 
                        scale: 1.02,
                        transition: { type: "spring", stiffness: 400, damping: 17 }
                      }}
                    >
                      <div className="flex items-start space-x-4">
                        <motion.div 
                          className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgba(59, 130, 246, 0.2)",
                            transition: { duration: 0.3 }
                          }}
                        >
                          <motion.div
                            whileHover={{ 
                              rotate: 360,
                              transition: { duration: 0.6 }
                            }}
                          >
                            <info.icon className="h-6 w-6 text-primary" />
                          </motion.div>
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                          {info.details.map((detail, idx) => (
                            <motion.p 
                              key={idx} 
                              className="text-muted-foreground text-sm mb-1"
                              whileHover={{ 
                                color: "#3b82f6",
                                transition: { duration: 0.3 }
                              }}
                            >
                              {detail}
                            </motion.p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* CTA */}
            <motion.div 
              className="mt-8 p-6 bg-primary rounded-xl text-white"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <h4 className="font-heading font-bold text-xl mb-3">
                ¿Necesita atención inmediata?
              </h4>
              <p className="text-white/90 mb-4">
                Llámenos ahora para una consulta telefónica gratuita.
              </p>
              <motion.button 
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-200"
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Llamar Ahora
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="card-elegant"
              whileHover={{ 
                scale: 1.01,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              <motion.h3 
                className="text-2xl font-heading font-bold text-primary mb-8"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                Solicitar Consulta Gratuita
              </motion.h3>

              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                variants={fadeInUp}
                transition={{ delay: 0.6 }}
              >
                <StaggerContainer delay={0.1}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <StaggerItem>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nombre Completo *
                        </label>
                        <motion.input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                          placeholder="Su nombre completo"
                          whileFocus={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        />
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <motion.input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                          placeholder="su@email.com"
                          whileFocus={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        />
                      </div>
                    </StaggerItem>
                  </div>
                </StaggerContainer>

                <StaggerContainer delay={0.1}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <StaggerItem>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Teléfono *
                        </label>
                        <motion.input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                          placeholder="+52 (777) 123 4567"
                          whileFocus={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        />
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Empresa
                        </label>
                        <motion.input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                          placeholder="Nombre de su empresa"
                          whileFocus={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        />
                      </div>
                    </StaggerItem>
                  </div>
                </StaggerContainer>

                <StaggerItem>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Servicio de Interés *
                    </label>
                    <motion.select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      whileFocus={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <option value="">Seleccione un servicio</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </motion.select>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensaje *
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Descríbanos sus necesidades específicas..."
                      whileFocus={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    />
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <motion.button
                    type="submit"
                    className="w-full btn-secondary flex items-center justify-center space-x-2"
                    whileHover={{ 
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      animate={{ 
                        x: [0, 5, 0],
                        transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <Send className="h-5 w-5" />
                    </motion.div>
                    <span>Enviar Solicitud</span>
                  </motion.button>
                </StaggerItem>

                <StaggerItem>
                  <motion.p 
                    className="text-sm text-muted-foreground text-center"
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                  >
                    Al enviar este formulario, acepta que nos comuniquemos con usted 
                    para proporcionarle la información solicitada.
                  </motion.p>
                </StaggerItem>
              </motion.form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};