import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLaptopCode, FaUniversity, FaSchool } from "react-icons/fa";

const educationData = [
  {
    icon: <FaLaptopCode className="text-[#14b8a6] text-5xl mb-4" />,
    title: "MERN Stack Course",
    institution: "Synnefo Solutions",
    year: "Completed: 2024",
    description:
      "Built full-stack apps using MongoDB, Express, React, Node. Real-time chat app, REST APIs & deployments included.",
  },
  {
    icon: <FaUniversity className="text-[#14b8a6] text-5xl mb-4" />,
    title: "BCA - Bachelor of Computer Applications",
    institution: "Mahatma Gandhi University",
    year: "Graduated: 2024",
    description:
      "Studied core programming, DBMS, web development & data structures. Final project built with Django and PostgreSQL.",
  },
  {
    icon: <FaSchool className="text-[#14b8a6] text-5xl mb-4" />,
    title: "Higher Secondary Education",
    institution: "St. George HSS, Aruvithura",
    year: "Graduated: 2021",
    description:
      "Completed Science stream with Math, Physics, and Biology. Focused on analytical problem solving and fundamentals.",
  },
];

export default function Education() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 5000;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrent((prev) => (prev === educationData.length - 1 ? 0 : prev + 1)),
      delay
    );
    return () => resetTimeout();
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? educationData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === educationData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="education" className="p-8 flex flex-col items-center justify-between gap-10 bg-transparent text-white overflow-hidden">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-extrabold text-white tracking-wide"
      >
        Education
      </motion.h1>

      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="  flex flex-col items-center text-center w-2xl md:max-w-3xl bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl" 
        >
          {educationData[current].icon}
          <h2 className="text-3xl font-bold">{educationData[current].title}</h2>
          <h3 className="text-xl text-[#14b8a6] mt-2">
            {educationData[current].institution}
          </h3>
          <p className="text-sm text-gray-300 mt-1">{educationData[current].year}</p>
          <p className="mt-4 text-base  leading-relaxed">
            {educationData[current].description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className=" flex gap-3">
        {educationData.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === current ? "bg-[#14b8a6]" : "bg-gray-500"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* Arrows */}
      <div className=" flex gap-5 justify-center items-center px-6  ">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/70 text-white hover:text-black font-bold rounded-full transition"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/70 text-white hover:text-black font-bold rounded-full transition"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
