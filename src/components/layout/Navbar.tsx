import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 45);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const socialLinks = [
    { href: 'https://www.facebook.com/profile.php?id=61576075276143&mibextid=ZbWKwL', icon: 'facebook' },
    { href: 'https://x.com/famosits?s=11', icon: 'twitter' },
    { href: 'https://www.intagram.com/famositconsultancy?igsh=MXdtZG9sbGQ1aDVz', icon: 'instagram' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-white border-b border-primary/10">
        <div className="container-custom">
          <div className="flex justify-between items-center py-3 text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <span className="text-primary mr-2">📞</span>
                Available 24/7
              </span>
              <span className="flex items-center">
                <span className="text-primary mr-2">🕒</span>
                8.00am - 5.00pm
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <span className="text-primary mr-2">✉️</span>
                info@example.com
              </span>
              <span className="flex items-center">
                <span className="text-primary mr-2">📞</span>
                0814 531 9706
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      } ${isScrolled ? 'lg:top-0' : 'lg:top-[45px]'}`}>
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=250&h=150&fit=crop" 
                alt="Famous IT Solutions" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'text-primary' : 'text-tertiary hover:text-primary'}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'text-primary' : 'text-tertiary hover:text-primary'}`}
              >
                Company Overview
              </Link>
              <Link 
                to="/services" 
                className={`nav-link ${isActive('/services') ? 'text-primary' : 'text-tertiary hover:text-primary'}`}
              >
                Services
              </Link>
              <Link 
                to="/shopping" 
                className={`nav-link ${isActive('/shopping') ? 'text-primary' : 'text-tertiary hover:text-primary'}`}
              >
                Shopping
              </Link>
              <Link 
                to="/terms" 
                className={`nav-link ${isActive('/terms') ? 'text-primary' : 'text-tertiary hover:text-primary'}`}
              >
                Terms & Condition
              </Link>
            </div>

            {/* Social Links */}
            <div className="hidden lg:flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-light rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  {social.icon === 'facebook' && '📘'}
                  {social.icon === 'twitter' && '🐦'}
                  {social.icon === 'instagram' && '📷'}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-tertiary hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/') ? 'text-primary' : 'text-tertiary'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`nav-link ${isActive('/about') ? 'text-primary' : 'text-tertiary'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Company Overview
                </Link>
                <Link 
                  to="/services" 
                  className={`nav-link ${isActive('/services') ? 'text-primary' : 'text-tertiary'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/shopping" 
                  className={`nav-link ${isActive('/shopping') ? 'text-primary' : 'text-tertiary'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Shopping
                </Link>
                <Link 
                  to="/terms" 
                  className={`nav-link ${isActive('/terms') ? 'text-primary' : 'text-tertiary'}`}
                  onClick={() => setIsOpen(false)}
                >
                  Terms & Condition
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;