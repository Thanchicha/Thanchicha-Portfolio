# Certificates and Local Admin Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a public certificates page and a hidden, local-only certificate editor with browser storage and JSON backup.

**Architecture:** A small storage module owns certificate validation, localStorage reads/writes, and JSON serialization. The public page reads the local list on mount; the admin page updates it through the same module. Routes live in the existing React Router tree, with Certificates in public navigation and no admin link in public navigation.

**Tech Stack:** React 19, React Router, Vitest, Testing Library, lucide-react, browser localStorage.

**Spec:** `docs/superpowers/specs/2026-09-09-certificates-admin-design.md`

## Global Constraints

- Certificate records must use `id`, `title`, `issuer`, `issuedDate`, `category`, `description`, `credentialUrl`, `imageUrl`, and `featured`.
- Initial records are empty; never invent certificates.
- `/admin/certificates` is not authentication and must not be linked from Navbar or Home.
- `imageUrl` stores a path/URL only; no file blobs or base64 uploads go into localStorage.
- Imports reject malformed data without changing the current stored list.
- Use targeted test and lint commands; do not run full project checks for each task.

---

### Task 1: Certificate storage and validation

**Files:**
- Create: `src/lib/certificates.js`
- Create: `src/lib/certificates.test.js`

**Interfaces:**
- Produces `CERTIFICATE_STORAGE_KEY`, `createCertificate(input)`, `readCertificates()`, `writeCertificates(records)`, `parseCertificateImport(text)`, and `exportCertificates(records)`.
- Consumed by public and admin certificate pages.

- [ ] **Step 1: Write failing storage tests**

```js
import { createCertificate, parseCertificateImport } from './certificates';

test('creates a normalized certificate record', () => {
  const record = createCertificate({
    title: 'Academic Excellence Scholarship',
    issuer: 'SIT, KMUTT',
    issuedDate: '2026',
    category: 'Award',
  });
  expect(record).toMatchObject({ title: 'Academic Excellence Scholarship', category: 'Award', featured: false });
  expect(record.id).toEqual(expect.any(String));
});

test('rejects malformed imported certificate data', () => {
  expect(() => parseCertificateImport('{"title":"missing list"}')).toThrow('Invalid certificate backup');
});
```

- [ ] **Step 2: Run the storage test to verify it fails**

Run: `npm run test -- src/lib/certificates.test.js`

Expected: FAIL because the certificates module does not exist.

- [ ] **Step 3: Implement the storage module**

```js
const CERTIFICATE_STORAGE_KEY = 'thanchicha-portfolio-certificates';
const categories = new Set(['Certificate', 'Award', 'Training']);

function createCertificate(input) {
  if (!input.title?.trim() || !input.issuer?.trim() || !input.issuedDate?.trim() || !categories.has(input.category)) {
    throw new Error('Certificate title, issuer, date, and category are required');
  }
  return {
    id: input.id || crypto.randomUUID(),
    title: input.title.trim(),
    issuer: input.issuer.trim(),
    issuedDate: input.issuedDate.trim(),
    category: input.category,
    description: input.description?.trim() || '',
    credentialUrl: input.credentialUrl?.trim() || '',
    imageUrl: input.imageUrl?.trim() || '',
    featured: Boolean(input.featured),
  };
}
```

`readCertificates()` returns `[]` if no stored JSON exists; it returns `[]` after invalid local JSON. `writeCertificates(records)` validates every record before serializing. `parseCertificateImport(text)` accepts only a JSON array of valid records and throws `Invalid certificate backup` without writing. `exportCertificates(records)` returns a formatted JSON string after validation.

- [ ] **Step 4: Run the storage tests to verify they pass**

Run: `npm run test -- src/lib/certificates.test.js`

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add src/lib/certificates.js src/lib/certificates.test.js
git commit -m "feat: add local certificate storage"
```

### Task 2: Public certificates route

**Files:**
- Create: `src/pages/CertificatesPage.jsx`
- Create: `src/pages/CertificatesPage.test.jsx`
- Modify: `src/App.jsx`
- Modify: `src/components/Navbar.jsx`

**Interfaces:**
- Consumes `readCertificates()` and certificate record fields from `src/lib/certificates.js`.
- Produces the public `/certificates` route and a public Navbar link.

- [ ] **Step 1: Write failing public-page tests**

```jsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CertificatesPage from './CertificatesPage';

test('shows an empty state when no certificates are stored', () => {
  render(<MemoryRouter><CertificatesPage /></MemoryRouter>);
  expect(screen.getByText(/No certificates have been published yet/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the public-page test to verify it fails**

Run: `npm run test -- src/pages/CertificatesPage.test.jsx`

Expected: FAIL because `CertificatesPage` does not exist.

- [ ] **Step 3: Implement the public page and route**

`CertificatesPage` reads local records on mount, creates an `All` filter plus present categories, and renders cards in featured-first order. Render `View credential` only when `credentialUrl` exists and `View document` only when `imageUrl` exists. The empty state says `No certificates have been published yet.`

Add:

```jsx
<Route path="/certificates" element={<CertificatesPage />} />
```

Add a `Certificates` Link to desktop and mobile Navbar menus. Do not add an admin link.

- [ ] **Step 4: Run the public-page test to verify it passes**

Run: `npm run test -- src/pages/CertificatesPage.test.jsx`

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add src/pages/CertificatesPage.jsx src/pages/CertificatesPage.test.jsx src/App.jsx src/components/Navbar.jsx
git commit -m "feat: add public certificates page"
```

### Task 3: Hidden local certificate admin

**Files:**
- Create: `src/pages/CertificatesAdminPage.jsx`
- Create: `src/pages/CertificatesAdminPage.test.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes every storage function from `src/lib/certificates.js`.
- Produces the unlinked `/admin/certificates` route, CRUD controls, and JSON import/export.

- [ ] **Step 1: Write failing admin tests**

```jsx
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CertificatesAdminPage from './CertificatesAdminPage';

test('adds a local certificate from the admin form', () => {
  render(<MemoryRouter><CertificatesAdminPage /></MemoryRouter>);
  fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Academic Excellence Scholarship' } });
  fireEvent.change(screen.getByLabelText('Issuer'), { target: { value: 'SIT, KMUTT' } });
  fireEvent.change(screen.getByLabelText('Issued date'), { target: { value: '2026' } });
  fireEvent.click(screen.getByRole('button', { name: 'Save certificate' }));
  expect(screen.getByText('Academic Excellence Scholarship')).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the admin test to verify it fails**

Run: `npm run test -- src/pages/CertificatesAdminPage.test.jsx`

Expected: FAIL because `CertificatesAdminPage` does not exist.

- [ ] **Step 3: Implement local admin controls and route**

The form includes labeled title, issuer, issued date, category select, description, credential URL, image/PDF URL, and featured checkbox. On save, create a new record or replace the active record by id, call `writeCertificates`, reset the form, and announce a local success message. Delete asks `window.confirm` before updating storage. Export makes a JSON Blob and clicks a temporary download link. Import reads one JSON file with `FileReader`, calls `parseCertificateImport`, and writes only on success.

Add:

```jsx
<Route path="/admin/certificates" element={<CertificatesAdminPage />} />
```

The admin title must state `Local certificate editor` and include `Changes stay in this browser until you export them.`

- [ ] **Step 4: Run the admin test to verify it passes**

Run: `npm run test -- src/pages/CertificatesAdminPage.test.jsx`

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add src/pages/CertificatesAdminPage.jsx src/pages/CertificatesAdminPage.test.jsx src/App.jsx
git commit -m "feat: add local certificates admin"
```
