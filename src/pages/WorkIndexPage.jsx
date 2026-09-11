import { Link } from 'react-router-dom';
import { projects, supportingProjects } from '../content/projects';

function ProjectCard({ project, supporting = false }) {
  return (
    <article className="card flex flex-col bg-white p-6 dark:bg-[#110f17]">
      <div className="mb-4 font-mono text-xs uppercase tracking-widest text-[#EC4899]">{project.category}</div>
      <h2 className="text-2xl font-bold text-text-primary">{project.title}</h2>
      <p className="mt-3 flex-grow text-sm leading-relaxed text-text-secondary">{project.summary}</p>
      {project.award && <p className="mt-4 font-mono text-xs font-semibold text-[#8b5cf6]">{project.award}</p>}
      <div className="mt-6 flex flex-wrap gap-2">{project.tags?.slice(0, 3).map((tag) => <span key={tag} className="rounded-full bg-[#f1f5f9] px-3 py-1 text-xs text-text-secondary dark:bg-gray-800">{tag}</span>)}</div>
      {!supporting && <Link to={`/work/${project.slug}`} aria-label={`Open ${project.title} case study`} className="mt-7 font-mono text-sm font-bold text-[#6366F1]">Open case study →</Link>}
    </article>
  );
}

export default function WorkIndexPage() {
  return <main className="min-h-screen px-6 pb-24 pt-36 md:px-12 lg:px-20"><div className="mx-auto max-w-[1400px]"><p className="section-header">02 SELECTED_WORK</p><h1 className="mt-8 max-w-3xl text-4xl font-bold tracking-tight text-text-primary md:text-6xl">Projects where product thinking meets practical delivery.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">A selection of startup, research, AI, and delivery work. Each page separates the problem, contribution, evidence, and what is still being validated.</p><div className="mt-14 grid gap-6 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div><div className="mt-20"><p className="section-header mb-8">SUPPORTING_WORK</p><div className="grid gap-6 md:grid-cols-3">{supportingProjects.map((project) => <ProjectCard key={project.slug} project={project} supporting />)}</div></div></div></main>;
}
