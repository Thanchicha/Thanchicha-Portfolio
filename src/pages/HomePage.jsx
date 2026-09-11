import Hero from '../components/Hero';
import About from '../components/About';
import Process from '../components/Process';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import FeaturedWork from '../components/FeaturedWork';
import ProofStrip from '../components/ProofStrip';
import { getProjectBySlug, projectContexts } from '../content/projects';

export default function HomePage() {
  const cosaki = getProjectBySlug('cosaki');
  const highlights = [cosaki, getProjectBySlug('smartprocure')];

  return (
    <main>
      <Hero />
      <About />
      <FeaturedWork projects={highlights} />
      <ProofStrip proof={cosaki.proof} />
      <section id="project-context" className="border-t border-gray-200 px-6 py-24 dark:border-gray-800 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="section-header mb-8">04 PROJECTS_BY_CONTEXT</div>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-text-secondary">Other work, grouped by the environment where I learned and contributed.</p>
          <div className="space-y-12">
            {projectContexts.map((context) => (
              <section key={context.title}>
                <h2 className="text-2xl font-bold text-text-primary">{context.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary">{context.description}</p>
                <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                  {context.projects.map((project) => (
                    <article key={project.slug} className="card p-5 bg-white dark:bg-[#110f17]">
                      <div className="font-mono text-xs uppercase tracking-widest text-[#EC4899]">{project.category}</div>
                      <h3 className="mt-3 text-lg font-bold text-text-primary">{project.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{project.summary}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <Process />
      <Skills />
      <Timeline />
      <Contact />
    </main>
  );
}
