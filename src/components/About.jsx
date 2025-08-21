// src/components/About.jsx
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

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="bhargav.jpg" // 👉 Place a profile image in `public/`
            alt="Profile"
            className="rounded-2xl shadow-2xl w-64 h-64 object-cover"
          />
        </div>

        {/* Bio Info */}
        <div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hey! I'm <span className="text-blue-400 font-semibold">Bhargav</span>, a
            front-end developer with a passion for building beautiful and
            responsive web interfaces. My journey started with curiosity and
            grew into a love for <span className="text-pink-400">clean design</span>,
            <span className="text-yellow-300"> interactive components</span>, and
            <span className="text-green-400"> user-centric development</span>.
          </p>
          <br />
          <p className="text-gray-400">
            I'm currently exploring React, Tailwind, Firebase, and constantly
            sharpening my skills by working on side projects and internships.
            When I’m not coding, I enjoy gaming and watching tech videos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
