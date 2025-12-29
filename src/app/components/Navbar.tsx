"use client";

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Cpu, Activity } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    
    // Check initial theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const links = ['About', 'Skills', 'Works', 'Contact'];

  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-500 ${isScrolled ? 'pt-4' : 'pt-8'}`}>
      <nav className={`
        flex items-center justify-between gap-6 md:gap-12 px-6 py-3 md:px-8 rounded-full border transition-all duration-500
        ${isScrolled 
          ? 'bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-zinc-200 dark:border-zinc-800' 
          : 'bg-white/40 dark:bg-zinc-950/40 backdrop-blur-md border-zinc-100 dark:border-white/5 shadow-sm'}
      `}>
        
        {/* LOGO: Neural Style */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center">
             <Cpu className="text-red-600 dark:text-red-500 animate-pulse" size={18} />
             <div className="absolute inset-0 bg-red-600/20 blur-md rounded-full group-hover:bg-red-600/40 transition-all"></div>
          </div>
          <span className="font-sans font-black text-xl tracking-tighter text-zinc-900 dark:text-white">
            M<span className="text-red-600 italic group-hover:not-italic transition-all">L</span>
          </span>
        </a>
        
        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-red-600 dark:hover:text-red-500 transition-all relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </div>

        {/* ACTIONS: Theme & Hire */}
        <div className="flex items-center gap-4 border-l border-zinc-200 dark:border-zinc-800 pl-6">
          <button 
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 hover:bg-red-600 dark:hover:bg-red-600 group transition-all duration-500"
            aria-label="Toggle Theme"
          >
            <div className="relative z-10 text-zinc-500 dark:text-zinc-400 group-hover:text-white transition-colors">
              {isDark ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
            </div>
          </button>

          <a href="#contact" className="hidden sm:flex items-center gap-2 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-[9px] font-black uppercase tracking-[0.2em] px-6 py-2.5 rounded-full hover:bg-red-600 dark:hover:bg-red-600 hover:text-white transition-all transform active:scale-95 shadow-lg shadow-zinc-950/10 dark:shadow-none">
            <Activity size={12} className="animate-pulse" />
            Hire Me
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;