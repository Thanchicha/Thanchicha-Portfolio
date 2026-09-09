import { createCertificate, parseCertificateImport } from './certificates';

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
