import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "FinanceTracker Pro",
      description: "A comprehensive financial management dashboard with real-time analytics, budget tracking, and investment portfolio management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      category: "Dashboard",
      status: "Live"
    },
    {
      title: "EcoCommerce Mobile",
      description: "Sustainable e-commerce mobile app connecting eco-conscious consumers with environmentally friendly products.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Stripe", "Redux"],
      category: "Mobile App",
      status: "In Development"
    },
    {
      title: "MedCare Portal",
      description: "Healthcare management system enabling patients to book appointments, access medical records, and communicate with providers.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
      category: "Web App",
      status: "Live"
    },
    {
      title: "SmartInventory Dashboard",
      description: "AI-powered inventory management system with predictive analytics and automated reordering capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Python", "TensorFlow", "Redis"],
      category: "Dashboard",
      status: "Live"
    },
    {
      title: "TaskFlow Mobile",
      description: "Team collaboration and project management mobile app with real-time synchronization and offline capabilities.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Flutter", "GraphQL", "AWS", "Docker"],
      category: "Mobile App",
      status: "Live"
    },
    {
      title: "DataViz Enterprise",
      description: "Enterprise-grade data visualization platform with custom charting tools and advanced analytics features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "D3.js", "ElasticSearch", "Kubernetes"],
      category: "Dashboard",
      status: "Live"
    }
  ];

  const categories = ["All", "Dashboard", "Mobile App", "Web App"];

  return (
    <section id="portfolio" className="py-section bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our latest projects and see how we've helped businesses transform 
            their ideas into successful digital solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-card border-border hover:shadow-elegant transition-all duration-500 hover:scale-105">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant={project.status === "Live" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-card/80 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="group-hover:bg-secondary group-hover:border-secondary transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to bring your project to life? Let's discuss your vision.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent px-8 py-4">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;