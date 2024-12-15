import React from "react";
import { FaEnvelope, FaGithub, FaPhone, FaLinkedin } from "react-icons/fa"; // Importing icons from react-icons

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 dark:bg-gray-900 p-8 transition-colors duration-300">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-lg text-gray-400 mb-8">
          Feel free to reach out if you have any questions or would like to collaborate!
        </p>
        
        {/* Horizontally Aligned Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Email Section */}
          <div className="flex items-center justify-center bg-gray-800 dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-500 hover:opacity-90">
            <div className="flex flex-col items-center gap-3">
              <FaEnvelope className="text-blue-400 w-8 h-8 transition-transform duration-500 transform hover:scale-110 hover:rotate-3 hover:transform-origin-center" />
              <p className="text-white dark:text-white">
                You can reach me via email at:{" "}
                <a href="mailto:felixmathewtt@gmail.com" className="text-blue-400 hover:underline">
                felixmathewtt@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* GitHub Section */}
          <div className="flex items-center justify-center bg-gray-800 dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-500 hover:opacity-90">
            <div className="flex flex-col items-center gap-3">
              <FaGithub className="text-blue-400 w-8 h-8 transition-transform duration-500 transform hover:scale-110 hover:rotate-3 hover:transform-origin-center" />
              <p className="text-white dark:text-white">
                Check out my GitHub profile for more of my projects:{" "}
                <a
                  href="https://github.com/felixmathew03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  github.com/felixmathew03
                </a>
              </p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-center justify-center bg-gray-800 dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-500 hover:opacity-90">
            <div className="flex flex-col items-center gap-3">
              <FaPhone className="text-blue-400 w-8 h-8 transition-transform duration-500 transform hover:scale-110 hover:rotate-3 hover:transform-origin-center" />
              <p className="text-white dark:text-white">
                Feel free to call or message me at:{" "}
                <span className="text-blue-400 hover:underline">
                  +919539215831
                </span>
              </p>
            </div>
          </div>

          {/* LinkedIn Section */}
          <div className="flex items-center justify-center bg-gray-800 dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-500 hover:opacity-90">
            <div className="flex flex-col items-center gap-3">
              <FaLinkedin className="text-blue-400 w-8 h-8 transition-transform duration-500 transform hover:scale-110 hover:rotate-3 hover:transform-origin-center" />
              <p className="text-white dark:text-white">
                Connect with me on LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/felixmathew03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  linkedin.com/in/felixmathew03
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
