export default function ProjectFacts({ facts }) {
  if (!facts?.length) return null;

  return (
    <section className="border-b border-gray-200 py-10 dark:border-gray-800" aria-labelledby="project-facts">
      <h2 id="project-facts" className="mb-6 text-2xl font-bold text-text-primary">Project facts</h2>
      <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {facts.map(({ label, value }) => (
          <div key={label} className="border-l-2 border-[#9D85FF]/40 pl-4">
            <dt className="font-mono text-xs uppercase tracking-widest text-text-muted">{label}</dt>
            <dd className="mt-2 text-sm font-semibold leading-relaxed text-text-primary">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
