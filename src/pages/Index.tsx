import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { ClientPortfolio } from '@/components/ClientPortfolio';
import { ServicesOverview } from '@/components/ServicesOverview';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <ClientPortfolio />
        <ServicesOverview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
