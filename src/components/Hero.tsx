import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Smartphone, Monitor } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Technology Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/80 text-secondary-foreground text-sm font-medium mb-8">
            <Code className="w-4 h-4 mr-2" />
            Professional Software Development Services
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Building Tomorrow's
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-foreground to-secondary">
              Digital Solutions
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Warq Technology transforms your ideas into powerful, scalable software solutions. 
            From mobile apps to custom dashboards, we deliver excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-secondary text-lg px-8 py-4 rounded-lg shadow-elegant"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 rounded-lg"
            >
              View Our Work
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-primary-foreground/90">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-3">
                <Smartphone className="w-8 h-8" />
              </div>
              <p className="text-sm font-medium">Mobile Development</p>
            </div>
            <div className="flex flex-col items-center text-primary-foreground/90">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-3">
                <Monitor className="w-8 h-8" />
              </div>
              <p className="text-sm font-medium">Web Development</p>
            </div>
            <div className="flex flex-col items-center text-primary-foreground/90">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-3">
                <Code className="w-8 h-8" />
              </div>
              <p className="text-sm font-medium">Custom Solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;