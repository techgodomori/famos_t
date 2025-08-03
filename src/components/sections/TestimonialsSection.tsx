import React, { useState } from 'react';
import Card from '../ui/Card';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'John Smith',
      position: 'CEO, Tech Corp',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      content: 'Famos IT Solutions transformed our entire IT infrastructure. Their expertise in hardware procurement and managed services has significantly improved our operational efficiency.',
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO, Innovation Labs',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      content: 'The team at Famos IT provides exceptional support. Their 24/7 availability and quick response times have been crucial for our business continuity.',
    },
    {
      name: 'Michael Brown',
      position: 'IT Director, Global Systems',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      content: 'Outstanding service quality and competitive pricing. Famos IT has been our trusted technology partner for over two years.',
    },
    {
      name: 'Emily Davis',
      position: 'Operations Manager, StartupXYZ',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      content: 'Their logistics and deployment services are top-notch. Every project is delivered on time and within budget.',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonial
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our Clients Say!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="p-8 mb-8 relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-primary">💬</span>
                </div>
                <p className="text-tertiary italic mt-4">
                  "{testimonial.content}"
                </p>
              </Card>
              
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold mb-1">{testimonial.name}</h4>
              <p className="text-tertiary">{testimonial.position}</p>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;