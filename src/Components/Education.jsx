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
      <div className="container mx-auto px-6 max-w-screen-lg">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-12 text-center">
          My Education
        </h2>

        {/* Education Cards with Enhanced Animations */}
        <div className="flex flex-col gap-6">
          {/* MERN Stack Course */}
          <div
            className="bg-[#ffffff] text-[#2c3e50] p-6 rounded-lg border-2 border-[#ff7f7f] hover:cursor-pointer transition duration-300 hover:bg-[#ffe6e6]"
          >
            <div className="flex items-center mb-4">
              <FaLaptopCode className="text-3xl mr-3 text-blue-600" />
              <h3 className="text-2xl font-semibold">MERN Stack Course</h3>
            </div>
            <p className="text-lg text-gray-600 mb-4">Solutions</p>
            <p className="text-sm text-gray-500">Completed: 2024</p>
            <p className="text-sm text-gray-500">
              Major: Full-Stack Development (MongoDB, Express.js, React, Node.js)
            </p>
            <p className="text-sm text-gray-500 mt-2">
              This intensive course covers everything from front-end to back-end development using the MERN stack. It is designed for aspiring developers looking to build modern web applications.
            </p>
          </div>

          {/* BCA (Bachelor of Computer Applications) */}
          <div
            className="bg-[#ffffff] text-[#2c3e50] p-6 rounded-lg  border-2 border-[#ff7f7f] hover:cursor-pointer transition duration-500 hover:bg-[#ffe6e6]"
          >
            <div className="flex items-center mb-4">
              <FaUniversity className="text-3xl mr-3 text-green-600" />
              <h3 className="text-2xl font-semibold">Bachelor of Computer Applications (BCA)</h3>
            </div>
            <p className="text-lg text-gray-600 mb-4">University</p>
            <p className="text-sm text-gray-500">Graduated: 2024</p>
            <p className="text-sm text-gray-500">Major: Computer Applications</p>
            <p className="text-sm text-gray-500 mt-2">
              A well-rounded degree in Computer Applications with a focus on programming, database management, software development, and web technologies. I gained a strong foundation in computing and problem-solving.
            </p>
          </div>

          {/* Plus Two (High School) */}
          <div
            className="bg-[#ffffff] text-[#2c3e50] p-6 rounded-lg  border-2 border-[#ff7f7f] hover:cursor-pointer transition duration-500 hover:bg-[#ffe6e6]"
          >
            <div className="flex items-center mb-4">
              <FaSchool className="text-3xl mr-3 text-yellow-600" />
              <h3 className="text-2xl font-semibold">Plus Two (Higher Secondary School)</h3>
            </div>
            <p className="text-lg text-gray-600 mb-4">School</p>
            <p className="text-sm text-gray-500">Graduated: 2021</p>
            <p className="text-sm text-gray-500">Science Stream</p>
            <p className="text-sm text-gray-500 mt-2">
              Focused on the Science stream, with subjects such as Mathematics, Physics, and Bio-Science. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
