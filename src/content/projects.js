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
    headline: 'An AI-powered concept to reduce food waste while improving engagement and sales through Makro Pro.',
    summary: 'A five-person CP AXTRA hackathon team developed Smart Adviser: an expiry-management and personalized-promotion concept grounded in customer research, field observation, and operational constraints.',
    facts: [
      { label: 'Role', value: 'Team Lead · Product / Business Analyst · Research · Data Support' },
      { label: 'Team', value: '5 members' },
      { label: 'Competition', value: 'AXTRA MILE Hackathon 2025 by CP AXTRA' },
      { label: 'Achievement', value: 'Top 20 Workshop Participant → Top 10 Finalist' },
      { label: 'Business context', value: 'Makro & Lotus’s' },
    ],
    sections: [
      {
        heading: 'The business and customer problem',
        body: 'The competition asked how technology and AI could create opportunities for CP AXTRA’s retail, wholesale, and service businesses. We focused on food waste around fresh and near-expiry products. The pitch deck cited approximately 24,400 tons of Makro food waste in 2024. In our survey of 44 Makro and Lotus’s customers, 93.2% reported throwing food away because it expired, while only 11.3% strongly prioritized tracking expiry dates.',
      },
      {
        heading: 'Field research and operational reality',
        body: 'At Makro Bangna, we observed parts of the online-order process and learned how store and digital operations interact. This changed our early ideas: a solution can be desirable for customers yet difficult in practice because of operations, logistics, brand positioning, internal systems, and development cost. Mentors challenged us to account for those constraints instead of treating the app as an isolated interface.',
      },
      {
        heading: 'The solution: Smart Adviser',
        body: 'Smart Adviser was designed as an additional Makro Pro feature with two connected directions. For customers, it helps them track products approaching expiry dates, log use, earn Makro Points, receive preservation recommendations, and get menu ideas. For the business, it proposes earlier, customer-specific promotions for products at higher risk of remaining unsold—rather than waiting until they become yellow-tag items.',
      },
      {
        heading: 'AI as a decision-support concept',
        body: 'We treated AI as a means to improve specific decisions, not as a generic feature. The concept used customer behavior to support product recommendations, targeted notifications for customers more likely to purchase, and additional product-usage data to improve forecasting. The key questions became: what data is needed, what decision improves, and how does that create value for both the user and the business?',
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
        heading: 'Leading the team under a competition deadline',
        body: 'As Team Lead, I divided work, set internal deadlines, tracked progress, scheduled discussions, and built buffer time when tasks slipped. I also helped align separate research, solution, and pitch contributions into one shared story. This was one of my first experiences coordinating a team for an external corporate competition.',
      },
      {
        heading: 'Impact assumptions, not results',
        body: 'Our pitch included an approximately eight-month implementation roadmap, resource requirements, and models for promotion, repeat purchase, cross-sell, forecasting, and food-waste reduction. These were proposed assumptions to make the business case measurable—not validated production outcomes or guarantees.',
      },
      {
        heading: 'What I learned',
        body: 'AXTRA MILE connected user need, business problem, operational reality, data, AI, financial impact, and implementation planning in one project. I learned to treat interviews as conversations, seek extreme users for deeper insight, listen for unexpected details, and refine ideas inside real constraints rather than ideal conditions.',
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
    role: 'User Research · Ideation · Prototype Development · User Testing',
    date: '2025',
    headline: 'Applying Design Thinking to help people feel safer in a public park.',
    summary: 'A first-year team project that used field research, prototype testing, and user feedback to explore safety improvements for Suan Thonburi Rom Park near KMUTT.',
    facts: [
      { label: 'Role', value: 'User Research · Ideation · Prototype Development · User Testing' },
      { label: 'Project type', value: 'First-year Design Thinking / Innovation project' },
      { label: 'Course', value: 'DSI101' },
      { label: 'Duration', value: 'One semester' },
      { label: 'Theme', value: 'SDG 11 · Sustainable Cities and Communities' },
    ],
    sections: [
      {
        heading: 'The starting point',
        body: 'This was one of my first university projects and my first introduction to Design Thinking. Our task was to identify a real-world problem outside the university and develop a response grounded in people’s needs rather than assumptions. We selected Suan Thonburi Rom Park because we could visit repeatedly, observe how the space was used, and talk directly with visitors.',
      },
      {
        heading: 'Empathize: learning from real users',
        body: 'We conducted field interviews with park users and found recurring concerns about safety after dark: poorly lit areas, unsafe walking routes, theft, groups gathering in secluded locations, and insufficient security coverage for the park’s size. For me personally, approaching unfamiliar people was challenging at first, but the process taught me to ask open questions, listen carefully, and separate user evidence from my own assumptions.',
      },
      {
        heading: 'Define: turning observations into a problem',
        body: 'We organized field findings into personas, journey maps, pain points, user needs, and problem statements. The work revealed two connected gaps: security personnel could not cover the entire park, and there was no simple emergency-reporting flow or practical way to organize community support. This helped us move from “the park needs more security” to the more actionable question: how might we help people feel safer and access help more easily?',
      },
      {
        heading: 'Ideate and prototype',
        body: 'Instead of committing to one idea immediately, we developed three alternatives and made each tangible enough to test: an Emergency Alarm Box that sends an alert and location to security staff; a Guardian Robot with a camera and sensors for patrol support; and a Suan Thon Guard Website for recruiting and coordinating volunteers. Prototypes included concept sketches, interface mockups, a 3D Alarm Box model, a security-guard app concept, and a volunteer website concept.',
      },
      {
        heading: 'What testing changed',
        body: 'Returning to users changed our view of the three concepts. The Emergency Alarm Box received the strongest response because it was simple, immediately understandable, and directly supported emergency response. The Guardian Robot showed potential but raised cost, maintenance, and privacy concerns. The volunteer website addressed a weaker need than we expected: most respondents were not interested in participating as safety volunteers. This confirmed that an innovative idea still needs evidence that it fits a real user need.',
      },
    ],
    featureList: [
      { title: 'Emergency Alarm Box', description: 'A physical emergency button at key locations that sends an alert and user location to security staff.' },
      { title: 'Guardian Robot', description: 'A patrol concept with a 180-degree camera and sensors to detect unusual activity and notify staff.' },
      { title: 'Suan Thon Guard Website', description: 'A volunteer recruitment and coordination concept explored as a community-support alternative.' },
    ],
    reflection: [
      {
        heading: 'My contribution',
        body: 'I participated throughout the process: conducting field research and interviews, documenting pain points, contributing to personas and journey maps, helping define the safety problem, generating and refining concepts, presenting prototypes, collecting follow-up feedback, interpreting results, and supporting the final presentation.',
      },
      {
        heading: 'A prototype is a way to learn',
        body: 'The project taught me that a prototype does not need to be a finished product. Its job is to make an idea concrete enough for people to react to it. That perspective later became useful in product discovery, feature prioritization, hackathons, and startup work.',
      },
      {
        heading: 'What I carried forward',
        body: 'This project reshaped my definition of innovation. It is not only a creative idea; it is finding a meaningful problem, understanding the people affected, developing alternatives, and validating them continuously. The fieldwork also made me more confident communicating with users and asking follow-up questions.',
      },
    ],
    media: [
      { label: 'Park research hero', description: 'A park photograph that introduces the setting and Design Thinking context.', status: 'Asset to add' },
      { label: 'Field research evidence', description: 'Public-safe photos from observation or interviews, with no personally identifiable information.', status: 'Asset to add' },
      { label: 'Problem evidence', description: 'Photos of dimly lit or secluded areas that informed the safety problem.', status: 'Asset to add' },
      { label: 'Persona and user journey', description: 'One persona and one journey map showing how research was synthesized.', status: 'Asset to add' },
      { label: 'Design Thinking process', description: 'A visual summary of Empathize → Define → Ideate → Prototype → Test.', status: 'Asset to add' },
      { label: 'Three solution concepts', description: 'Emergency Alarm Box, Guardian Robot, and Suan Thon Guard Website shown together.', status: 'Asset to add' },
      { label: 'Prototype evidence', description: '3D Alarm Box model and security-guard application prototype.', status: 'Asset to add' },
      { label: 'Testing results comparison', description: 'A comparison of 4.53, 4.00, and 3.63 user-satisfaction results with key feedback.', status: 'Asset to add' },
      { label: 'Research documents', description: 'Final presentation, Figma prototype, persona, journey map, and public-safe research evidence.', status: 'Asset to add' },
    ],
    proof: [
      'Emergency Alarm Box — 4.53 / 5 user satisfaction',
      'Guardian Robot — 4.00 / 5 user satisfaction',
      'Suan Thon Guard Website — 3.63 / 5 user satisfaction; 73.68% were not interested in volunteering',
    ],
    evidenceNeeded: ['Final presentation or design-process documentation', 'Public-safe research artifacts, with interviewee information removed', 'Prototype visuals, Figma link, and raw testing results if suitable for sharing'],
    limitations: ['First-year course project; scores represent user-testing feedback within this project, not a deployed safety system.', 'No interviewee-identifying information should be published in the portfolio.'],
    skills: {
      hard: ['Design Thinking', 'User Research', 'Field Research', 'User Interviews', 'Problem Definition', 'User Persona', 'User Journey Mapping', 'Pain Point Analysis', 'Brainstorming', 'Ideation', 'Prototyping', 'User Testing', 'Hypothesis Validation'],
      soft: ['Communication', 'Active Listening', 'Empathy', 'Team Collaboration', 'Presentation', 'Adaptability', 'Confidence Building', 'Critical Thinking'],
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
