import React, { useState } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'About us' },
    { id: 'mission', label: 'Mission' },
    { id: 'vision', label: 'Vision' },
    { id: 'core', label: 'Core Values' },
  ];

  const tabContent = {
    story: (
      <div className="space-y-4">
        <p>
          Famos IT Solutions Limited is a progressive and innovation-driven technology and logistics company, officially established on April 1st, 2025. We specialize in the procurement of top-tier hardware and software infrastructure, managed IT services, and end-to-end logistics support tailored to meet the needs of businesses operating in a digitally evolving world.
        </p>
        <p>
          At Famos IT Solutions, we understand that technology is the backbone of every successful business. That's why we offer a full spectrum of IT procurement services, sourcing enterprise-grade computing equipment, networking devices, cybersecurity solutions, and licensed software from trusted global vendors.
        </p>
        <p>
          We deliver comprehensive logistics services to ensure your technology assets are stored, managed, and deployed efficiently. Backed by certified professionals and industry expertise, we are dedicated to providing reliable, innovative, and cost-effective solutions that drive business growth and lasting partnerships.
        </p>
      </div>
    ),
    mission: (
      <div className="space-y-4">
        <p>
          Our mission is to revolutionize the digital experience of businesses by delivering integrated IT solutions that are reliable, scalable, and future-ready. We are dedicated to helping organizations harness the power of technology to optimize operations, improve productivity, and enhance competitiveness in a rapidly changing world.
        </p>
        <p>
          Through our commitment to service excellence, continuous innovation, and a customer-centric approach, we aim to be a trusted technology partner to every business we serve.
        </p>
      </div>
    ),
    vision: (
      <div className="space-y-4">
        <p>
          Our vision is to become a leading force in Africa's digital transformation, recognized for our excellence in IT procurement, managed services, and logistics delivery. We aspire to empower enterprises of all sizes by making technology accessible, efficient, and strategically aligned with their growth ambitions.
        </p>
        <p>
          As we grow, we aim to expand our reach beyond regional borders and redefine the standards of service delivery in the global IT and logistics ecosystem.
        </p>
      </div>
    ),
    core: (
      <div className="space-y-4">
        <p>
          At Famos IT Solutions Limited, our core values define who we are, how we operate, and what we stand for. These guiding principles shape our culture, influence our decisions, and drive our commitment to excellence in IT and logistics services.
        </p>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-dark">1. Integrity</h4>
            <p className="text-sm">We uphold the highest standards of honesty, ethics, and accountability. Trust is the foundation of our relationships with clients, partners, and our team.</p>
          </div>
          <div>
            <h4 className="font-semibold text-dark">2. Excellence & Professionalism</h4>
            <p className="text-sm">We strive for superior performance in every service we deliver. Our commitment to quality and continuous improvement ensures that we exceed expectations every time.</p>
          </div>
          <div>
            <h4 className="font-semibold text-dark">3. Innovation</h4>
            <p className="text-sm">We embrace change and champion forward-thinking. By leveraging emerging technologies and creative solutions, we stay ahead in delivering value-driven services.</p>
          </div>
        </div>
      </div>
    ),
  };

  const features = [
    {
      icon: '❌',
      title: 'No Hidden Cost',
      description: 'From the start, you\'ll know exactly what to expect with clear service agreements, open communication, and honest pricing.',
    },
    {
      icon: '👥',
      title: 'Dedicated Team',
      description: 'This team works closely with the client to understand their systems, goals, and challenges, providing tailored solutions and consistent support.',
    },
    {
      icon: '📞',
      title: '24/7 Available',
      description: 'This around-the-clock service minimizes downtime, quickly resolves critical issues, and keeps your systems running smoothly at all times.',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Company Overview
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              We Help Our Clients To Grow Their Business
            </h2>
            <p className="text-lg text-tertiary mb-8">
              We empower businesses and individuals with cutting-edge technology solutions, driving innovation, efficiency, and growth. With expertise in IT procurement, managed services, and logistics, we deliver tailored solutions to meet the unique needs of our clients.
            </p>
            
            <Card className="p-6">
              <div className="flex border-b border-gray-200 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 font-medium transition-colors duration-300 ${
                      activeTab === tab.id
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-tertiary hover:text-primary'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="text-tertiary">
                {tabContent[activeTab as keyof typeof tabContent]}
              </div>
            </Card>
          </div>
        </div>

        {/* Features */}
        <Card className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-tertiary">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;