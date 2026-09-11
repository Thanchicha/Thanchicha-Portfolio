import { ExternalLink, ImageIcon } from 'lucide-react';

export default function ProjectMedia({ items }) {
  if (!items?.length) return null;

  return (
    <section className="border-b border-gray-200 py-10 dark:border-gray-800" aria-labelledby="project-media">
      <h2 id="project-media" className="mb-6 text-2xl font-bold text-text-primary">Media &amp; documents</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <article key={item.label} className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-[#110f17]">
            {item.imageUrl && <img src={item.imageUrl} alt={item.alt || item.label} className="h-48 w-full object-cover" loading="lazy" />}
            <div className="p-5">
              <div className="flex items-start gap-3">
                <ImageIcon aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-[#8b5cf6]" />
                <div>
                  <h3 className="font-bold text-text-primary">{item.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.description}</p>
                </div>
              </div>
              {item.url ? (
                <a href={item.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#6366F1] hover:text-[#4f46e5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1]">Open resource <ExternalLink aria-hidden="true" size={15} /></a>
              ) : (
                <span className="mt-5 inline-flex rounded-full bg-[#9D85FF]/10 px-3 py-1 font-mono text-xs text-[#7c3aed]">{item.status || 'Asset to add'}</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
