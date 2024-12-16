import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa'; // Importing icons from react-icons
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
      className={`py-20 bg-white text-gray-900 h-full flex flex-col items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      style={{
        animation: isVisible ? 'fadeIn 1s ease-out forwards' : 'none', // Apply fade-in animation
      }}
    >
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        
        {/* Top Section: Profile Image and Contact Information */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-6 bg-teal-50 p-8 rounded-lg shadow-xl transition-all duration-300 hover:bg-teal-100 hover:shadow-2xl">
          {/* Profile Image */}
          <img
            src="images/me.jpg"
            alt="Felix Mathew"
            className="rounded-full bg-gray-100 bg-opacity-90 border-4 border-teal-400 shadow-xl w-48 h-48 object-cover object-top transition-transform duration-300 hover:scale-110 hover:shadow-2xl md:w-64 md:h-64"
          />
          
          {/* Contact Information */}
          <div className="flex flex-col gap-4 items-start p-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Me</h3>
            
            {/* Gmail */}
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-teal-500 text-xl" />
              <a href="mailto:your-email@gmail.com" className="text-teal-500 hover:text-teal-600 transition duration-300">
                your-email@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-2">
              <FaLinkedin className="text-teal-500 text-xl" />
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-600 transition duration-300"
              >
                LinkedIn Profile
              </a>
            </div>

            {/* Phone Number */}
            <div className="flex items-center gap-2">
              <FaPhone className="text-teal-500 text-xl" />
              <a href="tel:+1234567890" className="text-teal-500 hover:text-teal-600 transition duration-300">
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Content */}
        <div className="flex flex-col items-center md:items-start w-full md:w-2/3 text-center md:text-left bg-gray-100 p-8 rounded-lg shadow-2xl hover:shadow-2xl transition-all">
          {/* Heading with typing animation */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Hi, I'm <span className="text-teal-500"><TypingText text="Felix Mathew" typingSpeed={300} /></span>
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
      </div>
    </section>
  );
};

export default About;
