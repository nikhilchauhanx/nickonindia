// src/components/Footer.tsx
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    // Added dark mode classes for the background and border
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-16 pb-8">
        
        {/* Call to Action Section */}
        <div className="bg-gray-900 text-white p-8 rounded-lg text-center shadow-xl mb-12 dark:bg-gray-800">
          <h2 className="text-3xl font-bold mb-3">Let's Connect</h2>
          <p className="max-w-2xl mx-auto mb-6 text-gray-300">
            I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to connect, feel free to reach out.
          </p>
          <div className="flex justify-center items-center flex-wrap gap-6">
            <a 
              href="mailto:nikhilchauhan0618@gmail.com" 
              className="flex items-center gap-2 bg-white text-gray-900 font-bold py-2 px-5 rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              <FaEnvelope />
              Email Me
            </a>
            <a href="https://linkedin.com/in/nickonindia" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors" aria-label="LinkedIn">
              <FaLinkedin className="text-3xl" />
            </a>
            <a href="https://github.com/nikhilchauhanx" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors" aria-label="GitHub">
              <FaGithub className="text-3xl" />
            </a>
            <a href="https://x.com/nickonindia" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors" aria-label="X (Twitter)">
              <FaXTwitter className="text-3xl" />
            </a>
            <a href="https://instagram.com/nickonindia" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors" aria-label="Instagram">
              <FaInstagram className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Standard Footer Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 font-medium text-sm">
            <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors dark:text-gray-300 dark:hover:text-indigo-400">
              Home
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-indigo-600 transition-colors dark:text-gray-300 dark:hover:text-indigo-400">
              Journal
            </Link>
          </div>
          <div className="text-center text-gray-500 text-xs dark:text-gray-400">
            <p>© {new Date().getFullYear()} Nikhil Chauhan (nickonindia)</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
