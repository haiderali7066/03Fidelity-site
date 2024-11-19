import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  { title: "Communications and Data", image: "/img/img6.png" },
  { title: "Energy Solutions", image: "/img/img6.png" },
  { title: "Mobile Services", image: "/img/img6.png" },
  { title: "IoT Solutions", image: "/img/img6.png" },
  { title: "Cloud Services", image: "/img/img6.png" },
  { title: "Voice and Telephony", image: "/img/img6.png" },
  { title: "Broadband", image: "/img/img6.png" },
  { title: "Cyber Security", image: "/img/img6.png" },
  { title: "Partner Programme", image: "/img/img6.png" },
]

export default function ServicesGrid() {
  return (<div>
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Empowering <span className="text-red-600">everything as a service</span>.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="inline-block bg-red-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-red-700 transition-colors">
            See all services
          </Link>
        </div>
      </div>
    </section>
    {/* div2 */}
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Partnership Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="block text-sm font-semibold text-gray-500 mb-2">DO NOT SETTLE FOR LESS. PARTNER WITH THE BEST.</span>
              Become a <span className="text-red-600">partner</span> and re-sell our range of products and services.
            </h2>
            <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
              Get Copy Now
            </button>
          </div>
          <div className="relative h-64 md:h-auto">
            <img
              src="/img/img5.webp"
              alt="Marketing materials"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="border-t border-gray-200 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
              <span className="text-red-600">Award winning</span> solutions and service. We thrive for <span className="text-red-600">success</span>.
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
                Get a quote
              </button>
              <Link to="/services" className="text-red-600 hover:text-red-700 transition-colors">
                Become a Partner →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* contct */}
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Connect with us</h1>
        <p className="mb-6 text-gray-600">
          If you'd like to find out more, why not call us now on 0800 840 6800
          or simply fill in our contact form below and we'll be in touch.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <form className="w-full md:w-1/2 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
            <div className="flex items-center">
              <input type="checkbox" id="privacy-policy" className="mr-2" />
              <label htmlFor="privacy-policy" className="text-sm text-gray-600">
                I agree to and have read Fidelity's privacy policy.
              </label>
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
            >
              Submit
            </button>
          </form>

          <div className="w-full md:w-1/2">
            <img
              src="/img/img7.webp"
              alt="Customer service representatives"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  )
}