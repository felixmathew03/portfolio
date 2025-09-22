import React, { useEffect, useState } from 'react';
import { Link as ScrollLink, Events } from 'react-scroll';

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = ['about', 'skills', 'projects', 'education', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / height) * 100;
      setScrollProgress(progress);
      setIsScrolled(scrolled > 0);
    };

    window.addEventListener('scroll', handleScroll);
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});

    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-gray-900 bg-opacity-90   mx-auto rounded-xl shadow-lg'
          : 'w-full bg-gray-900'
      }`}
    >
      <div className="p-4 md:p-6 container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold font-ultra text-white tracking-wider">PORTFOLIO</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {sections.map((section) => (
              <li key={section}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  onSetActive={() => setActiveSection(section)}
                  className={`text-sm tracking-wide py-1.5 px-4 rounded-lg transition-all duration-600 cursor-pointer ${
                    activeSection === section
                      ? ' text-white font-semibold'
                      : 'text-teal-400  hover:bg-teal-500 hover:text-black'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-4">
          <ul className="space-y-3 text-center">
            {sections.map((section) => (
              <li key={section}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveSection(section);
                  }}
                  className={`block text-sm tracking-wide rounded-lg py-2 transition ${
                    activeSection === section
                      ? 'text-teal-400 font-semibold'
                      : 'text-white hover:text-teal-400'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div className="h-1 w-full bg-transparent relative overflow-hidden rounded-b-xl">
        <div
          className="h-full bg-teal-500 transition-all duration-200 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
