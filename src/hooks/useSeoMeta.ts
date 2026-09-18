import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://felixreyescontadores.com.mx';

const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Félix Reyes Contadores - Servicios Contables y Fiscales Profesionales',
    description: 'Félix Reyes Contadores: más de 50 años de experiencia en contabilidad, auditoría, asesoría fiscal y patrimonial en Cuernavaca, Morelos.',
  },
  '/nosotros': {
    title: 'Nosotros | Félix Reyes Contadores',
    description: 'Conoce al equipo de Félix Reyes Contadores: más de 50 años acompañando a empresas y personas físicas en Cuernavaca, Morelos.',
  },
  '/servicios': {
    title: 'Servicios Contables y Fiscales | Félix Reyes Contadores',
    description: 'Contabilidad, auditoría, asesoría fiscal, financiera, laboral y patrimonial. Servicios profesionales en Cuernavaca, Morelos.',
  },
  '/servicios/asesoria-fiscal': {
    title: 'Asesoría Fiscal | Félix Reyes Contadores',
    description: 'Asesoría fiscal integral para personas físicas y morales. Cumple con el SAT y optimiza tu carga tributaria con expertos en Cuernavaca.',
  },
  '/servicios/contabilidad-general': {
    title: 'Contabilidad General | Félix Reyes Contadores',
    description: 'Servicios de contabilidad general para empresas y personas físicas en Cuernavaca, Morelos. Más de 50 años de experiencia.',
  },
  '/servicios/auditoria': {
    title: 'Auditoría | Félix Reyes Contadores',
    description: 'Servicios de auditoría financiera y fiscal en Cuernavaca, Morelos. Garantiza la transparencia y cumplimiento de tu empresa.',
  },
  '/servicios/asesoria-financiera': {
    title: 'Asesoría Financiera | Félix Reyes Contadores',
    description: 'Asesoría financiera para la toma de decisiones estratégicas. Expertos en Cuernavaca, Morelos.',
  },
  '/servicios/asesoria-laboral': {
    title: 'Asesoría Laboral | Félix Reyes Contadores',
    description: 'Asesoría laboral: nómina, IMSS, INFONAVIT y cumplimiento de obligaciones patronales en Cuernavaca, Morelos.',
  },
  '/servicios/asesoria-administrativa': {
    title: 'Asesoría Administrativa | Félix Reyes Contadores',
    description: 'Asesoría administrativa para optimizar los procesos internos de tu empresa en Cuernavaca, Morelos.',
  },
  '/servicios/asesoria-patrimonial': {
    title: 'Asesoría Patrimonial | Félix Reyes Contadores',
    description: 'Planificación y protección patrimonial para personas físicas y familias. Expertos en Cuernavaca, Morelos.',
  },
  '/servicios/contabilidad-gubernamental': {
    title: 'Contabilidad Gubernamental | Félix Reyes Contadores',
    description: 'Contabilidad gubernamental conforme a las normas CONAC. Servicios especializados en Cuernavaca, Morelos.',
  },
  '/servicios/estudios-transferencia': {
    title: 'Estudios de Precios de Transferencia | Félix Reyes Contadores',
    description: 'Estudios de precios de transferencia para empresas con operaciones intercompañía. Expertos fiscales en Cuernavaca.',
  },
  '/blog': {
    title: 'Blog Fiscal y Contable | Félix Reyes Contadores',
    description: 'Artículos, análisis y videos sobre fiscalidad, contabilidad y reformas fiscales en México. Mantente informado con expertos.',
  },
  '/contacto': {
    title: 'Contacto | Félix Reyes Contadores',
    description: 'Contáctanos para una consulta sobre contabilidad, auditoría o asesoría fiscal en Cuernavaca, Morelos. Más de 50 años de experiencia.',
  },
};

export function useSeoMeta(overrideCanonical?: string) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const canonicalUrl = overrideCanonical ?? `${BASE_URL}${path}`;
    const meta = PAGE_META[path];

    // Actualizar título si hay meta definido para esta ruta
    if (meta) {
      document.title = meta.title;
      const descEl = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (descEl) descEl.setAttribute('content', meta.description);
    }

    // Siempre actualizar el canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const prevCanonical = canonical.href;
    canonical.setAttribute('href', canonicalUrl);

    return () => {
      canonical.setAttribute('href', prevCanonical);
    };
  }, [location.pathname, overrideCanonical]);
}
