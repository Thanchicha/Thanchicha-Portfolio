# Role-first Work Explorer Design

## Goal

Help a recruiter quickly see the portfolio work most relevant to the role they are hiring for, without burying project cards under a large wall of skills.

## Experience

The `/work` page keeps its current introduction and project-card design. The existing always-visible `Explore by skill` section is replaced by a compact work explorer:

1. A search field finds projects by title, summary, category, role, or skill.
2. Four role tabs set the recruiter lens: Business Analyst, Data Analyst, System Analyst, and Product Manager.
3. The selected lens presents `Most relevant` work first, followed by `Also relevant` work.
4. A project-card skill hashtag remains clickable and applies a focused skill filter. The selected filter is visible as a small active state and can be cleared.
5. The selection is represented in the URL with query parameters so it can be shared (for example, `/work?role=business-analyst` or `/work?skill=React`).

Search and skill filtering apply within the active role lens. A search or hashtag never renders the full tag catalogue.

## Role mapping

| Role | Most relevant | Also relevant |
| --- | --- | --- |
| Business Analyst | Cosaki, SmartProcure, CP Axtra | AI Investment News Automation, Hello World HIPPO, Paw Guardian, Sun Sola |
| Data Analyst | AI Investment News Automation, CP Axtra | SmartProcure, Cosaki, Hello World HIPPO, Paw Guardian, Sun Sola |
| System Analyst | SmartProcure, Hello World HIPPO | Cosaki, AI Investment News Automation, CP Axtra, Paw Guardian, Sun Sola |
| Product Manager | Cosaki, CP Axtra, SmartProcure | AI Investment News Automation, Hello World HIPPO, Paw Guardian, Sun Sola |

The mapping lives alongside project content rather than being duplicated in page UI. A project can be relevant to multiple roles and have a relevance level per role.

## Components and data

- Add a `roleFocus` object to every project record. It uses role slugs as keys and values of `primary` or `supporting`.
- Add a small `WorkExplorerControls` component for search, role tabs, active-filter feedback, and reset actions.
- Keep `ProjectCard` reusable. Its visible tags remain capped at four and continue to set a skill filter.
- Keep `ProjectSkills` on the case-study pages unchanged; its hashtag links continue to route into `/work?skill=...`.
- Extract filter and matching helpers into a small module so behavior is unit-testable and `WorkIndexPage` stays readable.

## Search and filter behavior

- Default role: Product Manager, selected because it is the broadest product-facing entry point while still making the other directions explicit.
- Search is case-insensitive and matches title, summary, category, role, tags, and hard/soft skills.
- A role tab changes the role query parameter and clears no search text.
- A skill hashtag sets the skill query parameter; it does not change the active role.
- `All skills` clears only the skill filter. `Clear search` clears only the search filter. `Reset explorer` returns to the default Product Manager view.
- Empty state explains which role/search/skill combination produced no matches and offers a reset action.

## Accessibility and responsive behavior

- Role tabs use buttons with `aria-pressed` and keyboard focus styles.
- Search has a persistent visible label and a clear button when populated.
- Card tags are buttons with explicit accessible names.
- Controls stack cleanly on mobile, while tabs can scroll horizontally rather than wrapping into a large block.
- Existing card links and keyboard navigation remain unchanged.

## Verification

- Unit-test role mapping and free-text matching.
- Test default Product Manager grouping, each role tab, search, a card hashtag filter, reset actions, and an empty state.
- Run focused tests and lint after implementation.
