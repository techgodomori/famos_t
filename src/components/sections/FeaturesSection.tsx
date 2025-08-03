import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '✅',
      title: 'Fast Executions',
      description: 'Quick and efficient delivery of all IT solutions and services with minimal downtime.',
    },
    {
      icon: '🎯',
      title: 'Guide & Support',
      description: 'Comprehensive guidance and 24/7 support to ensure your technology works seamlessly.',
    },
    {
      icon: '🔒',
      title: 'Financial Secure',
      description: 'Transparent pricing with no hidden costs and secure payment processing.',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Why Choosing Us!
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Few Reasons Why People Choosing Us!
            </h2>
            <p className="text-lg text-tertiary mb-8">
              We combine technical expertise with exceptional customer service to deliver IT solutions that drive real business results. Our commitment to innovation and reliability sets us apart.
            </p>
            <Button size="lg">Explore More</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`p-6 group hover:bg-primary hover:text-white transition-all duration-300 ${
                  index === 2 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 group-hover:text-white">
                  {feature.title}
                </h4>
                <p className="text-tertiary group-hover:text-white/90 mb-4">
                  {feature.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center font-medium text-primary group-hover:text-white hover:underline"
                >
                  Read More <span className="ml-1">→</span>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;