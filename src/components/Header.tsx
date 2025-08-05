// src/components/Header.tsx
'use client'; // This component uses hooks, so it must be a client component.

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Journal', href: '/blog' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <nav className="max-w-4xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Left side: Your Name/Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
          nickonindia
        </Link>

        {/* Right side: Navigation Links */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => {
            // This logic highlights the active link
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-md font-medium transition-colors ${
                  isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
