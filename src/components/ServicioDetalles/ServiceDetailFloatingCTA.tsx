import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

/**
 * ServiceDetailFloatingCTA component
 * Displays a floating WhatsApp CTA button for mobile devices.
 * Positioned at the bottom of the screen on mobile only.
 */
export const ServiceDetailFloatingCTA: React.FC = () => {
  return (
    <motion.div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 sm:hidden"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', damping: 20, stiffness: 300 }}
    >
      <motion.a
        href="https://wa.me/527773141829?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl p-4 shadow-lg shadow-[#128C7E]/30 flex items-center justify-between w-full"
        whileHover={{
          scale: 1.02,
          boxShadow: '0 10px 25px -5px rgba(18, 140, 126, 0.3), 0 10px 10px -5px rgba(18, 140, 126, 0.2)'
        }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center">
          <div className="bg-white/20 p-2 rounded-lg mr-3">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium text-sm">¿Necesitas Ayuda?</p>
            <p className="text-xs opacity-90">Chatea por WhatsApp</p>
          </div>
        </div>
        <span className="bg-white text-[#128C7E] font-semibold px-4 py-2 rounded-lg text-sm flex items-center">
          Abrir chat
          <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </motion.a>
    </motion.div>
  );
};