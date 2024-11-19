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
  <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
    <Icon className="w-12 h-12 text-red-600 mb-4" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <a href="#" className="text-red-600 text-sm hover:underline">
      Read more →
    </a>
  </div>
);

const HeroSection = () => {
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
        "We'll help you find the best energy deal to power your business and manage your energy requirements for years to come.",
    },
    {
      icon: Smartphone,
      title: "Business Mobile",
      description:
        "Get your business mobile, stay connected with the UK's biggest networks through us.",
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
        "We provide end-to-end billing solutions. Eliminate your revenue leakage and improve customer satisfaction.",
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
  const Button = ({ children }) => (
    <button className="w-full md:w-auto px-6 py-3 bg-white text-gray-800 rounded-md shadow-md hover:bg-gray-100 transition duration-300 ease-in-out text-sm md:text-base">
      {children}
    </button>
  );
  const awards = [
    {
      title: "WINNER",
      subtitle: "Service Provider Engineering & Technical Support Team",
      image: "/img/Artboard-18-2.webp",
    },
    {
      title: "FINALIST",
      subtitle: "Service Provider Marketing Team",
      image: "/img/img3.webp",
    },
    {
      title: "2021 FINALIST",
      subtitle: "BEST SUPPLIER INNOVATION AWARD",
      image: "/img//img4.webp",
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
    <div className="mx-10">
      <div className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/img/f3.jpg')",
              height:"100%",
              width:"100%"
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="relative z-10 p-6 md:p-12 lg:p-24 text-white">
            <p className="text-sm md:text-base lg:text-lg mb-2 md:mb-4">
              Business broadband, telecoms, IoT, software, and energy
              procurement solutions.
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-red-600">Empowering</span> everything as a{" "}
              <span className="text-red-600">service</span>
            </h1>
          </div>
          <div className="h-24 md:h-32 lg:h-48 bg-white transform -skew-y-6 origin-top-right"></div>
        </div>
      </div>
      {/* the x factor */}
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            The X factor for your business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300">
              Get a Quote
            </button>
          </div>
          <div className="mt-4 text-center">
            <a href="#" className="text-gray-600 hover:underline">
              See all services →
            </a>
          </div>
        </div>
      </div>
      {/* triving */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-gray-500 text-sm md:text-base uppercase tracking-wider mb-4">
            DISCOVER FIDELITY GROUP
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            We've been thriving <span className="text-red-600">since 2008</span>
          </h1>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button>OUR MISSION</Button>
            <Button>TECH AND TELECOMS PARTNERS</Button>
            <Button>ENERGY PARTNERS</Button>
          </div>
        </div>
      </section>
      {/* main3 */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8">
          Fidelity Group – Multi-award winners
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 md:h-64">
                <img
                  src={award.image}
                  alt={`${award.title} - ${award.subtitle}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {award.title}
                </h2>
                <p className="text-sm text-gray-600">{award.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* testimonials */}
      <section class="text-gray-600 body-font"> 
  <div class="container px-5 py-24 mx-auto">
    <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque semper elit non pellentesque. Curabitur neque arcu, efficitur facilisis porta at, feugiat ut est. Vivamus sed dui in dui vehicula congue. Phasellus sed pellentesque nisi. Phasellus tempus bibendum massa ut tincidunt. Nam hendrerit ut tortor eget rutrum. Suspendisse facilisis ante eget fringilla auctor. Nam a odio orci. Pellentesque imperdiet quis sem</p>
          <a class="inline-flex items-center">
            <img alt="testimonial" src="https://dummyimage.com/110x110" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Jon doe</span>
              <span class="text-gray-500 text-sm">DESIGNER</span>
            </span>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">Fusce pharetra eget augue ac condimentum. Fusce dictum ex mauris, porta semper mi malesuada dictum. Donec congue ipsum diam. Donec eu tellus laoreet, iaculis mi sit amet, ultricies nulla. Maecenas orci metus, gravida et sodales eget, varius nec nibh. Suspendisse eget lorem blandit, sodales est eget, efficitur erat. Pellentesque feugiat velit in ante tincidunt, sed fringilla dui dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam sit amet ipsum viverra, bibendum odio vel, tempus arcu.</p>
          <a class="inline-flex items-center">
            <img alt="testimonial" src="https://dummyimage.com/110x110" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Jane Doe</span>
              <span class="text-gray-500 text-sm">DESIGNER</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* main4 */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-600 mb-2">
          IN THE MEDIA
        </h2>
        <h1 className="text-4xl font-bold mb-6">
          Press releases, <span className="text-red-600">blogs</span> and videos
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
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
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={article.image}
                  alt={article.alt}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <Link href="#" className="text-red-600 hover:underline">
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
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
  );
};

export default HeroSection;
