// src/components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggleButton from './ThemeToggleButton';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-800">
      <nav className="max-w-4xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        
        <div className="flex items-center gap-6">
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
            <Link 
              href="/services" 
              className={`transition-colors ${pathname.startsWith('/services') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'}`}
            >
              Services
            </Link>
            <Link 
              href="/blog" 
              className={`transition-colors ${pathname.startsWith('/blog') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'}`}
            >
              Journal
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggleButton />
          <Link 
            href="/hire-me" 
            className="inline-block bg-indigo-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md text-sm"
          >
            Hire Me
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
