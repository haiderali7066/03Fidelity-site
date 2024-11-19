import { useState, useEffect, useRef } from 'react'
import { ArrowUp, ArrowRight, Check } from 'lucide-react'
import React from "react" 

const values = [
  {
    title: "Innovation",
    description: "We embrace innovation and are always exploring new technologies to improve our services and deliver the best solutions to our clients."
  },
  {
    title: "Customer Focus",
    description: "Our customers are our top priority. We listen to their needs and work tirelessly to exceed their expectations with our services and support."
  },
  {
    title: "Integrity",
    description: "Integrity is at the core of our business. We believe in transparency, honesty, and ethical practices in all our business operations."
  },
  {
    title: "Reliability",
    description: "We understand the importance of dependable communication services. Our commitment to reliability ensures that our clients can count on us for consistent performance."
  }
];
export default function AboutUs() {

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    { number: 62903, label: "Hosted seats", prefix: "Over" },
    { number: 9260, label: "Customers being billed", prefix: "Over" },
    { number: 1651953401, label: "Call minutes", prefix: "Average of" },
    { number: 4004, label: "Data circuits", prefix: "Over" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const CountingNumber = ({ end }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (isVisible) {
        let start = 0
        const duration = 2000
        const increment = end / (duration / 16)
        const timer = setInterval(() => {
          start += increment
          if (start < end) {
            setCount(Math.floor(start))
          } else {
            setCount(end)
            clearInterval(timer)
          }
        }, 16)

        return () => clearInterval(timer)
      }
    }, [end, isVisible])

    return <span>{count.toLocaleString()}</span>
  }
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
  const timelineEvents = [
    { year: 2008, description: "Fidelity Group Limited in December 2008." },
    { year: 2010, description: "Fidelity Group appointed as O2 Joined up (JUC) Wholesale Partner." },
    { year: 2014, description: "Placed 8th fastest growing company in The Sunday Times Tech Track Top100." },
    { year: 2015, description: "Second year in a row in The Sunday Times TechTrack Top100." },
    { year: 2016, description: "Gamma Telecom Platinum Partner status awarded." },
    { year: 2017, description: "Fidelity Group acquire partner Ayspark Limited." },
    { year: 2018, description: "Fidelity Group acquire partner RDC" },
    { year: 2019, description: "Fidelity Group acquire partner Cloud Telephones." },
    { year: 2021, description: "Fidelity Group acquire ISO 9001 QMS accreditation" },
    { year: 2024, description: "Your journey starts with Fidelity Group!" },
  ];
  return ( <div>
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <img
          src="/img/Artboard-18-2.webp"
          alt="City skyline with river and bridge"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start p-8 md:p-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            About us
          </h1>
        </div>
        <button className="absolute bottom-8 left-8 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
          Talk to us
        </button>
      </div>

      <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
        <section className="mb-12">
          <p className="text-lg mb-4">
            At Fidelity Group, we are dedicated to transforming the way people connect. Founded over 30 years ago, with a vision to bring unparalleled communication services to our clients, we pride ourselves on being at the forefront of technological innovation and customer satisfaction.
          </p>
          <p className="text-lg mb-4">
            Our team comprises seasoned industry professionals with extensive expertise in designing, deploying, and managing advanced telecom infrastructure.
          </p>
          <p className="text-lg">
            We are committed to offering reliable, high-quality services that meet the diverse needs of businesses and individuals alike.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center">Our mission</h2>
          <blockquote className="text-xl italic text-center">
            "To be the UK's most customer-centric communications company, helping businesses grow by providing and supporting them with innovative and trusted solutions."
          </blockquote>
        </section>
      </main>

      
    </div>
    {/* div 2 */}
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div key={index} className="flex space-x-4">
              <div className="flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* awards */}
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
    {/* div3 */}
    <section className="py-16 px-4 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Fidelity Group in numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-sm text-gray-500 mb-1 flex items-center justify-center">
                <ArrowUp className="w-4 h-4 mr-1 text-red-600" />
                {stat.prefix}
              </p>
              <p className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                <CountingNumber end={stat.number} />
              </p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* graph */}
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Our journey</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          At Fidelity Group, we have been creating meaningful connections for decades. Whether you are a business looking to enhance your communication infrastructure or a residential customer seeking reliable services, we are here to help. Join us and experience the difference that comes with every service from Fidelity Group.
        </p>
        <div className="relative">
          <div className="absolute top-5 left-4 right-4 h-0.5 bg-red-500 hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className={`flex flex-col items-center ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mb-2">
                  <span className="text-white font-bold">{event.year}</span>
                </div>
                <p className={`text-sm text-gray-600 text-center md:text-left ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  {event.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <ArrowRight className="text-red-500 w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
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