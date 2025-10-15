import React from 'react';

const projects = [
  {
    title: 'AI Club RGMCET',
    description:
      'A full MERN stack website for managing AI Club events, with Firebase Auth, Cloudinary integration, admin panel, and animated dashboard.',
    tech: ['MERN', 'Firebase', 'Cloudinary', 'Tailwind'],
    link: 'https://aiclub-rosy.vercel.app/',
    github: 'https://github.com/adbhargav/ai_club'
  },
  {
    title: 'Pixel — Photography Platform',
    description:
      'A modern platform for photographers to sell and grade images online. Built with React, Vite, and Tailwind for high performance.',
    tech: ['React', 'Vite', 'Tailwind'],
    link: 'https://pixel-eta-eight.vercel.app/',
    github: 'https://github.com/adbhargav/pixel'
  },
  {
    title: 'Vajra Solutions',
    description:
      'A professional portfolio and business website built for digital and AI-based services. Includes MongoDB backend for storing contact submissions.',
    tech: ['React', 'Vite', 'Tailwind', 'MongoDB'],
    link: 'https://vajrasolutions.tech/',
    github: 'https://github.com/adbhargav/vajrasolutions'
  },
  
  {
    title: 'ABS Academy',
    description: 'User-friendly educational website featuring interactive course pages and responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://adbhargav.github.io/ABS_Academy/',
    github: 'https://github.com/adbhargav/ABS_Academy'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300 hover:shadow-cyan-500/30"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-cyan-700/20 text-cyan-400 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between text-sm font-medium">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition"
                >
                  
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
