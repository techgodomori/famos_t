import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import ProjectsSection from '../components/sections/ProjectsSection';

const Projects: React.FC = () => {
  return (
    <div className="pt-20 lg:pt-32">
      <PageHeader
        title="Projects"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Pages' },
          { name: 'Projects' },
        ]}
      />
      <ProjectsSection />
    </div>
  );
};

export default Projects;