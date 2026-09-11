# Reusable Project Case Studies

## Goal

Promote SIT Hello World HIPPO 2025 to a full, shareable case study while creating a content structure that can present future projects consistently. The experience should show credible scope and contributions without making HIPPO visually more prominent than the startup or internship work.

## Scope

- Add a full `/work/hello-world` case study and a standard-size card on `/work`.
- Keep all project cards equal in visual weight. HIPPO uses a compact award label rather than featured placement or enlarged styling.
- Extend the project content model with optional fields that can be omitted for existing projects:
  - `facts`: role, team size, duration, organization, and project type.
  - `featureList`: named capabilities with short explanations.
  - `media`: planned image/document/link assets.
  - `reflection`: challenge, learning, and result content.
- Render only supplied content. There are no invented links, screenshots, dates, or business-impact claims.

## HIPPO Content

### Hero

- Title: `Hello World HIPPO Hackathon 2025`
- Headline: `Redesigning KMUTT SIT’s classroom booking website into a clearer, more modern booking experience.`
- Award label: `1st Place + Popular Vote`
- Role: Front-end Developer
- Team: 8 cross-functional members
- Duration: 1-month bootcamp + 7-day hackathon
- Organization: School of Information Technology, KMUTT

### Narrative

The case study preserves the supplied facts in these sections:

1. Context and problem — a dated, less intuitive classroom-booking experience.
2. Solution — visual redesign plus clearer login, role access, booking, date/time, guide, and FAQ flows.
3. My contribution — responsive UI implementation, layout/styling, design handoff clarification, progress coordination, and collaboration with the other frontend developer.
4. Challenge and learning — new-to-coding context, time pressure, blockers, research, mentor guidance, and team communication.
5. Result — delivery within the 7-day hackathon; 1st Place and Popular Vote; confidence and cross-functional delivery learning.

### Media and documents

An optional `Media & documents` section uses supplied asset metadata. Until the user supplies actual files or URLs, it lists only transparent placeholder requests:

- Final product screens (home/dashboard, booking, booking form, help/FAQ)
- Before/after comparison of the legacy and redesigned booking site
- Figma or wireframes
- Live demo, repository, slides, demo video, award proof, and team/presentation photos

Placeholders use text and an icon, never stock or generated imagery. When an item gains a `url`, it becomes an accessible external link. When an item gains `imageUrl`, it becomes a card image with descriptive alt text.

## Rendering Design

`CaseStudyPage` remains the route shell and receives a project record by slug. It adds optional presentation blocks in this order:

1. Existing hero, with a small award chip only when `award` exists.
2. Summary and narrative sections.
3. Project facts in a compact two-column grid.
4. Key features as lightweight cards.
5. Reflection/result section.
6. Media & documents list or gallery.
7. Existing proof, evidence-needed, and limitation sidebar when data exists.

Existing projects continue to render their current sections. A generic "Early partner validation" section is shown only when a project explicitly supplies `validationNote`; it is not appropriate for completed competition projects such as HIPPO.

## Data Flow

The project record in `src/content/projects.js` is the single content source. `WorkIndexPage` receives the same record and creates the standard card. `CaseStudyPage` reads optional fields defensively, so a partially documented future project still has a useful case-study page without empty sections.

## Error Handling and Constraints

- Unknown project slugs continue to use the Not Found page.
- Link controls render only for complete, non-empty URLs.
- Asset placeholders are clearly labelled `Asset to add`, so visitors do not mistake them for live links.
- No media is added to the repository until the user supplies it.

## Testing

- Content test: HIPPO is available from `getProjectBySlug('hello-world')` with the verified award, role, and duration.
- Route test: `/work/hello-world` renders the title, project facts, and award/result content.
- Rendering test: a project without optional media does not show an empty media section; HIPPO shows its transparent asset-request list.
- Run targeted Vitest tests and focused lint for modified files.
