import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'hardware-software',
      title: 'Hardware & Software Procurement',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'We provide end-to-end procurement services for hardware and software, tailored to meet each client\'s operational needs. We start with a detailed consultation to understand your requirements, then source high-quality, compatible solutions from trusted vendors at competitive prices.',
      features: [
        'Enterprise Hardware Supply: Desktops, laptops, servers, storage, routers, firewalls etc.',
        'Software Licensing & Subscriptions: Microsoft 365, Adobe, antivirus, custom solutions.',
        'OEM Partnerships: HPE, Microsoft, Dell, HP, Cisco, Synology, fortinet, Sophos, etc.',
      ],
    },
    {
      id: 'it-support',
      title: 'IT Support',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Our IT support delivers fast, reliable assistance for all your technology needs. Whether on-site or remote, our skilled technicians provide troubleshooting, system fixes, user support, and performance optimization.',
      features: [
        'Remote Support',
        'Hardware Support',
        'Repair or Support renewal',
      ],
    },
    {
      id: 'managed-services',
      title: 'Managed IT Services',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'We offer proactive, fully managed IT services designed to keep your systems running smoothly and securely. We monitor, maintain, and optimize your infrastructure around the clock.',
      features: [
        'Helpdesk',
        'Cloud Solutions: Deployment, migration, and management',
        'Cybersecurity: Firewall configuration, endpoint protection, audits',
        'Remote Monitoring & Maintenance',
        'Data Backup & Disaster Recovery Solutions',
      ],
    },
    {
      id: 'logistics',
      title: 'IT Logistics & Deployment',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'We specialize in the secure and efficient handling of IT equipment from procurement to deployment. We manage inventory, coordinate delivery, and ensure safe transport and installation of your technology assets.',
      features: [
        'Delivery & Installation Services',
        'IT Asset Inventory Management',
        'Asset Relocation & Disposal (if applicable)',
        'National Coverage for delivery and support',
      ],
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Awesome Partnership Services For Business
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Service Navigation */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`w-full p-4 text-left border rounded-lg transition-all duration-300 ${
                    activeService === index
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-tertiary border-gray-200 hover:border-primary hover:text-primary'
                  }`}
                >
                  <h5 className="font-semibold flex items-center">
                    <span className="mr-3">📊</span>
                    {service.title}
                  </h5>
                </button>
              ))}
            </div>
          </div>

          {/* Service Content */}
          <div className="lg:col-span-3">
            <Card className="p-0 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-80 md:h-auto">
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {services[activeService].title}
                  </h3>
                  <p className="text-tertiary mb-6">
                    {services[activeService].description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {services[activeService].features.map((feature, index) => (
                      <p key={index} className="flex items-start text-sm">
                        <span className="text-primary mr-3 mt-1">✓</span>
                        {feature}
                      </p>
                    ))}
                  </div>
                  <Button>Read More</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;