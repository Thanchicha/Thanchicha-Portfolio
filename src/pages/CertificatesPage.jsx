import { useEffect, useMemo, useState } from 'react';
import { Award, ExternalLink, X } from 'lucide-react';
import { readCertificates } from '../lib/certificates';

export default function CertificatesPage() {
  const [certificates] = useState(() => readCertificates());
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const categories = useMemo(
    () => ['All', ...new Set(certificates.map((certificate) => certificate.category))],
    [certificates],
  );
  const visibleCertificates = certificates
    .filter((certificate) => activeCategory === 'All' || certificate.category === activeCategory)
    .sort((first, second) => Number(second.featured) - Number(first.featured));

  useEffect(() => {
    if (!selectedCertificate) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedCertificate(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [selectedCertificate]);

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
                {certificate.imageUrl && (
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(certificate)}
                    aria-label={`View ${certificate.title} certificate`}
                    className="group mb-6 block overflow-hidden rounded-2xl bg-[#EEF0FF] p-2 shadow-[0_12px_28px_rgba(99,102,241,0.10)] outline outline-1 outline-black/[0.05] transition-[transform,box-shadow] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#6366F1] dark:bg-[#1B1726] dark:outline-white/[0.08] motion-reduce:transition-none hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(99,102,241,0.16)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white dark:bg-[#0d0b12]">
                      <img
                        src={certificate.imageUrl}
                        alt={`${certificate.title} certificate`}
                        loading="lazy"
                        className="h-full w-full object-contain transition-transform duration-300 ease-out motion-reduce:transition-none group-hover:scale-[1.015]"
                      />
                      <span className="absolute bottom-3 right-3 rounded-full bg-[#0E1B3D]/85 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">Open full-size</span>
                    </div>
                  </button>
                )}
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-[#9D85FF]/10 px-3 py-1 font-mono text-xs text-[#7c3aed]">{certificate.category}</span>
                  <span className="font-mono text-xs text-text-muted">{certificate.issuedDate}</span>
                </div>
                <h2 className="mt-6 text-2xl font-bold text-text-primary">{certificate.title}</h2>
                <p className="mt-2 text-sm font-semibold text-[#8b5cf6]">{certificate.issuer}</p>
                {certificate.description && <p className="mt-4 flex-grow leading-relaxed text-text-secondary">{certificate.description}</p>}
                {certificate.credentialUrl && (
                  <div className="mt-6 flex flex-wrap gap-4 border-t border-gray-200 pt-5 text-sm font-semibold dark:border-gray-800">
                    {certificate.credentialUrl && <a className="inline-flex items-center gap-2 text-[#6366F1] hover:text-[#4f46e5]" href={certificate.credentialUrl} target="_blank" rel="noreferrer">View credential <ExternalLink size={15} /></a>}
                  </div>
                )}
              </article>
            ))}
          </section>
        )}
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#080B16]/80 p-4 backdrop-blur-sm md:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedCertificate(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-preview-title"
            className="relative flex max-h-[calc(100vh-2rem)] w-full max-w-6xl flex-col rounded-3xl bg-white p-3 shadow-2xl dark:bg-[#15121D] md:max-h-[calc(100vh-4rem)] md:p-5"
          >
            <div className="flex items-center justify-between gap-4 px-2 pb-3 md:px-3">
              <h2 id="certificate-preview-title" className="min-w-0 truncate text-base font-semibold text-text-primary md:text-lg">{selectedCertificate.title}</h2>
              <button
                type="button"
                autoFocus
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate preview"
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[#EEF0FF] text-[#27335A] transition-colors hover:bg-[#DDE0FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1] dark:bg-[#282131] dark:text-white dark:hover:bg-[#352C42]"
              >
                <X aria-hidden="true" size={20} />
              </button>
            </div>
            <div className="min-h-0 overflow-auto rounded-2xl bg-[#F3F5FA] p-2 dark:bg-[#0D0B12] md:p-4">
              <img src={selectedCertificate.imageUrl} alt={`${selectedCertificate.title} certificate`} className="mx-auto h-auto max-h-[calc(100vh-10rem)] w-auto max-w-full rounded-lg bg-white shadow-sm dark:bg-[#15121D]" />
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
