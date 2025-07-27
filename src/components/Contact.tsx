import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "hello@warqtechnology.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "San Francisco, CA",
      description: "Come say hello at our office"
    }
  ];

  return (
    <section id="contact" className="py-section bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Start Building Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Get in touch with us and
            let's discuss how we can help bring your project to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Get in Touch
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-accent mt-1">{info.icon}</div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    <p className="text-foreground font-medium">
                      {info.content}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-6 bg-secondary/50 rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">
                Why Choose Warq Technology?
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                  Free project consultation
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                  Transparent pricing
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                  Agile development process
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                  24/7 post-launch support
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-card border-border shadow-elegant">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2 text-left"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background border-border focus:border-accent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2 text-left"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background border-border focus:border-accent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground mb-2 text-left"
                    >
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-background border-border focus:border-accent"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2 text-left"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-background border-border focus:border-accent"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2 text-left"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-accent resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-accent px-8 py-4"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;