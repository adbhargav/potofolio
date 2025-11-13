import React from 'react';

const ResumeButton = () => {
  return (
    <div className="mt-6">
      <a
        href="/MERN STACK RESUME.pdf" // 📄 Replace this with your actual resume path
        target="_blank"
        rel="noopener noreferrer"
        download
        className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-full shadow-md hover:bg-cyan-600 hover:scale-105 transition duration-300 animate-bounce"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeButton;
