import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import TeamSection from '../components/sections/TeamSection';

const Team: React.FC = () => {
  return (
    <div className="pt-20 lg:pt-32">
      <PageHeader
        title="Team Member"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Pages' },
          { name: 'Team Member' },
        ]}
      />
      <TeamSection />
    </div>
  );
};

export default Team;