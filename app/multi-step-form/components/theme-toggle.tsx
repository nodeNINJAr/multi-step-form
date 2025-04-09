
'use client';
import { useEffect, useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      root.classList.add('dark');
      setIsDark(true);
    } else {
      root.classList.remove('dark');
      setIsDark(false);
    }
  }, []);
   

  // 
  const toggleTheme = () => {
    const root = window.document.documentElement;

    if (isDark) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }

    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-700 dark:text-white"
    >
      {isDark ? <span className='flex justify-center items-center gap-1'><MdOutlineLightMode className='size-6 text-yellow-300' /> Light Mode</span> : <span className='flex justify-center items-center gap-1 text-gray-700'><MdOutlineDarkMode className='size-6 text-gray-700'/> Dark Mode</span>}
    </button>
  );
}
