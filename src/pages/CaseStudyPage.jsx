import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../content/projects';
import CaseStudyHero from '../components/CaseStudyHero';
import CaseStudySection from '../components/CaseStudySection';
import EvidenceList from '../components/EvidenceList';
import ProjectFacts from '../components/ProjectFacts';
import ProjectFeatures from '../components/ProjectFeatures';
import ProjectMedia from '../components/ProjectMedia';
import NotFoundPage from './NotFoundPage';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  if (!project || !project.sections) return <NotFoundPage />;
  return (
    <main>
      <CaseStudyHero project={project} />
      <div className="mx-auto grid max-w-[1100px] gap-12 px-6 py-16 md:px-12 lg:grid-cols-[1fr_320px] lg:px-0">
        <div>
          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-text-secondary">{project.summary}</p>
          <ProjectFacts facts={project.facts} />
          {project.sections.map((section) => <CaseStudySection key={section.heading} {...section} />)}
          <ProjectFeatures features={project.featureList} />
          {project.reflection?.map((section) => <CaseStudySection key={section.heading} {...section} />)}
          <ProjectMedia items={project.media} />
          {project.validationNote && <CaseStudySection heading="Early partner validation" body={project.validationNote} />}
        </div>
        <aside className="space-y-5 lg:pt-2">
          {project.proof?.length > 0 && <EvidenceList title="Proof points" items={project.proof} />}
          {project.evidenceNeeded?.length > 0 && <EvidenceList title="Evidence to add" items={project.evidenceNeeded} />}
          {project.limitations?.length > 0 && <EvidenceList title="Context and limits" items={project.limitations} />}
        </aside>
      </div>
      <div className="mx-auto max-w-[1100px] px-6 pb-24 md:px-12 lg:px-0"><Link to="/work" className="font-mono text-sm font-bold text-[#6366F1]">← Back to all work</Link></div>
    </main>
  );
}
