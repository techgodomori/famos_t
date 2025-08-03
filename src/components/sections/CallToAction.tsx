import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
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
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative section-padding">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative container-custom">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <Card className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Get In Touch
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Request A Call-Back
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer"
                      placeholder=" "
                      required
                    />
                    <label className="absolute left-4 top-3 text-tertiary transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-primary">
                      Your Mobile
                    </label>
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
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer resize-none"
                    placeholder=" "
                    required
                  />
                  <label className="absolute left-4 top-3 text-tertiary transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-primary">
                    Message
                  </label>
                </div>

                <div className="text-center">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Submit Now
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;