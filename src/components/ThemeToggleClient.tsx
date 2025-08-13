// src/components/ThemeToggleClient.tsx
'use client'; // This is now a dedicated Client Component

import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggleClient = () => {
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

export default ThemeToggleClient;
