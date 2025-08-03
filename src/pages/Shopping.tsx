import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import Card from '../ui/Card';

const Shopping: React.FC = () => {
  const categories = [
    {
      name: 'Hardware',
      items: [
        { name: 'Macbooks', image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop' },
        { name: 'Smartwatch', image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop' },
        { name: 'Routers', image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop' },
        { name: 'Laptops', image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop' },
        { name: 'Modem', image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop' },
        { name: 'Servers', image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop' },
      ],
    },
    {
      name: 'Software',
      items: [
        { name: 'Microsoft Office', image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop' },
        { name: 'Adobe Creative Suite', image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop' },
        { name: 'Antivirus Solutions', image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop' },
        { name: 'Cloud Services', image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop' },
        { name: 'Database Software', image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop' },
        { name: 'Development Tools', image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop' },
      ],
    },
  ];

  return (
    <div className="pt-20 lg:pt-32">
      <PageHeader
        title="Shopping"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Pages' },
          { name: 'Shopping' },
        ]}
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Shopping
            </span>
          </div>

          <h1 className="text-4xl font-bold text-center mb-12">Categories</h1>

          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-semibold text-dark mb-6">{category.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    to="/items"
                    className="group"
                  >
                    <Card className="p-4 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <span className="font-medium text-dark group-hover:text-primary transition-colors duration-300">
                          {item.name}
                        </span>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shopping;