# Product Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the existing one-page React portfolio into a durable product portfolio with a Home page and evidence-led project pages.

**Architecture:** Keep the Vite + React + Tailwind foundation and introduce client-side routing for Home, Work, and four project pages. Store public project copy in a single structured content module so cards, metadata, and case-study pages draw from the same verified facts. Use focused components for project banners, evidence strips, and case-study sections while preserving the existing theme tokens and dark-mode behavior.

**Tech Stack:** React 19, Vite, Tailwind CSS 4, Framer Motion, Lucide React, React Router DOM, Vitest, Testing Library.

**Spec:** `docs/superpowers/specs/2026-09-06-product-portfolio-design.md`

## Global Constraints

- Use the content master as primary public copy and the resume to verify roles, dates, and evidence counts.
- Do not publish any `TO ADD` content, placeholder links, private data, or unsupported claims.
- Use “I” for Thanchicha's work and an explicit team-outcome label for shared outcomes.
- Cosaki is the flagship case study; describe two co-founders accurately, with Thanchicha leading business/product and the other co-founder leading development.
- Respect `prefers-reduced-motion`; do not autoplay audio.
- Use supplied real assets only; never use stock photography as project evidence.
- Keep main text at least 16px and preserve keyboard and touch accessibility.

---

### Task 1: Set up routing and test foundation

**Files:**
- Modify: `package.json`
- Modify: `src/main.jsx`
- Create: `src/test/setup.js`
- Create: `src/App.test.jsx`
- Modify: `vite.config.js`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `PortfolioRoutes` from `src/App.jsx`
- Produces: application routes for `/`, `/work`, `/work/:slug`, and a not-found fallback

- [ ] **Step 1: Add test and routing packages**

Run:

```powershell
npm install react-router-dom
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
```

- [ ] **Step 2: Configure Vite test environment**

Add `test: { environment: 'jsdom', setupFiles: './src/test/setup.js', globals: true }` to `vite.config.js`. Add `"test": "vitest run"` to `package.json`. Create `src/test/setup.js`:

```js
import '@testing-library/jest-dom';
```

- [ ] **Step 3: Write the failing route test**

Create `src/App.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the Home headline at the root route', () => {
  render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);
  expect(screen.getByRole('heading', { name: /I turn user and business problems/i })).toBeInTheDocument();
});

test('renders the Cosaki page from its shareable route', () => {
  render(<MemoryRouter initialEntries={['/work/cosaki']}><App /></MemoryRouter>);
  expect(screen.getByRole('heading', { name: 'Cosaki' })).toBeInTheDocument();
});
```

- [ ] **Step 4: Run the test to verify it fails**

Run: `npm run test`

Expected: FAIL because `App` does not yet declare shareable routes.

- [ ] **Step 5: Add the minimal route shell**

Replace the single-page composition in `src/App.jsx` with `Routes` and `Route` components. Retain shared theme state and global navigation. Render temporary `HomePage`, `WorkIndexPage`, `CaseStudyPage`, and `NotFoundPage` boundaries supplied by later tasks.

- [ ] **Step 6: Run the route tests**

Run: `npm run test`

Expected: PASS after the Home and Cosaki route shells are available.

- [ ] **Step 7: Commit**

```powershell
git add package.json package-lock.json vite.config.js src/main.jsx src/App.jsx src/App.test.jsx src/test/setup.js
git commit -m "feat: add portfolio routes and test setup"
```

### Task 2: Create a verified project content model

**Files:**
- Create: `src/content/projects.js`
- Create: `src/content/projects.test.js`

**Interfaces:**
- Produces: `projects`, `featuredProjects`, `getProjectBySlug(slug)`, and `supportingProjects`
- Consumed by: Home featured banner, Work index, case-study pages, and metadata helpers

- [ ] **Step 1: Write the failing content tests**

Create `src/content/projects.test.js`:

```js
import { featuredProjects, getProjectBySlug } from './projects';

test('puts Cosaki first in featured work', () => {
  expect(featuredProjects[0].slug).toBe('cosaki');
});

test('keeps Cosaki evidence contextualized', () => {
  const cosaki = getProjectBySlug('cosaki');
  expect(cosaki.proof).toEqual(expect.arrayContaining([
    '25 cosplayers tested the Cosaki MVP',
    '7 rental-shop partners represent 470+ costumes',
  ]));
});

test('does not expose unfinished claim markers', () => {
  expect(JSON.stringify(featuredProjects)).not.toContain('TO ADD');
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm run test -- src/content/projects.test.js`

