import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/AboutSection';
import Services from '../components/sections/ServicesSection';
import Facts from '../components/sections/Facts';
import Features from '../components/sections/FeaturesSection';
import Projects from '../components/sections/ProjectsSection';
import Team from '../components/sections/TeamSection';
import Testimonials from '../components/sections/TestimonialsSection';
import CallToAction from '../components/sections/CallToAction';

const Home: React.FC = () => {
  return (
    <div className="pt-20 lg:pt-32">
      <Hero />
      <About />
      <Services />
      <Facts />
      <Features />
      <Projects />
      <Team />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;