import React from "react";
import { FaEnvelope, FaGithub, FaPhone, FaLinkedin } from "react-icons/fa"; // Importing icons from react-icons

const Contact = () => {
  return (
    <section id="contact" className="bg-white p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Connect With Me</h2>
        <p className="text-lg text-gray-600 mb-8">
          Feel free to reach out if you have any questions or would like to collaborate!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Email Section */}
          <div className="flex items-center justify-center bg-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex flex-col items-center gap-3">
              <FaEnvelope className="text-blue-500 w-8 h-8" />
              <p className="text-gray-800">
                You can reach me via email at:{" "}
                <a href="mailto:dfdfd@gmail.com" className="text-blue-500 hover:underline">
                  dfdfd@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* GitHub Section */}
          <div className="flex items-center justify-center bg-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex flex-col items-center gap-3">
              <FaGithub className="text-blue-500 w-8 h-8" />
              <p className="text-gray-800">
                Check out my GitHub profile for more of my projects:{" "}
                <a
                  href="https://github.com/fggffgngn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  github.com/fgdfhgfh  
                </a>
              </p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-center justify-center bg-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex flex-col items-center gap-3">
              <FaPhone className="text-blue-500 w-8 h-8" />
              <p className="text-gray-800">
                Feel free to call or message me at:{" "}
                <span className="text-blue-500 hover:underline">
                  +9156532323661
                </span>
              </p>
            </div>
          </div>

          {/* LinkedIn Section */}
          <div className="flex items-center justify-center bg-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex flex-col items-center gap-3">
              <FaLinkedin className="text-blue-500 w-8 h-8" />
              <p className="text-gray-800">
                Connect with me on LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/fghgfh" // Replace with your LinkedIn profile link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  linkedin.com/in/gfhgfh
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;