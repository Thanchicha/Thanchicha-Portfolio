import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return false; // Based on the screenshots, light mode seems to be the preferred default for this aesthetic
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <main>
        <Hero />
        <About />
        <Process />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <footer className="pb-12 pt-4 px-6 text-gray-500 dark:text-gray-400 text-[11px] md:text-xs font-mono font-semibold bg-bg-main">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-200 dark:border-gray-800 pt-8">
          <div>© 2026 Thanchicha Hempichit. All rights reserved.</div>
          <div>Product • Business • Data • Technology</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
