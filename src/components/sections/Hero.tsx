import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
      title: 'Empowering Your Digital Future',
      subtitle: 'Leading IT Solutions & Technology Procurement',
      description: 'We deliver cutting-edge technology solutions, hardware procurement, and managed IT services to drive your business forward.',
    },
    {
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop',
      title: 'Comprehensive IT Services',
      subtitle: '24/7 Support & Managed Solutions',
      description: 'From hardware procurement to cloud solutions, we provide end-to-end IT services tailored to your business needs.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-dark/50" />
          
          <div className="relative h-full flex items-center">
            <div className="container-custom">
              <div className="max-w-3xl">
                <p className="text-primary text-lg font-medium mb-4 animate-fade-in">
                  {slide.subtitle}
                </p>
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-slide-in-down">
                  {slide.title}
                </h1>
                <p className="text-xl text-white/90 mb-8 animate-slide-in-up">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <Button size="lg" to="/services">
                    Explore Our Services
                  </Button>
                  <Button variant="outline" size="lg" to="/contact">
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors duration-300"
      >
        ←
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors duration-300"
      >
        →
      </button>
    </section>
  );
};

export default Hero;