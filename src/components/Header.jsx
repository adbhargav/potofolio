import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const navLinks = [
    { id: 1, name: 'Home', href: '#home' },
    { id: 2, name: 'About', href: '#about' },
    { id: 3, name: 'Projects', href: '#projects' },
    { id: 4, name: 'Skills', href: '#skills' },
    { id: 5, name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-60 backdrop-blur-md text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">Bhargav</h1>

        {/* Desktop Nav */}
        <nav className="space-x-6 hidden md:flex">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              className="hover:text-cyan-400 transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleNav} className="text-white text-xl focus:outline-none">
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {navOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-center py-4 space-y-4">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setNavOpen(false)}
              className="block text-lg text-white hover:text-cyan-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
