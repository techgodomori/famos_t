import React from 'react';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  breadcrumbs: Array<{
    name: string;
    path?: string;
  }>;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  breadcrumbs, 
  backgroundImage = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop'
}) => {
  return (
    <div 
      className="relative pt-48 pb-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-dark/60"></div>
      <div className="relative container-custom">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-slide-in-down">
          {title}
        </h1>
        <nav className="animate-slide-in-down" style={{ animationDelay: '0.2s' }}>
          <ol className="flex items-center space-x-2 text-white/80">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && <span className="mx-2">/</span>}
                {crumb.path ? (
                  <Link 
                    to={crumb.path} 
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-primary">{crumb.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;