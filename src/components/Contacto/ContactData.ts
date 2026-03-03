import { Phone, Mail, MapPin, Clock, LucideIcon } from 'lucide-react';

/**
 * TypeScript interfaces and data for Contact components
 */

// 1. Creamos una nueva interfaz para los detalles individuales
export interface ContactDetailItem {
  text: string;
  href?: string; // El enlace es opcional
}

export interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  // 2. Actualizamos details para usar la nueva estructura
  details: ContactDetailItem[]; 
  action?: string;
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
    details: [
      // Enlaces tel: para llamadas normales
      { text: '+52 (777) 312 15 47', href: 'tel:+527773121547' },
      { text: '+52 (777) 312 40 48', href: 'tel:+527773124048' },
      // 3. AQUÍ ESTÁ EL CAMBIO PARA WHATSAPP
      { text: 'WA (777) 314 18 29', href: 'https://wa.me/527773141829' }
    ],
    // action: 'tel:...' // Puedes quitar esto si ya tienes enlaces individuales arriba
  },
  {
    icon: Mail,
    title: 'Email',
    details: [
      { text: 'info@felixreyescontadores.com', href: 'mailto:info@felixreyescontadores.com' }
    ],
    action: 'mailto:contacto@felixreyes.com'
  },
  {
    icon: MapPin,
    title: 'Dirección',
    details: [
      { text: 'Netzahualcoyotl 13, Cuernavaca Centro, Centro, 62000 Cuernavaca, Mor.', href: 'https://maps.google.com/?q=Netzahualcoyotl+13,+Cuernavaca' }
    ],
    action: 'https://maps.app.goo.gl/3iuCi2EJB6zvPWRK8'
  },
  {
    icon: Clock,
    title: 'Horario',
    details: [
      { text: 'Lunes a Viernes: 9:00 - 18:00' } // Sin href porque es solo texto
    ]
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