import { ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
};
