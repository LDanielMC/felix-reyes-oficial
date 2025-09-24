import { Phone, Mail, MapPin, Clock, LucideIcon } from 'lucide-react';

/**
 * TypeScript interfaces and data for Contact components
 */

export interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  details: string[];
  action: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface NotificationState {
  isVisible: boolean;
  type: 'success' | 'error';
  message: string;
}

// Contact information data
export const contactInfo: ContactInfoItem[] = [
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
    details: ['Netzahualcoyotl 13, Cuernavaca Centro, Centro, 62000 Cuernavaca, Mor.'],
    action: 'https://maps.app.goo.gl/3iuCi2EJB6zvPWRK8'
  },
  {
    icon: Clock,
    title: 'Horario',
    details: ['Lunes a Viernes: 9:00 - 17:00'],
    action: '#'
  }
];

// Services list for the form dropdown
export const services: string[] = [
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