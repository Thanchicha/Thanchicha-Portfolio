# Product Portfolio Website Design

## Purpose

Build a durable personal portfolio for Thanchicha Hempichit. The site supplements, rather than duplicates, tailored resumes. It must work for recruiters and hiring managers across product management, product strategy, business analysis, project delivery, data-informed product work, and AI or automation roles.

The site is not tailored to LINE or any single employer. Company-specific motivation belongs in a resume or cover letter. The portfolio presents stable evidence of how Thanchicha works: understanding users and business context, defining requirements, creating testable solutions, and collaborating with technical teams.

## Audience and positioning

Primary readers are product managers, product strategy and innovation teams, AI and automation teams, recruiters, and internship hiring managers.

Primary positioning:

> I work at the intersection of users, business, and technology, turning unclear problems into product decisions, requirements, and testable solutions.

The voice is clear, curious, credible, and specific. Claims describe Thanchicha's own contribution using “I”; team outcomes use “we” or an explicit outcome label. Prototypes stay labelled as prototypes. The site must not imply production deployment, compliance certification, commercial traction, or measured impact unless supporting evidence exists.

## Information architecture

| Route | Purpose | Status |
| --- | --- | --- |
| `/` | Introduce Thanchicha, establish proof, show selected work, and provide contact routes. | Required |
| `/work/cosaki` | Flagship startup case study, showing product ownership and partner validation. | Required |
| `/work/smartprocure` | Internship case study, showing AI integration, requirements, QA, and documentation. | Required |
| `/work/ai-investment-news-automation` | Personal automation case study, showing a responsible AI workflow. | Required |
| `/work/cp-axtra` | Product discovery and data-informed decision case study. | Required |
| `/work` | Optional index of all selected work, including supporting cards. | Required if navigation needs a Work landing page |

Supporting work — SIT Hello World Hippo, Paw Guardian, and Sun Sola — remains on Home or `/work` as compact cards. It does not receive a project route until public-safe evidence and factual details are available.

Primary navigation: Home, Work, About, Resume, Contact. The Home page can retain anchor navigation for About and Contact. Resume opens or downloads the current public PDF.

## Home page

### Hero

**Eyebrow:** THANCHICHA HEMPICHIT

**Headline:** I turn user and business problems into product decisions and working solutions.

**Supporting copy:** Digital Service Innovation student focused on product management, product strategy, and the bridge between business and technology. I work across discovery, requirements, prototyping, AI integration, and cross-functional delivery.

**Actions:** View selected work; Download resume.

**Availability line:** Open to product management, product strategy, and AI product internships. This remains optional and can be hidden when not actively applying.

### Personal portrait and motion

Keep the current technical-blueprint visual identity: grid background, purple-pink accent range, large type, dark-mode support, and motion that feels purposeful.

Use a supplied, public-safe portrait as an anchor in the hero. It should be a clean cutout or editorial crop, not a generic headshot card. Surround it with lightweight floating project artifacts or capability labels. Motion is limited to gentle depth and focus cues: slow card drift, subtle parallax, and entrance transitions. Respect `prefers-reduced-motion`; disable nonessential continuous movement in that mode. Do not autoplay audio or use distracting rapid motion.

### Featured work banner

Show Cosaki first on a new visit, followed by SmartProcure, AI Investment News Automation, and CP Axtra. Each banner contains a project badge, headline, short evidence line, and project-page CTA.

The carousel target is seven seconds per card. It pauses on hover, keyboard focus, or touch interaction; includes visible previous/next controls and progress indicators; and preserves readable static content when JavaScript is unavailable.

Banner copy:

| Project | Headline | Evidence line |
| --- | --- | --- |
| Cosaki | Building a clearer and more trusted way to rent cosplay costumes. | Co-Founder and Business Lead · MVP tested with 25 cosplayers · 7 shop partners · 470+ costumes · Top 5 of 18 teams |
| SmartProcure | Turning hotel procurement needs into an AI-assisted working prototype. | User journeys and requirements · Gemini API with structured JSON · QA and documentation |
| AI Investment News Automation | Automating the path from financial sources to concise Thai market summaries. | Yahoo Finance RSS and SEC EDGAR · rule-based impact analysis · Supabase |
| CP Axtra | Using field research to change the product direction. | 12 interviews · 44 survey responses · onsite observation · evidence-led pivot |

