import { Link, useSearchParams } from 'react-router-dom';
import { projects, supportingProjects } from '../content/projects';
import WorkExplorerControls from '../components/WorkExplorerControls';
import { DEFAULT_ROLE, groupProjectsByRelevance, WORK_ROLES } from '../utils/workExplorer';

function ProjectCard({ project, onSkillSelect }) {
  return (
    <article className="card flex flex-col bg-white p-6 dark:bg-[#110f17]">
      <div className="mb-4 font-mono text-xs uppercase tracking-widest text-[#EC4899]">{project.category}</div>
      <h2 className="text-2xl font-bold text-text-primary">{project.title}</h2>
      <p className="mt-3 flex-grow text-sm leading-relaxed text-text-secondary">{project.summary}</p>
      {project.award && <p className="mt-4 font-mono text-xs font-semibold text-[#8b5cf6]">{project.award}</p>}
      <div className="mt-6 flex flex-wrap gap-2">{project.tags?.slice(0, 4).map((tag) => <button key={tag} type="button" onClick={() => onSkillSelect(tag)} aria-label={`Filter by ${tag}`} className="min-h-9 rounded-full bg-[#f1f5f9] px-3 py-1 text-xs text-text-secondary transition-colors hover:bg-[#e0e7ff] hover:text-[#4338ca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1] dark:bg-gray-800 dark:hover:bg-[#29263d]">#{tag}</button>)}</div>
      {project.sections && <Link to={`/work/${project.slug}`} aria-label={`Open ${project.title} case study`} className="mt-7 font-mono text-sm font-bold text-[#6366F1]">Open case study →</Link>}
    </article>
  );
}

function ProjectGroup({ heading, description, projects: groupProjects, onSkillSelect }) {
  if (!groupProjects.length) return null;

  const sectionId = `${heading.toLowerCase().replaceAll(' ', '-')}-work`;
  const label = heading === 'Most relevant' ? 'ROLE_FOCUS' : 'TRANSFERABLE_EXPERIENCE';

  return <section className="mt-14" aria-labelledby={sectionId}><div className="mb-7 flex flex-wrap items-end justify-between gap-3"><div><p className="section-header">{label}</p><h2 id={sectionId} className="mt-3 text-3xl font-bold tracking-tight text-text-primary">{heading}</h2></div><p className="max-w-md text-sm leading-relaxed text-text-secondary">{description}</p></div><div className="grid gap-6 md:grid-cols-2">{groupProjects.map((project) => <ProjectCard key={project.slug} project={project} onSkillSelect={onSkillSelect} />)}</div></section>;
}

export default function WorkIndexPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedRole = searchParams.get('role');
  const activeRole = WORK_ROLES.some((role) => role.slug === requestedRole) ? requestedRole : DEFAULT_ROLE;
  const activeRoleLabel = WORK_ROLES.find((role) => role.slug === activeRole)?.label;
  const search = searchParams.get('search') || '';
  const activeSkill = searchParams.get('skill') || '';
  const groupedProjects = groupProjectsByRelevance([...projects, ...supportingProjects], activeRole, { search, skill: activeSkill });
  const resultCount = groupedProjects.primary.length + groupedProjects.supporting.length;

  const updateParams = (updates) => {
    const nextParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value) nextParams.set(key, value);
      else nextParams.delete(key);
    });
    setSearchParams(nextParams);
  };

  const resetExplorer = () => setSearchParams({});

  return <main className="min-h-screen px-6 pb-24 pt-36 md:px-12 lg:px-20"><div className="mx-auto max-w-[1400px]"><p className="section-header">02 SELECTED_WORK</p><h1 className="mt-8 max-w-3xl text-4xl font-bold tracking-tight text-text-primary md:text-6xl">Projects where product thinking meets practical delivery.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">Explore the work most relevant to your team, then use search or a project hashtag to narrow the view without losing the project context.</p><WorkExplorerControls roles={WORK_ROLES} activeRole={activeRole} search={search} activeSkill={activeSkill} onRoleChange={(role) => updateParams({ role })} onSearchChange={(value) => updateParams({ search: value })} onClearSkill={() => updateParams({ skill: '' })} onReset={resetExplorer} /><div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-text-secondary"><p>{resultCount} {resultCount === 1 ? 'project' : 'projects'} for {activeRoleLabel}</p>{activeSkill && <p>Filtered by #{activeSkill}</p>}</div>{resultCount > 0 ? <><ProjectGroup heading="Most relevant" description={`Work with the strongest evidence for a ${activeRoleLabel} application.`} projects={groupedProjects.primary} onSkillSelect={(skill) => updateParams({ skill })} /><ProjectGroup heading="Also relevant" description="Additional projects that show transferable product, analysis, technical, or collaboration skills." projects={groupedProjects.supporting} onSkillSelect={(skill) => updateParams({ skill })} /></> : <section className="mt-14 rounded-2xl border border-dashed border-[#c7d2fe] bg-[#f8faff] p-8 text-center dark:border-[#3c3a5e] dark:bg-[#110f17]"><h2 className="text-2xl font-bold text-text-primary">No projects match this view yet.</h2><p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-text-secondary">Try another role, remove the selected skill, or reset the explorer to see all Product Manager work.</p><button type="button" aria-label="Reset all explorer filters" onClick={resetExplorer} className="mt-6 min-h-11 rounded-full bg-[#6366F1] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#4f46e5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1]">Reset explorer</button></section>}</div></main>;
}
