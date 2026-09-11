const projects = [
  {
    slug: 'cosaki',
    title: 'Cosaki',
    category: 'Flagship startup',
    role: 'Co-Founder and Business Lead',
    date: 'May 2026 to Present',
    headline: 'Making cosplay rental easier to discover, coordinate, and trust.',
    summary: 'A two-person startup exploring a more transparent way for cosplayers to find and coordinate costume rentals.',
    proof: [
      '25 cosplayers tested the Cosaki MVP',
      '7 rental-shop partners represent 470+ costumes',
      'Top 5 of 18 teams at SIT Innoventure',
    ],
    validationNote: 'This case study presents the work as an early validation stage, with evidence and learnings made explicit so the next product decision is easy to evaluate.',
    sections: [
      {
        heading: 'The opportunity',
        body: 'Cosplayers often spend time comparing scattered rental information and coordinating details across multiple conversations.',
      },
      {
        heading: 'My contribution',
        body: 'I led problem framing, user discovery, partner conversations, prioritization, and business direction while my co-founder owned development.',
      },
      {
        heading: 'What we learned',
        body: 'Early testing helped us make the rental journey more concrete and identify which trust and coordination details mattered most to users.',
      },
    ],
    evidenceNeeded: ['Link to the current MVP or demo', 'Selected research notes and prototype screens'],
    limitations: ['Early-stage MVP; this page focuses on validation evidence rather than outcome claims.'],
    roleFocus: { 'business-analyst': 'primary', 'data-analyst': 'supporting', 'system-analyst': 'supporting', 'product-manager': 'primary' },
    tags: ['Product discovery', 'User research', 'Business strategy', 'MVP testing'],
  },
  {
    slug: 'smartprocure',
    title: 'SmartProcure',
    category: 'Internship project',
    role: 'Software Developer Intern, Pakarang Supply',
    date: 'June to August 2026',
    headline: 'Turning procurement information into a clearer, more usable workflow.',
    summary: 'An NIA Innovator Journey project exploring how AI-assisted structure and documentation can support procurement operations.',
    proof: ['Gemini-assisted structured JSON prototype', 'QA notes, user journeys, and requirements documentation'],
    sections: [
      {
        heading: 'The challenge',
        body: 'Procurement information needed a consistent structure so people could understand requirements and move work forward with less ambiguity.',
      },
      {
        heading: 'How I worked',
        body: 'I translated workflow needs into structured data, tested the output, documented requirements, and aligned the flow with technical implementation.',
      },
    ],
    evidenceNeeded: ['Approved screenshots or demo link', 'Public-safe project brief'],
    limitations: ['Prototype and internship work are presented without implying production deployment or operational impact.'],
    roleFocus: { 'business-analyst': 'primary', 'data-analyst': 'supporting', 'system-analyst': 'primary', 'product-manager': 'primary' },
    tags: ['Requirements', 'AI prototyping', 'QA', 'Documentation'],
  },
  {
    slug: 'ai-investment-news-automation',
    title: 'AI Investment News Automation',
    category: 'Personal prototype',
    role: 'Builder and analyst',
    date: '2026',
    headline: 'A small experiment in turning public market news into structured signals.',
    summary: 'A personal prototype combining RSS and SEC APIs with Thai summaries and rule-based analysis for faster review.',
    proof: ['RSS and SEC API inputs', 'Thai-language summaries', 'Rule-based analysis stored with Supabase'],
    sections: [
      {
        heading: 'The experiment',
        body: 'I explored how lightweight automation could reduce repetitive reading and create a consistent starting point for analysis.',
      },
      {
        heading: 'The product thinking',
        body: 'The workflow separates source collection, summarization, and interpretation so each step can be inspected and improved independently.',
      },
    ],
    evidenceNeeded: ['Repository or demo link', 'Sample output with source citations'],
    limitations: ['This is an exploratory prototype, not investment advice or a trading system.'],
    roleFocus: { 'business-analyst': 'supporting', 'data-analyst': 'primary', 'system-analyst': 'supporting', 'product-manager': 'supporting' },
    tags: ['APIs', 'Generative AI', 'Automation', 'Data analysis'],
  },
  {
    slug: 'cp-axtra',
    title: 'CP Axtra Innovation Challenge',
    category: 'Research and strategy',
    role: 'Researcher and product strategist',
    date: '2025',
    headline: 'Using evidence to turn a broad retail challenge into a focused opportunity.',
    summary: 'A competition project that combined interviews, survey responses, and onsite observation to refine the problem direction.',
    proof: ['Top 10 of 113 teams', '12 user interviews', '44 survey responses and onsite observation'],
    sections: [
      {
        heading: 'The discovery',
        body: 'We started with a broad question, then used interviews, survey responses, and onsite context to understand what people actually struggled with.',
      },
      {
        heading: 'The pivot',
        body: 'Evidence from the research helped the team narrow the opportunity and make the next product direction more actionable.',
      },
    ],
    evidenceNeeded: ['Research summary or presentation excerpt'],
    limitations: ['Competition concept; no claim is made about subsequent adoption or business results.'],
    roleFocus: { 'business-analyst': 'primary', 'data-analyst': 'primary', 'system-analyst': 'supporting', 'product-manager': 'primary' },
    tags: ['User research', 'Synthesis', 'Problem framing', 'Strategy'],
  },
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
      {
        heading: 'The problem',
        body: 'The existing classroom booking website had an outdated interface that no longer matched modern user expectations. The team needed to improve both the visual experience and the clarity of booking tasks for students and staff.',
      },
      {
        heading: 'The solution',
        body: 'We redesigned the system into a cleaner booking experience with a clearer reservation flow, modern visual structure, role-aware access, and practical guidance for users.',
      },
      {
        heading: 'My contribution',
        body: 'I translated the design team’s interface direction into responsive web pages, built layouts and visual structure, styled components, clarified implementation details with designers, and collaborated with another frontend developer who focused more on logic and backend communication.',
      },
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
      {
        heading: 'Challenge and learning',
        body: 'As an early-year student new to frontend development, I worked through a tight deadline and technical blockers by breaking work into smaller tasks, researching independently, discussing with teammates, asking mentors for guidance, and collaborating with backend teammates.',
      },
      {
        heading: 'Result',
        body: 'Our team completed the redesigned classroom booking website within seven days and received 1st Place and the Popular Vote Award. The experience strengthened my confidence in web development, cross-functional collaboration, communication, and delivery under pressure.',
      },
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
    skills: {
      hard: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git', 'GitHub', 'Vercel', 'Front-end Development', 'UI Implementation', 'Responsive Layout'],
      soft: ['Teamwork', 'Cross-functional Collaboration', 'Communication', 'Problem Solving', 'Adaptability', 'Time Management', 'Working Under Pressure', 'Self-directed Learning'],
    },
    roleFocus: { 'business-analyst': 'supporting', 'data-analyst': 'supporting', 'system-analyst': 'primary', 'product-manager': 'supporting' },
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git', 'GitHub', 'Vercel', 'Responsive UI implementation'],
  },
];

