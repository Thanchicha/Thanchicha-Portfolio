import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../content/projects';
import CaseStudyHero from '../components/CaseStudyHero';
import CaseStudySection from '../components/CaseStudySection';
import EvidenceList from '../components/EvidenceList';
import NotFoundPage from './NotFoundPage';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  if (!project || !project.sections) return <NotFoundPage />;
  return <main><CaseStudyHero project={project} /><div className="mx-auto grid max-w-[1100px] gap-12 px-6 py-16 md:px-12 lg:grid-cols-[1fr_320px] lg:px-0"><div><p className="mb-10 text-lg leading-relaxed text-text-secondary">{project.summary}</p>{project.sections.map((section) => <CaseStudySection key={section.heading} {...section} />)}<section className="border-b border-gray-200 py-10 dark:border-gray-800"><h2 className="mb-4 text-2xl font-bold text-text-primary">Early partner validation</h2><p className="max-w-3xl text-base leading-relaxed text-text-secondary">This case study presents the work as an early validation stage, with evidence and learnings made explicit so the next product decision is easy to evaluate.</p></section></div><aside className="space-y-5 lg:pt-2"><EvidenceList title="Proof points" items={project.proof} /><EvidenceList title="Evidence to add" items={project.evidenceNeeded} /><EvidenceList title="Context and limits" items={project.limitations} /></aside></div><div className="mx-auto max-w-[1100px] px-6 pb-24 md:px-12 lg:px-0"><Link to="/work" className="font-mono text-sm font-bold text-[#6366F1]">← Back to all work</Link></div></main>;
}
