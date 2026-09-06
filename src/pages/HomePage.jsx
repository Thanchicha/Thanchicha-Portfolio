import Hero from '../components/Hero';
import About from '../components/About';
import Process from '../components/Process';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import FeaturedWork from '../components/FeaturedWork';
import ProofStrip from '../components/ProofStrip';
import { featuredProjects, supportingProjects } from '../content/projects';

export default function HomePage() {
  const cosaki = featuredProjects[0];
  return (
    <main>
      <Hero />
      <FeaturedWork projects={featuredProjects} />
      <ProofStrip proof={cosaki.proof} />
      <About />
      <Process />
      <Skills />
      <Timeline />
      <section id="supporting-work" className="border-t border-gray-200 dark:border-gray-800 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="section-header mb-8">07 SUPPORTING_WORK</div>
          <div className="grid gap-5 md:grid-cols-3">
            {supportingProjects.map((project) => (
              <article key={project.slug} className="card p-6 bg-white dark:bg-[#110f17]">
                <div className="mb-3 font-mono text-xs uppercase tracking-widest text-[#EC4899]">{project.category}</div>
                <h2 className="mb-3 text-xl font-bold text-text-primary">{project.title}</h2>
                <p className="text-sm leading-relaxed text-text-secondary">{project.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
