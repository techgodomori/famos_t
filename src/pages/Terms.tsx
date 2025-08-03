import React from 'react';
import PageHeader from '../components/ui/PageHeader';

const Terms: React.FC = () => {
  const termsContent = [
    {
      title: 'Services Provided',
      content: 'Famos IT offers a range of IT solutions including procurement of hardware and software, managed services, technical support, and logistics. The scope and details of each service will be outlined in separate agreements or proposals.',
    },
    {
      title: 'Pricing and Payment',
      content: 'All prices are provided in advance through quotations or service agreements and are subject to change without prior notice unless otherwise specified. Payment terms will be specified in individual contracts. Late payments may incur interest or service suspension.',
    },
    {
      title: 'Quotations and Orders',
      content: 'Quotations are valid for 5 days unless otherwise specified. Orders must be confirmed in writing and are subject to availability. Famos IT reserves the right to decline any order at its discretion.',
    },
    {
      title: 'Delivery and Logistics',
      content: 'Famos IT will make every reasonable effort to deliver products and services within the agreed timeframe. However, delivery times are estimates and not guaranteed. Delays due to third-party suppliers or factors beyond our control are not the responsibility of Famos IT.',
    },
    {
      title: 'Warranty',
      content: 'All hardware and software sold are covered by the manufacturer\'s warranty. Famos IT does not provide separate warranties unless explicitly stated in writing. Warranty claims are subject to the terms set by the product manufacturer.',
    },
    {
      title: 'Limitation of Liability',
      content: 'Famos IT is not liable for any indirect, incidental, or consequential damages arising from the use of its products or services. Our total liability shall not exceed the amount paid by the customer for the product or service giving rise to the claim.',
    },
  ];

  const returnPolicy = [
    {
      title: 'Eligibility',
      content: 'Returns are accepted for defective or incorrectly delivered hardware and software products. All return requests must be made within 7 business days of receiving the item.',
    },
    {
      title: 'Conditions for Return',
      items: [
        'The product must be in its original condition and packaging.',
        'Software must be unopened and unused.',
        'Proof of purchase is required.',
        'Custom-configured or special-order items are non-returnable unless defective.',
      ],
    },
    {
      title: 'Return Process',
      content: 'To initiate a return, contact Famos IT support at 08145319706 or email famosconsultancyanditsolutions@gmail.com with your order number, item details, and reason for return. Once approved, we will provide instructions for return shipping.',
    },
    {
      title: 'Refunds',
      content: 'Once the returned item is received and inspected, we will notify you of the approval or rejection of your refund. Approved refunds will be processed within 7–10 business days using the original method of payment.',
    },
  ];

  return (
    <div className="pt-20 lg:pt-32">
      <PageHeader
        title="Terms & Condition"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Pages' },
          { name: 'Terms & Condition' },
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Terms and Conditions */}
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Terms & Condition
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Agreement With You – Please Read Carefully
              </h1>
              <p className="text-tertiary mb-8">
                These Terms and Conditions govern all sales, services, and interactions between Famos IT Solutions and her clients. By engaging with our services or purchasing products from Famos IT, you agree to be bound by these Terms.
              </p>

              <div className="space-y-8">
                {termsContent.map((section, index) => (
                  <div key={index}>
                    <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                    <p className="text-tertiary">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Terms and Conditions"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Return Policy Section */}
          <hr className="border-2 border-dark my-16" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Return Policy</h2>
              <div className="space-y-6">
                {returnPolicy.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
                    {section.content && (
                      <p className="text-tertiary">{section.content}</p>
                    )}
                    {section.items && (
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span className="text-tertiary">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Return Policy"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;