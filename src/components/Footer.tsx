// src/components/Footer.tsx
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-16 pb-8">
        
        {/* Simplified Call to Action Section */}
        <div className="bg-gray-900 text-white p-8 rounded-lg text-center shadow-xl mb-12 dark:bg-gray-800">
          <h2 className="text-3xl font-bold mb-3">Have a project in mind?</h2>
          <p className="max-w-2xl mx-auto mb-6 text-gray-300">
            Let's work together to build something great.
          </p>
          <Link 
            href="/hire-me"
            className="inline-block bg-white text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Get in Touch
          </Link>
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
