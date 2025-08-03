import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import FeaturesSection from '../components/sections/FeaturesSection';

const Features: React.FC = () => {
  return (
    <div className="pt-20 lg:pt-32">
      <PageHeader
        title="Features"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Pages' },
          { name: 'Features' },
        ]}
      />
      <FeaturesSection />
    </div>
  );
};

export default Features;