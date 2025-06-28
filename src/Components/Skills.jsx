import React, { useEffect, useState, useRef } from 'react';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
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
          // Start displaying skills one by one
          skillsWithLogos.forEach((skill, index) => {
            setTimeout(() => {
              setVisibleSkills((prev) => [...prev, skill]);
            }, index * 300); // Staggered delay of 300ms
          });
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
      className="py-20  border-inherit  flex items-center text-gray-800"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-teal-300 mb-6">
          My Technical <span className="text-yellow-500">Skills</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          As a Full-Stack Developer, I have hands-on experience with a wide range of technologies. 
          Below are some of the core technologies that I work with:
        </p>

       {/* Skills Infinite Scroll */}
<div className="overflow-hidden w-full py-8">
  <div className="flex animate-scroll-x w-max">
    {/* Duplicate the cards twice for looping */}
    {[...Array(2)].map((_, i) => (
      <div
        key={i}
        className="grid grid-cols-12 sm:grid-cols-12 lg:grid-cols-12 gap-8 mr-8"
      >
        {visibleSkills.map((skill, index) => (
          <div
            key={`${i}-${index}`}
            className={`skill-card w-48 h-48 text-white rounded-lg flex flex-col items-center justify-center shadow-lg transition-all duration-300 ${skill.color} ease-in-out opacity-100 translate-y-0  backdrop-blur-md`}
            style={{
              transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
              opacity: 1,
              transform: 'translateY(0)',
            }}
          >
            <div className=" flex flex-col items-center justify-center group">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-20 h-20 mb-4 transition-transform duration-300 ease-in-out transform group-hover:rotate-12"
              />
              <h3 className="text-md font-semibold mt-3">{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
</div>

      </div >
    </section>
  );
};

export default Skills; 