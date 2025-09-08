import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

interface FloatingNotificationProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
  autoCloseDelay?: number;
}

export const FloatingNotification = ({ 
  message, 
  type, 
  isVisible, 
  onClose, 
  autoCloseDelay = 3000 
}: FloatingNotificationProps) => {
  useEffect(() => {
    if (isVisible && autoCloseDelay > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, autoCloseDelay, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 25,
            duration: 0.4
          }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4"
        >
          <motion.div
            className={`p-4 rounded-lg shadow-lg border flex items-start space-x-3 ${
              type === 'success' 
                ? 'bg-green-50 border-green-200 text-green-800' 
                : 'bg-red-50 border-red-200 text-red-800'
            }`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 17 }}
            >
              {type === 'success' ? (
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              )}
            </motion.div>
            
            <p className="text-sm leading-relaxed flex-1 pr-2">{message}</p>
            
            <motion.button
              onClick={onClose}
              className={`flex-shrink-0 p-1 rounded-full hover:bg-opacity-20 transition-colors duration-200 ${
                type === 'success' 
                  ? 'hover:bg-green-600 text-green-600' 
                  : 'hover:bg-red-600 text-red-600'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Cerrar notificación"
            >
              <X className="h-4 w-4" />
            </motion.button>
          </motion.div>
          
          {/* Progress bar for auto-close */}
          {autoCloseDelay > 0 && (
            <motion.div
              className={`h-1 rounded-b-lg ${
                type === 'success' ? 'bg-green-200' : 'bg-red-200'
              }`}
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: autoCloseDelay / 1000, ease: "linear" }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
