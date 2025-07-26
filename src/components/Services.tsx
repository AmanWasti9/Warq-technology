import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Code, Smartphone, BarChart } from 'lucide-react';
import mobileDevImage from '@/assets/mobile-dev.jpg';
import webDevImage from '@/assets/web-dev.jpg';
import dashboardDevImage from '@/assets/dashboard-dev.jpg';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const serviceCategories = [
    { name: 'All Services', icon: <Code className="w-5 h-5" /> },
    { name: 'Mobile', icon: <Smartphone className="w-5 h-5" /> },
    { name: 'Web', icon: <Code className="w-5 h-5" /> },
    { name: 'Dashboard', icon: <BarChart className="w-5 h-5" /> },
  ];

  const services = [
    {
      image: mobileDevImage,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.",
      features: ["iOS & Android Development", "Cross-Platform Solutions", "UI/UX Design", "App Store Optimization"],
      gradient: "from-primary to-accent",
      category: "Mobile"
    },
    {
      image: webDevImage,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies and best practices.",
      features: ["Responsive Design", "Performance Optimization", "SEO-Friendly", "Modern Frameworks"],
      gradient: "from-accent to-secondary",
      category: "Web"
    },
    {
      image: dashboardDevImage,
      title: "Custom Dashboard Development",
      description: "Powerful, data-driven dashboards that provide actionable insights and streamline business operations.",
      features: ["Real-time Analytics", "Custom Visualizations", "User Management", "API Integration"],
      gradient: "from-secondary to-primary",
      category: "Dashboard"
    }
  ];

  const filteredServices = activeTab === 0 
    ? services 
    : services.filter(service => service.category === serviceCategories[activeTab].name);

  return (
    <section id="services" className="py-section bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header with animated gradient text */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient">
            Services We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in creating cutting-edge software solutions that drive business growth 
            and deliver exceptional user experiences across all platforms.
          </p>
        </div>

        {/* Service Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {serviceCategories.map((category, index) => (
            <Button 
              key={index}
              onClick={() => setActiveTab(index)}
              variant={activeTab === index ? "default" : "outline"}
              className={`flex items-center gap-2 transition-all duration-300 ${activeTab === index ? 'shadow-elegant scale-105' : 'hover:scale-105'}`}
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>

        {/* Services Grid with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-card border-border hover:shadow-elegant transition-all duration-500 hover:scale-105 flex flex-col h-full"
            >
              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 rounded-full bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Image with overlay */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-smooth"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Floating category badge */}
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {service.category}
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List with improved styling */}
                <div className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start group/feature">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0 group-hover/feature:text-primary transition-colors duration-300" />
                      <span className="text-sm text-muted-foreground group-hover/feature:text-foreground transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button with improved hover effect */}
                <Button 
                  variant="outline" 
                  className="w-full mt-auto group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300"
                >
                  <span className="mr-auto">Explore Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA with improved styling */}
        <div className="mt-20 bg-card border border-border rounded-xl p-8 shadow-subtle text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't see what you're looking for? We offer tailored software development solutions to meet your specific business requirements.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent hover:scale-105 transition-all duration-300 px-8 py-6">
            Discuss Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;