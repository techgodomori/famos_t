import React, { useState } from 'react';
import Card from '../ui/Card';

const ProjectsSection: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'Enterprise Network Setup',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Infrastructure',
    },
    {
      title: 'Cloud Migration Project',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Cloud Solutions',
    },
    {
      title: 'Cybersecurity Implementation',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Security',
    },
    {
      title: 'IT Asset Management',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Management',
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Projects
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            We Have Completed Latest Projects
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group overflow-hidden transition-all duration-500 ${
                  index === currentProject ? 'scale-105 shadow-2xl' : ''
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform duration-300">
                      🔗
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                  <h4 className="text-xl font-semibold mt-2">{project.title}</h4>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevProject}
              className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-300"
            >
              ←
            </button>
            <button
              onClick={nextProject}
              className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-300"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;