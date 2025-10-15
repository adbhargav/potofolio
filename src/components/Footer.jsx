import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12 font-sans border-t border-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h1 className="text-2xl font-bold text-blue-500 animate-pulse">Bhargav</h1>
          <p className="text-sm text-gray-400">
            Passionate <span className="text-pink-400 font-medium">MERN Stack Developer</span> building
            scalable, intelligent, and visually stunning web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-white">Quick Links</h2>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-white">Skills</h2>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Tailwind CSS</li>
            <li>Firebase</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Follow Me</h2>
          <div className="flex justify-center md:justify-start gap-4 text-xl text-gray-400">
            <a
              href="https://github.com/adbhargav"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/bhargav-andhe-13734232a/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          
              
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-blue-400">Bhargav</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
