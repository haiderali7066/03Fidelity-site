import { Check } from 'lucide-react'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const partnerships = [
  {
    title: "Dealer partnership",
    features: [
      "Incentive and growth programmes",
      "Sales and product training",
      "Full product suite access",
      "Anvil Access and training",
      "Dual branded customer billing",
      "24/7/365 customer support service",
      "Inside track market update",
      "Dedicated account management",
      "Provisioning and fault management",
    ],
  },
  {
    title: "Referral partnership",
    features: [
      "Incentive and growth programmes",
      "Sales and product training",
      "Full product suite access",
      "Dual branded customer billing",
      "24/7/365 customer support service",
      "Inside track market update",
    ],
  },
  {
    title: "Wholesale partnership",
    features: [
      "Incentive and growth programmes",
      "Provisioning and fault management",
    ],
  },
]
export default function PartnershipProgram() {
    const faqItems = [
        { question: "Who are Fidelity Group?", answer: "Fidelity Group is a leading provider of business telecommunications and energy solutions." },
        { question: "How can you support our business to win?", answer: "We offer tailored solutions and expert support to help your business succeed." },
        { question: "How do we get a quote?", answer: "You can request a quote through our website or by contacting our sales team directly." },
        { question: "Can you do the billing for us?", answer: "Yes, we offer comprehensive billing services as part of our solutions." },
        { question: "Why should we partner with Fidelity Group?", answer: "We offer industry-leading solutions, excellent support, and a track record of helping businesses grow." },
      ];
  return ( <div>
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] bg-gray-900">
        <img
          src="/"
          alt="Business partners shaking hands"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Unlock New Revenue Opportunities with Our Channel Partnership Program
            </h1>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors">
                Enquire now
              </button>
              <button className="bg-white text-red-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
                Download our partnership brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Partner inspired software, telecoms, energy and billing solutions.
              </h2>
              <p className="text-gray-600 mb-4">
                With over 40 years of experience in the telecom market, we have developed a dynamic partnership model dedicated to delivering exceptional B2B telecom, utility, energy, IoT, Broadband and Utility solutions.
              </p>
              <p className="text-gray-600">
                Our collaborative approach is designed to provide your business with greater value for both existing and new customers who require these essential services.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <button className="bg-blue-100 text-blue-800 px-6 py-3 rounded-md hover:bg-blue-200 transition-colors text-left">
                Dealer programme
              </button>
              <button className="bg-blue-100 text-blue-800 px-6 py-3 rounded-md hover:bg-blue-200 transition-colors text-left">
                Wholesale partnership
              </button>
              <button className="bg-blue-100 text-blue-800 px-6 py-3 rounded-md hover:bg-blue-200 transition-colors text-left">
                Referral programme
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* lists */}
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Choose the perfect partnership for your business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerships.map((partnership, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md relative ">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {partnership.title}
              </h3>
              <ul className="space-y-2 mb-6">
                {partnership.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="absolute bottom-5 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors">
                Enquire now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* div4 */}
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <img src="/img/img5.webp" alt="Anvil software interface" className="rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">More than just billing</h2>
            <p className="text-gray-600 mb-6">
              Fidelity leverages the market-leading billing management software, Anvil—a
              comprehensive business management platform that empowers our resellers to
              quote, order, and bill their end users according to their specific requirements.
              Supported by our 24/7/365 customer support service, we ensure that driving
              revenue growth for your business becomes effortless.
            </p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300">
              Find out more
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {["OUR MISSION", "TECH AND TELECOMS PARTNERS", "ENERGY PARTNERS"].map((title, index) => (
            <div key={index} className="border border-gray-200 p-4 text-center">
              <h3 className="font-semibold">{title}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
    
    </div>
  )
}