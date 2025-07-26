import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BusinessCard = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-white to-accent/10 py-section overflow-hidden min-h-[80vh] flex items-center">
      {/* Animated Dotted texture pattern - top right */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none animate-pulse-slow">
        <div className="relative w-full h-full">
          {Array.from({ length: 100 }).map((_, i) => {
            const row = Math.floor(i / 10);
            const col = i % 10;
            return (
              <div
                key={`dot-tr-${i}`}
                className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg"
                style={{
                  top: `${row * 10}%`,
                  right: `${col * 10}%`,
                  opacity: 0.3 + ((row + col) % 3) * 0.15,
                  filter: 'blur(0.5px)'
                }}
              />
            );
          })}
        </div>
      </div>
      {/* Animated Dotted texture pattern - bottom left */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20 pointer-events-none animate-pulse-slow">
        <div className="relative w-full h-full">
          {Array.from({ length: 100 }).map((_, i) => {
            const row = Math.floor(i / 10);
            const col = i % 10;
            return (
              <div
                key={`dot-bl-${i}`}
                className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-accent to-primary shadow-lg"
                style={{
                  bottom: `${row * 10}%`,
                  left: `${col * 10}%`,
                  opacity: 0.3 + ((row + col) % 3) * 0.15,
                  filter: 'blur(0.5px)'
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground leading-tight drop-shadow-lg">
              Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient">Digital Identity</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl font-medium">
              We craft standout business cards and digital solutions that make your brand unforgettable. Experience innovation, precision, and style—right from your first impression.
            </p>
            <Button 
              size="lg" 
              className="mt-6 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-accent hover:to-primary text-xl px-10 py-5 rounded-xl shadow-elegant transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
          {/* Right side - Business Card */}
          <div className="flex justify-center z-10">
            <Card className="relative w-full max-w-md aspect-[1.618/1] transform rotate-3 shadow-elegant hover:rotate-0 transition-all duration-300 bg-black/90 border-4 border-accent/40 backdrop-blur-xl">
              <span className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/40 via-accent/30 to-secondary/30 blur-lg opacity-60 animate-glow pointer-events-none"></span>
              <CardContent className="relative p-8 h-full flex flex-col justify-between items-center z-10">
                <div className="w-full flex flex-col items-center">
                  <img src="/warq-logo.svg" alt="WARQ Technologies Logo" className="w-36 h-36 mb-4 drop-shadow-xl" />
                </div>
                <div className="space-y-2 text-white text-center">
                  <div className="text-lg font-semibold tracking-wide">Building Tomorrow's Digital Solutions</div>
                  <div className="text-sm text-white/80">contact@warqtech.com</div>
                  <div className="text-sm text-white/80">+1 (555) 123-4567</div>
                  <div className="text-sm text-white/80">www.warqtech.com</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCard;