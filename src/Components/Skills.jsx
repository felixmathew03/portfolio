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
    { name: 'AWS', logo: '/images/aws.svg', color: 'bg-blue-500' },
    { name: 'GitHub', logo: '/images/git.svg', color: 'bg-gray-400' }, 
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
      className={`py-20 bg-gradient-to-r from-[#f0e7d8] to-[#d1f7ff] h-full flex items-center text-gray-800 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">
          My Technical <span className="text-yellow-500">Skills</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-600">
          As a Full-Stack Developer, I have hands-on experience with a wide range of technologies. 
          Below are some of the core technologies that I work with:
        </p>

        {/* Skills Grid */}
        <div className="lg:w-4/5 sm:w-full md:w-full m-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsWithLogos.map((skill, index) => (
            <div
              key={index}
              className={`skill-card text-white p-6 rounded-full shadow-lg  transition-all duration-300 ease-in-out hover:shadow-2xl hover:bg-opacity-90 ${skill.color} ${
                isVisible ? 'skill-item visible' : 'skill-item'
              }`}
              style={{
                animationDelay: `${index * 200}ms`, // Staggered fade-in delay
                opacity: isVisible ? 1 : 0, // Fade-in effect
                transition: 'opacity 1s ease-in-out, transform 0.4s ease', // Explicit transition on opacity and transform
              }}
            >
              <div className="flex flex-col items-center justify-center group"> {/* Grouping the image and text together */}
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-20 h-20 mb-4 transition-all duration-300 ease-in-out transform hover:rotate-12" // Icon rotation effect on hover
                />
                <h3 className="text-md font-semibold mt-3  duration-500 transform transition-transform translate-y-4  group-hover:translate-y-0"> 
                  {/* Fade-in text */}
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
