// src/components/ThemeToggleButton.tsx
'use client';

import { useTheme } from '../providers/ThemeProvider';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <FaMoon className="text-lg" /> : <FaSun className="text-lg" />}
    </button>
  );
};

export default ThemeToggleButton;
