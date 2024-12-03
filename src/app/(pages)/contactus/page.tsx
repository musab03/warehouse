"use client";

import { useState, useEffect } from "react";

export default function ContactUsForm() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation after the component has mounted
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-red-800 to-orange-500 text-white  h-screen w-full max-w-6xl mx-auto ">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-2">
        {/* Left Section: Contact Info */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-4xl font-extrabold mb-4">Get In Touch</h2>
          <p className="text-lg mb-6">
            Feel free to contact us. Submit your queries here and we will get back to you as soon as possible.
          </p>
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 ">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <svg
                  className="w-5 h-5 text-indigo-600 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 8a6 6 0 016-6h4a6 6 0 016 6v8a6 6 0 01-6 6H8a6 6 0 01-6-6V8z" />
                </svg>
                <span>(021) 32570409</span>
              </div>
              <div className="flex items-center mb-4">
                <svg
                  className="w-5 h-5 text-indigo-600 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 8a6 6 0 016-6h4a6 6 0 016 6v8a6 6 0 01-6 6H8a6 6 0 01-6-6V8z" />
                </svg>
                <span>Pagedone1234@gmail.com</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-indigo-600 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 8a6 6 0 016-6h4a6 6 0 016 6v8a6 6 0 01-6 6H8a6 6 0 01-6-6V8z" />
                </svg>
                <span>789 Oak Lane, Lakeside, TX 54321</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className={`w-full lg:w-2/3 bg-white text-gray-800 rounded-lg shadow-lg p-6 mt-10 lg:mt-0 transition-all duration-500 ${animate ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-20"}`}>
          <h3 className="text-2xl font-semibold mb-6">Send Us Message</h3>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-gradient-to-r focus:ring-from-red-800 focus:ring-to-orange-500 transition duration-300"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-gradient-to-r focus:ring-from-red-800 focus:ring-to-orange-500 transition duration-300"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-gradient-to-r focus:ring-from-red-800 focus:ring-to-orange-500 transition duration-300"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-gradient-to-r focus:ring-from-red-800 focus:ring-to-orange-500 transition duration-300"
              />
            </div>
            <button
              type="button"
              className="w-full py-3 bg-ring-red-600 text-white font-semibold rounded-lg bg-gradient-to-r from-red-800 to-orange-500  transition duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
 