Expected: FAIL because the content module does not exist.

- [ ] **Step 3: Implement the content module**

Create `src/content/projects.js` with source-verified content for `cosaki`, `smartprocure`, `ai-investment-news-automation`, and `cp-axtra`, plus compact supporting cards for `hello-world`, `paw-guardian`, and `sun-sola`. Each major project includes:

```js
{
  slug: 'cosaki',
  title: 'Cosaki',
  category: 'Flagship startup',
  role: 'Co-Founder and Business Lead',
  date: 'May 2026 to Present',
  headline: 'Making cosplay rental easier to discover, coordinate, and trust.',
  proof: [],
  sections: [],
  evidenceNeeded: [],
  limitations: [],
  tags: [],
}
```

All sections use only approved public copy from the content master. Do not include live-source links until Thanchicha supplies them.

- [ ] **Step 4: Run the content tests**

Run: `npm run test -- src/content/projects.test.js`

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add src/content/projects.js src/content/projects.test.js
git commit -m "feat: add verified portfolio project content"
```

### Task 3: Build the Home page around positioning and proof

**Files:**
- Create: `src/pages/HomePage.jsx`
- Create: `src/components/FeaturedWork.jsx`
- Create: `src/components/ProofStrip.jsx`
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/About.jsx`
- Modify: `src/components/Process.jsx`
- Modify: `src/components/Skills.jsx`
- Modify: `src/components/Timeline.jsx`
- Create: `src/pages/HomePage.test.jsx`

**Interfaces:**
- Consumes: `featuredProjects`, `projects`, and `supportingProjects` from `src/content/projects.js`
- Produces: accessible Home landmarks and navigation targets

- [ ] **Step 1: Write the failing Home content test**

Create `src/pages/HomePage.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

test('shows the positioning and selected Cosaki proof', () => {
  render(<MemoryRouter><HomePage /></MemoryRouter>);
  expect(screen.getByText(/Digital Service Innovation student focused on product management/i)).toBeInTheDocument();
  expect(screen.getByText('25 cosplayers tested the Cosaki MVP')).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm run test -- src/pages/HomePage.test.jsx`

Expected: FAIL because `HomePage` does not exist.

- [ ] **Step 3: Implement Home sections**

Create `HomePage` using the existing visual tokens and these sections in order: Hero, featured work, proof strip, About, How I Work, capabilities, experience highlights, supporting work, and Contact. Update copy in the retained components to match the content model and remove the developer-led wording that the content master supersedes.

`FeaturedWork` has manual previous/next controls, focus/hover/touch pause behavior, seven-second automatic rotation, and a reduced-motion static mode. It uses `Link` to the project route.

- [ ] **Step 4: Run Home tests**

Run: `npm run test -- src/pages/HomePage.test.jsx`

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add src/pages/HomePage.jsx src/pages/HomePage.test.jsx src/components/FeaturedWork.jsx src/components/ProofStrip.jsx src/components/Hero.jsx src/components/About.jsx src/components/Process.jsx src/components/Skills.jsx src/components/Timeline.jsx
git commit -m "feat: build evidence-led portfolio home page"
```

### Task 4: Build reusable project-page components and the Work index

**Files:**
- Create: `src/pages/WorkIndexPage.jsx`
- Create: `src/pages/CaseStudyPage.jsx`
- Create: `src/pages/NotFoundPage.jsx`
- Create: `src/components/CaseStudyHero.jsx`
- Create: `src/components/CaseStudySection.jsx`
- Create: `src/components/EvidenceList.jsx`
- Create: `src/pages/CaseStudyPage.test.jsx`
- Modify: `src/components/Navbar.jsx`

**Interfaces:**
- Consumes: `getProjectBySlug`, `featuredProjects`, and `supportingProjects`
- Produces: detail pages for `/work/cosaki`, `/work/smartprocure`, `/work/ai-investment-news-automation`, and `/work/cp-axtra`

- [ ] **Step 1: Write the failing case-study tests**

Create `src/pages/CaseStudyPage.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CaseStudyPage from './CaseStudyPage';

