// src/components/Footer.tsx
import Link from 'next/link';
import { FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-16 pb-8">
        
        {/* Upgraded Call to Action Section */}
        <div className="bg-gray-900 text-white p-8 rounded-lg text-center shadow-xl mb-12 dark:bg-gray-800">
          <h2 className="text-3xl font-bold mb-3">Become Part of the Journey</h2>
          <p className="max-w-2xl mx-auto mb-6 text-gray-300">
            Follow my work, tutorials, and insights on development and content creation.
          </p>
          <div className="flex justify-center items-center flex-wrap gap-4">
            <a 
              href="https://www.youtube.com/@nickonindia?sub_confirmation=1" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              <FaYoutube />
              Subscribe on YouTube
            </a>
            <a 
              href="https://www.linkedin.com/in/nickonindia" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-300"
            >
              <FaLinkedin />
              Follow on LinkedIn
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
            <Link href="/services" className="text-gray-600 hover:text-indigo-600 transition-colors dark:text-gray-300 dark:hover:text-indigo-400">
              Services
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
