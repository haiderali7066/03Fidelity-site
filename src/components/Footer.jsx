import React from 'react';

const FooterColumn = ({ title, links }) => (
  <div className="mb-8 sm:mb-0">
    <h3 className="text-lg font-semibold mb-4 text-gray-700">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a href="#" className="text-sm text-red-600 hover:underline">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const services = ['Connectivity', 'Cloud and Hosting', 'Energy', 'IoT', 'Mobile', 'Voice', 'Billing', 'Payments'];
  const quickLinks = ['About', 'Contact', 'Media and News', 'Careers', 'Terms of Use', 'Privacy Policy', 'Cookie Policy', 'Code of Practice', 'KIT Home VoIP'];
  const support = ['Anvil Login', 'Remote Support', 'Report a Fault', 'Emergency Location', 'Cloud Fault', 'Energy Complaints Procedure'];

  return (
    <footer className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img src="/img/uk-logo.svg" alt="Fidelity logo" className="h-10 mb-4" />
            <p className="text-sm text-gray-600 mb-2">Henley: 14 Station Rd, Henley-on-Thames, RG9 1AY</p>
            <p className="text-sm text-gray-600 mb-2">London: Fox Court, 14 Grays Inn Rd, London WC1X 8HN</p>
            <p className="text-sm text-gray-600 mb-2">Reg. Number: 06765669</p>
            <a href="http://www.fidelity-group.co.uk" className="text-sm text-red-600 hover:underline">www.fidelity-group.co.uk</a>
          </div>

          <FooterColumn title="Services" links={services} />
          <FooterColumn title="Quick links" links={quickLinks} />
          <FooterColumn title="Support" links={support} />
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <img src="/placeholder.svg?height=60&width=60" alt="BSI ISO 9001 Certified" className="h-16" />
          </div>
          <div className="flex flex-col items-center sm:items-end">
            <img src="/placeholder.svg?height=30&width=100" alt="Trustpilot" className="h-8 mb-2" />
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-green-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-1">TrustScore 4.8 368 reviews</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;