import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import AboutSection from '../components/sections/AboutSection';
import Facts from '../components/sections/Facts';
import TeamSection from '../components/sections/TeamSection';

const About: React.FC = () => {
  return (
    <div className="pt-20 lg:pt-32">
      <PageHeader
        title="Company Overview"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Pages' },
          { name: 'Company Overview' },
        ]}
      />
      <AboutSection />
      <Facts />
      <TeamSection />
    </div>
  );
};

export default About;