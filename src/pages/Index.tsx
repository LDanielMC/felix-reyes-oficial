import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { ServicesSimplified } from '@/components/ServicesSimplified';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <ServicesSimplified />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
