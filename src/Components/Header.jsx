import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // If scrolled down, set isScrolled to true
      } else {
        setIsScrolled(false); // If at the top, set isScrolled to false
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
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
              <a href="#about" className="hover:text-yellow-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-yellow-400 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow-400 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-yellow-400 transition-colors">
                Education
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation (Hamburger Menu) */}
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
              <a href="#about" className="block text-white hover:text-yellow-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-yellow-400 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="block text-white hover:text-yellow-400 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-yellow-400 transition-colors">
                Education
              </a>
            </li>
            <li>
              <a href="#contact" className="block text-white hover:text-yellow-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
