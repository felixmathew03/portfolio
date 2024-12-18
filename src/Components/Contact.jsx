import React from "react";
import { FaEnvelope, FaGithub,FaPhone, FaLinkedin } from "react-icons/fa"; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-[#8961ce] to-[#d8c4bd] p-8 text-white"
    >
      <div className="container mx-auto text-center">
        {/* Footer Heading with Smaller Size */}
        <h2 className="text-2xl font-bold mb-4 text-white">
          Let's Connect
        </h2>

        {/* Footer Content with Horizontal Layout */}
        <div className="flex justify-center gap-12">
          {/* Email Section */}
          <div className="flex  items-center gap-3">
            <FaEnvelope className="text-blue-950 w-6 h-6 transition-transform duration-300 transform hover:scale-110" />
          
              <a
                href="mailto:felixmathewtt@gmail.com"
                className="text-blue-950 hover:underline"
              >
               Gmail
              </a>
            
          </div>

          {/* GitHub Section */}
          <div className="flex  items-center gap-3">
            <FaGithub className="text-blue-950 w-6 h-6 transition-transform duration-300 transform hover:scale-110" />
          
              <a
                href="https://github.com/felixmathew03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-950 hover:underline"
              >
                GitHub
              </a>
            
          </div>

          {/* LinkedIn Section */}
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-blue-950 w-6 h-6 transition-transform duration-300 transform hover:scale-110" />
          
              <a
                href="https://www.linkedin.com/in/felixmathew03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-950 hover:underline"
              >
                LinkedIn
              </a>

          </div>

          {/* Phone Section */}
          <div className="flex items-center gap-3">
            <FaPhone className="text-blue-950 w-6 h-6 transition-transform duration-300 transform hover:scale-110 rotate-90 transform-origin-center" />
          
            <a href="tel:+1234567890" className="text-blue-950 hover:underline">
                  Phone
                </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
