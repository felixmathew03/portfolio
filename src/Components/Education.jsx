import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLaptopCode, FaUniversity, FaSchool } from 'react-icons/fa';

const educationData = [
  {
    icon: <FaLaptopCode className="text-[#14b8a6] text-4xl mb-4" />,
    title: 'MERN Stack Course',
    institution: 'Synnefo Solutions',
    year: 'Completed: 2024',
    description:
      'Built full-stack apps using MongoDB, Express, React, Node. Real-time chat app, REST APIs & deployments included.',
  },
  {
    icon: <FaUniversity className="text-[#14b8a6] text-4xl mb-4" />,
    title: 'BCA - Bachelor of Computer Applications',
    institution: 'Mahatma Gandhi University',
    year: 'Graduated: 2024',
    description:
      'Studied core programming, DBMS, web development & data structures. Final project built with Django and PostgreSQL.',
  },
  {
    icon: <FaSchool className="text-[#14b8a6] text-4xl mb-4" />,
    title: 'Higher Secondary Education',
    institution: 'St. George HSS, Aruvithura',
    year: 'Graduated: 2021',
    description:
      'Completed Science stream with Math, Physics, and Biology. Focused on analytical problem solving and fundamentals.',
  },
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-10 lg:px-32 bg-black text-white"
    >
      <h2 className="text-5xl md:text-6xl font-bold font-abril text-center mb-20 text-white">
        My <span className="text-[#14b8a6]">Education</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {educationData.map((item, index) => (
          <div key={index} data-aos="zoom-in" className="flip-card">
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.institution}</p>
                <p className="text-xs italic text-slate-400">{item.year}</p>
              </div>

              {/* Back */}
              <div className="flip-card-back">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
