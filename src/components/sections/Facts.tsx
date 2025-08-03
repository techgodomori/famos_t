import React, { useEffect, useState } from 'react';

const Facts: React.FC = () => {
  const [counters, setCounters] = useState([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  const facts = [
    { number: 1467, label: 'Happy Clients', icon: '👥' },
    { number: 13, label: 'Countries in Africa – Client Base', icon: '🌍' },
    { number: 8650, label: 'IT Products', icon: '💻' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          facts.forEach((fact, index) => {
            let start = 0;
            const end = fact.number;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = end;
                  return newCounters;
                });
                clearInterval(timer);
              } else {
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = Math.floor(start);
                  return newCounters;
                });
              }
            }, 16);
          });
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('facts-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      id="facts-section"
      className="section-padding bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="relative container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {facts.map((fact, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-6xl mb-4">{fact.icon}</div>
              <h3 className="text-5xl lg:text-6xl font-bold text-white mb-2">
                {counters[index].toLocaleString()}
              </h3>
              <p className="text-xl text-white/90">{fact.label}</p>
              <hr className="w-16 h-1 bg-white mx-auto mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;