import React from 'react';
import Card from '../ui/Card';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kate Winslet',
      position: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      social: {
        facebook: 'https://www.facebook.com/profile.php?id=61576075276143&mibextid=ZbWKwL',
        twitter: 'https://x.com/famosits?s=11',
        instagram: 'https://www.intagram.com/famositconsultancy?igsh=MXdtZG9sbGQ1aDVz',
      },
    },
    {
      name: 'Jac Jackson',
      position: 'Lead Solutions Architect',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      social: {
        facebook: 'https://www.facebook.com/profile.php?id=61576075276143&mibextid=ZbWKwL',
        twitter: 'https://x.com/famosits?s=11',
        instagram: 'https://www.intagram.com/famositconsultancy?igsh=MXdtZG9sbGQ1aDVz',
      },
    },
    {
      name: 'Doris Jordan',
      position: 'Operations Manager',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      social: {
        facebook: 'https://www.facebook.com/profile.php?id=61576075276143&mibextid=ZbWKwL',
        twitter: 'https://x.com/famosits?s=11',
        instagram: 'https://www.intagram.com/famositconsultancy?igsh=MXdtZG9sbGQ1aDVz',
      },
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Exclusive Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="relative overflow-hidden p-0 group-hover:bg-primary transition-all duration-500">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-x-6 -bottom-6 bg-white group-hover:bg-primary border border-gray-200 group-hover:border-primary rounded-lg p-6 transition-all duration-500">
                    <h4 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-500">
                      {member.name}
                    </h4>
                    <p className="text-tertiary group-hover:text-white/90 mb-4 transition-colors duration-500">
                      {member.position}
                    </p>
                    <div className="flex justify-center space-x-2">
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-light group-hover:bg-white text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        📘
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-light group-hover:bg-white text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        🐦
                      </a>
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-light group-hover:bg-white text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        📷
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;