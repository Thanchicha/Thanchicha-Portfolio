import { Link } from 'react-router-dom';

function SkillGroup({ label, skills }) {
  if (!skills?.length) return null;

  return (
    <div>
      <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted">{label}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Link
            key={skill}
            to={`/work?skill=${encodeURIComponent(skill)}`}
            aria-label={`View projects using ${skill}`}
            className="inline-flex min-h-11 items-center rounded-full border border-[#c7d2fe] bg-white px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-[#6366F1] hover:bg-[#eef2ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1] dark:border-[#3c3a5e] dark:bg-[#110f17] dark:hover:bg-[#211d35]"
          >
            #{skill}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ProjectSkills({ skills }) {
  if (!skills?.hard?.length && !skills?.soft?.length) return null;

  return (
    <section aria-labelledby="project-skills" className="border-t border-gray-200 py-14 dark:border-gray-800">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="section-header">PROJECT_TOOLKIT</p>
          <h2 id="project-skills" className="mt-3 text-3xl font-bold tracking-tight text-text-primary">Skills developed</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-text-secondary">Select a hashtag to explore other work using the same skill.</p>
      </div>
      <div className="mt-9 grid gap-9 md:grid-cols-2">
        <SkillGroup label="Hard skills" skills={skills.hard} />
        <SkillGroup label="Soft skills" skills={skills.soft} />
      </div>
    </section>
  );
}
