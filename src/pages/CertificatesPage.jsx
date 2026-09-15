import { useMemo, useState } from 'react';
import { Award, ExternalLink, FileText } from 'lucide-react';
import { readCertificates } from '../lib/certificates';

export default function CertificatesPage() {
  const [certificates] = useState(() => readCertificates());
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = useMemo(
    () => ['All', ...new Set(certificates.map((certificate) => certificate.category))],
    [certificates],
  );
  const visibleCertificates = certificates
    .filter((certificate) => activeCategory === 'All' || certificate.category === activeCategory)
    .sort((first, second) => Number(second.featured) - Number(first.featured));

  return (
    <main className="min-h-screen px-6 pb-24 pt-36 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <p className="section-header">CERTIFICATES_AND_RECOGNITION</p>
        <h1 className="mt-8 max-w-3xl text-4xl font-bold tracking-tight text-text-primary md:text-6xl">Learning, recognition, and proof of progress.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">A growing collection of academic recognition, training, and certificates that support my work across product, business, and technology.</p>

        {certificates.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3" aria-label="Certificate categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`min-h-11 rounded-full px-5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1] ${activeCategory === category ? 'bg-[#6366F1] text-white' : 'bg-white text-text-secondary ring-1 ring-gray-200 hover:text-[#6366F1] dark:bg-[#110f17] dark:ring-gray-700'}`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {certificates.length === 0 ? (
          <section className="mt-14 rounded-3xl border border-dashed border-[#9D85FF]/50 bg-[#9D85FF]/5 px-6 py-16 text-center md:px-12">
            <Award aria-hidden="true" className="mx-auto mb-5 text-[#8b5cf6]" size={34} />
            <h2 className="text-2xl font-bold text-text-primary">No certificates have been published yet.</h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-text-secondary">This space will share verified academic recognition, training, and credentials as they are added.</p>
          </section>
        ) : (
          <section className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3" aria-live="polite">
            {visibleCertificates.map((certificate) => (
              <article key={certificate.id} className="card flex flex-col p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-[#9D85FF]/10 px-3 py-1 font-mono text-xs text-[#7c3aed]">{certificate.category}</span>
                  <span className="font-mono text-xs text-text-muted">{certificate.issuedDate}</span>
                </div>
                <h2 className="mt-6 text-2xl font-bold text-text-primary">{certificate.title}</h2>
                <p className="mt-2 text-sm font-semibold text-[#8b5cf6]">{certificate.issuer}</p>
                {certificate.description && <p className="mt-4 flex-grow leading-relaxed text-text-secondary">{certificate.description}</p>}
                {(certificate.credentialUrl || certificate.imageUrl) && (
                  <div className="mt-6 flex flex-wrap gap-4 border-t border-gray-200 pt-5 text-sm font-semibold dark:border-gray-800">
                    {certificate.credentialUrl && <a className="inline-flex items-center gap-2 text-[#6366F1] hover:text-[#4f46e5]" href={certificate.credentialUrl} target="_blank" rel="noreferrer">View credential <ExternalLink size={15} /></a>}
                    {certificate.imageUrl && <a className="inline-flex items-center gap-2 text-[#6366F1] hover:text-[#4f46e5]" href={certificate.imageUrl} target="_blank" rel="noreferrer">View document <FileText size={15} /></a>}
                  </div>
                )}
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
