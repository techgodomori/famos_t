import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Items: React.FC = () => {
  const items = [
    {
      name: 'MacBook Pro 16"',
      description: 'High-performance laptop with M2 Pro chip, perfect for professional work and creative tasks.',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Laptops',
    },
    {
      name: 'Dell OptiPlex Desktop',
      description: 'Reliable business desktop computer with enterprise-grade security and performance.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Desktops',
    },
    {
      name: 'Cisco Router',
      description: 'Enterprise-grade networking equipment for secure and reliable connectivity.',
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Networking',
    },
    {
      name: 'HP Server Rack',
      description: 'Scalable server solution for growing businesses with high availability requirements.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      category: 'Servers',
    },
  ];

  return (
    <div className="pt-20 lg:pt-32">
      <PageHeader
        title="IT Products"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Shopping', path: '/shopping' },
          { name: 'Products' },
        ]}
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((item, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-tertiary text-sm mb-6 line-clamp-3">
                    {item.description}
                  </p>
                  <Button 
                    href="https://wa.link/5qp550"
                    className="w-full"
                  >
                    Contact Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Items;