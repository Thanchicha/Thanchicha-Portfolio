import { useRef, useState } from 'react';
import { Download, FileUp, Pencil, Plus, Trash2 } from 'lucide-react';
import {
  createCertificate,
  exportCertificates,
  parseCertificateImport,
  readCertificates,
  writeCertificates,
} from '../lib/certificates';

const emptyForm = {
  title: '',
  issuer: '',
  issuedDate: '',
  category: 'Certificate',
  description: '',
  credentialUrl: '',
  imageUrl: '',
  featured: false,
};

function certificateToForm(certificate) {
  return {
    title: certificate.title,
    issuer: certificate.issuer,
    issuedDate: certificate.issuedDate,
    category: certificate.category,
    description: certificate.description,
    credentialUrl: certificate.credentialUrl,
    imageUrl: certificate.imageUrl,
    featured: certificate.featured,
  };
}

export default function CertificatesAdminPage() {
  const [certificates, setCertificates] = useState(() => readCertificates());
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState('');
  const fileInputRef = useRef(null);

  const isEditing = Boolean(editingId);

  const updateField = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const record = createCertificate({ ...form, id: editingId || undefined });
      const next = isEditing
        ? certificates.map((certificate) => (certificate.id === editingId ? record : certificate))
        : [record, ...certificates];
      const stored = writeCertificates(next);
      setCertificates(stored);
      resetForm();
      setMessage(isEditing ? 'Certificate updated locally.' : 'Certificate saved locally.');
    } catch (error) {
      setMessage(error.message);
    }
  };

  const startEditing = (certificate) => {
    setForm(certificateToForm(certificate));
    setEditingId(certificate.id);
    setMessage(`Editing ${certificate.title}.`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteCertificate = (certificate) => {
    if (!window.confirm(`Delete “${certificate.title}”?`)) return;
    const stored = writeCertificates(certificates.filter((item) => item.id !== certificate.id));
    setCertificates(stored);
    if (editingId === certificate.id) resetForm();
    setMessage('Certificate deleted locally.');
  };

  const downloadBackup = () => {
    const blob = new Blob([exportCertificates(certificates)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'thanchicha-certificates-backup.json';
    link.click();
    URL.revokeObjectURL(url);
    setMessage('Backup downloaded.');
  };

  const importBackup = (event) => {
    const [file] = event.target.files || [];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = parseCertificateImport(reader.result);
        const stored = writeCertificates(imported);
        setCertificates(stored);
        resetForm();
        setMessage(`${stored.length} certificate${stored.length === 1 ? '' : 's'} imported locally.`);
      } catch (error) {
        setMessage(error.message);
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  };

  return (
    <main className="min-h-screen px-6 pb-24 pt-36 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <p className="section-header">PRIVATE_LOCAL_TOOL</p>
        <h1 className="mt-8 max-w-3xl text-4xl font-bold tracking-tight text-text-primary md:text-6xl">Local certificate editor</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">Changes stay in this browser until you export them.</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <button type="button" onClick={downloadBackup} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#6366F1] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#4f46e5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1]"><Download size={16} aria-hidden="true" /> Export JSON</button>
          <label className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-text-secondary ring-1 ring-gray-200 transition-colors hover:text-[#6366F1] dark:bg-[#110f17] dark:ring-gray-700">
            <FileUp size={16} aria-hidden="true" /> Import JSON
            <input ref={fileInputRef} className="sr-only" type="file" accept="application/json,.json" onChange={importBackup} />
          </label>
        </div>

        <p className="mt-5 min-h-6 text-sm font-medium text-[#7c3aed]" aria-live="polite">{message}</p>

        <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <section className="card h-fit p-6 md:p-8" aria-labelledby="certificate-form-title">
            <div className="flex items-center justify-between gap-4">
              <h2 id="certificate-form-title" className="text-2xl font-bold text-text-primary">{isEditing ? 'Edit certificate' : 'Add certificate'}</h2>
              {isEditing && <button type="button" onClick={resetForm} className="text-sm font-semibold text-[#6366F1] hover:text-[#4f46e5]">Cancel</button>}
            </div>
            <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="certificate-title" className="block text-sm font-semibold text-text-primary">Title</label>
                <input id="certificate-title" name="title" value={form.title} onChange={updateField} className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-text-primary outline-none transition-shadow focus:ring-2 focus:ring-[#9D85FF] dark:border-gray-700 dark:bg-[#110f17]" required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="certificate-issuer" className="block text-sm font-semibold text-text-primary">Issuer</label>
                  <input id="certificate-issuer" name="issuer" value={form.issuer} onChange={updateField} className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-text-primary outline-none transition-shadow focus:ring-2 focus:ring-[#9D85FF] dark:border-gray-700 dark:bg-[#110f17]" required />
                </div>
                <div>
                  <label htmlFor="certificate-date" className="block text-sm font-semibold text-text-primary">Issued date</label>
                  <input id="certificate-date" name="issuedDate" value={form.issuedDate} onChange={updateField} placeholder="e.g. 2026" className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-text-primary outline-none transition-shadow focus:ring-2 focus:ring-[#9D85FF] dark:border-gray-700 dark:bg-[#110f17]" required />
                </div>
              </div>
              <div>
                <label htmlFor="certificate-category" className="block text-sm font-semibold text-text-primary">Category</label>
                <select id="certificate-category" name="category" value={form.category} onChange={updateField} className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-text-primary outline-none transition-shadow focus:ring-2 focus:ring-[#9D85FF] dark:border-gray-700 dark:bg-[#110f17]">
                  <option>Certificate</option><option>Award</option><option>Training</option>
                </select>
              </div>
              <div>
                <label htmlFor="certificate-description" className="block text-sm font-semibold text-text-primary">Description</label>
                <textarea id="certificate-description" name="description" value={form.description} onChange={updateField} rows="4" className="mt-2 w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3 text-text-primary outline-none transition-shadow focus:ring-2 focus:ring-[#9D85FF] dark:border-gray-700 dark:bg-[#110f17]" />
              </div>
              <div>
                <label htmlFor="certificate-credential" className="block text-sm font-semibold text-text-primary">Credential URL</label>
                <input id="certificate-credential" name="credentialUrl" type="url" value={form.credentialUrl} onChange={updateField} className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-text-primary outline-none transition-shadow focus:ring-2 focus:ring-[#9D85FF] dark:border-gray-700 dark:bg-[#110f17]" />
              </div>
              <div>
                <label htmlFor="certificate-document" className="block text-sm font-semibold text-text-primary">Image or PDF URL</label>
                <input id="certificate-document" name="imageUrl" type="url" value={form.imageUrl} onChange={updateField} className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-text-primary outline-none transition-shadow focus:ring-2 focus:ring-[#9D85FF] dark:border-gray-700 dark:bg-[#110f17]" />
              </div>
              <label className="flex min-h-11 items-center gap-3 text-sm font-semibold text-text-primary"><input name="featured" type="checkbox" checked={form.featured} onChange={updateField} className="size-4 accent-[#6366F1]" /> Feature this certificate first</label>
              <button type="submit" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#6366F1] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#4f46e5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1]"><Plus size={16} aria-hidden="true" /> {isEditing ? 'Update certificate' : 'Save certificate'}</button>
            </form>
          </section>

          <section aria-labelledby="local-certificates-title">
            <div className="flex items-end justify-between gap-4">
              <div><p className="section-header">LOCAL_RECORDS</p><h2 id="local-certificates-title" className="mt-3 text-2xl font-bold text-text-primary">Your certificates</h2></div>
              <span className="font-mono text-sm text-text-muted">{certificates.length} total</span>
            </div>
            {certificates.length === 0 ? (
              <div className="mt-6 rounded-3xl border border-dashed border-[#9D85FF]/50 bg-[#9D85FF]/5 px-6 py-12 text-center text-text-secondary">No local certificates yet. Add your first record from the editor.</div>
            ) : (
              <div className="mt-6 space-y-4">
                {certificates.map((certificate) => (
                  <article key={certificate.id} className="card flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:justify-between">
                    <div><div className="flex flex-wrap items-center gap-3"><span className="rounded-full bg-[#9D85FF]/10 px-3 py-1 font-mono text-xs text-[#7c3aed]">{certificate.category}</span>{certificate.featured && <span className="font-mono text-xs text-[#ec4899]">FEATURED</span>}</div><h3 className="mt-4 text-xl font-bold text-text-primary">{certificate.title}</h3><p className="mt-1 text-sm font-semibold text-[#8b5cf6]">{certificate.issuer} · {certificate.issuedDate}</p></div>
                    <div className="flex shrink-0 gap-2"><button type="button" onClick={() => startEditing(certificate)} aria-label={`Edit ${certificate.title}`} className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold text-[#6366F1] ring-1 ring-[#9D85FF]/40 hover:bg-[#9D85FF]/10"><Pencil size={15} aria-hidden="true" /> Edit</button><button type="button" onClick={() => deleteCertificate(certificate)} aria-label={`Delete ${certificate.title}`} className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold text-rose-600 ring-1 ring-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/30"><Trash2 size={15} aria-hidden="true" /> Delete</button></div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
