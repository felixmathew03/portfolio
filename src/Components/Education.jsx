import React, { useEffect, useState } from 'react';
import { FaLaptopCode, FaUniversity, FaSchool } from 'react-icons/fa'; // Importing React Icons
const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger opacity transition when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="education"
      className={`py-20 bg-gradient-to-r from-gray-900 to-black text-white h-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translateY-0' : 'opacity-0 translateY-20'
      }`}
      style={{
        animation: isVisible ? 'fadeInn 1s ease-out forwards' : 'none',
      }}
    >
      <div className="container mx-auto px-6 max-w-screen-lg ">
        <h2 className="text-5xl font-extrabold text-white mb-12 text-center">
          My Education
        </h2>

        {/* Education Cards with Enhanced Animations */}
        <div className="flex flex-col gap-6">
          {/* MERN Stack Course */}
          <div
            className="card-hover bg-gray-800 text-white p-6 rounded-lg shadow-xl animate-fadeInUp"
          >
            <div className="flex items-center mb-4">
              <FaLaptopCode className="text-3xl mr-3 text-blue-500" />
              <h3 className="text-2xl font-semibold">MERN Stack Course</h3>
            </div>
            <p className="text-lg text-gray-400 mb-4">Synnefo Solutions</p>
            <p className="text-sm text-gray-500">Completed: 2024</p>
            <p className="text-sm text-gray-500">Major: Full-Stack Development (MongoDB, Express.js, React, Node.js)</p>
          </div>

          {/* BCA (Bachelor of Computer Applications) */}
          <div
            className="card-hover bg-gray-800 text-white p-6 rounded-lg shadow-xl animate-fadeInUp"
          >
            <div className="flex items-center mb-4">
              <FaUniversity className="text-3xl mr-3 text-green-500" />
              <h3 className="text-2xl font-semibold">Bachelor of Computer Applications (BCA)</h3>
            </div>
            <p className="text-lg text-gray-400 mb-4">Mahatma Gandhi University</p>
            <p className="text-sm text-gray-500">Graduated: 2024</p>
            <p className="text-sm text-gray-500">Major: Computer Appliccations</p>
          </div>

          {/* Plus Two (High School) */}
          <div
            className="card-hover bg-gray-800 text-white p-6 rounded-lg shadow-xl animate-fadeInUp"
          >
            <div className="flex items-center mb-4">
              <FaSchool className="text-3xl mr-3 text-yellow-500" />
              <h3 className="text-2xl font-semibold">Plus Two (Higher Secondary School)</h3>
            </div>
            <p className="text-lg text-gray-400 mb-4">St. George HSS, Aruvithura</p>
            <p className="text-sm text-gray-500">Graduated: 2021</p>
            <p className="text-sm text-gray-500">Science Stream</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