### Proof strip

Show each number with its context:

- 25 cosplayers tested the Cosaki MVP
- 7 rental-shop partners represent 470+ costumes
- Top 5 of 18 teams at SIT Innoventure
- Top 10 of 113 teams at CP Axtra Mile Hackathon
- 1st Place and Popular Vote at SIT Hello World Hippo

### About, capabilities, and experience

Use the current sections but replace generic skill claims with this evidence-led framing:

- **Start with evidence:** Interviews, surveys, observation, and community feedback separate real problems from assumptions.
- **Make the decision visible:** Scope, requirements, priorities, and tradeoffs are documented so teams can discuss them clearly.
- **Stay close to delivery:** Prototyping, QA, iteration, and technical conversations keep the work connected to implementation.

Capabilities are grouped by contribution, then linked to the work that proves them:

| Capability | Evidence |
| --- | --- |
| Product discovery | Cosaki and CP Axtra |
| Product strategy | Cosaki |
| Requirements and journeys | SmartProcure and Cosaki |
| Prioritization | Cosaki MVP |
| AI and automation | SmartProcure and AI Investment |
| Data-informed decisions | CP Axtra |
| Cross-functional delivery | SmartProcure and SIT Hello World |

## Cosaki flagship case study

### Framing

**Title:** Cosaki

**Subtitle:** Making cosplay rental easier to discover, coordinate, and trust.

**Role:** Co-Founder and Business Lead · May 2026 to Present

**Team context:** Cosaki has two co-founders. Thanchicha leads the business and product work; the other co-founder leads development. The site describes their collaboration without claiming that either person owns the other's discipline.

**Proof:** Top 5 among 18 teams at SIT Innoventure.

### Required narrative sections

1. **Overview** — A cosplay rental platform developed with cosplayers and rental shops, focused on costume discovery, availability, coordination, and trust.
2. **Problem** — Scattered inventory, repeated questions, unclear availability, and manual rental operations create friction for both renters and shops.
3. **Discovery** — Community research and direct conversations were converted into testable MVP assumptions. Do not publish an interview count unless verified separately from 25 MVP testers.
4. **Key insights** — Discovery is fragmented; availability is a core product problem; trust must work for renters and shops; policy clarity is part of user experience.
5. **Prioritization** — Thanchicha and the developer balanced user impact, technical feasibility, and launch timing to focus the MVP on discovery, availability, and trust.
6. **MVP solution** — Smart Search, Smart Calendar, renter-verification concept, and standardized rental-condition logic. Clearly label each item as functional, clickable prototype, or planned once verified.
7. **Validation** — Working MVP tested with 25 cosplayers. Seven rental-shop partners represent more than 470 costumes. Describe these as testing and early partner validation, not revenue, transactions, retention, or product-market fit.
8. **Role and contribution** — Community research, user conversations, problem definition, MVP scope, requirements, feature prioritization, partner onboarding, B2B2C model, roadmap planning, and pitching.
9. **Lessons and next step** — Test both marketplace sides; treat availability and policy clarity as UX; refine the core rental flow and validate scheduling and identity workflow before expanding.

### Evidence requirements

- Public-safe MVP screens, desktop and mobile
- One real inventory or partner view with names, chat handles, IDs, and private store data obscured
- A research summary, affinity map, or anonymized notes
- Annotated search-to-rental-request flow
- One public-safe requirements excerpt
- A testing issue log or Observation → Evidence → Decision panel
- An anonymized partner-validation summary
- Optional 60–90 second demo with captions, static fallback, and transcript

Never publish KYC test data, partner commercial terms, unapproved fees or penalty values, internal projections, private repositories, credentials, or raw identifiable interviews.

## SmartProcure case study

**Title:** SmartProcure at Pakarang Supply

**Subtitle:** Translating hotel procurement needs into an AI-assisted working prototype.

**Role:** Software Developer Intern · Jun 2026 to Aug 2026 · NIA Innovator Journey.

The story shows how hotel procurement pain points became user journeys, requirements, and a functional prototype. The workflow accepts a privacy-filtered PMS summary, derives operational inputs, requests Gemini output in defined JSON, presents structured recommendations, and runs logic/QA checks before demo.

Thanchicha's contribution: journeys, requirements, structured Gemini JSON integration, logic and flow testing, flowcharts, technical documentation, user guides, and coordination across hardware and marketing teams.

