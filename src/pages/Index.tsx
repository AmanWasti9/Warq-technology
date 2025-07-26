import Header from '@/components/Header';
// import Hero from '@/components/Hero';
// import BusinessCard from '@/components/BusinessCard';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import DottedFrame from '@/components/DottedFrame';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="roots">
        <DottedFrame />
        {/* <BusinessCard /> */}
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;