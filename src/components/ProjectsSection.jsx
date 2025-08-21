import React from 'react';

const projects = [
  {
    title: 'AI Club Website',
    description: 'Official website with Firebase Auth, animated dashboard, and admin panel.',
    tech: ['React', 'Firebase', 'Tailwind'],
    link: 'https://ai-club-mu.vercel.app/',
    github: 'https://github.com/adbhargav/ai_club'
  },
  {
    title: 'Weather Chatbot',
    description: 'Enter your city and it display the temperature .',
    tech: ['React', 'Node.js', 'HuggingFace'],
    link: 'https://weather-chatbot-5l9x.vercel.app/',
    github: 'https://github.com/adbhargav/Weather_Chatbot'
  },
  {
    title: 'ABS ACADEMY',
    description: 'User Friendly Educational website consistes of courses',
    tech: ['Html','Css','Java Script'],
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

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-cyan-700/20 text-cyan-400 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cyan-400 hover:underline"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cyan-400 hover:underline"
                >
                  GitHub
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