Explicit limitations: the work is a functional prototype; it does not claim production deployment, live hotel validation, regulatory compliance, forecasting accuracy, or measured food-waste reduction.

Required evidence: anonymized journey, system flow, JSON schema excerpt, prototype screens, QA checklist, and short demo. Do not publish hotel data, sample PMS data with personal information, client names, private code, credentials, or internal business logic.

## AI Investment News Automation case study

**Title:** AI Investment News Automation

**Subtitle:** A working personal prototype for turning financial sources into concise Thai summaries and consistent impact notes.

The case study describes source ingestion from Yahoo Finance RSS, SEC EDGAR, and financial-data APIs; Thai summarization; rule-based impact analysis; and storage in Supabase.

State the product judgment: AI compresses and translates source material; explicit rules keep impact categories visible and reviewable. The output supports research review and never offers trading recommendations, return predictions, or personalized financial advice.

Required evidence: architecture, source-to-output trace, redacted schema, Thai example summary, and rule categories. Add model/service, update frequency, duplicate handling, and a verified demo only when available.

## CP Axtra case study

**Title:** CP Axtra Mile Hackathon

**Subtitle:** Using customer evidence to change the product direction.

**Role:** Team Leader and Product/Data Analyst · Top 10 among 113 teams.

This case study centers on the research-led decision to move away from the initial yellow-tag concept. It includes 12 interviews, 44 survey responses, onsite observation, team coordination, and business-case support.

Do not claim proven ROI, margin increase, spoilage reduction, enterprise adoption, or that the concept became a Makro Pro capability. Add the exact final concept and verified reason for the pivot only when evidence is ready.

Required evidence: research plan, anonymized synthesis, survey summary, permitted onsite images, pivot decision slide, final concept, and award proof.

## Supporting project cards

Each card shows one outcome badge, one product/problem sentence, one individual-contribution sentence, up to four tags, and one working link. Do not turn cards into mini case studies.

- **SIT Hello World Hippo — Room Booking Web App:** 1st Place and Popular Vote; cross-functional React room-booking work.
- **Paw Guardian at NTU:** Product design, inclusive interface choices, Unity prototyping, and pitching; only show award wording after verification.
- **Sun Sola — Rapid Marketplace Prototype:** Frontend flows plus collaboration with backend and database work; exclude unverified timeline, deployment, and full-stack claims.

## Contact, metadata, and privacy

Contact statement:

> Let’s talk about product work. I am interested in product management, product strategy, and AI product opportunities where I can connect user needs, business priorities, and technical delivery.

Show email, GitHub, current public resume, and verified LinkedIn. Do not show the phone number on the public site by default.

Default social title: **Product decisions grounded in users, business, and technology.**

Default social description: **Selected work across product discovery, strategy, requirements, AI automation, and technical delivery.**

Prepare a 1200×630 social image from a public-safe Cosaki hero visual, name, and role line once the visual asset exists.

## Content and evidence guardrails

- Use the supplied content master as the primary source for public copy.
- Use the supplied resume to verify role titles, dates, education, and evidence numbers.
- Hide every unfinished block marked `TO ADD`; do not ship placeholders.
- Never use stock photography with captions that imply it is evidence from Thanchicha's projects.
- Every project link must lead somewhere real; hide unavailable source or documentation links.
- Use actual project screenshots, diagrams, research artifacts, certificates, or public-safe portraits only after they are supplied and reviewed.
- Review title, role, date, claim, and number consistency against the latest tailored resume before publishing.

## Acceptance criteria

1. The Home page communicates the positioning and selected proof within the first viewport.
2. Every major project is reachable by an independent URL and has its own page title and description.
3. Cosaki is the first featured project and accurately distinguishes Thanchicha’s Business Lead work from the co-founder developer’s role.
4. No current page contains the old unsupported insurance, guaranteed compensation, production-ready, zero-data-entry, real-time, proven-ROI, or unverified full-stack claims.
5. Each published metric includes its context.
6. The site works on mobile, tablet, and desktop; all keyboard controls are usable; and reduced-motion preferences disable nonessential animation.
7. Contact links, resume link, and metadata are verified before publication.
8. The public site contains no private partner, user, hotel, identity, commercial, credential, or internal repository data.
