import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <div className="pt-20 lg:pt-32">
      <PageHeader
        title="404 Error"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Pages' },
          { name: '404 Error' },
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-8xl text-primary mb-8">⚠️</div>
            <h1 className="text-6xl lg:text-8xl font-bold text-dark mb-6">404</h1>
            <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
            <p className="text-lg text-tertiary mb-8">
              We're sorry, the page you have looked for does not exist in our website! 
              Maybe go to our home page or try to use a search?
            </p>
            <Button to="/" size="lg">
              Go Back To Home
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;