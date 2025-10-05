import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, ChevronDown } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { navigationItems, servicesData } from './navigation';

// Animation variants for the menu items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15, // Delay after panel opens
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 15,
      mass: 0.5,
    },
  },
};


interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  isScrolled: boolean;
  location: ReturnType<typeof useLocation>;
  handleContactClick: (e: React.MouseEvent<HTMLElement>) => void;
  handleHomeClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const MobileNav = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  isScrolled, 
  location, 
  handleContactClick, 
  handleHomeClick 
}: MobileNavProps) => {
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 transition-transform hover:scale-110 active:scale-90 duration-150"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`absolute top-full left-0 right-0 lg:hidden border-t border-border transition-all duration-300 ${
              isScrolled ? 'bg-background/95' : 'bg-background/90'
            }`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="container-custom py-3 sm:py-4">
              <motion.nav 
                className="flex flex-col space-y-3 sm:space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {navigationItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    {(() => {
                       switch (item.name) {
                        case 'Inicio':
                          return (
                            <NavLink
                              to={item.href}
                              end // Match exact path
                              onClick={handleHomeClick}
                              className={({ isActive }) =>
                                `transition-colors px-2 sm:px-3 py-2 text-sm font-medium block rounded-lg hover:bg-primary/5 hover:text-primary ${
                                  isActive ? 'text-primary bg-primary/10' : 'text-foreground/90'
                                }`
                              }
                            >
                              {item.name}
                            </NavLink>
                          );
                        case 'Contacto':
                          return (
                            <a
                              href={item.href}
                              onClick={handleContactClick}
                              className={`transition-colors px-2 sm:px-3 py-2 text-sm font-medium block rounded-lg hover:bg-primary/5 cursor-pointer hover:text-primary ${
                                location.hash === item.href ? 'text-primary bg-primary/10' : 'text-foreground/90'
                              }`}
                            >
                              {item.name}
                            </a>
                          );
                      case 'Servicios':
                        return (
                          <Collapsible key={item.name} className="space-y-1">
                            <div className="flex items-center justify-between rounded-lg hover:bg-primary/5">
                              <NavLink
                                to={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                  `flex-grow transition-colors px-2 sm:px-3 py-2 text-sm font-medium block rounded-l-lg hover:text-primary ${
                                    isActive && location.pathname === item.href ? 'text-primary' : 'text-foreground/90'
                                  }`
                                }
                              >
                                {item.name}
                              </NavLink>
                              <CollapsibleTrigger
                                className="p-2 mr-1 rounded-r-lg"
                                aria-label="Abrir submenú de servicios"
                              >
                                <ChevronDown className="h-4 w-4 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
                              </CollapsibleTrigger>
                            </div>
                            <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                              <div className="pl-6 pr-2 pt-2 space-y-1">
                                {servicesData.map((service) => (
                                  <NavLink
                                    key={service.id}
                                    to={`/servicios/${service.id}`}
                                    className={({isActive}) => `text-foreground/70 hover:text-primary transition-colors px-2 sm:px-3 py-2 text-sm font-medium block rounded-lg hover:bg-primary/10 ${
                                      isActive ? 'text-primary bg-primary/10' : ''
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {service.title}
                                  </NavLink>
                                ))}
                                <NavLink
                                  to="/servicios"
                                  end
                                  className={({isActive}) => `text-foreground/70 hover:text-primary transition-colors px-2 sm:px-3 py-2 text-sm font-medium block rounded-lg hover:bg-primary/10 ${
                                    isActive ? 'text-primary bg-primary/10' : ''
                                  }`}
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  Ver todos los servicios
                                </NavLink>
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        );
                        default: // For 'Nosotros', 'Blog', etc.
                          return (
                            <NavLink
                              to={item.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={({ isActive }) =>
                                `transition-colors px-2 sm:px-3 py-2 text-sm font-medium block rounded-lg hover:bg-primary/5 hover:text-primary ${
                                  isActive ? 'text-primary bg-primary/10' : 'text-foreground/90'
                                }`
                              }
                            >
                              {item.name}
                            </NavLink>
                          );
                      }
                    })()}
                  </motion.div>
                ))}
                <motion.div variants={itemVariants}>
                  <button onClick={handleContactClick} className="btn-secondary w-full mt-3 sm:mt-4 text-sm transition-transform hover:scale-105 active:scale-95 duration-200">
                    Solicitar consulta
                  </button>
                </motion.div>
                <motion.div variants={itemVariants} className="mt-6 flex justify-center space-x-6">
                  <motion.a
                      href="https://www.facebook.com/felixreyescontadores/?locale=es_LA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors duration-200"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                  >
                      <Facebook className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                      href="https://www.instagram.com/felixreyescontadores/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors duration-200"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                  >
                      <Instagram className="h-6 w-6" />
                  </motion.a>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}