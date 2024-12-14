import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 py-12 h-screen flex items-center">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">My Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Project 1 - Instagram Clone */}
          <div className="bg-gray-800 rounded-lg overflow-hidden w-full sm:w-80 md:w-96 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gray-700">
            <img
              src="https://via.placeholder.com/300x180"
              alt="Instagram Clone"
              className="w-full h-48 object-cover transition-transform duration-300 transform "
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">Instagram Clone (MERN Stack)</h3>
              <p className="text-gray-400 mb-4 text-sm">
                A full-stack Instagram clone built using the MERN (MongoDB, Express, React, Node.js) stack. Users can create accounts, post images, like and comment on posts, and follow other users.
              </p>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-500 transition duration-200"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 - OLX Clone (No React) */}
          <div className="bg-gray-800 rounded-lg overflow-hidden w-full sm:w-80 md:w-96 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gray-700">
            <img
              src="https://via.placeholder.com/300x180"
              alt="OLX Clone"
              className="w-full h-48 object-cover transition-transform duration-300 transform "
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">OLX Clone </h3>
              <p className="text-gray-400 mb-4 text-sm">
                A classified ad platform built with MongoDB, Express, Node.js, HTML, and CSS. Users can post and browse ads for products and services. Admin panel for managing listings and users.
              </p>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-500 transition duration-200"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 3 - BookMyShow Clone */}
          <div className="bg-gray-800 rounded-lg overflow-hidden w-full sm:w-80 md:w-96 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gray-700">
            <img
              src="https://via.placeholder.com/300x180"
              alt="BookMyShow Clone"
              className="w-full h-48 object-cover transition-transform duration-300 transform "
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">BookMyShow Clone </h3>
              <p className="text-gray-400 mb-4 text-sm">
                A movie ticket booking platform built with MongoDB, Express,  Node.js, HTML, and CSS. Users can browse movies, check showtimes, and book tickets for available slots.
              </p>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-500 transition duration-200"
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
