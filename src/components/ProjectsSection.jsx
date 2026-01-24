import React from 'react';

const projects = [
  {
    title: 'AdoptEduTech– Online Course Platform',
    description:
      'A full-stack online learning platform with secure payments and admin management. Built using MongoDB, Express.js, React.js, and Node.js. Integrated Razorpay per secure online transactions.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Razorpay'],
    link: 'https://course.adoptedutech.com/'
  },
  {
    title: 'AI Club RGMCET',
    description:
      'A full-stack website for managing AI Club events and activities. Integrated Cloudinary for image upload and media management. Designed an animated admin dashboard using Tailwind CSS.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Cloudinary', 'Tailwind CSS'],
    link: 'https://aiclub-rosy.vercel.app/'
  },
  {
    title: 'Vajra Solutions',
    description:
      'A professional website for a digital and AI-based solutions company. Integrated backend services to handle contact form submissions. Designed a clean, professional UI tailored for business clients.',
    tech: ['React.js', 'Vite', 'Tailwind CSS'],
    link: 'https://vajrasolutions.tech'
  },
  {
    title: 'PixelFable 18',
    description:
      'An official event website designed for PixelFable 18 with a modern and engaging user interface. Implemented smooth animations and fully responsive layouts. Focused on performance and visual storytelling.',
    tech: ['React.js', 'Vite', 'Tailwind CSS'],
    link: 'https://pixelfable18.in'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
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

              <div className="flex justify-center text-sm font-medium">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition"
                >
                  Live Demo
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
