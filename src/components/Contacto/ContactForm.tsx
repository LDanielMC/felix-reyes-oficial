import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { fadeInRight, fadeInUp } from '@/hooks/use-animations';
import { StaggerContainer, StaggerItem } from '../AnimatedComponents';
import { FloatingNotification } from '../ui/FloatingNotification';
import emailjs from '@emailjs/browser';
import { FormData, NotificationState, services } from './ContactData';

/**
 * ContactForm component
 * Displays the contact form with all fields and handles form submission.
 */
export const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<NotificationState>({
    isVisible: false,
    type: 'success',
    message: ''
  });

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_0ksv1hb';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_vj5a48l';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '-fZRCUZ32HzbWHGmQ';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);
    setNotification({ isVisible: false, type: 'success', message: '' });

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: 'web.felixreyes@gmail.com',
        reply_to: formData.email,
        // Additional context
        submission_date: new Date().toLocaleString('es-MX', {
          timeZone: 'America/Mexico_City',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Success
      setNotification({
        isVisible: true,
        type: 'success',
        message: '¡Gracias por contactarnos! Hemos recibido su solicitud y nos pondremos en contacto con usted pronto.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending email:', error);
      setNotification({
        isVisible: true,
        type: 'error',
        message: 'Hubo un error al enviar su solicitud. Por favor, intente nuevamente o contáctenos directamente por teléfono.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
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
            ref={formRef}
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
                disabled={isSubmitting}
                className={`w-full btn-secondary flex items-center justify-center space-x-2 transition-all duration-200 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                whileHover={!isSubmitting ? {
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <motion.div
                      animate={{
                        x: [0, 5, 0],
                        transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <Send className="h-5 w-5" />
                    </motion.div>
                    <span>Enviar Solicitud</span>
                  </>
                )}
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

      {/* Floating Notification */}
      <FloatingNotification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={() => setNotification({ ...notification, isVisible: false })}
        autoCloseDelay={3000}
      />
    </>
  );
};