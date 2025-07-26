import { Card } from '@/components/ui/card';
import { Users, Target, Zap, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision",
      description: "Every line of code is crafted with meticulous attention to detail and purpose."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We leverage cutting-edge technologies to build future-ready solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Your vision combined with our expertise creates extraordinary results."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reliability",
      description: "Robust, secure, and scalable solutions you can depend on."
    }
  ];

  return (
    <section id="about" className="py-section bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Warq Technology is a forward-thinking software development company dedicated to 
              transforming businesses through innovative digital solutions. Founded by passionate 
              developers and designers, we believe in the power of technology to solve complex 
              problems and create meaningful experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team combines years of industry experience with a fresh perspective on modern 
              development practices. We don't just build software – we craft digital experiences 
              that drive growth and success for our clients.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 bg-card border-border">
                <div className="text-accent mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;