import React, { memo } from 'react';
import { ServiciosHeader } from './Servicios/ServiciosHeader';
import { ServiciosList } from './Servicios/ServiciosList';

/**
 * Services component
 * Main component that renders the services page with hero section and services list.
 * Refactored into smaller, reusable subcomponents for better maintainability.
 */
export const Services = memo(() => {
  return (
    <>
      <ServiciosHeader />
      <ServiciosList />

      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
    </>
  );
});