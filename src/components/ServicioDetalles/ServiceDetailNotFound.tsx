import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/**
 * ServiceDetailNotFound component
 * Displays a not found page when a service doesn't exist.
 * Provides navigation back to services list.
 */
export const ServiceDetailNotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 pt-40 pb-16 px-4">
      <div className="text-center p-8 max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Servicio no encontrado</h1>
        <p className="text-muted-foreground text-lg mb-8">El servicio que estás buscando no existe o ha sido movido.</p>
        <Link
          to="/servicios"
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver a servicios
        </Link>
      </div>
    </div>
  );
};