import React, { useEffect, useState, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Skills with logos and unique colors
  const skillsWithLogos = [
    { name: 'JavaScript', logo: '/images/javascript.png', color: 'bg-yellow-500' },
    { name: 'MongoDB', logo: '/images/mongodb.svg', color: 'bg-green-400' },
    { name: 'React JS', logo: '/images/react.png', color: 'bg-blue-700' },
    { name: 'Node JS', logo: '/images/nodejs.svg', color: 'bg-green-800' },
    { name: 'Express JS', logo: '/images/expressjs.png', color: 'bg-gray-700' },
    { name: 'Bootstrap CSS', logo: '/images/bootstrap.svg', color: 'bg-purple-600' },
    { name: 'Tailwind CSS', logo: '/images/tailwind.svg', color: 'bg-teal-900' },
    { name: 'HTML', logo: '/images/html5.png', color: 'bg-orange-500' },
    { name: 'CSS', logo: '/images/css3.png', color: 'bg-blue-400' },
    { name: 'C', logo: '/images/c.png', color: 'bg-blue-800' },
    { name: 'C++', logo: '/images/c++.png', color: 'bg-blue-600' },
    { name: 'SQL', logo: '/images/sql.png', color: 'bg-red-700' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the first intersection
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-20 bg-gradient-to-r from-[#2d3748] to-[#1a202c] h-full flex items-center text-white transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
          My Technical <span className="text-yellow-400">Skills</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
          As a Full-Stack Developer, I have hands-on experience with a wide range of technologies. 
          Below are some of the core technologies that I work with:
        </p>

        {/* Skills Grid */}
        <div className="lg:w-3/5 sm:w-full md:w-full m-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {skillsWithLogos.map((skill, index) => (
            <div
              key={index}
              className={`skill-card text-white p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 ${skill.color} hover:bg-yellow-400 hover:text-black ${
                isVisible ? 'skill-item visible' : 'skill-item'
              }`}
              style={{
                animationDelay: `${index * 500}ms`, // Staggered fade-in delay
              }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 mb-4" // Adjust logo size for different screens
                />
                <h3 className="text-sm sm:text-md font-semibold">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
