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
    title: 'AXTRA MILE Hackathon 2025 — Smart Adviser',
    category: 'Corporate innovation & strategy',
    role: 'Team Lead · Product / Business Analyst · Research · Data Support',
    date: 'Jun–Aug 2025',
    award: 'Top 20 Workshop Participant → Top 10 Finalist',
    headline: 'An AI-powered concept for Makro Pro designed to reduce food waste while improving customer engagement and sales.',
    summary: 'Smart Adviser connects expiry management, personalized recommendations, and targeted promotions through customer research, field observation, and business constraints.',
    facts: [
      { label: 'Role', value: 'Team Lead · Product / Business Analyst · Research · Data Support' },
      { label: 'Team', value: '5 members' },
      { label: 'Competition', value: 'AXTRA MILE Hackathon 2025 by CP AXTRA' },
      { label: 'Achievement', value: 'Top 20 Workshop Participant → Top 10 Finalist' },
      { label: 'Business context', value: 'Makro & Lotus’s' },
    ],
    sections: [
      {
        heading: 'The challenge',
        body: 'We explored how technology and AI could create new opportunities for CP AXTRA’s retail and wholesale businesses, focusing on food waste from fresh and near-expiry products. Among 44 Makro and Lotus’s customers surveyed, 93.2% had thrown food away because it expired, while only 11.3% strongly prioritized tracking expiry dates. Field observation at Makro Bangna also showed that a desirable customer experience must work within real operational, logistics, system, cost, and brand constraints.',
      },
      {
        heading: 'My contribution',
        body: 'As Team Lead and Product / Business Analyst, I coordinated work across five teammates and managed internal deadlines. I helped frame the customer and business problem; supported surveys, interviews, desk research, and field research; synthesized findings into product opportunities; contributed to impact assumptions, implementation planning, and roadmap; and aligned research, product thinking, and pitch contributions into one coherent narrative.',
      },
      {
        heading: 'From research to product decisions',
        body: 'Customers frequently waste expired food, so we designed proactive expiry tracking and reminders. Customers also need ideas for using food before it expires, leading to AI-powered menu and preservation recommendations. Near-expiry products create waste and commercial risk, so we explored earlier customer-specific promotions rather than relying only on late-stage yellow-tag discounts. Because store and digital operations create real constraints, we positioned Smart Adviser as an extension of Makro Pro rather than an isolated product.',
      },
      {
        heading: 'AI as decision support',
        body: 'Rather than adding AI as a standalone feature, we asked: what data is available, what decision can improve, and how does that create value? The concept explored AI for product recommendations, customer targeting, notification relevance, and additional usage signals that could support better forecasting over time.',
      },
    ],
    featureList: [
      { title: 'Expiry management', description: 'A view of fresh products and expiry dates with timely reminders before food is wasted.' },
      { title: 'Usage log and rewards', description: 'Customers mark products as used while the concept links sustainable behavior to Makro Points.' },
      { title: 'AI-powered menu suggestions', description: 'Actionable recipe ideas and preservation tips based on items nearing expiry.' },
      { title: 'Personalized promotion', description: 'Customer-specific deals, alerts, and cross-selling suggestions for products at higher risk of remaining unsold.' },
    ],
    reflection: [
      {
        heading: 'Business & implementation thinking',
        body: 'The final proposal included an approximately eight-month implementation roadmap, resource requirements, and models covering promotion, repeat purchase, cross-sell, forecasting, and food-waste reduction. These figures were planning assumptions used to test the business case—not validated production results or guarantees.',
      },
      {
        heading: 'Outcome',
        body: 'Our team advanced from the Top 20 workshop stage to the Top 10 finalists. We conducted customer research and Makro Bangna field observation, then developed a product concept connecting customer needs, AI, operations, business impact, and implementation planning.',
      },
      {
        heading: 'What I learned',
        body: 'This project taught me that product decisions cannot be based on customer desirability alone. A viable solution must also account for business objectives, operational reality, available data, implementation cost, and technical constraints. I also learned to approach interviews as conversations, look for extreme users and unexpected behaviors, and refine a solution when new evidence challenges the original idea.',
      },
    ],
    media: [
      { label: 'Makro pitch deck', description: 'The final Smart Adviser narrative, business context, and proposed experience.', status: 'Asset to add' },
      { label: 'Research and survey findings', description: 'Public-safe summary of the 44-customer survey, interviews, and desk research.', status: 'Asset to add' },
      { label: 'Makro field research', description: 'Approved photos or notes from the Bangna visit and operational observation.', status: 'Asset to add' },
      { label: 'Smart Adviser product flow', description: 'Expiry-management journey, notification examples, and AI-powered recommendations.', status: 'Asset to add' },
      { label: 'Personalized promotion concept', description: 'Customer segmentation, targeted alerts, cross-selling, and recommendation flow.', status: 'Asset to add' },
      { label: 'Roadmap and delivery plan', description: 'Proposed research, MVP, pilot, AI-learning, and expansion phases.', status: 'Asset to add' },
      { label: 'Impact and financial model', description: 'Clearly labelled estimate model for business impact and resource assumptions.', status: 'Asset to add' },
    ],
    proof: ['Top 20 Workshop Participant → Top 10 Finalist', '44 Makro and Lotus’s customer survey responses', 'Makro Bangna field observation and business-focused mentorship'],
    evidenceNeeded: ['Makro pitch deck or public-safe presentation excerpt', 'Survey summary and approved field-research evidence', 'Screens or prototypes for the Smart Adviser journey and promotion concept'],
    limitations: ['Competition concept; no claim is made about subsequent adoption, deployment, or realized business results.', 'All roadmap, financial, forecasting, sales, and food-waste-impact figures were estimated planning assumptions, not measured outcomes.'],
    skills: {
      hard: ['Product Discovery', 'Design Thinking', 'User Research', 'Extreme User Interviews', 'Problem Framing', 'Solution Design', 'Business Analysis', 'Roadmapping', 'Impact Estimation', 'Basic Financial Planning', 'Desk Research', 'Field Research', 'Customer Survey Analysis', 'Market Research'],
      soft: ['Team Leadership', 'Project Coordination', 'Task Delegation', 'Deadline Management', 'Communication', 'Cross-functional Collaboration', 'Presentation', 'Adaptability', 'Stakeholder Feedback', 'Learning from Mentorship'],
    },
    roleFocus: { 'business-analyst': 'primary', 'data-analyst': 'primary', 'system-analyst': 'supporting', 'product-manager': 'primary' },
    tags: ['Business Analysis', 'User Research', 'AI Product Ideation', 'Product Strategy', 'Team Leadership'],
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
  {
    slug: 'suan-thonburi-rom-park',
    title: 'Suan Thonburi Rom Park Safety Innovation',
    category: 'Design Thinking & Innovation',
    role: 'User Research · Problem Definition · Prototyping · User Testing',
    date: '2025',
    headline: 'Applying Design Thinking to help people feel safer in a public park.',
    summary: 'A first-year Design Thinking project exploring how user research and rapid prototyping could improve perceived safety at Suan Thonburi Rom Park near KMUTT.',
    facts: [
      { label: 'Role', value: 'User Research · Problem Definition · Prototyping · User Testing' },
      { label: 'Project type', value: 'First-year Design Thinking / Innovation project' },
      { label: 'Course', value: 'DSI101' },
      { label: 'Duration', value: 'One semester' },
      { label: 'Theme', value: 'SDG 11 · Sustainable Cities and Communities' },
    ],
    sections: [
      {
        heading: 'The challenge',
        body: 'Our team was asked to identify a real-world problem outside the university and develop a solution based on user needs rather than assumptions. Through repeated field visits and interviews with park users, we found recurring safety concerns after dark: poorly lit areas, secluded walking routes, theft concerns, and limited security coverage across a large park. We reframed “the park needs more security” into a clearer question: how might we help park users access help quickly and feel safer when security staff cannot cover every area?',
      },
      {
        heading: 'My contribution',
        body: 'I participated throughout the Design Thinking process: conducting field interviews and observation, identifying user pain points and needs, supporting personas and user journey mapping, helping define the problem statement, generating and refining solution concepts, building and presenting prototypes, collecting and interpreting user-testing feedback, and supporting the final presentation.',
      },
      {
        heading: 'Exploring three solutions',
        body: 'Instead of committing to one concept immediately, we developed and tested three alternatives: an Emergency Alarm Box, a physical button at key locations that sends an alert and location information to security staff; a Guardian Robot, a patrol-support concept using cameras and sensors to monitor areas and notify staff of unusual situations; and a Suan Thon Guard Website, a platform concept for recruiting and coordinating community safety volunteers.',
      },
      {
        heading: 'What user testing changed',
        body: 'The Emergency Alarm Box was the strongest concept, receiving an average satisfaction score of 4.53 / 5 because users found it simple, understandable, and directly connected to emergency response. The Guardian Robot scored 4.00 / 5, but users raised concerns about cost, maintenance, and privacy. The Suan Thon Guard Website scored 3.63 / 5, and 73.68% of respondents were not interested in volunteering. This showed us that innovation is not about choosing the most advanced idea; it is about finding the best fit for real user needs and constraints.',
      },
    ],
    featureList: [
      { title: 'Emergency Alarm Box', description: 'A physical emergency button at key locations that sends an alert and user location to security staff.' },
      { title: 'Guardian Robot', description: 'A patrol concept with a 180-degree camera and sensors to detect unusual activity and notify staff.' },
      { title: 'Suan Thon Guard Website', description: 'A volunteer recruitment and coordination concept explored as a community-support alternative.' },
    ],
    reflection: [
      {
        heading: 'What I learned',
        body: 'This was my first hands-on introduction to Design Thinking and user research. It taught me to separate assumptions from evidence, ask open-ended questions, turn observations into clear problem statements, and use prototypes as learning tools rather than finished products. It shaped how I approach later projects: research first, explore multiple solutions, test assumptions early, and let evidence guide product decisions.',
      },
    ],
    media: [
      { label: 'Field research', description: 'Public-safe observation and interview evidence from Suan Thonburi Rom Park.', status: 'Asset to add' },
      { label: 'Persona & user journey', description: 'How field findings were translated into user needs and pain points.', status: 'Asset to add' },
      { label: 'Concept prototypes', description: 'Emergency Alarm Box, Guardian Robot, and Suan Thon Guard Website.', status: 'Asset to add' },
      { label: 'User testing results', description: 'Comparison of concept scores and feedback that informed the final direction.', status: 'Asset to add' },
    ],
    proof: [
      'Emergency Alarm Box — 4.53 / 5 user satisfaction',
      'Guardian Robot — 4.00 / 5 user satisfaction',
      'Suan Thon Guard Website — 3.63 / 5 user satisfaction; 73.68% were not interested in volunteering',
    ],
    evidenceNeeded: ['Public-safe field research evidence, with interviewee information removed', 'Persona, user journey, and concept prototype visuals', 'User-testing results and final presentation, if suitable for sharing'],
    limitations: ['First-year course project; scores represent user-testing feedback within this project, not a deployed safety system.', 'No interviewee-identifying information should be published in the portfolio.'],
    skills: {
      hard: ['Design Thinking', 'User Research', 'Problem Definition', 'User Journey Mapping', 'Prototyping', 'User Testing', 'Hypothesis Validation'],
      soft: ['Communication', 'Team Collaboration', 'Critical Thinking', 'Adaptability'],
    },
    roleFocus: { 'business-analyst': 'primary', 'data-analyst': 'supporting', 'system-analyst': 'supporting', 'product-manager': 'primary' },
    tags: ['User Research', 'Problem Definition', 'User Testing', 'Design Thinking', 'Prototyping'],
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
    summary: 'A three-person first-year capstone built during SIT Hackathon 2025. SUN SOLA is a marketplace-style platform where customers can learn about solar energy, explore installation businesses and products, and review shops, while sellers can create and manage their own listings.',
    facts: [
      { label: 'Role', value: 'Front-end Developer · Cross-functional Contributor' },
      { label: 'Team', value: '3 cross-functional members' },
      { label: 'Build period', value: '4-day hackathon + 7-day improvement period' },
      { label: 'Project type', value: 'First-year capstone / SIT Hackathon 2025' },
      { label: 'Focus', value: 'SDG 7 · Affordable and Clean Energy; SDG 8 · Decent Work and Economic Growth' },
    ],
    sections: [
      {
        heading: 'The challenge',
        body: 'People interested in solar energy can struggle to find understandable information and trustworthy installation businesses. At the same time, solar providers need an accessible way to present their services and reach potential customers. Our goal was to connect both sides through a simple discovery platform rather than build a complete transaction or payment system.',
      },
      {
        heading: 'My contribution',
        body: 'As the frontend developer, I translated Figma designs into React and Tailwind interfaces, built reusable UI components and page flows, integrated frontend pages with REST APIs, and worked with the designer to balance design intent with implementation feasibility. I also tested CRUD flows and database-connected features, debugged frontend–backend integration issues, and modified backend logic when integration blockers affected delivery. Because the team had only three members, I learned how the database model and API layer affected the frontend instead of treating them as separate systems.',
      },
      {
        heading: 'How the system worked',
        body: 'React + Tailwind frontend → REST API → Node / Express backend → MySQL database. The data model connected sellers, customers, shops, products, reviews, and images. Understanding these relationships changed how I approached frontend development: instead of asking only “How should this page look?”, I began asking where the data came from, what owned it, and how the frontend read and updated it.',
      },
    ],
    featureList: [
      { title: 'Customer & Seller Authentication', description: 'Separate registration and sign-in flows for customers and sellers.' },
      { title: 'Shop & Product Management', description: 'Sellers can create and manage shop profiles and products.' },
      { title: 'Solar Information', description: 'Educational content helps users understand solar-energy options before exploring providers.' },
      { title: 'Customer Reviews', description: 'Customers can review shops and help others assess installation businesses.' },
    ],
    reflection: [
      {
        heading: 'From mock data to working CRUD',
        body: 'The initial build period was only four days. Although much of the frontend was ready for the hackathon presentation, database persistence was not yet reliable. Rather than presenting incomplete functionality as finished, I used temporary mock data to demonstrate the intended user experience. The team then received seven additional days to improve the project. During that period, I worked through API requests, routes, form data, state management, backend integration, and database relationships. By final submission, the application supported working Create, Read, Update, and Delete operations with persistent database data.',
      },
      {
        heading: 'What I learned',
        body: 'SUN SOLA taught me that building a frontend is not only about implementing screens. A working product depends on the relationship between UI, APIs, data structures, backend logic, and team dependencies. I also learned to identify integration risks earlier, reduce scope when necessary, and choose technology based on the team’s experience and available time rather than popularity alone.',
      },
    ],
    media: [
      { label: 'Final product screens', description: 'Home, authentication, shop listings, shop details, product management, and reviews.', status: 'Asset to add' },
      { label: 'Database ERD', description: 'The relationships among sellers, customers, shops, products, reviews, and images.', status: 'Asset to add' },
      { label: 'Architecture & data flow', description: 'Frontend → API → backend → database.', status: 'Asset to add' },
      { label: 'Design & implementation', description: 'Figma design system compared with implemented React interfaces.', status: 'Asset to add' },
      { label: 'GitHub / demo', description: 'Repository, live demo, or short walkthrough of the completed system.', status: 'Asset to add' },
    ],
    proof: ['Completed a functional CRUD application after the improvement period', 'Built as a three-person first-year capstone during SIT Hackathon 2025', 'Used the project to connect UI implementation with APIs, data models, and database persistence'],
    evidenceNeeded: ['Final product screens and a product walkthrough', 'Database ERD and architecture / data-flow visual', 'Figma design system, GitHub repository, and optional live demo'],
    limitations: ['Student hackathon and capstone project; this case study focuses on my frontend and cross-functional contribution, not sole ownership of the complete system.', 'The marketplace supports discovery and direct business contact; it was not designed as a full in-platform payment flow.'],
    skills: {
      hard: ['React', 'Tailwind CSS', 'REST API Integration', 'CRUD', 'MySQL', 'Database Relationships', 'Debugging'],
      soft: ['Cross-functional Collaboration', 'Problem Solving', 'Communication', 'Adaptability'],
    },
    roleFocus: { 'business-analyst': 'supporting', 'data-analyst': 'supporting', 'system-analyst': 'primary', 'product-manager': 'supporting' },
    tags: ['React', 'Tailwind CSS', 'REST API Integration', 'CRUD', 'MySQL'],
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
