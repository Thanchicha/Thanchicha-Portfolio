import { useState, useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function PortfolioShell({ children }) {
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
      {children}
      <footer className="pb-12 pt-4 px-6 text-gray-500 dark:text-gray-400 text-[11px] md:text-xs font-mono font-semibold bg-bg-main">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-200 dark:border-gray-800 pt-8">
          <div>© 2026 Thanchicha Hempichit. All rights reserved.</div>
          <div>Product • Business • Data • Technology</div>
        </div>
      </footer>
    </div>
  );
}

function WorkIndexPage() {
  return (
    <main className="min-h-screen px-6 pt-36 md:px-12 lg:px-20">
      <h1 className="text-4xl font-bold text-text-primary">Selected Work</h1>
    </main>
  );
}

function CaseStudyPage() {
  const { slug } = useParams();
  const title = slug === 'cosaki' ? 'Cosaki Case Study' : 'Project Case Study';

  return (
    <main className="min-h-screen px-6 pt-36 md:px-12 lg:px-20">
      <h1 className="text-4xl font-bold text-text-primary">{title}</h1>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="min-h-screen px-6 pt-36 md:px-12 lg:px-20">
      <h1 className="text-4xl font-bold text-text-primary">Page not found</h1>
    </main>
  );
}

function App() {
  return (
    <PortfolioShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkIndexPage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PortfolioShell>
  );
}

export default App;
