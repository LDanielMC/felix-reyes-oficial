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
    color: 'text-success',
    bgColor: 'bg-success/10',
    hoverColor: 'hover:bg-success/20'
  },
  {
    id: 'contabilidad-gubernamental',
    title: 'Contabilidad Gubernamental',
    icon: <FileText className="w-6 h-6" />,
    description: 'Generamos información financiera y presupuestal que cumpla con las normativas gubernamentales.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    hoverColor: 'hover:bg-primary/20'
  },
  {
    id: 'asesoria-contable',
    title: 'Asesoría Contable',
    icon: <Search className="w-6 h-6" />,
    description: 'Orientación en registros contables para un excelente control interno y cumplimiento fiscal.',
    color: 'text-warning',
    bgColor: 'bg-warning/10',
    hoverColor: 'hover:bg-warning/20'
  },
  {
    id: 'asesoria-administrativa',
    title: 'Asesoría Administrativa',
    icon: <TrendingUp className="w-6 h-6" />,
    description: 'Suministramos información clara de las operaciones para la planeación y dirección de la empresa.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    hoverColor: 'hover:bg-secondary/20'
  },
  {
    id: 'asesoria-laboral',
    title: 'Asesoría Laboral',
    icon: <Users className="w-6 h-6" />,
    description: 'Te brindamos la asesoría necesaria para la administración del talento humano.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    hoverColor: 'hover:bg-primary/20'
  },
  {
    id: 'asesoria-financiera',
    title: 'Asesoría Financiera',
    icon: <PieChart className="w-6 h-6" />,
    description: 'Analizamos tus necesidades para la correcta gestión de tus finanzas y el establecimiento de metas.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    hoverColor: 'hover:bg-secondary/20'
  },
  {
    id: 'asesoria-patrimonial',
    title: 'Asesoría Patrimonial',
    icon: <Shield className="w-6 h-6" />,
    description: 'Organizamos y protegemos tus bienes, ayudándote a tomar decisiones para hacerlos crecer.',
    color: 'text-warning',
    bgColor: 'bg-warning/10',
    hoverColor: 'hover:bg-warning/20'
  },
  {
    id: 'asesoria-fiscal',
    title: 'Asesoría Fiscal',
    icon: <BookOpen className="w-6 h-6" />,
    description: 'Determinamos impuestos y establecemos estrategias para el correcto cumplimiento de obligaciones fiscales.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    hoverColor: 'hover:bg-accent/20'
  },
  {
    id: 'auditorias',
    title: 'Auditorías',
    icon: <CheckCircle2 className="w-6 h-6" />,
    description: 'Vigilamos y evaluamos la ejecución de controles internos para garantizar el cumplimiento normativo.',
    color: 'text-success',
    bgColor: 'bg-success/10',
    hoverColor: 'hover:bg-success/20'
  },
  {
    id: 'precios-transferencia',
    title: 'Estudios de Precios de Transferencia',
    icon: <ArrowRight className="w-6 h-6" />,
    description: 'Determinamos los ingresos acumulables y deducciones autorizadas para negocios con partes relacionadas.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    hoverColor: 'hover:bg-warning/20'
  }
];