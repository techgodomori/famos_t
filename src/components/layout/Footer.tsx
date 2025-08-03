import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const partners = [
    'Hewlett-Packard Enterprise',
    'Dell',
    'Cisco',
    'Sophos',
    'Microsoft',
    'Synology',
    'QNAP',
    'Fortinet'
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Our Services', path: '/services' },
    { name: 'Terms & Condition', path: '/terms' },
    { name: 'Shopping', path: '/shopping' },
  ];

  const socialLinks = [
    { href: 'https://x.com/famosits?s=11', icon: '🐦', name: 'Twitter' },
    { href: 'https://www.facebook.com/profile.php?id=61576075276143&mibextid=ZbWKwL', icon: '📘', name: 'Facebook' },
    { href: 'https://www.youtube.com/@FamosConsultancyandITSolutions', icon: '📺', name: 'YouTube' },
    { href: 'https://www.intagram.com/famositconsultancy?igsh=MXdtZG9sbGQ1aDVz', icon: '📷', name: 'Instagram' },
  ];

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Office Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Office</h4>
            <div className="space-y-3">
              <p className="flex items-center">
                <span className="mr-3">📍</span>
                123 Street, New York, USA
              </p>
              <p className="flex items-center">
                <span className="mr-3">📞</span>
                0814 531 9706
              </p>
              <p className="flex items-center">
                <span className="mr-3">✉️</span>
                info@example.com
              </p>
            </div>
            <div className="flex space-x-2 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Partners</h4>
            <div className="space-y-2">
              {partners.map((partner, index) => (
                <p key={index} className="text-gray-300 text-sm">
                  {partner}
                </p>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-gray-300 hover:text-primary transition-colors duration-300 text-sm"
                >
                  ▶ {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribing to our newsletters within your organization helps you stay informed about new developments, policies, projects, and achievements.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-dark focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary px-6 py-3 rounded-r-lg hover:bg-primary/90 transition-colors duration-300">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black/20 py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-300 mb-2 md:mb-0">
              © <Link to="/" className="border-b border-gray-300 hover:text-primary">Your Site Name</Link>, All Right Reserved.
            </p>
            <p className="text-gray-300">
              Designed By <a href="#" className="border-b border-gray-300 hover:text-primary">Nexa Trux</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;