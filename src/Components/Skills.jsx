import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiAngular,
  SiBootstrap,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiRender,
  SiVercel,
  SiNetlify,
  SiPythonanywhere,
  SiGithub,
  SiApollographql,
} from "react-icons/si";

const AwsLogo = ({ className }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M7.636 10.344c0 .246.027.446.073.592.053.146.12.306.213.479a.29.29 0 0 1 .047.153c0 .067-.04.133-.126.2l-.419.279a.32.32 0 0 1-.173.06c-.067 0-.133-.033-.2-.093a2.015 2.015 0 0 1-.239-.313 4.898 4.898 0 0 1-.206-.392c-.519.612-1.171.918-1.956.918-.559 0-1.004-.16-1.33-.479-.326-.319-.492-.745-.492-1.277 0-.565.2-1.024.605-1.37s.945-.519 1.63-.519c.226 0 .459.02.705.053.245.032.498.086.764.145v-.485c0-.506-.106-.858-.313-1.064-.212-.207-.572-.306-1.084-.306-.233 0-.472.027-.718.086a5.3 5.3 0 0 0-.718.226 2.063 2.063 0 0 1-.233.087.427.427 0 0 1-.106.02c-.093 0-.14-.067-.14-.206v-.326c0-.106.013-.186.047-.233a.496.496 0 0 1 .186-.14c.232-.12.511-.219.837-.299a4.056 4.056 0 0 1 1.038-.126c.792 0 1.37.18 1.743.539.366.359.552.905.552 1.636v2.155h.013zm-2.7 1.011c.22 0 .446-.04.685-.12.239-.08.452-.226.632-.426.106-.126.186-.266.226-.426s.067-.353.067-.579v-.279a5.855 5.855 0 0 0-.613-.113 4.938 4.938 0 0 0-.625-.04c-.446 0-.772.086-.991.266-.22.18-.326.432-.326.765 0 .313.08.545.246.705.16.167.393.247.699.247zm5.341.718c-.12 0-.2-.02-.253-.067-.053-.04-.1-.133-.14-.259L8.321 6.605c-.04-.133-.06-.22-.06-.266 0-.106.053-.166.16-.166h.652c.126 0 .213.02.259.067.053.04.093.133.133.259l1.118 4.403 1.038-4.403c.033-.133.073-.22.126-.259a.455.455 0 0 1 .266-.067h.532c.126 0 .213.02.266.067.053.04.1.133.126.259l1.051 4.457 1.151-4.457c.04-.133.086-.22.133-.259a.433.433 0 0 1 .259-.067h.619c.106 0 .166.053.166.166 0 .033-.007.067-.013.106a.944.944 0 0 1-.047.166l-1.603 5.142c-.04.133-.086.22-.14.259a.425.425 0 0 1-.253.067h-.572c-.126 0-.213-.02-.266-.067-.053-.047-.1-.133-.126-.266l-1.031-4.29-1.024 4.284c-.033.133-.073.22-.126.266s-.146.067-.266.067h-.572zm8.548.18c-.346 0-.692-.04-1.024-.12-.333-.08-.592-.166-.765-.266-.106-.06-.18-.126-.206-.186a.462.462 0 0 1-.04-.186v-.339c0-.14.053-.206.153-.206.04 0 .08.007.12.02s.1.04.166.067c.226.1.472.18.732.233.266.053.525.08.792.08.419 0 .745-.073.971-.22a.716.716 0 0 0 .346-.632.65.65 0 0 0-.18-.466c-.12-.126-.346-.239-.672-.346l-.965-.299c-.486-.153-.845-.379-1.064-.678a1.584 1.584 0 0 1-.333-.965c0-.279.06-.525.18-.738s.279-.399.479-.545c.2-.153.426-.266.692-.346.265-.082.544-.115.837-.115.146 0 .299.007.446.027.153.02.293.047.432.073.133.033.259.067.379.106.12.04.213.08.279.12.093.053.16.106.2.166.04.053.06.126.06.22v.313c0 .14-.053.213-.153.213a.7.7 0 0 1-.253-.08 3.042 3.042 0 0 0-1.277-.259c-.379 0-.678.06-.885.186-.206.126-.313.319-.313.592 0 .186.067.346.2.472s.379.253.732.366l.945.299c.479.153.825.366 1.031.639.206.273.306.585.306.931 0 .286-.06.545-.173.772-.12.226-.279.426-.486.585a2.137 2.137 0 0 1-.738.372c-.3.093-.612.14-.951.14z"/>

<g fillRule="evenodd" clipRule="evenodd">

<path d="M20.082 15.485c-2.188 1.616-5.368 2.474-8.102 2.474-3.831 0-7.284-1.417-9.891-3.772-.206-.186-.02-.439.226-.293 2.82 1.636 6.299 2.627 9.898 2.627 2.428 0 5.095-.506 7.55-1.543.365-.164.678.241.319.507z"/>

<path d="M20.993 14.448c-.279-.359-1.849-.173-2.561-.086-.213.027-.246-.16-.053-.299 1.251-.878 3.306-.625 3.545-.333.239.299-.067 2.355-1.237 3.339-.18.153-.353.073-.273-.126.266-.659.858-2.143.579-2.495z"/>

</g>
  </svg>
);

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const sectionRef = useRef(null);

  const skillCategories = {
    Frontend: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React JS", icon: SiReact },
      { name: "Angular JS", icon: SiAngular },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    Backend: [
      { name: "Python", icon: SiPython },
      { name: "Django", icon: SiDjango },
      { name: "Node JS", icon: SiNodedotjs },
      { name: "Express JS", icon: SiExpress },
    ],
    Database: [
      { name: "MySQL", icon: SiMysql },
      { name: "SQLite", icon: SiSqlite },
      { name: "MongoDB", icon: SiMongodb },
    ],
    Cloud: [
      { name: "AWS", icon: AwsLogo },
      { name: "Render", icon: SiRender },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
      { name: "PythonAnywhere", icon: SiPythonanywhere },
    ],
    Tools: [
      { name: "GitHub", icon: SiGithub },
      { name: "REST API", icon: SiApollographql },
    ],
  };

  const allSkills = Object.values(skillCategories).flat();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          allSkills.forEach((skill, index) => {
            setTimeout(() => {
              setVisibleSkills((prev) => [...prev, skill]);
            }, index * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 flex flex-col items-center text-gray-100"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 mb-4">
          ⚡ My Technical Arsenal
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl">
          From crafting sleek frontend interfaces to building powerful backend APIs, I wield a variety of tools like a digital wizard. Here's my tech magic:
        </p>
      </div>

      {/* Skill Categories */}
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="mt-16 w-full max-w-6xl">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-200 text-center mb-6">
            {category}
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {skills
              .filter((skill) => visibleSkills.find((s) => s.name === skill.name))
              .map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center justify-center w-28 h-28 p-4 rounded-2xl cursor-pointer
                      bg-white/10 backdrop-blur-xl border border-white/20 shadow-md 
                      transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.15, rotate: 5, y: -5 }}
                    whileTap={{ scale: 1.05 }}
                  > 
                    <Icon className="w-12 h-12 mb-2 text-teal-500" />
                    <span className="text-teal-500 text-sm font-semibold text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
