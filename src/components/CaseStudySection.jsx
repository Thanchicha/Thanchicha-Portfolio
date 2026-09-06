export default function CaseStudySection({ heading, body }) {
  return <section className="border-b border-gray-200 py-10 dark:border-gray-800"><h2 className="mb-4 text-2xl font-bold text-text-primary">{heading}</h2><p className="max-w-3xl text-base leading-relaxed text-text-secondary">{body}</p></section>;
}
