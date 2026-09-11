# Role-first Work Explorer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the crowded skill wall on `/work` with a searchable, role-first project explorer for Business Analyst, Data Analyst, System Analyst, and Product Manager applications.

**Architecture:** Project relevance is stored in content records as `roleFocus`, and pure helpers derive a role-specific, text- and skill-filtered project list. The page composes a focused controls component with the existing reusable project card, grouping result cards into `Most relevant` and `Also relevant` sections.

**Tech Stack:** React 19, React Router 7 query parameters, Tailwind CSS 4, Vitest, Testing Library, oxlint.

**Spec:** `docs/superpowers/specs/2026-09-11-role-first-work-explorer-design.md`

## Global Constraints

- Keep the existing Work intro and ProjectCard visual language.
- Do not render a full catalogue of skills anywhere on `/work`.
- Default to the Product Manager lens.
- Support shareable `role`, `skill`, and `search` query parameters.
- Search must match title, summary, category, role, tags, and hard/soft skills case-insensitively.
- Keep skill hashtags in case studies working as `/work?skill=...` links.
- Use visible labels, `aria-pressed` tabs, focus states, and touch targets at least 40px tall.

---

### Task 1: Add role relevance and testable explorer helpers

**Files:**
- Create: `src/utils/workExplorer.js`
- Create: `src/utils/workExplorer.test.js`
- Modify: `src/content/projects.js`
- Modify: `src/content/projects.test.js`

**Interfaces:**
- Consumes: `projects` and `supportingProjects` content records.
- Produces: `WORK_ROLES`, `DEFAULT_ROLE`, `getProjectSkills(project)`, `matchesProject(project, filters)`, and `groupProjectsByRelevance(projects, role, filters)`.

- [ ] **Step 1: Write the failing helper and content tests**

```js
import { projects, supportingProjects } from '../content/projects';
import { DEFAULT_ROLE, groupProjectsByRelevance, matchesProject } from './workExplorer';

test('defaults the explorer to Product Manager', () => {
  expect(DEFAULT_ROLE).toBe('product-manager');
});

test('groups System Analyst work by relevance', () => {
  const grouped = groupProjectsByRelevance([...projects, ...supportingProjects], 'system-analyst', {});
  expect(grouped.primary.map((project) => project.slug)).toEqual(['smartprocure', 'hello-world']);
  expect(grouped.supporting.map((project) => project.slug)).toContain('cosaki');
});

test('matches a project by text and skill without case sensitivity', () => {
  const hippo = projects.find((project) => project.slug === 'hello-world');
  expect(matchesProject(hippo, { search: 'responsive', skill: '' })).toBe(true);
  expect(matchesProject(hippo, { search: '', skill: 'react' })).toBe(true);
});
```

Add a content expectation in `projects.test.js` that Cosaki is `primary` for Product Manager and HIPPO is `primary` for System Analyst.

- [ ] **Step 2: Run the helper tests to verify they fail**

Run: `npx vitest run src/utils/workExplorer.test.js src/content/projects.test.js --reporter=dot`

Expected: FAIL because `workExplorer.js` and `roleFocus` do not exist.

- [ ] **Step 3: Add the role-focus data and helpers**

Add this exact relevance shape to every record in `projects` and `supportingProjects`:

```js
roleFocus: {
  'business-analyst': 'primary',
  'data-analyst': 'supporting',
  'system-analyst': 'supporting',
  'product-manager': 'primary',
},
```

Use the mapping in the spec, with absent roles treated as non-matches. Implement helpers so `matchesProject` returns false when a non-empty search or skill does not match. `groupProjectsByRelevance` must preserve the existing content order and return `{ primary, supporting }`.

- [ ] **Step 4: Run the helper tests to verify they pass**

Run: `npx vitest run src/utils/workExplorer.test.js src/content/projects.test.js --reporter=dot`

Expected: PASS.

- [ ] **Step 5: Commit Task 1**

```bash
git add src/content/projects.js src/content/projects.test.js src/utils/workExplorer.js src/utils/workExplorer.test.js
git commit -m "feat: model work relevance by role"
```

### Task 2: Build compact search and role-lens controls

**Files:**
- Create: `src/components/WorkExplorerControls.jsx`
- Create: `src/components/WorkExplorerControls.test.jsx`

**Interfaces:**
- Consumes: `roles`, `activeRole`, `search`, `activeSkill`, `onRoleChange`, `onSearchChange`, `onClearSkill`, and `onReset`.
- Produces: an accessible search field, four role buttons, active-filter feedback, and clear/reset actions.

- [ ] **Step 1: Write the failing component tests**

