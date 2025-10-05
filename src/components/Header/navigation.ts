import { servicesData as allServices } from '../ServicioDetalles/ServiceDetailData';

export interface NavItem {
  name: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '#contacto' },
];

// Exporting servicesData from here as well to keep all header-related data in one place
export const servicesData = allServices;
