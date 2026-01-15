import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Automation from '@/components/portfolio/Automation';
import Funnels from '@/components/portfolio/Funnels';
import WebflowProjects from '@/components/portfolio/WebflowProjects';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Automation />
        <Funnels />
        <WebflowProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;