```jsx
test('shows four role lenses and calls the role handler', () => {
  const onRoleChange = vi.fn();
  render(<WorkExplorerControls roles={WORK_ROLES} activeRole="product-manager" search="" activeSkill="" onRoleChange={onRoleChange} onSearchChange={vi.fn()} onClearSkill={vi.fn()} onReset={vi.fn()} />);
  fireEvent.click(screen.getByRole('button', { name: 'Business Analyst' }));
  expect(onRoleChange).toHaveBeenCalledWith('business-analyst');
  expect(screen.getByRole('button', { name: 'Product Manager' })).toHaveAttribute('aria-pressed', 'true');
});

test('shows a clear skill action only when a skill is active', () => {
  render(<WorkExplorerControls roles={WORK_ROLES} activeRole="product-manager" search="" activeSkill="React" onRoleChange={vi.fn()} onSearchChange={vi.fn()} onClearSkill={vi.fn()} onReset={vi.fn()} />);
  expect(screen.getByRole('button', { name: 'Clear React filter' })).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the component test to verify it fails**

Run: `npx vitest run src/components/WorkExplorerControls.test.jsx --reporter=dot`

Expected: FAIL because `WorkExplorerControls` does not exist.

- [ ] **Step 3: Implement the compact controls**

Create a labeled search input with a search icon and `value={search}`. Render the four roles in a horizontally scrollable button row with `aria-pressed`. Render only active filter pills, a `Clear [skill] filter` action, a `Clear search` action when search is non-empty, and `Reset explorer` when any filter differs from the default.

- [ ] **Step 4: Run the component test to verify it passes**

Run: `npx vitest run src/components/WorkExplorerControls.test.jsx --reporter=dot`

Expected: PASS.

- [ ] **Step 5: Commit Task 2**

```bash
git add src/components/WorkExplorerControls.jsx src/components/WorkExplorerControls.test.jsx
git commit -m "feat: add role-first work explorer controls"
```

### Task 3: Integrate the role-first explorer into the Work page

**Files:**
- Modify: `src/pages/WorkIndexPage.jsx`
- Modify: `src/pages/WorkIndexPage.test.jsx`

**Interfaces:**
- Consumes: `useSearchParams`, `WORK_ROLES`, `DEFAULT_ROLE`, `groupProjectsByRelevance`, `WorkExplorerControls`.
- Produces: role-aware `Most relevant` and `Also relevant` project groups, query-driven search and skill filters, and a resettable empty state.

- [ ] **Step 1: Write the failing page tests**

```jsx
test('defaults to Product Manager and shows its primary work first', () => {
  render(<MemoryRouter initialEntries={['/work']}><WorkIndexPage /></MemoryRouter>);
  expect(screen.getByRole('button', { name: 'Product Manager' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByRole('heading', { name: 'Most relevant' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Cosaki' })).toBeInTheDocument();
});

test('changes to the Data Analyst lens', () => {
  render(<MemoryRouter initialEntries={['/work']}><WorkIndexPage /></MemoryRouter>);
  fireEvent.click(screen.getByRole('button', { name: 'Data Analyst' }));
  expect(screen.getByRole('heading', { name: 'AI Investment News Automation' })).toBeInTheDocument();
});

test('searches within the active role lens and offers reset for no results', () => {
  render(<MemoryRouter initialEntries={['/work']}><WorkIndexPage /></MemoryRouter>);
  fireEvent.change(screen.getByRole('searchbox', { name: 'Search projects' }), { target: { value: 'zzzz' } });
  expect(screen.getByText(/No projects match/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Reset explorer' })).toBeInTheDocument();
});
```

Keep and update the existing HIPPO link and clickable `#React` test so the test targets the tag button by `Filter by React`.

- [ ] **Step 2: Run the page test to verify it fails**

Run: `npx vitest run src/pages/WorkIndexPage.test.jsx --reporter=dot`

Expected: FAIL because the page still displays the skill wall and has no role groups or search field.

- [ ] **Step 3: Replace the skill wall with the explorer**

Read `role`, `search`, and `skill` from `useSearchParams`. Use `DEFAULT_ROLE` when role is absent or invalid. Add update handlers that preserve unrelated query parameters. Render `WorkExplorerControls`, then a `Most relevant` grid, then an `Also relevant` grid only when it has results. Continue to call the existing tag handler from `ProjectCard`; it sets `skill` without exposing every skill as a control. Replace `7 projects` with a concise matching-result count. Render the empty state and reset button when both groups are empty.

- [ ] **Step 4: Run focused tests and lint**

Run: `npx vitest run src/pages/WorkIndexPage.test.jsx src/components/WorkExplorerControls.test.jsx src/utils/workExplorer.test.js src/content/projects.test.js --reporter=dot && npm run lint`

Expected: all tests PASS and lint exits 0.

- [ ] **Step 5: Commit Task 3**

```bash
git add src/pages/WorkIndexPage.jsx src/pages/WorkIndexPage.test.jsx
git commit -m "feat: organize work by role relevance"
```

### Task 4: Verify final behavior in the built application

**Files:**
- Modify: no production files expected.

**Interfaces:**
- Consumes: the completed `/work` implementation.
- Produces: build evidence and a checked clean working tree.

- [ ] **Step 1: Run the full automated suite**

Run: `npm test`

Expected: PASS.

- [ ] **Step 2: Build the production bundle**

Run: `npm run build`

Expected: Vite completes without errors.

- [ ] **Step 3: Check the final diff and status**

Run: `git diff --check && git status --short`

Expected: no whitespace errors and a clean working tree after Task 3's commit.
