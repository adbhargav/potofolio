import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMongodb, SiExpress } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
  { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
  { name: 'Express', icon: <SiExpress />, color: 'text-gray-300' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-400' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-sky-400' },
  { name: 'Firebase', icon: <SiFirebase />, color: 'text-yellow-300' },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-red-500' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-900 shadow-md transform transition duration-300 hover:scale-110 hover:shadow-cyan-500/30 float-icon"
            >
              <div className={`text-4xl mb-2 ${skill.color}`}>{skill.icon}</div>
              <p className="text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