const supportingProjects = [
  {
    slug: 'paw-guardian',
    title: 'Paw Guardian',
    category: 'Concept project',
    summary: 'A concept exploring how a digital service could help people care for pets with clearer information and coordination.',
    roleFocus: { 'business-analyst': 'supporting', 'data-analyst': 'supporting', 'system-analyst': 'supporting', 'product-manager': 'supporting' },
    tags: ['Service thinking', 'Concepting'],
  },
  {
    slug: 'sun-sola',
    title: 'SUN SOLA',
    category: 'Full-stack team project',
    role: 'Front-end Developer · Cross-functional Contributor',
    date: 'Apr 2025',
    headline: 'Making solar-energy information and installation businesses easier to discover and compare.',
    summary: 'A three-person first-year capstone built during SIT Hackathon 2025: a marketplace-style platform that helps customers explore solar information and discover installation businesses, while giving sellers a place to present their services.',
    facts: [
      { label: 'Role', value: 'Front-end Developer · Cross-functional Contributor' },
      { label: 'Team', value: '3 cross-functional members' },
      { label: 'Build period', value: '4-day hackathon + 7-day improvement period' },
      { label: 'Project type', value: 'First-year capstone / SIT Hackathon 2025' },
      { label: 'Focus', value: 'SDG 7 · Affordable and Clean Energy; SDG 8 · Decent Work and Economic Growth' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: 'People interested in solar energy can struggle to find trustworthy information and discover installation businesses. At the same time, installation companies need approachable channels to explain their services and reach potential customers.',
      },
      {
        heading: 'The solution',
        body: 'SUN SOLA was designed as a marketplace-style directory. Customers can learn about solar energy, explore businesses and products, and review shops; sellers can create a shop profile and publish their services. The product supports discovery and direct contact rather than processing the complete transaction on-platform.',
      },
      {
        heading: 'My contribution',
        body: 'I translated Figma designs into React and Tailwind interfaces, structured reusable components, worked with the designer on feasibility, integrated frontend pages with APIs, and helped debug the frontend–backend connection. Because the team was small, I also learned the data model, tested CRUD flows, and modified backend implementation when integration blockers affected delivery.',
      },
      {
        heading: 'Understanding the data behind the interface',
        body: 'This project changed my view from “how do I build this page?” to “where does this information come from and how is it connected?” A seller owns a shop, a shop can contain products, and customers can create reviews with images. Understanding the relationships among Sellers, Customers, Shops, Products, Reviews, and images made the UI, API requests, and database requirements easier to reason about together.',
      },
      {
        heading: 'What did not work at first',
        body: 'During the four-day hackathon, I underestimated the combined complexity of a large scope, a small team, new technology, backend integration, and a short deadline. Much of the frontend was ready, but data was not yet persisting reliably. I used temporary mock data for the presentation so the team could demonstrate the intended experience without presenting incomplete persistence as a finished system.',
      },
    ],
    featureList: [
      { title: 'Dual user authentication', description: 'Customers and sellers register and sign in through distinct flows.' },
      { title: 'Solar energy information', description: 'Educational content helps people understand solar-cell options before exploring businesses.' },
      { title: 'Seller shop management', description: 'Businesses create and manage shop profiles with company and contact information.' },
      { title: 'Product management', description: 'Sellers add and maintain products associated with their shops.' },
      { title: 'Customer reviews', description: 'Customers review shops to help others assess businesses and build trust.' },
    ],
    reflection: [
      {
        heading: 'From mock data to working CRUD',
        body: 'After the presentation, the team received seven additional days to improve the project. I returned to the codebase, learned more about routes, API requests, form data, state, database relationships, and debugging across layers. By final submission, the application could complete Create, Read, Update, and Delete operations and persist data in the database.',
      },
      {
        heading: 'Product and engineering judgment',
        body: 'React and Tailwind CSS were not required, but I chose them after learning them in the HIPPO bootcamp. The technology was not the problem; my initial scope and dependency assumptions were. This experience taught me to choose technology based on team experience, project scope, dependencies, and time—not only popularity or capability.',
      },
      {
        heading: 'What I learned',
        body: 'SUN SOLA strengthened my system thinking: identify dependencies early, design data structures before implementation, communicate across roles, ask for feedback, and recover methodically when a first version does not work as intended.',
      },
    ],
    media: [
      { label: 'Final website hero', description: 'A screenshot of the completed system after database integration.', status: 'Asset to add' },
      { label: 'Product screens', description: 'Home, login or registration, shop listing, shop detail, products, reviews, and seller management.', status: 'Asset to add' },
      { label: 'Figma and design system', description: 'Original high-fidelity wireframes and the design system used for implementation.', status: 'Asset to add' },
      { label: 'Database ERD', description: 'The relationships among sellers, customers, shops, products, reviews, and images.', status: 'Asset to add' },
      { label: 'Architecture and data flow', description: 'React frontend → REST API → Node or Express backend → MySQL database.', status: 'Asset to add' },
      { label: 'Business plan / pitch deck', description: 'Background, SDG rationale, objectives, solution direction, Figma, and database documentation.', status: 'Asset to add' },
      { label: 'Project links', description: 'Live demo, GitHub repository, Figma prototype, or a short walkthrough video.', status: 'Asset to add' },
    ],
    proof: ['Completed a functional CRUD application after the improvement period', 'Built as a three-person first-year capstone during SIT Hackathon 2025', 'Used the project to connect UI implementation with APIs, data models, and database persistence'],
    evidenceNeeded: ['Final system screenshots and a product walkthrough', 'GitHub repository or public-safe code excerpt', 'Figma prototype, Business Plan, ERD, and optional demo video'],
    limitations: ['Student hackathon and capstone project; this case study focuses on my frontend and cross-functional contribution, not sole ownership of the complete system.', 'The marketplace supports discovery and direct business contact; it was not designed as a full in-platform payment flow.'],
    skills: {
      hard: ['React', 'Tailwind CSS', 'JavaScript', 'REST API Integration', 'CRUD Operations', 'MySQL', 'Database Relationships', 'Back-end Integration', 'Figma', 'UI Implementation', 'Git', 'GitHub', 'Debugging'],
      soft: ['Problem Solving', 'Resilience', 'Cross-functional Collaboration', 'Communication', 'Adaptability', 'Self-directed Learning', 'Working Under Pressure', 'Time Management', 'Seeking Feedback & Mentorship'],
    },
    roleFocus: { 'business-analyst': 'supporting', 'data-analyst': 'supporting', 'system-analyst': 'primary', 'product-manager': 'supporting' },
    tags: ['React', 'Tailwind CSS', 'REST API Integration', 'MySQL', 'System Thinking'],
  },
];

const projectContexts = [
  {
    title: 'Hackathon & Competition',
    description: 'Time-bound team challenges where I practiced research, prototyping, communication, and delivery under constraints.',
    projects: [
      projects.find((project) => project.slug === 'cp-axtra'),
      projects.find((project) => project.slug === 'hello-world'),
      ...supportingProjects,
    ],
  },
  {
    title: 'Individual Project',
    description: 'Self-directed experiments used to explore new tools and turn a personal question into a working prototype.',
    projects: [projects.find((project) => project.slug === 'ai-investment-news-automation')],
  },
].filter((context) => context.projects.every(Boolean));

const featuredProjects = projects.slice(0, 4);

function getProjectBySlug(slug) {
  return [...projects, ...supportingProjects].find((project) => project.slug === slug);
}

export { projects, featuredProjects, supportingProjects, projectContexts, getProjectBySlug };
