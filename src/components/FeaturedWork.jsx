import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedWork({ projects }) {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const activeProject = projects[activeIndex];

  useEffect(() => {
    if (reduceMotion || paused || projects.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused, projects.length, reduceMotion]);

  const goTo = (direction) => {
    setActiveIndex((current) => (current + direction + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="border-t border-gray-200 dark:border-gray-800 px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="section-header mb-8">03 STARTUP_AND_INTERNSHIP</div>
        <div
          className="card overflow-hidden bg-white dark:bg-[#110f17]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="grid gap-8 p-7 md:grid-cols-[1.2fr_0.8fr] md:p-12">
            <motion.div
              key={activeProject.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-text-muted">
                <span className="text-[#EC4899]">{activeProject.category}</span>
                <span aria-hidden="true">•</span>
                <span>{activeProject.date}</span>
              </div>
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-text-primary md:text-5xl">{activeProject.title}</h2>
              <p className="mb-5 max-w-2xl text-xl leading-relaxed text-text-primary">{activeProject.headline}</p>
              <p className="mb-8 max-w-2xl leading-relaxed text-text-secondary">{activeProject.summary}</p>
              <Link to={`/work/${activeProject.slug}`} className="inline-flex items-center gap-2 font-mono text-sm font-bold text-[#6366F1] hover:gap-3 transition-all">
                Read case study <ExternalLink size={16} />
              </Link>
            </motion.div>

            <div className="flex flex-col justify-between rounded-2xl bg-[#f8f7ff] p-6 dark:bg-[#1a1724]">
              <div>
                <div className="mb-5 font-mono text-xs uppercase tracking-widest text-text-muted">Evidence snapshot</div>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {activeProject.proof.length} verified proof points documented in the case study, covering the context, contribution, and learning from this work.
                </p>
                <div className="mt-5 border-t border-gray-200 pt-4 text-sm text-text-secondary dark:border-gray-700">
                  <span className="font-mono text-xs uppercase tracking-widest text-text-muted">Role</span>
                  <div className="mt-2">{activeProject.role}</div>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-2" aria-label="Featured project navigation">
                  {projects.map((project, index) => (
                    <button key={project.slug} type="button" aria-label={`Show ${project.title}`} aria-pressed={index === activeIndex} onClick={() => setActiveIndex(index)} className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-[#6366F1]' : 'w-2 bg-[#cbd5e1] dark:bg-gray-600'}`} />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button type="button" aria-label="Previous featured project" onClick={() => goTo(-1)} className="rounded-full border border-gray-200 p-2 text-text-secondary hover:border-[#6366F1] hover:text-[#6366F1] dark:border-gray-700"><ArrowLeft size={16} /></button>
                  <button type="button" aria-label="Next featured project" onClick={() => goTo(1)} className="rounded-full border border-gray-200 p-2 text-text-secondary hover:border-[#6366F1] hover:text-[#6366F1] dark:border-gray-700"><ArrowRight size={16} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
