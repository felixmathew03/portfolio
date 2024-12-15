import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 py-12 h-screen flex items-center">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 - Instagram Clone */}
          <div className="bg-gray-200 rounded-lg overflow-hidden w-full h-56 sm:w-96 md:w-112 lg:w-120 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl relative">
            <img
              src="images/instagram.png"
              alt="Instagram Clone"
              className="w-full h-full object-contain transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gray-400 bg-opacity-80 flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 ease-in-out transform translate-y-50 hover:opacity-100 hover:translate-y-0">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent mb-2">Instagram Clone (MERN Stack)</h3>
              <p className="text-gray-900 mb-4 p-2 text-sm">
                A full-stack Instagram clone built using the MERN (MongoDB, Express, React, Node.js) stack. Users can create accounts, post images, and like on posts.
              </p>
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white py-2 px-4 rounded-lg text-center hover:bg-blue-500 transition duration-200"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 - OLX Clone (No React) */}
          <div className="bg-gray-800 rounded-lg overflow-hidden w-full h-56 sm:w-96 md:w-112 lg:w-120 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl relative">
            <img
              src="images/olx.png"
              alt="OLX Clone"
              className="w-full h-full object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gray-300 bg-opacity-50 flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 ease-in-out transform translate-y-50 hover:opacity-100 hover:translate-y-0">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">OLX Clone</h3>
              <p className="text-gray-900 mb-4 p-2 text-sm">
                This project is an OLX clone that allows users to buy and sell products. Users can upload items they wish to sell, and others can browse and purchase these products. The platform uses MongoDB, Node.js, Express, HTML, CSS, and JavaScript.
              </p>
              <a
                href="#"
                className="inline-block bg-blue-800 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition duration-200"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 3 - BookMyShow Clone */}
          <div className="bg-gray-800 rounded-lg overflow-hidden w-full h-56 sm:w-96 md:w-112 lg:w-120 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl relative">
            <img
              src="images/bookmyshow.svg"
              alt="BookMyShow Clone"
              className="w-full h-full object-contain transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gray-100 bg-opacity-80 flex flex-col justify-center items-center opacity-0 transition-opacity duration-500 ease-in-out transform translate-y-50 hover:opacity-100 hover:translate-y-0">
              <h3 className="text-xl font-semibold text-red-700 mb-2">BookMyShow Clone</h3>
              <p className="text-gray-900 mb-4 p-2 text-sm">
                This is a clone of the BookMyShow platform, featuring a user-friendly interface. Users can browse and add movies, view detailed information about each movie, and explore showtimes. The platform is built with MongoDB, Node.js, Express, HTML, CSS, and JavaScript.
              </p>
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-slate-900 to-red-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-500 transition duration-200"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
