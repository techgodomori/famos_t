import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Contact form submitted:', formData);
  };

  return (
    <div className="pt-20 lg:pt-32">
      <PageHeader
        title="Contact"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Pages' },
          { name: 'Contact' },
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Contact
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold mb-6">
                If You Have Any Query, Please Contact Us
              </h1>
              <p className="text-tertiary mb-8">
                We're here to help! Reach out to us for any questions about our services, products, or to request a quote. Our team will get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer"
                      placeholder=" "
                      required
                    />
                    <label className="absolute left-4 top-3 text-tertiary transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-primary">
                      Your Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer"
                      placeholder=" "
                      required
                    />
                    <label className="absolute left-4 top-3 text-tertiary transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-primary">
                      Your Email
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer"
                    placeholder=" "
                    required
                  />
                  <label className="absolute left-4 top-3 text-tertiary transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-primary">
                    Subject
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer resize-none"
                    placeholder=" "
                    required
                  />
                  <label className="absolute left-4 top-3 text-tertiary transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-primary">
                    Message
                  </label>
                </div>

                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Card className="h-full min-h-96 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                  className="w-full h-full min-h-96 border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;