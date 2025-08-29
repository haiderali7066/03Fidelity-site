import React from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Zap,
  Smartphone,
  Share2,
  Cloud,
  Phone,
  FileText,
  CreditCard,
  Users,
} from "lucide-react";

const ServiceItem = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
    <Icon className="w-12 h-12 text-red-600 mb-4" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <a href="#" className="text-red-600 text-sm hover:underline">
      Read more →
    </a>
  </div>
);

const Button = ({ children }) => (
  <button className="w-full md:w-auto px-6 py-3 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition duration-300 ease-in-out text-sm md:text-base">
    {children}
  </button>
);

const HomePage = () => {
  const services = [
    {
      icon: Globe,
      title: "Connectivity and Data",
      description:
        "Superfast broadband, dedicated internet access, MPLS networks, SD WAN and 4G/5G solutions.",
    },
    {
      icon: Zap,
      title: "Business Energy",
      description:
        "Find the best energy deal to power your business and manage your energy requirements for years to come.",
    },
    {
      icon: Smartphone,
      title: "Business Mobile",
      description: "Stay connected with the UK's biggest networks through us.",
    },
    {
      icon: Share2,
      title: "Internet of Things",
      description:
        "IoT solutions to help you collect, analyse and use data from connected devices across your business.",
    },
    {
      icon: Cloud,
      title: "Cloud",
      description:
        "Our cloud solutions give you access to enterprise-grade technology and expert support.",
    },
    {
      icon: Phone,
      title: "Voice/VoIP & Hosted Telephony",
      description:
        "From traditional phone lines to the latest VoIP technology, we've got you covered.",
    },
    {
      icon: FileText,
      title: "Billing",
      description:
        "We provide end-to-end billing solutions. Eliminate revenue leakage and improve customer satisfaction.",
    },
    {
      icon: CreditCard,
      title: "Payment Solutions",
      description:
        "Process all major credit cards, mobile, and contactless payments with our merchant services.",
    },
    {
      icon: Users,
      title: "Fidelity Partner Programme",
      description:
        "Join Fidelity's Partner Programme and grow your business with industry-leading commissions.",
    },
  ];

  const awards = [
    {
      title: "WINNER",
      subtitle: "Service Provider Engineering & Technical Support Team",
      image: "https://picsum.photos/id/22/200/300",
    },
    {
      title: "FINALIST",
      subtitle: "Service Provider Marketing Team",
      image: "https://picsum.photos/id/27/200/300",
    },
    {
      title: "2021 FINALIST",
      subtitle: "BEST SUPPLIER INNOVATION AWARD",
      image: "https://picsum.photos/id/7/200/300",
    },
  ];

  const testimonials = [
    {
      quote:
        "Fidelity helped us modernize our telecoms and cloud solutions. Exceptional support and seamless transition!",
      name: "Sarah Johnson",
      role: "IT Director",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      quote:
        "Their energy solutions saved us thousands annually. Highly professional and reliable team.",
      name: "James Smith",
      role: "Operations Manager",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  const newsItems = [
    "CNA Awards - Winners of Best Reseller Innovation 2024",
    "Why companies should avoid using mobile phone SIMs in IoT applications",
    "Summer is the best time to sign a new energy contract but time is running out!",
    "What is a fixed IP SIM card?",
    "Energy drives client to £30k commission payment",
  ];

  const featuredArticles = [
    {
      title: "CNA Awards – Winners of Best Reseller Innovation 2024",
      description:
        "We've been recognised as the winner of the CNA Best Reseller Innovation award 2024! ...",
      image: "/img/img5.webp",
      alt: "Group photo of award winners",
    },
    {
      title:
        "Why companies should avoid using mobile phone SIMs in IoT applications",
      description:
        "It may be tempting to use mobile phone SIMs for IoT applications but this ...",
      image: "/img/img6.png",
      alt: "Network visualization",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://picsum.photos/seed/fadelity/800/600')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            <span className="text-red-600">Empowering</span> businesses with
            modern <span className="text-red-600">solutions</span>
          </h1>
          <p className="text-gray-200 max-w-2xl mb-6">
            Business broadband, telecoms, IoT, software, and energy procurement
            solutions since 2008.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          The X factor for your business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Awards */}
      <div className="py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Fidelity Group – Multi-award winners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                <p className="text-gray-600">{award.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 mb-4">“{t.quote}”</p>
              <div className="flex items-center">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News & Blogs */}
      <div className="py-16 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Press releases, blogs and videos
        </h2>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3">
            <ul className="space-y-4">
              {newsItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2">→</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
            {featuredArticles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{article.description}</p>
                  <a href="#" className="text-red-600 hover:underline">
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6">Connect with us</h2>
        <p className="mb-8 text-gray-600 max-w-2xl">
          Call us now on <span className="font-semibold">0800 840 6800</span> or
          fill in our contact form and we’ll be in touch.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <form className="w-full md:w-1/2 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 border rounded-md"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 border rounded-md"
            ></textarea>
            <div className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" /> I agree to Fidelity's
              privacy policy.
            </div>
            <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">
              Submit
            </button>
          </form>

          <div className="w-full md:w-1/2">
            <img
              src="/img/img7.webp"
              alt="Customer service"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
