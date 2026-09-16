import { CERTIFICATE_STORAGE_KEY, createCertificate, parseCertificateImport, readCertificates } from './certificates';

beforeEach(() => window.localStorage.removeItem(CERTIFICATE_STORAGE_KEY));

test('creates a normalized certificate record', () => {
  const record = createCertificate({
    title: 'Academic Excellence Scholarship',
    issuer: 'SIT, KMUTT',
    issuedDate: '2026',
    category: 'Award',
  });
  expect(record).toMatchObject({
    title: 'Academic Excellence Scholarship',
    category: 'Award',
    featured: false,
  });
  expect(record.id).toEqual(expect.any(String));
});

test('rejects malformed imported certificate data', () => {
  expect(() => parseCertificateImport('{"title":"missing list"}')).toThrow('Invalid certificate backup');
});

test('shows LinkedIn certificates on the public site when no local records exist', () => {
  const certificates = readCertificates();

  expect(certificates).toHaveLength(7);
  expect(certificates).toEqual(expect.arrayContaining([
    expect.objectContaining({
      title: 'Gemini Certification for Students (K12)',
      issuer: 'Google',
      issuedDate: 'September 2026',
      category: 'Certificate',
    }),
    expect.objectContaining({
      title: 'NTU Hackathon: Innovating Functional Recovery',
      issuer: 'Nanyang Technological University Singapore',
      category: 'Award',
    }),
  ]));
});

test('attaches supplied certificate documents to their matching records', () => {
  const certificates = readCertificates();

  expect(certificates).toEqual(expect.arrayContaining([
    expect.objectContaining({
      title: 'Gemini Certification for Students (K12)',
      imageUrl: '/certificates/previews/gemini-certification-students-k12.png',
    }),
    expect.objectContaining({
      title: 'Developing Back-End Apps with Node.js and Express',
      imageUrl: '/certificates/previews/developing-backend-apps-node-express.png',
    }),
    expect.objectContaining({
      title: 'Digital Intelligence: Google Cloud, Big Data & Gen AI',
      imageUrl: '/certificates/digital-intelligence.png',
    }),
    expect.objectContaining({
      title: 'NTU Hackathon: Innovating Functional Recovery',
      imageUrl: '/certificates/previews/ntu-hackathon-functional-recovery.png',
    }),
    expect.objectContaining({
      title: 'Innovator Journey 2026 (Internship Program)',
      imageUrl: '',
    }),
  ]));
});
