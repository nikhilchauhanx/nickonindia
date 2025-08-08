// src/components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggleButton from './ThemeToggleButton';

const Header = () => {
  const pathname = usePathname();

  const getCurrentPageTitle = () => {
    if (pathname === '/') return 'Home';
    if (pathname.startsWith('/services')) return 'Services';
    if (pathname.startsWith('/blog')) return 'Journal';
    if (pathname.startsWith('/projects')) return 'Case Study';
    return 'Portfolio';
  };

  const pageTitle = getCurrentPageTitle();

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-800">
      <nav className="max-w-4xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        
        <div className="flex items-center gap-3">
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
          
          <span className="text-gray-300 font-light dark:text-gray-700">|</span>
          <span className="text-md font-semibold text-indigo-600 dark:text-indigo-400">{pageTitle}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-sm font-medium">
            <Link 
              href="/" 
              className={`transition-colors ${pathname === '/' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'}`}
            >
              HOME
            </Link>
            
            <span className="text-gray-300 dark:text-gray-700">|</span>

            {/* Added the new Services link */}
            <Link 
              href="/services" 
              className={`transition-colors ${pathname.startsWith('/services') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'}`}
            >
              SERVICES
            </Link>

            <span className="text-gray-300 dark:text-gray-700">|</span>

            <Link 
              href="/blog" 
              className={`transition-colors ${pathname.startsWith('/blog') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'}`}
            >
              JOURNAL
            </Link>
          </div>
          <ThemeToggleButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;
