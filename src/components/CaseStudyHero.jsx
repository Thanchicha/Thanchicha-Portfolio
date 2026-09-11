import { Link } from 'react-router-dom';

export default function CaseStudyHero({ project }) {
  return (
    <header className="border-b border-gray-200 px-6 pb-16 pt-36 dark:border-gray-800 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1100px]">
        <Link to="/work" className="font-mono text-xs uppercase tracking-widest text-text-muted hover:text-[#6366F1]">← Back to selected work</Link>
        <div className="mt-12 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-text-muted"><span className="text-[#EC4899]">{project.category}</span><span aria-hidden="true">•</span><span>{project.date}</span>{project.award && <span className="rounded-full bg-[#EC4899]/10 px-3 py-1 font-semibold tracking-normal text-[#be185d] dark:text-[#f9a8d4]">{project.award}</span>}</div>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-text-primary md:text-7xl">{project.title}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-text-primary md:text-2xl">{project.headline}</p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-text-secondary"><span className="rounded-full bg-[#6366F1]/10 px-4 py-2">{project.role}</span>{project.tags.slice(0, 4).map((tag) => <span key={tag} className="rounded-full border border-gray-200 px-4 py-2 dark:border-gray-700">{tag}</span>)}</div>
      </div>
    </header>
  );
}
