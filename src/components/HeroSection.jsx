import React from 'react';
import ResumeButton from './ResumeButton'; // 💾 Import ResumeButton

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white text-center px-4 relative overflow-hidden"
    >
      {/* Glowing Animated Background Circles */}
      <div className="absolute w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse -bottom-20 -right-20"></div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">
        Hi, I’m <span className="text-blue-500 drop-shadow-md animate-glow">Bhargav</span>
      </h1>

      <p className="text-lg md:text-2xl text-gray-300 mb-8 animate-fadeInUp delay-100">
        A passionate <span className="text-pink-400 font-semibold">Front-End Developer</span> crafting stunning UIs.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-6 animate-fadeInUp delay-200">
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
        >
          🚀 View Projects
        </a>
        <a
          href="#contact"
          className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
        >
          📩 Contact Me
        </a>
      </div>

      {/* Resume Button */}
      <div className="mt-6 animate-fadeInUp delay-300">
        <ResumeButton />
      </div>
    </section>
  );
};

export default HeroSection;
