// src/components/Skills.js
import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Skills with unique colors
  const skillsWithColors = [
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'MongoDB', color: 'bg-green-500' },
    { name: 'React JS', color: 'bg-blue-500' },
    { name: 'Node JS', color: 'bg-green-600' },
    { name: 'Express JS', color: 'bg-gray-700' },
    { name: 'Bootstrap CSS', color: 'bg-purple-600' },
    { name: 'Tailwind CSS', color: 'bg-teal-500' },
    { name: 'HTML', color: 'bg-orange-500' },
    { name: 'CSS', color: 'bg-blue-400' },
    { name: 'C', color: 'bg-blue-800' },
    { name: 'C++', color: 'bg-blue-600' },
    { name: 'SQL', color: 'bg-red-700' },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Trigger animation after 1 second
  }, []);

  return (
    <section
      id="skills"
      className={`py-20 bg-gradient-to-r from-[#2d3748] to-[#1a202c] h-screen flex items-center text-white transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-white mb-6">
          My Technical <span className="text-yellow-400">Skills</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
          As a Full-Stack Developer, I have hands-on experience with a wide range of technologies. 
          Below are some of the core technologies that I work with:
        </p>

        {/* Skills Grid */}
        <div className="w-2/4 m-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {skillsWithColors.map((skill, index) => (
            <div
              key={index}
              className={`skill-card text-white p-3 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 ${skill.color} hover:bg-yellow-400 hover:text-black ${
                isVisible ? 'skill-item visible' : 'skill-item'
              }`}
              style={{
                animationDelay: `${index * 500}ms`, // Staggered fade-in delay
              }}
            >
              <h3 className="text-md font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
