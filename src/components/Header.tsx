// src/components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggleButton from './ThemeToggleButton';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the mobile menu when the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-800">
        <nav className="max-w-4xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.png"
              alt="Nickon India Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors dark:text-gray-100 dark:hover:text-indigo-400">
              Nickon India
            </span>
          </Link>
          
          <div className="hidden sm:flex items-center gap-4 text-sm font-medium">
            <Link href="/services" className={`transition-colors ${pathname.startsWith('/services') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'}`}>
              Services
            </Link>
            {/* Added the new Projects link */}
            <Link href="/projects" className={`transition-colors ${pathname.startsWith('/projects') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'}`}>
              Projects
            </Link>
            <Link href="/blog" className={`transition-colors ${pathname.startsWith('/blog') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'}`}>
              Journal
            </Link>
            <Link href="/uses" className={`transition-colors ${pathname.startsWith('/uses') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'}`}>
              Uses
            </Link>
            <Link href="/bio" className={`transition-colors ${pathname.startsWith('/bio') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'}`}>
              Bio
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggleButton />
            <div className="hidden sm:block">
              <Link href="/hire-me" className="inline-block bg-indigo-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md text-sm">
                Hire Me
              </Link>
            </div>
            <div className="sm:hidden">
              <button onClick={() => setIsMenuOpen(true)} className="p-2" aria-label="Open menu">
                <FaBars className="text-xl" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white dark:bg-gray-900 z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out sm:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="p-2" aria-label="Close menu">
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-bold">
          <Link href="/" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
          <Link href="/services" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">Services</Link>
          <Link href="/projects" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">Projects</Link>
          <Link href="/blog" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">Journal</Link>
          <Link href="/uses" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">Uses</Link>
          <Link href="/bio" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400">Bio</Link>
          <Link href="/hire-me" className="mt-8 inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors">
            Hire Me
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
