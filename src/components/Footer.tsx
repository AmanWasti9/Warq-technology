import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Mobile App Development", href: "#services" },
      { name: "Web Development", href: "#services" },
      { name: "Custom Dashboards", href: "#services" },
      { name: "Consulting", href: "#contact" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Portfolio", href: "#portfolio" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" }
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#portfolio" },
      { name: "Tech Stack", href: "#about" },
      { name: "Support", href: "#contact" }
    ]
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              Warq<span className="text-secondary">Technology</span>
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Transforming ideas into powerful digital solutions. We specialize in creating 
              modern software that drives business growth and delivers exceptional user experiences.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-primary-foreground/80">
                <Mail className="w-4 h-4 mr-3" />
                <span>hello@warqtechnology.com</span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <MapPin className="w-4 h-4 mr-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-primary-foreground/80">
                Subscribe to our newsletter for the latest tech insights and project updates.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-secondary"
              />
              <Button variant="secondary" className="px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-primary-foreground/80 text-sm">
            © {currentYear} Warq Technology. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;