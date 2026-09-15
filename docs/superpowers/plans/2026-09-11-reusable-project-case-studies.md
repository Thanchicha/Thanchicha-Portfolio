# Reusable Project Case Studies Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish Hello World HIPPO as an equal-weight, full case study while adding reusable project facts, features, reflection, and media/document support.

**Architecture:** `src/content/projects.js` remains the single source of project content. Optional `facts`, `featureList`, `reflection`, `award`, and `media` fields are consumed by small, presentation-only components. `CaseStudyPage` renders each optional block only when data exists, so the existing projects keep their current content and no empty UI is introduced.

**Tech Stack:** React 19, React Router 7, Tailwind CSS, Vitest, Testing Library, lucide-react.

**Spec:** `docs/superpowers/specs/2026-09-11-reusable-project-case-studies-design.md`

## Global Constraints

- HIPPO must be a standard-size card in `/work`, not a featured or oversized project.
- No invented images, URLs, screenshots, dates, or impact claims.
- Render `Media & documents` only when project media metadata is present.
- Placeholder assets are clearly labelled `Asset to add`; live links render only with a non-empty URL.
- The generic `Early partner validation` text renders only when a project provides `validationNote`.
- Use targeted Vitest and focused lint commands for each task.

---

### Task 1: Add verified HIPPO case-study content

**Files:**
- Modify: `src/content/projects.js`
- Modify: `src/content/projects.test.js`
- Modify: `src/App.test.jsx`

**Interfaces:**
- Produces a `hello-world` record in `projects` with `sections`, `facts`, `featureList`, `reflection`, `award`, `media`, `proof`, `evidenceNeeded`, `limitations`, and `tags`.
- `getProjectBySlug('hello-world')` returns the full case-study record.

- [ ] **Step 1: Write the failing content test**

```js
import { featuredProjects, getProjectBySlug } from './projects';

test('adds HIPPO as a full case study with verified recognition and project facts', () => {
  const hippo = getProjectBySlug('hello-world');
  expect(hippo).toMatchObject({
    title: 'Hello World HIPPO Hackathon 2025',
    award: '1st Place + Popular Vote',
  });
  expect(hippo.facts).toEqual(expect.arrayContaining([
    { label: 'Role', value: 'Front-end Developer' },
    { label: 'Team', value: '8 cross-functional members' },
    { label: 'Duration', value: '1-month bootcamp + 7-day hackathon' },
  ]));
  expect(hippo.media).toEqual(expect.arrayContaining([
    expect.objectContaining({ label: 'Final product screens', status: 'Asset to add' }),
  ]));
});
```

Add this application-route test in `src/App.test.jsx`:

