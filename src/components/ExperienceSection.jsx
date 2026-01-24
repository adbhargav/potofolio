import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { MdLocationOn, MdDateRange } from 'react-icons/md';

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-900 text-white px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-cyan-400 flex items-center justify-center gap-2">
          <FaBriefcase className="text-cyan-300" /> Experience
        </h2>

        <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-left">
          <h3 className="text-2xl font-semibold text-white mb-2">
            Web Developer Intern
          </h3>
          <div className="flex items-center text-gray-400 gap-4 text-sm mb-4">
            <span className="flex items-center gap-1">
              <MdLocationOn className="text-cyan-400" /> Maniora
            </span>
            <span className="flex items-center gap-1">
              <MdDateRange className="text-cyan-400" /> July 2025 – Present
            </span>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>
              Collaborated with the web development team to build and maintain
              responsive, user-friendly websites and dashboards.
            </li>
            <li>
              Worked on frontend development using technologies like{' '}
              <span className="text-cyan-400 font-medium">React.js</span>,{' '}
              <span className="text-cyan-400 font-medium">Tailwind CSS</span>,
              and <span className="text-cyan-400 font-medium">JavaScript</span>.
            </li>
            <li>
              Contributed to optimizing UI/UX and improving website performance
              and accessibility.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
