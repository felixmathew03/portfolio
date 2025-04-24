import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled ? 'bg-transparent text-gray-900' : 'bg-gradient-to-r from-[#d8c4bd] to-[#89716e] text-white'
      } p-6 shadow-md sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold font-ultra">PORTFOLIO</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-yellow-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="hover:text-yellow-400 transition-colors"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="hover:text-yellow-400 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="education"
                smooth={true}
                duration={500}
                className="hover:text-yellow-400 transition-colors"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-yellow-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4 mt-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="block text-white hover:text-yellow-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="hover:text-yellow-400 transition-colors"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="block text-white hover:text-yellow-400 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="education"
                smooth={true}
                duration={500}
                className="hover:text-yellow-400 transition-colors"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="block text-white hover:text-yellow-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
