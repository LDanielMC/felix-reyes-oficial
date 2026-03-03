import React from 'react';
import {
  Calculator, FileText, Search, TrendingUp, Shield,
  Users, PieChart, BookOpen, CheckCircle2, ArrowRight
} from 'lucide-react';

// TypeScript interfaces for services
export interface Service {
  id: string;
  title: string;
  icon: React.ReactElement;
  description: string;
  color: string;
  bgColor: string;
  hoverColor: string;
}

export interface ServiceCardProps {
  service: Service;
  index: number;
  isMobile?: boolean;
}

export interface NavigationButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
  canScroll: boolean;
}

// Services data array
export const services: Service[] = [
  {
    id: 'contabilidad-general',
    title: 'Contabilidad General',
    icon: <Calculator className="w-6 h-6" />,
    description: 'Suministramos información precisa y oportuna para la evaluación, el control y la toma de decisiones.',
    color: 'text-cafeOscuro',  // Pantone 1615
    bgColor: '',
    hoverColor: ''
  },
  {
    id: 'contabilidad-gubernamental',
    title: 'Contabilidad Gubernamental',
    icon: <FileText className="w-6 h-6" />,
    description: 'Generamos información financiera y presupuestal que cumpla con las normativas gubernamentales.',
    color: 'text-naranja',     // Pantone 144
    bgColor: '',
    hoverColor: ''
  },
  {
    id: 'asesoria-contable',
    title: 'Asesoría Contable',
    icon: <Search className="w-6 h-6" />,
    description: 'Orientación en registros contables para un excelente control interno y cumplimiento fiscal.',
    color: 'text-amarillo',    // Pantone 142
    bgColor: '',
    hoverColor: ''
  },
  {
    id: 'asesoria-administrativa',
    title: 'Asesoría Administrativa',
    icon: <TrendingUp className="w-6 h-6" />,
    description: 'Suministramos información clara de las operaciones para la planeación y dirección de la empresa.',
    color: 'text-verde',       // Pantone 341
    bgColor: '',
    hoverColor: ''
  },
  {
    id: 'asesoria-laboral',
    title: 'Asesoría Laboral',
    icon: <Users className="w-6 h-6" />,
    description: 'Te brindamos la asesoría necesaria para la administración del talento humano.',
    color: 'text-rojo',        // Pantone 200
    bgColor: '',
    hoverColor: ''
  },
  {
    id: 'asesoria-financiera',
    title: 'Asesoría Financiera',
    icon: <PieChart className="w-6 h-6" />,
    description: 'Analizamos tus necesidades para la correcta gestión de tus finanzas y el establecimiento de metas.',
    color: 'text-verde',
    bgColor: '',
    hoverColor: ''
  },
  {
    id: 'asesoria-patrimonial',
    title: 'Asesoría Patrimonial',
    icon: <Shield className="w-6 h-6" />,
    description: 'Organizamos y protegemos tus bienes, ayudándote a tomar decisiones para hacerlos crecer.',
    color: 'text-cafeOscuro',
    bgColor: '',
    hoverColor: ''
  },
  {
    id: 'asesoria-fiscal',
    title: 'Asesoría Fiscal',
    icon: <BookOpen className="w-6 h-6" />,
    description: 'Determinamos impuestos y establecemos estrategias para el correcto cumplimiento de obligaciones fiscales.',
    color: 'text-naranja',
    bgColor: '',
    hoverColor: ''
  },
  {
    id: 'auditorias',
    title: 'Auditorías',
    icon: <CheckCircle2 className="w-6 h-6" />,
    description: 'Vigilamos y evaluamos la ejecución de controles internos para garantizar el cumplimiento normativo.',
    color: 'text-rojo',
    bgColor: '',
    hoverColor: ''
  },
  {
    id: 'precios-transferencia',
    title: 'Estudios de Precios de Transferencia',
    icon: <ArrowRight className="w-6 h-6" />,
    description: 'Determinamos los ingresos acumulables y deducciones autorizadas para negocios con partes relacionadas.',
    color: 'text-amarillo',
    bgColor: '',
    hoverColor: ''
  }
];
