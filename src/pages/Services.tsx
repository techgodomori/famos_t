import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import ServicesSection from '../components/sections/ServicesSection';
import CallToAction from '../components/sections/CallToAction';

const Services: React.FC = () => {
  return (
    <div className="pt-20 lg:pt-32">
      <PageHeader
        title="Services"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Pages' },
          { name: 'Services' },
        ]}
      />
      <ServicesSection />
      <CallToAction />
    </div>
  );
};

export default Services;