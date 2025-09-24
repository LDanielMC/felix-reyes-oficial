import React, { memo } from 'react';
import { NosotrosHeader } from '../components/Nosotros/NosotrosHeader';
import { NosotrosTrayectoria } from '../components/Nosotros/NosotrosTrayectoria';
import { NosotrosMisionVision } from '../components/Nosotros/NosotrosMisionVision';
import { NosotrosValores } from '../components/Nosotros/NosotrosValores';

/**
 * Nosotros component
 * Main component that displays the About Us page with hero, trajectory, mission/vision, and values sections.
 * Refactored into smaller, reusable subcomponents for better maintainability.
 */
const Nosotros = memo(() => {
  return (
    <div className="bg-background">
      <NosotrosHeader />
      <NosotrosTrayectoria />
      <NosotrosMisionVision />
      <NosotrosValores />
    </div>
  );
});

export default Nosotros;