test('labels the Cosaki MVP as early validation rather than product-market fit', () => {
  render(
    <MemoryRouter initialEntries={['/work/cosaki']}>
      <Routes><Route path="/work/:slug" element={<CaseStudyPage />} /></Routes>
    </MemoryRouter>
  );
  expect(screen.getByText(/early partner validation/i)).toBeInTheDocument();
  expect(screen.queryByText(/product-market fit/i)).not.toBeInTheDocument();
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm run test -- src/pages/CaseStudyPage.test.jsx`

Expected: FAIL because the reusable page has not been created.

- [ ] **Step 3: Implement reusable pages**

Use `useParams()` to resolve a project. Render a semantic case-study page with breadcrumb, role/date line, contextual proof, narrative sections, contribution, limitations, evidence-needed list, and back-to-work link. For unknown slugs, render `NotFoundPage` with a route back to Work.

Build `WorkIndexPage` with the four main project cards and supporting cards. Replace Navbar anchors with route-aware links for Home and Work while retaining anchor links for Home sections.

- [ ] **Step 4: Run case-study tests**

Run: `npm run test -- src/pages/CaseStudyPage.test.jsx`

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add src/pages/WorkIndexPage.jsx src/pages/CaseStudyPage.jsx src/pages/NotFoundPage.jsx src/pages/CaseStudyPage.test.jsx src/components/CaseStudyHero.jsx src/components/CaseStudySection.jsx src/components/EvidenceList.jsx src/components/Navbar.jsx
git commit -m "feat: add shareable evidence-led case studies"
```

### Task 5: Add portrait-ready visual treatment, metadata, and contact hygiene

**Files:**
- Modify: `src/index.css`
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/Contact.jsx`
- Modify: `index.html`
- Create: `src/lib/metadata.js`
- Create: `src/lib/metadata.test.js`

**Interfaces:**
- Consumes: route and project content
- Produces: title/description values, portrait placeholder behavior, and safe public contact actions

- [ ] **Step 1: Write the failing metadata test**

Create `src/lib/metadata.test.js`:

```js
import { pageMetadata } from './metadata';

test('creates an accurate Cosaki page title', () => {
  expect(pageMetadata('cosaki').title).toBe('Cosaki Case Study | Thanchicha Hempichit');
});

test('uses the portfolio social description on the homepage', () => {
  expect(pageMetadata('home').description).toMatch(/product discovery, strategy, requirements, AI automation/i);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm run test -- src/lib/metadata.test.js`

Expected: FAIL because `pageMetadata` does not exist.

- [ ] **Step 3: Implement presentation and metadata**

Add a portrait-ready hero frame that remains visually complete when no portrait is supplied; it must not render a fake portrait or stock image. Add minimal animation rules and a `@media (prefers-reduced-motion: reduce)` override.

Create `pageMetadata(key)` and update `document.title` and the description meta tag as routes change. Set the default title and description in `index.html`. Update Contact to show email, GitHub, verified LinkedIn only when supplied, and a resume action only when the PDF exists. Remove the public phone number from Home.

- [ ] **Step 4: Run metadata tests**

Run: `npm run test -- src/lib/metadata.test.js`

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add src/index.css src/components/Hero.jsx src/components/Contact.jsx index.html src/lib/metadata.js src/lib/metadata.test.js
git commit -m "feat: add portfolio metadata and accessible visual polish"
```

### Task 6: Verify routes, claims, and build output

**Files:**
- Modify: `README.md`
- Modify: `.gitignore`

**Interfaces:**
- Consumes: completed application routes and project content
- Produces: documented local workflow and ignored brainstorm/render artifacts

- [ ] **Step 1: Add ignored local artifacts**

Append these entries to `.gitignore`:

```gitignore
.superpowers/
.tmp-resume-render/
.tmp-content-master-render/
```

- [ ] **Step 2: Document the project**

Replace the starter README with a concise project overview, route list, commands for development/test/build, and a public-content safety note.

- [ ] **Step 3: Run the complete automated checks**

Run:

```powershell
npm run test
npm run lint
npm run build
```

Expected: all commands exit successfully.

- [ ] **Step 4: Perform manual route and accessibility checks**

Open `/`, `/work`, `/work/cosaki`, `/work/smartprocure`, `/work/ai-investment-news-automation`, `/work/cp-axtra`, and an unknown route. Confirm navigation, project links, page titles, keyboard controls, visible focus states, and reduced-motion behavior. Check that no `TO ADD`, `#` project link, unsupported claim, private data, or stock-as-evidence caption remains.

- [ ] **Step 5: Commit**

```powershell
git add README.md .gitignore
git commit -m "docs: document portfolio routes and content safety"
```
