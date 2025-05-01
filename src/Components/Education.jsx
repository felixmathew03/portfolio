import React, { useEffect, useState } from 'react';
import { FaLaptopCode, FaUniversity, FaSchool } from 'react-icons/fa'; // Importing React Icons

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger opacity transition when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation style object for the section
  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
  };

  return (
    <section
      id="education"
      className="py-20 border-t-2 border-inherit border-dashed flex justify-center items-center text-gray-800 h-auto"
      style={animationStyle}
    >
      <div className="container flex justify-center lg:justify-around items-center px-6">
        <div className="text-6xl font-abril leading-tight flex flex-col justify-center items-center lg:w-1/12 font-bold text-teal-200 mb-12 text-center border-r-4 border-neutral-900 pr-7 border-double">
          <p>E</p>
          <p>D</p>
          <p>U</p>
          <p>C</p>
          <p>A</p>
          <p>T</p>
          <p>I</p>
          <p>O</p>
          <p>N</p>
        </div>
        <div className="container w-full lg:w-8/12 px-6">
          {/* Education Cards in Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
            {/* MERN Stack Course */}
            <div className="bg-gray-100 transition-all hover:bg-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-4xl text-blue-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">MERN Stack Course</h3>
                  <p className="text-sm text-gray-500">Completed: 2024</p>
                  <p className="text-sm text-gray-500 font-semibold">Synnefo Solutions</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                Major: Full-Stack Development (MongoDB, Express.js, React, Node.js)
              </p>
              <p className="text-sm text-gray-600">
                This intensive course covers everything from front-end to back-end development using the MERN stack. It is designed for aspiring developers looking to build modern web applications.
              </p>
            </div>

            {/* BCA (Bachelor of Computer Applications) */}
            <div className="bg-gray-100 transition-all hover:bg-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <FaUniversity className="text-4xl text-green-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-sm text-gray-500">Graduated: 2024</p>
                  <p className="text-sm text-gray-500 font-semibold">Mahatma Gandhi University</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-2">Major: Computer Applications</p>
              <p className="text-sm text-gray-600">
                A well-rounded degree in Computer Applications with a focus on programming, database management, software development, and web technologies. I gained a strong foundation in computing and problem-solving.
              </p>
            </div>

            {/* Plus Two (High School) */}
            <div className="bg-gray-100 transition-all hover:bg-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <FaSchool className="text-4xl text-yellow-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Higher Secondary School</h3>
                  <p className="text-sm text-gray-500">Graduated: 2021</p>
                  <p className="text-sm text-gray-500 font-semibold">St. Geroge Higher Secondary School, Aruvithura</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-2">Science Stream</p>
              <p className="text-sm text-gray-600">
                Focused on the Science stream, with subjects such as Mathematics, Physics, and Bio-Science.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
