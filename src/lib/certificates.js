const CERTIFICATE_STORAGE_KEY = 'thanchicha-portfolio-certificates';
const categories = new Set(['Certificate', 'Award', 'Training']);

function text(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function createId() {
  return globalThis.crypto?.randomUUID?.() || `certificate-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function createCertificate(input = {}) {
  const title = text(input.title);
  const issuer = text(input.issuer);
  const issuedDate = text(input.issuedDate);

  if (!title || !issuer || !issuedDate || !categories.has(input.category)) {
    throw new Error('Certificate title, issuer, date, and category are required');
  }

  return {
    id: text(input.id) || createId(),
    title,
    issuer,
    issuedDate,
    category: input.category,
    description: text(input.description),
    credentialUrl: text(input.credentialUrl),
    imageUrl: text(input.imageUrl),
    featured: Boolean(input.featured),
  };
}

const DEFAULT_CERTIFICATES = [
  {
    id: 'gemini-certification-students-k12',
    title: 'Gemini Certification for Students (K12)',
    issuer: 'Google',
    issuedDate: 'September 2026',
    category: 'Certificate',
    description: 'Foundational credential in Google Gemini and generative AI.',
    imageUrl: '/certificates/previews/gemini-certification-students-k12.png',
    featured: true,
  },
  {
    id: 'developing-backend-apps-node-express',
    title: 'Developing Back-End Apps with Node.js and Express',
    issuer: 'IBM',
    issuedDate: 'April 2025',
    category: 'Certificate',
    description: 'Backend development with Node.js and Express for practical web applications.',
    imageUrl: '/certificates/previews/developing-backend-apps-node-express.png',
  },
  {
    id: 'nia-green-transformation-circular-business',
    title: 'Innovation, Green Transformation & Circular Business',
    issuer: 'National Innovation Agency (Public Organization)',
    issuedDate: 'May 2026',
    category: 'Training',
    description: 'Innovation training focused on sustainability, green transformation, and circular business.',
    imageUrl: '/certificates/previews/innovation-green-transformation-circular-business.png',
  },
  {
    id: 'nia-innovator-journey-2026',
    title: 'Innovator Journey 2026 (Internship Program)',
    issuer: 'National Innovation Agency (Public Organization)',
    issuedDate: 'September 2026',
    category: 'Training',
    description: 'Innovation and internship program experience supporting real-world product delivery.',
  },
  {
    id: 'depa-digital-intelligence-cloud-big-data-gen-ai',
    title: 'Digital Intelligence: Google Cloud, Big Data & Gen AI',
    issuer: 'Digital Economy Promotion Agency (depa) of Thailand',
    issuedDate: 'August 2026',
    category: 'Training',
    description: 'Digital-skills training in cloud, big data, and generative AI.',
    imageUrl: '/certificates/digital-intelligence.png',
  },
  {
    id: 'ntu-hackathon-functional-recovery',
    title: 'NTU Hackathon: Innovating Functional Recovery',
    issuer: 'Nanyang Technological University Singapore',
    issuedDate: 'May 2026',
    category: 'Award',
    description: 'Honorable Mention for Paw Guardian, a rehabilitation game concept.',
    imageUrl: '/certificates/previews/ntu-hackathon-functional-recovery.png',
    featured: true,
  },
  {
    id: 'axtra-mile-hackathon-2025',
    title: 'Axtra Mile Hackathon 2025',
    issuer: 'CP AXTRA Public Company Limited',
    issuedDate: 'August 2025',
    category: 'Award',
    description: 'Selected as a Top 20 workshop participant and hackathon finalist.',
    imageUrl: '/certificates/previews/axtra-mile-hackathon-2025.png',
  },
].map((certificate) => createCertificate(certificate));

function mergeCertificates(records) {
  const byId = new Map(DEFAULT_CERTIFICATES.map((certificate) => [certificate.id, certificate]));
  records.forEach((certificate) => {
    const defaultCertificate = byId.get(certificate.id);
    byId.set(certificate.id, defaultCertificate
      ? { ...defaultCertificate, ...certificate, imageUrl: certificate.imageUrl || defaultCertificate.imageUrl }
      : certificate);
  });
  return [...byId.values()];
}

function normalizeList(records) {
  if (!Array.isArray(records)) throw new Error('Invalid certificate backup');
  try {
    return records.map((record) => createCertificate(record));
  } catch {
    throw new Error('Invalid certificate backup');
  }
}

function readCertificates() {
  try {
    const stored = window.localStorage.getItem(CERTIFICATE_STORAGE_KEY);
    return mergeCertificates(stored ? normalizeList(JSON.parse(stored)) : []);
  } catch {
    return DEFAULT_CERTIFICATES;
  }
}

function writeCertificates(records) {
  const normalized = normalizeList(records);
  window.localStorage.setItem(CERTIFICATE_STORAGE_KEY, JSON.stringify(normalized));
  return normalized;
}

function parseCertificateImport(jsonText) {
  try {
    return normalizeList(JSON.parse(jsonText));
  } catch {
    throw new Error('Invalid certificate backup');
  }
}

function exportCertificates(records) {
  return JSON.stringify(normalizeList(records), null, 2);
}

export {
  CERTIFICATE_STORAGE_KEY,
  DEFAULT_CERTIFICATES,
  createCertificate,
  readCertificates,
  writeCertificates,
  parseCertificateImport,
  exportCertificates,
};
