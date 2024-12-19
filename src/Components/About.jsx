import React, { useEffect, useState } from 'react';
import Para from './Para';
import TypingText from './TypingText';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger opacity transition when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []); // Empty dependency array to run on mount

  return (
    <section
      id="about"
      className={`py-20  text-gray-900 h-full flex flex-col items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      style={{
        animation: isVisible ? 'fadeIn 1s ease-out forwards' : 'none', // Apply fade-in animation
      }}
    >
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        <div className="bg-gray-100 p-8 rounded-lg shadow-2xl hover:shadow-2xl w-full md:w-3/4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            {/* Left Section: Content */}
            <div className="flex flex-col items-center md:items-start w-full md:w-2/3 text-center md:text-left space-y-6">
              {/* Heading with typing animation */}
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                Hi, I'm <span className="text-teal-500"><TypingText text="Felix Mathew" typingSpeed={200} /></span>
              </h2>

              {/* Additional description */}
              <div className="mb-6">
                <Para />
              </div>

              {/* Download CV Button */}
              <div>
                <a
                  href="/docs/felix.pdf" // The path to your PDF in the public directory
                  download // This attribute tells the browser to download the file
                  className="bg-teal-500 text-white p-3 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* Right Section: Profile Image and Contact Information */}
            <div className="rounded-full border-4 border-teal-400 w-48 h-48 md:w-64 md:h-64 flex flex-col items-center space-y-6 overflow-hidden">
              {/* Profile Image */}
              <img
                src="images/me.jpg"
                alt="Felix Mathew"
                className=" bg-gray-100 bg-opacity-90  object-cover duration-500 transition-transform transform hover:scale-110  object-top duration-300  "
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-1 md:grid-cols-2  sm:divide-x-0 md:divide-x-0 lg:divide-x divide-slate-400 p-4 mt-6 ">
            {/* Email */}
            <div className="flex justify-center">
              <a href="mailto:felixmathewtt@gmail.com" className="text-teal-500">felixmathewtt@gmail.com</a>
            </div>

            {/* Phone Number */}
            <div className="flex justify-center">
              <a href="tel:+919539215831" className="text-teal-500">+919539215831</a>
            </div>

            {/* Location */}
            <div className="flex justify-center">
              <span className="text-teal-500">Kerala, INDIA</span>
            </div>

            {/* Date of Birth (DOB) */}
            <div className="flex justify-center">
              <span className="text-teal-500">July 29, 2003</span>
            </div>

            {/* Gender */}
            <div className="flex justify-center">
              <span className="text-teal-500">Male</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
