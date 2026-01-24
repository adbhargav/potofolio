import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6 md:px-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
        👨‍💻 About Me
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
<div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden border-2 border-blue-500 shadow-2xl">
  <img
    src="bhargavimg.jpg"
    alt="Bhargav"
    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
  />
</div>

        {/* Bio Info */}
        <div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hey! I'm <span className="text-blue-400 font-semibold">Bhargav</span>, a
            passionate <span className="text-pink-400 font-semibold">MERN Stack Developer</span> who loves
            crafting modern, scalable, and user-friendly web applications.
            I enjoy turning complex problems into elegant digital solutions using
            <span className="text-green-400"> MongoDB</span>, 
            <span className="text-yellow-300"> Express</span>, 
            <span className="text-blue-400"> React</span>, and 
            <span className="text-purple-400"> Node.js</span>.
          </p>

          <br />

          <p className="text-gray-400 leading-relaxed">
            I’ve built and deployed several projects like the 
            <span className="text-cyan-400"> AI Club RGMCET Website</span>,
            <span className="text-cyan-400"> Pixel</span>, and 
            <span className="text-cyan-400"> Vajra Solutions</span>,
            where I worked on full-stack functionalities, cloud integration, and UI/UX improvements.
          </p>

          <br />

          <p className="text-gray-400 leading-relaxed">
            I'm always exploring new technologies, optimizing performance, and improving design workflows.
            When I’m not coding, I love gaming, exploring AI tools, and watching tech videos to stay inspired.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