```jsx
test('renders the HIPPO case study from its shareable route', () => {
  render(
    <MemoryRouter initialEntries={['/work/hello-world']}>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByRole('heading', { name: 'Hello World HIPPO Hackathon 2025' })).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the content test to verify it fails**

Run: `npx vitest run src/content/projects.test.js src/App.test.jsx --reporter=dot`

Expected: FAIL because `hello-world` does not yet contain full case-study fields.

- [ ] **Step 3: Promote HIPPO from supporting content to a full project record**

Add this project before the existing `supportingProjects` declaration and remove its previous compact duplicate:

```js
{
  slug: 'hello-world',
  title: 'Hello World HIPPO Hackathon 2025',
  category: 'Team project and competition',
  role: 'Front-end Developer',
  date: 'Jan–Feb 2025',
  award: '1st Place + Popular Vote',
  headline: 'Redesigning KMUTT SIT’s classroom booking website into a clearer, more modern booking experience.',
  summary: 'An 8-person cross-functional team redesigned the School of Information Technology’s classroom booking website after a 1-month voluntary bootcamp and a 7-day hackathon.',
  facts: [
    { label: 'Role', value: 'Front-end Developer' },
    { label: 'Team', value: '8 cross-functional members' },
    { label: 'Duration', value: '1-month bootcamp + 7-day hackathon' },
    { label: 'Organization', value: 'School of Information Technology, KMUTT' },
    { label: 'Type', value: 'Bootcamp & Hackathon project' },
  ],
  sections: [
    { heading: 'The problem', body: 'The existing classroom booking website had an outdated interface that no longer matched modern user expectations. The team needed to improve both the visual experience and the clarity of booking tasks for students and staff.' },
    { heading: 'The solution', body: 'We redesigned the system into a cleaner booking experience with a clearer reservation flow, modern visual structure, role-aware access, and practical guidance for users.' },
    { heading: 'My contribution', body: 'I translated the design team’s interface direction into responsive web pages, built layouts and visual structure, styled components, clarified implementation details with designers, and collaborated with another frontend developer who focused more on logic and backend communication.' },
  ],
  featureList: [
    { title: 'Login authentication', description: 'Users sign in before accessing the booking system.' },
    { title: 'Role-based access', description: 'Different user roles receive appropriate permissions.' },
    { title: 'Room reservation', description: 'Users reserve classrooms through a structured booking flow.' },
    { title: 'Booking details form', description: 'Users provide the purpose of a reservation and related details.' },
    { title: 'Date and time selection', description: 'Users choose their intended booking schedule.' },
    { title: 'Help and FAQ', description: 'Guidance helps users understand the redesigned system.' },
  ],
  reflection: [
    { heading: 'Challenge and learning', body: 'As an early-year student new to frontend development, I worked through a tight deadline and technical blockers by breaking work into smaller tasks, researching independently, discussing with teammates, asking mentors for guidance, and collaborating with backend teammates.' },
    { heading: 'Result', body: 'Our team completed the redesigned classroom booking website within seven days and received 1st Place and the Popular Vote Award. The experience strengthened my confidence in web development, cross-functional collaboration, communication, and delivery under pressure.' },
  ],
  media: [
    { label: 'Final product screens', description: 'Home, booking, booking form, and help or FAQ screens.', status: 'Asset to add' },
    { label: 'Before and after comparison', description: 'The legacy booking site compared with the redesign.', status: 'Asset to add' },
    { label: 'Design handoff', description: 'Figma designs or wireframes used for implementation.', status: 'Asset to add' },
    { label: 'Project evidence', description: 'Live demo, repository, slides, demo video, award proof, or team photos.', status: 'Asset to add' },
  ],
  proof: ['1st Place — Hello World HIPPO Hackathon 2025', 'Popular Vote Award', 'Delivered within a 7-day hackathon'],
  evidenceNeeded: ['Final product screens and before/after comparison', 'Optional demo, repository, slides, or award proof'],
  limitations: ['Team hackathon project; this case study describes my frontend contribution and collaboration without attributing the full system to one person.'],
  tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git', 'GitHub', 'Vercel', 'Responsive UI implementation'],
}
```

Use the supplied project narrative verbatim in meaning: legacy booking UI, usability redesign, login/role/booking/date/help/FAQ features, UI implementation and design collaboration, new-to-coding challenge, team/mentor problem solving, delivery in seven days, and the two awards.

- [ ] **Step 4: Run the content test to verify it passes**

Run: `npx vitest run src/content/projects.test.js src/App.test.jsx --reporter=dot`

Expected: PASS with the existing Cosaki assertions still green.

- [ ] **Step 5: Commit**

```powershell
git add src/content/projects.js src/content/projects.test.js src/App.test.jsx
git commit -m "content: add hello world hippo case study"
```

### Task 2: Add reusable case-study presentation blocks

**Files:**
- Create: `src/components/ProjectFacts.jsx`
- Create: `src/components/ProjectFeatures.jsx`
- Create: `src/components/ProjectMedia.jsx`
- Modify: `src/components/CaseStudyHero.jsx`
- Modify: `src/pages/CaseStudyPage.jsx`
- Modify: `src/pages/CaseStudyPage.test.jsx`

**Interfaces:**
- `ProjectFacts({ facts })` renders a labelled facts grid when `facts.length > 0`.
- `ProjectFeatures({ features })` renders named feature cards when `features.length > 0`.
- `ProjectMedia({ items })` renders an `Asset to add` list for metadata-only items and external links only for items with `url`.
- `CaseStudyPage` accepts optional `project.award`, `project.facts`, `project.featureList`, `project.reflection`, `project.media`, and `project.validationNote`.

- [ ] **Step 1: Write the failing HIPPO route test**

```jsx
test('renders HIPPO facts, award, features, and transparent media requests', () => {
  render(
    <MemoryRouter initialEntries={['/work/hello-world']}>
      <Routes><Route path="/work/:slug" element={<CaseStudyPage />} /></Routes>
    </MemoryRouter>,
  );

  expect(screen.getByRole('heading', { name: 'Hello World HIPPO Hackathon 2025' })).toBeInTheDocument();
  expect(screen.getByText('1st Place + Popular Vote')).toBeInTheDocument();
  expect(screen.getByText('Project facts')).toBeInTheDocument();
  expect(screen.getByText('Login authentication')).toBeInTheDocument();
  expect(screen.getByText('Media & documents')).toBeInTheDocument();
  expect(screen.getAllByText('Asset to add').length).toBeGreaterThan(0);
  expect(screen.queryByText('Early partner validation')).not.toBeInTheDocument();
});
```

- [ ] **Step 2: Run the route test to verify it fails**

Run: `npx vitest run src/pages/CaseStudyPage.test.jsx --reporter=dot`

Expected: FAIL because HIPPO-specific optional blocks do not render.

- [ ] **Step 3: Implement focused presentation components**

Create `ProjectFacts.jsx` using a definition list:

```jsx
export default function ProjectFacts({ facts }) {
  if (!facts?.length) return null;
  return <section aria-labelledby="project-facts"><h2 id="project-facts">Project facts</h2>{facts.map(({ label, value }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</section>;
}
```

Create `ProjectFeatures.jsx` with each `{ title, description }` rendered in an accessible article. Create `ProjectMedia.jsx` with `ExternalLink` for items that have `url` and a text status for items without it. Use the existing neutral/purple visual system and preserve 44px click targets.

Update `CaseStudyHero` to render the small award chip after the category/date metadata only when `project.award` exists. Update `CaseStudyPage` to render optional blocks after narrative sections and before the sidebar. Replace the unconditional validation block with:

```jsx
{project.validationNote && <CaseStudySection heading="Early partner validation" body={project.validationNote} />}
```

Render the reflection section with the supplied heading/body records and keep existing projects free of empty optional sections.

- [ ] **Step 4: Run the route test to verify it passes**

Run: `npx vitest run src/pages/CaseStudyPage.test.jsx --reporter=dot`

Expected: PASS for both HIPPO and Cosaki. Adjust the Cosaki test to assert its `validationNote`, not a global hard-coded section.

- [ ] **Step 5: Commit**

```powershell
git add src/components/ProjectFacts.jsx src/components/ProjectFeatures.jsx src/components/ProjectMedia.jsx src/components/CaseStudyHero.jsx src/pages/CaseStudyPage.jsx src/pages/CaseStudyPage.test.jsx
git commit -m "feat: add reusable case study details"
```

### Task 3: Keep the Work index balanced and link HIPPO

**Files:**
- Modify: `src/pages/WorkIndexPage.jsx`
- Create: `src/pages/WorkIndexPage.test.jsx`

**Interfaces:**
- `WorkIndexPage` renders every item in `projects` as a standard-size linked card.
- HIPPO’s award appears as compact supporting text and does not change the card grid or card dimensions.

- [ ] **Step 1: Write the failing Work index test**

```jsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import WorkIndexPage from './WorkIndexPage';

test('links HIPPO from a standard work card without featured treatment', () => {
  render(<MemoryRouter><WorkIndexPage /></MemoryRouter>);
  const hippoLink = screen.getByRole('link', { name: /open hello world hippo hackathon 2025 case study/i });
  expect(hippoLink).toHaveAttribute('href', '/work/hello-world');
  expect(screen.getByText('1st Place + Popular Vote')).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the Work index test to verify it fails**

Run: `npx vitest run src/pages/WorkIndexPage.test.jsx --reporter=dot`

Expected: FAIL because the existing card link does not expose the project name in its accessible name and the HIPPO card is not in `projects`.

- [ ] **Step 3: Make all full case-study cards equal-weight and accessible**

Update `ProjectCard` so its existing `Open case study →` link has an explicit accessible label:

```jsx
<Link
  to={`/work/${project.slug}`}
  aria-label={`Open ${project.title} case study`}
  className="mt-7 font-mono text-sm font-bold text-[#6366F1]"
>
  Open case study →
</Link>
```

Render `project.award` as a small muted line above tags when it exists. Keep the current two-column grid, card classes, and order of existing projects. HIPPO is appended after the existing primary cases; do not add featured styling or a special card size.

- [ ] **Step 4: Run the Work index test to verify it passes**

Run: `npx vitest run src/pages/WorkIndexPage.test.jsx --reporter=dot`

Expected: PASS, with all cards retaining the existing standard layout.

- [ ] **Step 5: Commit**

```powershell
git add src/pages/WorkIndexPage.jsx src/pages/WorkIndexPage.test.jsx
git commit -m "feat: link hello world case study from work"
```
