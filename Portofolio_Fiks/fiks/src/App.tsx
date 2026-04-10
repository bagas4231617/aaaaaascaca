import React, { useState, useEffect } from 'react';
import { Terminal, Globe, Code2, Cpu } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Certificates } from './components/Certificates';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Setup dark mode on root element
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    // Handle ESC key to close modals (delegated to child components)
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // Modal closing handled in ProjectModal component
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-white ${theme === 'dark' ? 'dark' : 'light'}`}>
      {/* Navigation */}
      <Navbar theme={theme} onThemeToggle={toggleTheme} />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <Hero />

        {/* Timeline Section */}
        <Timeline />

        {/* Certificates Section */}
        <Certificates />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400 font-mono text-sm mb-4">
            &copy; {new Date().getFullYear()} Muhammad Bagas Malik Albani. Built with React & Terminal Aesthetics.
          </p>
          <div className="flex justify-center gap-6 text-slate-600">
            <Terminal size={18} />
            <Globe size={18} />
            <Code2 size={18} />
            <Cpu size={18} />
          </div>
        </div>
      </footer>
    </div>
  );
}
