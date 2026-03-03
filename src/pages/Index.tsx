import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { ClientPortfolio } from '@/components/ClientPortfolio';
import { ServicesOverview } from '@/components/ServicesOverview';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton'; // <--- Importar

const Index = () => {
  return (
    <div className="min-h-screen relative"> {/* 'relative' ayuda al posicionamiento */}
      <Header />
      <main>
        <Hero />
        <About />
        <ServicesOverview />
        <ClientPortfolio />        
        <Contact />
      </main>
      <Footer />
      
      {/* Botón flotante aquí */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;