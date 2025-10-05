import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { navigationItems, servicesData } from './navigation';

interface DesktopNavProps {
  location: ReturnType<typeof useLocation>;
  handleContactClick: (e: React.MouseEvent<HTMLElement>) => void;
  handleHomeClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  navigate: (path: string) => void;
}

export const DesktopNav = ({ location, handleContactClick, handleHomeClick, navigate }: DesktopNavProps) => {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navigationItems.map((item) => {
        switch (item.name) {
          case 'Inicio':
            return (
              <NavLink
                key={item.name}
                to={item.href}
                end // Match exact path
                onClick={handleHomeClick}
                className={({ isActive }) =>
                  `transition-all duration-200 font-medium block hover:-translate-y-0.5 hover:text-primary ${
                    isActive ? 'text-primary' : 'text-foreground'
                  }`
                }
              >
                {item.name}
              </NavLink>
            );
          case 'Contacto':
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={handleContactClick}
                className={`transition-all duration-200 font-medium block hover:-translate-y-0.5 cursor-pointer hover:text-primary ${
                  location.hash === item.href ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.name}
              </a>
            );
          case 'Servicios':
            return (
              <HoverCard key={item.name} openDelay={100} closeDelay={100}>
                <HoverCardTrigger>
                  <div
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(item.href);
                    }}
                    className={`group flex items-center gap-1 transition-all duration-200 font-medium hover:-translate-y-0.5 outline-none hover:text-primary cursor-pointer ${
                      location.pathname.startsWith(item.href) ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4 shrink-0 self-center transition-transform duration-200 group-hover:rotate-180" />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-64 bg-background/95 backdrop-blur-md border-border shadow-lg p-2">
                  <div className="flex flex-col space-y-1">
                    {servicesData.map((service) => (
                      <Link
                        key={service.id}
                        to={`/servicios/${service.id}`}
                        className="cursor-pointer p-2 rounded-md text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>
            );
          default: // For 'Nosotros', 'Blog', etc.
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `transition-all duration-200 font-medium block hover:-translate-y-0.5 hover:text-primary ${
                    isActive ? 'text-primary' : 'text-foreground'
                  }`
                }
              >
                {item.name}
              </NavLink>
            );
        }
      })} 
    </nav>
  );
};
