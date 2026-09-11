import { Link, useSearchParams } from 'react-router-dom';
import { projects, supportingProjects } from '../content/projects';

function projectSkills(project) {
  return [...(project.tags || []), ...(project.skills?.hard || []), ...(project.skills?.soft || [])];
}

function ProjectCard({ project, supporting = false, onSkillSelect }) {
  return (
    <article className="card flex flex-col bg-white p-6 dark:bg-[#110f17]">
      <div className="mb-4 font-mono text-xs uppercase tracking-widest text-[#EC4899]">{project.category}</div>
      <h2 className="text-2xl font-bold text-text-primary">{project.title}</h2>
      <p className="mt-3 flex-grow text-sm leading-relaxed text-text-secondary">{project.summary}</p>
      {project.award && <p className="mt-4 font-mono text-xs font-semibold text-[#8b5cf6]">{project.award}</p>}
      <div className="mt-6 flex flex-wrap gap-2">{project.tags?.slice(0, 4).map((tag) => <button key={tag} type="button" onClick={() => onSkillSelect(tag)} aria-label={`Filter by ${tag}`} className="min-h-9 rounded-full bg-[#f1f5f9] px-3 py-1 text-xs text-text-secondary transition-colors hover:bg-[#e0e7ff] hover:text-[#4338ca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1] dark:bg-gray-800 dark:hover:bg-[#29263d]">#{tag}</button>)}</div>
      {!supporting && <Link to={`/work/${project.slug}`} aria-label={`Open ${project.title} case study`} className="mt-7 font-mono text-sm font-bold text-[#6366F1]">Open case study →</Link>}
    </article>
  );
}

export default function WorkIndexPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSkill = searchParams.get('skill') || '';
  const allSkills = [...new Set([...projects, ...supportingProjects].flatMap(projectSkills))].sort((a, b) => a.localeCompare(b));
  const matchesSkill = (project) => !activeSkill || projectSkills(project).some((skill) => skill.toLowerCase() === activeSkill.toLowerCase());
  const visibleProjects = projects.filter(matchesSkill);
  const visibleSupportingProjects = supportingProjects.filter(matchesSkill);
  const resultCount = visibleProjects.length + visibleSupportingProjects.length;
  const selectSkill = (skill) => setSearchParams(skill ? { skill } : {});

  return <main className="min-h-screen px-6 pb-24 pt-36 md:px-12 lg:px-20"><div className="mx-auto max-w-[1400px]"><p className="section-header">02 SELECTED_WORK</p><h1 className="mt-8 max-w-3xl text-4xl font-bold tracking-tight text-text-primary md:text-6xl">Projects where product thinking meets practical delivery.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">A selection of startup, research, AI, and delivery work. Each page separates the problem, contribution, evidence, and what is still being validated.</p><section aria-labelledby="work-skill-filter" className="mt-12 border-y border-gray-200 py-6 dark:border-gray-800"><div className="flex flex-wrap items-baseline justify-between gap-3"><h2 id="work-skill-filter" className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted">Explore by skill</h2><p className="text-sm text-text-secondary">{resultCount} {resultCount === 1 ? 'project' : 'projects'}</p></div><div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter projects by skill"><button type="button" aria-pressed={!activeSkill} onClick={() => selectSkill('')} className="min-h-10 rounded-full border border-[#6366F1] px-4 text-sm font-semibold text-[#4338ca] transition-colors hover:bg-[#eef2ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1] dark:text-[#a5b4fc]">All projects</button>{allSkills.map((skill) => <button key={skill} type="button" aria-pressed={activeSkill.toLowerCase() === skill.toLowerCase()} onClick={() => selectSkill(skill)} className="min-h-10 rounded-full border border-gray-200 px-4 text-sm text-text-secondary transition-colors hover:border-[#a5b4fc] hover:bg-[#eef2ff] hover:text-[#4338ca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1] dark:border-gray-700 dark:hover:bg-[#211d35]">#{skill}</button>)}</div></section>{resultCount === 0 ? <p className="mt-14 text-lg text-text-secondary">No projects match #{activeSkill} yet.</p> : <><div className="mt-14 grid gap-6 md:grid-cols-2">{visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} onSkillSelect={selectSkill} />)}</div>{visibleSupportingProjects.length > 0 && <div className="mt-20"><p className="section-header mb-8">SUPPORTING_WORK</p><div className="grid gap-6 md:grid-cols-3">{visibleSupportingProjects.map((project) => <ProjectCard key={project.slug} project={project} supporting onSkillSelect={selectSkill} />)}</div></div>}</>}</div></main>;
}
