import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow",
    content:
      "This solution transformed our workflow completely. The team's productivity increased by 40% within the first month.",
    rating: 5,
    avatar: "SC",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "InnovateLab",
    content:
      "Outstanding service and support. The implementation was seamless and the results exceeded our expectations.",
    rating: 5,
    avatar: "MR",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Design Lead",
    company: "CreativeStudio",
    content:
      "The user experience is phenomenal. Our clients love the new interface and engagement has increased significantly.",
    rating: 5,
    avatar: "EW",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(autoSlide);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say
            about working with Warq Technology and the results we've delivered.
          </p>
        </div>

        <div
          className="relative"
          onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const touchEndX = e.changedTouches[0].clientX;
            if (touchStartX - touchEndX > 50) {
              nextTestimonial();
            } else if (touchEndX - touchStartX > 50) {
              prevTestimonial();
            }
          }}
        >
          <div className="bg-testimonial border border-testimonial-border rounded-3xl p-10 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-testimonial via-testimonial to-muted opacity-50"></div>

            <div
              key={currentTestimonial.id}
              className="animate-slide-in relative z-10"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-primary-foreground"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              <div className="flex justify-center mb-8">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-testimonial-accent text-testimonial-accent mx-0.5"
                  />
                ))}
              </div>

              <blockquote className="text-center mb-10">
                <p className="text-xl md:text-2xl text-testimonial-text leading-relaxed font-medium italic">
                  "{currentTestimonial.content}"
                </p>
              </blockquote>

              <div className="flex items-center justify-center space-x-5">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-bold text-lg">
                    {currentTestimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-lg text-testimonial-text">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-testimonial-muted font-medium">
                    {currentTestimonial.role}
                  </div>
                  <div className="text-sm text-testimonial-muted">
                    {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                }
              }}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8 shadow-md"
                  : "bg-muted-foreground/30 w-3 hover:bg-muted-foreground/50 hover:scale-110"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
