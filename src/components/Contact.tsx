import React from 'react';
import { ContactHeader } from './Contacto/ContactHeader';
import { ContactInfo } from './Contacto/ContactInfo';
import { ContactForm } from './Contacto/ContactForm';
import { ContactMap } from './Contacto/ContactMap';

/**
 * Contact component
 * Main component that displays the contact page with header, contact information, form, and map.
 * Refactored into smaller, reusable subcomponents for better maintainability.
 */
export const Contact = () => {
  return (
    <>
      <section id="contacto" className="section-padding bg-gradient-subtle pt-40">
        <div className="container-custom">
          <ContactHeader />

          <div className="grid lg:grid-cols-3 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <ContactMap />
    </>
  );
};