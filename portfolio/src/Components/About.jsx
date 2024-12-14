// src/components/About.js
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
      className={`py-20 bg-gradient-to-r from-gray-800 to-black text-white h-screen flex items-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translateY-0' : 'opacity-0 translateY-20'
      }`}
      style={{
        animation: isVisible ? 'fadeInn 1s ease-out forwards' : 'none', // Apply fade-in animation
      }}
    >
      <div className="container mx-auto px-6 text-center flex flex-col gap-y-7 ">
        {/* Heading with typing animation */}
        <h2 className="text-5xl font-extrabold text-white mb-6">
          Hi, I'm <span className="text-yellow-400"><TypingText text="Felix Mathew" typingSpeed={300} /></span>
        </h2>

        {/* Profile image */}
        <div className="flex justify-center mt-12">
          <img
            src="images/programming-background-collage.jpg"
            alt="Felix Mathew"
            className="rounded-full border-4 border-white shadow-xl w-44 h-44 object-cover"
          />
        </div>

        {/* Additional description */}
        <div>
          <Para />
        </div>
      </div>
    </section>
  );
};

export default About;