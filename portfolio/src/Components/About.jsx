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
      className={`py-20 bg-gradient-to-r from-[#1a202c] to-[#2d3748] text-white h-full flex items-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{
        animation: isVisible ? 'fadeIn 1s ease-out forwards' : 'none', // Apply fade-in animation
      }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
        {/* Left Section: Profile Image */}
        <div className="flex justify-center w-1/2 md:w-1/3 mb-8 md:mb-0">
          <img
            src="images/me.jpg"
            alt="Felix Mathew"
            className="rounded-full border-4 border-sky-400 shadow-xl w-48 h-64 object-cover hover:shadow-lg hover:shadow-[#e2e8f0] md:w-64 md:h-76"
          />
        </div>

        {/* Right Section: Content */}
        <div className="flex flex-col items-center md:items-start w-full md:w-2/3 text-center md:text-left bg-[#2d3748] p-8 rounded-lg shadow-2xl hover:shadow-2xl transition-all">
          {/* Heading with typing animation */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Hi, I'm <span className="text-sky-400"><TypingText text="Felix Mathew" typingSpeed={300} /></span>
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
              className="bg-blue-500 text-white p-3 rounded-lg shadow-lg hover:bg-blue-400 transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
