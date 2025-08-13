// src/app/bio/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { bioLinks, BioLink } from '@/lib/bio-data';
import { FaCheckCircle, FaSun, FaMoon, FaQrcode, FaYoutube, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IconType } from 'react-icons';

// --- SERVER-SIDE LOGIC ---

// Filter links based on schedule
const getVisibleLinks = (): BioLink[] => {
  const now = new Date();
  return bioLinks.filter(link => {
    if (link.startDate && new Date(link.startDate) > now) {
      return false; // Link hasn't started yet
    }
    if (link.endDate && new Date(link.endDate) < now) {
      return false; // Link has expired
    }
    return true;
  });
};

export const metadata: Metadata = {
  title: 'Nickon India | Links',
  description: 'All my official links in one place. Connect with me on YouTube, LinkedIn, GitHub, and more.',
};

// --- CLIENT-SIDE COMPONENTS ---

const ThemeToggle = () => {
  // In a real app, this would use your ThemeProvider. For this self-contained
  // component, we'll use a simple localStorage toggle.
  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button onClick={toggleTheme} className="absolute top-4 right-4 p-2 rounded-full bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm">
      <FaSun className="hidden dark:block" />
      <FaMoon className="dark:hidden" />
    </button>
  );
};

const LinkCard = ({ link }: { link: BioLink }) => {
  const Icon = link.icon;
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center w-full p-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      {link.thumbnail && <Image src={link.thumbnail} alt={link.title} width={48} height={48} className="rounded-md mr-4" />}
      {Icon && !link.thumbnail && <Icon className="text-2xl text-gray-500 dark:text-gray-400 mx-4" />}
      <span className="flex-1 font-semibold text-gray-800 dark:text-gray-200 text-center">{link.title}</span>
      <span className="text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors px-4">→</span>
    </a>
  );
};

const VideoCard = ({ link }: { link: BioLink }) => {
  return (
    <div className="w-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={link.url}
          title={link.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="p-3 font-semibold text-center text-sm">{link.title}</p>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---

export default function BioPage() {
  const visibleLinks = getVisibleLinks();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div 
        className="absolute inset-0 h-1/2 bg-gradient-to-b from-indigo-200 dark:from-indigo-900/50 to-transparent"
        aria-hidden="true"
      />
      <ThemeToggle />
      <main className="relative z-10 flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto">
          
          {/* Profile Section */}
          <div className="text-center mb-8 pt-12">
            <Image
              src="/logo.png"
              alt="Nickon India Logo"
              width={96}
              height={96}
              className="rounded-full mx-auto mb-4 border-4 border-white dark:border-gray-700 shadow-lg"
              priority
            />
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">@nickonindia</h1>
              <FaCheckCircle className="text-indigo-500" />
            </div>
            <p className="text-md text-gray-600 dark:text-gray-400">Developer & Creator | Building AI-Powered Apps</p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            {visibleLinks.map((link) => {
              if (link.type === 'video') {
                return <VideoCard key={link.title} link={link} />;
              }
              return <LinkCard key={link.title} link={link} />;
            })}
          </div>

          {/* Social Icons Footer */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <a href="https://youtube.com/@nickonindia" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 transition-colors"><FaYoutube className="text-2xl" /></a>
            <a href="https://linkedin.com/in/nickonindia" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors"><FaLinkedin className="text-2xl" /></a>
            <a href="https://github.com/nikhilchauhanx" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"><FaGithub className="text-2xl" /></a>
            <a href="https://x.com/nickonindia" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"><FaXTwitter className="text-2xl" /></a>
            <a href="https://instagram.com/nickonindia" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors"><FaInstagram className="text-2xl" /></a>
          </div>

        </div>
      </main>
    </div>
  );
}
