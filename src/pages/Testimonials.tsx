import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const Testimonials: React.FC = () => {
  return (
    <div className="pt-20 lg:pt-32">
      <PageHeader
        title="Testimonial"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Pages' },
          { name: 'Testimonial' },
        ]}
      />
      <TestimonialsSection />
    </div>
  );
};

export default Testimonials;