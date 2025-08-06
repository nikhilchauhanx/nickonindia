// src/components/CallToAction.tsx
import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Import the X icon

const CallToAction = () => {
  return (
    // Changed from indigo to a dark gray/black theme
    <div className="bg-gray-900 text-white p-8 rounded-lg text-center shadow-xl">
      <h2 className="text-3xl font-bold mb-3">Let's Connect</h2>
      <p className="max-w-2xl mx-auto mb-6 text-gray-300">
        I'm currently open to new opportunities and collaborations. If you have a project in mind, a question, or just want to say hello, my inbox is always open.
      </p>
      <div className="flex justify-center items-center gap-6">
        <a 
          href="mailto:nikhilchauhan0618@gmail.com" 
          className="flex items-center gap-2 bg-white text-gray-900 font-bold py-2 px-5 rounded-lg hover:bg-gray-200 transition-colors duration-300"
        >
          <FaEnvelope />
          Email Me
        </a>
        <a 
          href="https://linkedin.com/in/nickonindia" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-400 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-3xl" />
        </a>
        <a 
          href="https://github.com/nikhilchauhanx" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-400 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub className="text-3xl" />
        </a>
        {/* Added Instagram and X (Twitter) links */}
        <a 
          href="https://x.com/nickonindia" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-400 transition-colors"
          aria-label="X (Twitter)"
        >
          <FaXTwitter className="text-3xl" />
        </a>
        <a 
          href="https://instagram.com/nickonindia" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-400 transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram className="text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
