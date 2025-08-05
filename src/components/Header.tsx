// src/components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image'; // 1. Import the Image component
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  // This function determines the current page's title
  const getCurrentPageTitle = () => {
    if (pathname === '/') {
      return 'Home';
    }
    if (pathname.startsWith('/blog')) {
      return 'Journal';
    }
    if (pathname.startsWith('/projects')) {
      return 'Case Study';
    }
    return 'Portfolio';
  };

  const pageTitle = getCurrentPageTitle();

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <nav className="max-w-4xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        
        {/* Left side: Logo, Brand Name, and Page Title */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.png" // 2. Use the logo from the public folder
              alt="Nickon India Logo"
              width={32} // Set the desired width
              height={32} // Set the desired height
              className="rounded-full"
            />
            <span className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors">
              Nickon India
            </span>
          </Link>
          
          <span className="text-gray-300 font-light">|</span>
          <span className="text-md font-semibold text-indigo-600">{pageTitle}</span>
        </div>

        {/* Right side: Compact Navigation */}
        <div className="flex items-center gap-3 text-sm font-medium">
          <Link 
            href="/" 
            className={`transition-colors ${pathname === '/' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          >
            HOME
          </Link>
          
          <span className="text-gray-300">|</span>

          <Link 
            href="/blog" 
            className={`transition-colors ${pathname.startsWith('/blog') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          >
            JOURNAL
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
