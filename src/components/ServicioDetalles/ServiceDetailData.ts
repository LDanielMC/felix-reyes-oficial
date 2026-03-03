// 👇 IMPORTA LOS ICONOS
import {
  Calculator, FileText, Search, TrendingUp, Shield,
  Users, PieChart, BookOpen, CheckCircle2, ArrowRight
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon; // 👈 AQUÍ VA EL TIPO DEL ICONO (NO JSX)
  description: string;
  details: string[];
  benefits?: string[];
  imageUrl: string;
}

export interface ServiceDetailProps {
  service: Service;
}

export const servicesData: Service[] = [
  {
    id: 'contabilidad-general',
    title: 'Contabilidad General',
    icon: Calculator, // 👈 OJO: SIN <Calculator />
    description: 'Suministramos información precisa y oportuna para la evaluación, el control y la toma de decisiones.',
    details: [
      'Registro, codificación y captura de información contable',
      'Cumplimiento de las Normas de Información Financiera',
      'Cumplimiento de requerimientos contables en tiempo y forma',
      'Correcta determinación de impuestos',
    ],
    imageUrl: '/Servicios/Contabilidad_General.webp',
  },
  {
    id: 'contabilidad-gubernamental',
    title: 'Contabilidad Gubernamental',
    icon: FileText,
    description: 'Generamos información financiera y presupuestal que cumpla con las normativas gubernamentales.',
    details: [
      'Identificación y análisis de operaciones que impactan a instituciones públicas',
      'Procesamiento y reconocimiento de operaciones',
      'Generación de información financiera y presupuestal',
      'Cumplimiento de normativas gubernamentales',
    ],
    imageUrl: '/Servicios/Contabilidad_Gubernamental.webp',
  },
  {
    id: 'asesoria-contable',
    title: 'Asesoría Contable',
    icon: Search,
    description: 'Orientación en registros contables para un excelente control interno y cumplimiento fiscal.',
    details: [
      'Orientación sobre registros contables para tu empresa',
      'Implementación de un excelente sistema de control interno',
      'Cálculo de impuestos',
      'Presentación de declaraciones fiscales considerando la normatividad vigente',
    ],
    imageUrl: '/Servicios/Asesoría_Contable.webp',
  },
  {
    id: 'asesoria-administrativa',
    title: 'Asesoría Administrativa',
    icon: TrendingUp,
    description: 'Suministramos información clara de las operaciones históricas para la planeación y dirección de la empresa.',
    details: [
      'Base para la planeación, organización y control',
      'Información elemental para la toma de decisiones',
    ],
    imageUrl: '/Servicios/Asesoría_Administrativa.webp',
  },
  {
    id: 'asesoria-laboral',
    title: 'Asesoría Laboral',
    icon: Users,
    description: 'Te brindamos la asesoría necesaria para la administración del talento humano.',
    details: [
      'Administración del talento humano',
      'Correcto registro e incorporación a las prestaciones sociales vigentes',
    ],
    imageUrl: '/Servicios/Asesoría_Laboral.webp',
  },
  {
    id: 'asesoria-financiera',
    title: 'Asesoría Financiera',
    icon: PieChart,
    description: 'Analizamos tus necesidades para la correcta gestión de tus finanzas y el establecimiento de metas.',
    details: [
      'Establecimiento de metas financieras específicas',
      'Orientación en decisiones de inversión a corto, mediano y largo plazo',
      'Acceso a financiamiento bancario con las tasas de interés más bajas del mercado',
    ],
    imageUrl: '/Servicios/Asesoria_Financiera.webp',
  },
  {
    id: 'asesoria-patrimonial',
    title: 'Asesoría Patrimonial',
    icon: Shield,
    description: 'Organizamos y protegemos tus bienes, ayudándote a tomar decisiones para hacerlos crecer.',
    details: [
      'Organización y protección de tus bienes',
      'Toma de decisiones informadas para hacer crecer tus bienes',
      'Protección de tus activos',
    ],
    imageUrl: '/Servicios/Asesoría_Patrimonial.webp',
  },
  {
    id: 'asesoria-fiscal',
    title: 'Asesoría Fiscal',
    icon: BookOpen,
    description: 'Determinamos impuestos y establecemos estrategias para el correcto cumplimiento de tus obligaciones fiscales.',
    details: [
      'Determinación de impuestos de acuerdo a la normatividad vigente',
      'Estrategias en congruencia con el marco legal',
      'Cumplimiento de obligaciones ante autoridades recaudadoras',
    ],
    imageUrl: '/Servicios/Asesoría_Fiscal.webp',
  },
  {
    id: 'auditorias',
    title: 'Auditorías',
    icon: CheckCircle2,
    description: 'Vigilamos y evaluamos la ejecución de controles internos para garantizar el cumplimiento normativo.',
    details: [
      'Auditoría Fiscal, Financiera, de Seguridad Social y de Control Interno',
      'Garantía de cumplimiento contable, fiscal y financiero',
      'Certificación para la presentación de dictámenes oficiales ante el SAT y el IMSS',
    ],
    imageUrl: '/Servicios/Auditorías.webp',
  },
  {
    id: 'precios-transferencia',
    title: 'Estudios de Precios de Transferencia',
    icon: ArrowRight,
    description: 'Determinamos los ingresos acumulables y deducciones autorizadas para negocios con partes relacionadas.',
    details: [
      'Para contribuyentes con partes relacionadas nacionales o extranjeras',
      'Asesoría para la declaración maestra',
      'Asesoría para la declaración local',
      'Asesoría para la declaración país por país',
    ],
    imageUrl: '/Servicios/Estudios_Transferencia.webp',
  }
];
