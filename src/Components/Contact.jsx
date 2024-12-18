import React from "react";
import { FaEnvelope, FaGithub,FaPhone, FaLinkedin } from "react-icons/fa"; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#d8c4bd] p-6 text-white"
    >
      <div className="container mx-auto text-center">
        {/* Footer Heading with Smaller Size */}
        <h2 className="text-2xl font-bold mb-4 text-black">
          Let's Connect
        </h2>

        {/* Footer Content with Horizontal Layout */}
        <div className="flex justify-center gap-4">
          {/* Email Section */}
          <div className="flex  items-center gap-3">
          
              <a
                href="mailto:felixmathewtt@gmail.com"
                className="text-blue-950 hover:underline"
              >
            <FaEnvelope className="text-blue-950 w-6 h-6 transition-transform duration-300 transform hover:scale-110" />
               
              </a>
            
          </div>

          {/* GitHub Section */}
          <div className="flex  items-center gap-3">
          
              <a
                href="https://github.com/felixmathew03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-950 hover:underline"
              >
            <FaGithub className="text-blue-950 w-6 h-6 transition-transform duration-300 transform hover:scale-110" />
                
              </a>
            
          </div>

          {/* LinkedIn Section */}
          <div className="flex items-center gap-3">
          
              <a
                href="https://www.linkedin.com/in/felixmathew03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-950 hover:underline"
              >
            <FaLinkedin className="text-blue-950 w-6 h-6 transition-transform duration-300 transform hover:scale-110" />
                
              </a>

          </div>

          {/* Phone Section */}
          <div className="flex items-center gap-3">
          
            <a href="tel:+919539215831" className="text-blue-950 hover:underline">
            <FaPhone className="text-blue-950 w-6 h-6 transition-transform duration-300 transform hover:scale-110 rotate-90 transform-origin-center" />
                  
                </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
