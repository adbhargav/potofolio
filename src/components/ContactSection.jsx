import React from 'react';
import { MdEmail } from 'react-icons/md';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">
          📩 Contact Me
        </h2>

        <p className="text-gray-300 mb-8 text-lg">
          Have a question or want to work together? Feel free to reach out by email!
        </p>

        <a
          href="mailto:bhargavandhe202@gmail.com"
          className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all shadow-lg"
        >
          <MdEmail className="text-xl" /> Send Email
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
