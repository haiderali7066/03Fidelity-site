import React from 'react'

const Contact = () => {
  return (
    <div>
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

export default Contact