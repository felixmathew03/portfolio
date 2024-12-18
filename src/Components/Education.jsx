import React, { useEffect, useState } from 'react';
import { FaLaptopCode, FaUniversity, FaSchool } from 'react-icons/fa'; // Importing React Icons

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger opacity transition when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation style object for each section
  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 1s ease-out, transform 1s ease-out',
  };

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-r from-[#ffafbd] to-[#ffc3a0] text-gray-800 h-auto"
      style={animationStyle}
    >
      <div className="w-full px-6">
        <h2 className="text-5xl font-bold text-gray-800 mb-12 text-center">
          My Education
        </h2>

        {/* Education Cards in Grid Layout */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 gap-10">
          {/* MERN Stack Course */}
          <div className="bg-white w-2/3 m-auto p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <FaLaptopCode className="text-4xl text-blue-600 mr-4" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">MERN Stack Course</h3>
                <p className="text-sm text-gray-500">Completed: 2024</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Major: Full-Stack Development (MongoDB, Express.js, React, Node.js)
            </p>
            <p className="text-sm text-gray-600">
              This intensive course covers everything from front-end to back-end development using the MERN stack. It is designed for aspiring developers looking to build modern web applications.
            </p>
          </div>

          {/* BCA (Bachelor of Computer Applications) */}
          <div className="bg-white w-2/3 m-auto p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <FaUniversity className="text-4xl text-green-600 mr-4" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Bachelor of Computer Applications (BCA)</h3>
                <p className="text-sm text-gray-500">Graduated: 2024</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">Major: Computer Applications</p>
            <p className="text-sm text-gray-600">
              A well-rounded degree in Computer Applications with a focus on programming, database management, software development, and web technologies. I gained a strong foundation in computing and problem-solving.
            </p>
          </div>

          {/* Plus Two (High School) */}
          <div className="bg-white w-2/3 m-auto p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <FaSchool className="text-4xl text-yellow-600 mr-4" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Plus Two (Higher Secondary School)</h3>
                <p className="text-sm text-gray-500">Graduated: 2021</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">Science Stream</p>
            <p className="text-sm text-gray-600">
              Focused on the Science stream, with subjects such as Mathematics, Physics, and Bio-Science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
