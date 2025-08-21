import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, name: 'Home', href: '#home' },
    { id: 2, name: 'About', href: '#about' },
    { id: 3, name: 'Projects', href: '#projects' },
    { id: 4, name: 'Skills', href: '#skills' },
    { id: 5, name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-md text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-cyan-400 tracking-wide">
          Bhargav
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {links.map(({ id, name, href }) => (
            <li key={id}>
              <a href={href} className="hover:text-cyan-400 transition duration-200">
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-10 text-2xl transform transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {links.map(({ id, name, href }) => (
            <a
              key={id}
              href={href}
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition duration-200"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
