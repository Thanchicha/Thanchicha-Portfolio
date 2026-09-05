import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

export default function Navbar({ toggleTheme, isDark }) {
  const [time, setTime] = useState("");
  const { scrollYProgress } = useScroll();
  const [scrollPercent, setScrollPercent] = useState(0);
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, timeZone: 'Asia/Bangkok' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    
    const updateScroll = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.round((scrolled / max) * 100);
      setScrollPercent(percent || 0);
    };
    window.addEventListener('scroll', updateScroll);
    updateScroll();
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-[#EC4899] transform origin-left z-50" style={{ scaleX }} />
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed w-full top-0 z-40 bg-bg-main/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 font-mono text-xs md:text-sm"
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center gap-4">
          
          {/* Logo Section */}
          <div className="flex items-center text-text-primary font-bold tracking-widest whitespace-nowrap">
            <span className="text-primary mr-2">&gt;_</span> 
            <span>[TH]</span> 
            <span className="text-text-muted mx-2">/</span> 
            <span className="text-text-secondary hidden sm:inline">PORTFOLIO_v2.0</span>
            <span className="text-text-secondary sm:hidden">PTF_v2.0</span>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex justify-center items-center gap-6 xl:gap-8 font-semibold uppercase tracking-widest text-text-muted">
            <a href="#hero" className="hover:text-primary transition-colors">Overview</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#process" className="hover:text-primary transition-colors">Process</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#timeline" className="hover:text-primary transition-colors">Timeline</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Right Section: Info & Controls */}
          <div className="flex justify-end items-center gap-4 md:gap-6 whitespace-nowrap text-text-secondary">
            <span className="hidden xl:inline">{time} BKK</span>
            <div className="hidden xl:flex items-center gap-2">
              <span className="w-8 text-right">{scrollPercent}%</span>
              <div className="w-12 h-[2px] bg-gray-200 dark:bg-gray-800 relative">
                <motion.div className="absolute top-0 left-0 h-full bg-primary" style={{ width: `${scrollPercent}%` }} />
              </div>
            </div>
            
            <button 
              onClick={toggleTheme}
              className="hover:text-primary transition-colors ml-auto lg:ml-0"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button 
              className="lg:hidden hover:text-primary transition-colors ml-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-bg-main overflow-hidden shadow-xl"
            >
              <div className="flex flex-col py-6 px-6 gap-4 font-semibold uppercase tracking-widest text-text-muted text-sm text-center">
                <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary py-2 transition-colors">Overview</a>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary py-2 transition-colors">About</a>
                <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary py-2 transition-colors">Process</a>
                <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary py-2 transition-colors">Skills</a>
                <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary py-2 transition-colors">Projects</a>
                <a href="#timeline" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary py-2 transition-colors">Timeline</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary py-2 transition-colors">Contact</a>
                
                {/* Mobile time & scroll info */}
                <div className="flex flex-col items-center gap-2 mt-4 pt-6 border-t border-gray-200 dark:border-gray-800 text-text-secondary text-xs">
                  <span>{time} BKK</span>
                  <span>{scrollPercent}% scrolled</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
