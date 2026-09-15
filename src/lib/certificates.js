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
    return stored ? normalizeList(JSON.parse(stored)) : [];
  } catch {
    return [];
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
  createCertificate,
  readCertificates,
  writeCertificates,
  parseCertificateImport,
  exportCertificates,
};
