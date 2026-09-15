export default function ProjectFeatures({ features }) {
  if (!features?.length) return null;

  return (
    <section className="border-b border-gray-200 py-10 dark:border-gray-800" aria-labelledby="project-features">
      <h2 id="project-features" className="mb-6 text-2xl font-bold text-text-primary">Key features</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-2xl bg-[#f8f7ff] p-5 dark:bg-[#1a1724]">
            <h3 className="text-base font-bold text-text-primary">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
