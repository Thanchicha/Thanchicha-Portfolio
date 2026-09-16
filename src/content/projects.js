const projects = [
  {
    slug: 'cosaki',
    title: 'Cosaki',
    category: 'Flagship startup',
    role: 'Co-Founder · Product Lead',
    date: 'May 2026 to Present',
    headline: 'Making cosplay rental easier to discover, coordinate, and trust.',
    summary: 'A two-person startup building a more structured, searchable, and trustworthy rental experience for Thailand’s cosplay community.',
    traction: [
      { value: '7', label: 'Partner rental shops' },
      { value: '470+', label: 'Costumes represented' },
      { value: '25+', label: 'Initial cosplayer interviews' },
      { value: 'MVP', label: 'Working rental flow' },
    ],
    proof: [
      '25 cosplayers tested the Cosaki MVP',
      '7 rental-shop partners represent 470+ costumes',
      'Top 5 of 18 teams at SIT Innoventure',
    ],
    validationNote: 'This case study presents the work as an early validation stage, with evidence and learnings made explicit so the next product decision is easy to evaluate.',
    sections: [
      {
        heading: 'The problem',
        body: 'Cosplay rental still relies heavily on Facebook groups, direct messages, spreadsheets, and manual queue management. The result is friction for both shops and renters.',
        bullets: ['Rental shops: double bookings, lost customer information, damage disputes, and the risk of expensive costumes not being returned.', 'Renters: unclear availability, inconsistent conditions, delivery delays, and difficulty finding specific costumes.'],
        highlight: 'The deeper problem was not simply finding costumes—it was the lack of a trusted, structured system for rental transactions.',
      },
      {
        heading: 'From research to MVP',
        body: 'I led open-ended interviews with cosplayers and reviewed recurring discussions on Facebook and TikTok to identify patterns beyond individual opinions.',
        bullets: ['Initial assumption: costume discovery was the biggest pain point.', 'What research showed: experienced users often had workarounds.', 'What mattered more: trust and identity, queue management, damage disputes, rental operations, and delivery risks.'],
        highlight: 'This finding changed how I prioritized the MVP.',
      },
      {
        heading: 'Defining the MVP',
        body: 'COSAKI began as a broader ecosystem for rental, buying, selling, and community features. After discussing feasibility with my co-founder, I narrowed the first release to rental, where the pain points were clearest.',
        highlight: 'User Pain × Business Value × Development Effort',
        flow: ['Search', 'Check availability', 'Book', 'Pay', 'Rent', 'Return'],
      },
      {
        heading: 'My role',
        body: 'As Co-Founder and Product Lead, I turn user problems into product decisions while my teammate handles most software implementation.',
        bullets: ['Problem framing, user interviews, and pain-point analysis', 'MVP direction, feature prioritization, and requirement definition', 'Product-flow and usability review', 'User testing, partner outreach, onboarding, and early go-to-market planning', 'Product–engineering communication and future-phase planning'],
      },
      {
        heading: 'User testing and early traction',
        body: 'I observed cosplay-community users using the MVP directly. Experienced renters generally navigated the flow with little or no instruction. Testing also highlighted logistics as a future priority, because late delivery can affect the current renter and the next booking.',
        bullets: ['Personally contacted and onboarded rental-shop partners.', 'Reduced onboarding friction by helping prepare listings instead of asking shops to rebuild their catalog.', '7 partner shops agreed to participate, representing 470+ costumes.'],
        highlight: 'Real businesses agreeing to share inventory was the strongest early validation signal—not simply positive feedback on the idea.',
      },
    ],
    featureList: [
      { title: 'Smart search', description: 'Search by character, size, and availability date for rental-specific discovery.' },
      { title: 'Smart calendar', description: 'A centralized booking calendar for clearer availability and queue management.' },
      { title: 'Trust & identity verification', description: 'Stronger identity-verification concepts for rentals with meaningful financial risk.' },
      { title: 'Standard penalty guidance', description: 'A neutral reference concept for common damage cases and clearer expectations.' },
    ],
    reflection: [
      {
        heading: 'Current stage',
        body: 'COSAKI is in the working-MVP and early-validation stage.',
        bullets: ['Refine the core rental flow and trust / protection mechanisms', 'Test with more users and expand partner inventory', 'Validate logistics-related needs', 'Prepare for broader market testing'],
      },
      {
        heading: 'What I learned',
        body: 'COSAKI taught me what it means to build a product from zero. The important lesson was separating what I personally wanted the product to become from what users and businesses were willing to use.',
        flow: ['Observe', 'Research', 'Validate', 'Prioritize', 'Build', 'Test', 'Learn', 'Adjust'],
        highlight: 'Strong validation comes from behavior: users testing the product, shops onboarding, and partners contributing inventory.',
      },
    ],
    media: [
      { label: 'Hero / MVP image', description: 'One strong product mockup or current COSAKI screen with the startup tagline.', status: 'Asset to add' },
      { label: 'Problem and research evidence', description: 'Anonymized community pain points, interview notes, affinity map, or journey map.', status: 'Asset to add' },
      { label: 'Insight → MVP scope', description: 'Observed problems → interviews → key insights → focused rental MVP.', status: 'Asset to add' },
      { label: 'Key product screens', description: 'Search, costume detail, booking / payment, and shop calendar or order management.', status: 'Asset to add' },
      { label: 'User testing and traction', description: 'What worked, what changed, and public-safe partner-validation evidence.', status: 'Asset to add' },
      { label: 'Startup / demo day', description: 'A suitable SIT Innoventure team, pitch, booth, or Demo Day image.', status: 'Asset to add' },
      { label: 'Current roadmap', description: 'A short visual: MVP → Trust & Safety → Logistics → Wider Market.', status: 'Asset to add' },
    ],
    evidenceNeeded: ['Current MVP or demo link', 'Selected public-safe research notes and prototype screens', 'Anonymized user-testing and early partner-validation evidence'],
    limitations: ['Early-stage MVP; this page focuses on validation evidence and partner acceptance rather than outcome, transaction, retention, or revenue claims.', 'Community research and user testing should be presented without participant-identifying information.'],
    skills: {
      hard: ['Product Discovery', 'MVP Scoping', 'Feature Prioritization', 'Product Strategy', 'Requirement Definition', 'Roadmapping', 'User Interviews', 'Qualitative Research', 'User Testing', 'Market Validation'],
      soft: ['Co-Founder Ownership', 'Product–Engineering Communication', 'Decision Making', 'Stakeholder Communication', 'Prioritization'],
    },
    roleFocus: { 'business-analyst': 'primary', 'data-analyst': 'supporting', 'system-analyst': 'supporting', 'product-manager': 'primary' },
    tags: ['Product Discovery', 'MVP Scoping', 'User Research', 'Partner Acquisition', 'Early-stage Validation'],
  },
  {
    slug: 'smartprocure',
    title: 'SmartProcure',
    category: 'Internship project',
    role: 'Software Developer · End-to-End MVP Development',
    date: 'June to August 2026',
    award: 'NIA Innovator Journey · RealS Management / Pakarang Supply',
    headline: 'Helping hotels plan fresh-food procurement with less manual work and clearer demand visibility.',
    summary: 'A three-month internship MVP for a B2B hospitality supply-chain startup. SmartProcure helps hotels create a reviewable ingredient plan while giving Pakarang Supply clearer visibility into future demand.',
    facts: [
      { label: 'Role', value: 'Software Developer · End-to-End MVP Development' },
      { label: 'Team', value: '3 interdisciplinary members: Software Development, Mechanical Engineering, and Marketing' },
      { label: 'Program', value: 'NIA Innovator Journey · STEAM4INNOVATOR bootcamp' },
      { label: 'Context', value: 'B2B hospitality fresh-food supply chain' },
      { label: 'Delivery', value: 'Remote MVP development with weekly mentor reviews' },
    ],
    sections: [
      {
        heading: 'The challenge',
        body: 'Hotels estimate fresh-food demand from changing variables such as occupancy, guest numbers, meal participation, menus, and existing inventory. This can be time-consuming and uncertain, so staff may order extra stock as a safety measure, increasing food-waste risk. Pakarang Supply also needed better visibility into likely customer orders so it could prepare fresh inventory more efficiently. The challenge was to improve planning on both sides without creating extra work for hotel staff.',
      },
      {
        heading: 'The solution',
        body: 'I designed and developed SmartProcure, a procurement-planning web application that uses hotel occupancy and guest estimates, meal participation, menus and ingredient requirements, existing inventory, and safety buffers to prepare an initial ingredient recommendation. Rather than asking users to calculate everything manually, the system lets them review, adjust, and confirm a recommendation. The core design principle was simple: reduce manual input while keeping the user in control.',
      },
      {
        heading: 'AI-assisted planning',
        body: 'I integrated the Gemini API for recommendation tasks such as menu suggestions and preliminary planning, while deliberately separating AI from deterministic calculations. Rule-based logic handled quantities and measurable calculations; AI supported recommendation and interpretation. The final decision remained with the user. This made AI an assistant in a clear human-in-the-loop workflow rather than a feature added simply because AI was available.',
      },
      {
        heading: 'My contribution',
        body: 'I was the primary developer responsible for turning the business problem into a working MVP. I mapped user and system workflows before development, designed the procurement-planning data structure, built the web application and calculation logic, integrated Gemini, designed the low-friction review flow, considered data minimization for hotel PMS data, tested the main end-to-end journey, deployed the MVP for remote testing, and prepared documentation and user guidance for handoff.',
      },
      {
        heading: 'Cross-functional collaboration',
        body: 'With the Mechanical Engineering teammate, I aligned data formats so procurement information from the web system could be compared with actual ingredient weights measured during receiving. With the Marketing teammate, I translated data flow, AI recommendations, and calculation logic into business language for presentations and marketing planning. The project strengthened my ability to communicate technical work with people from different disciplines.',
      },
    ],
    reflection: [
      {
        heading: 'Startup working experience',
        body: 'The internship was fully remote, with weekly progress reviews and mentor feedback. In the startup’s fast, less structured environment, the development cycle was iterative: build, demo, receive feedback, adjust, and build again. I learned that progress and learning can matter more than waiting for a perfect first version.',
      },
      {
        heading: 'What I learned',
        body: 'This internship was the first time I combined skills I had learned separately into one business project. I moved beyond thinking only about how to build a website and began focusing on the decision the user is making, the data the system actually needs, how to reduce user effort, where AI is genuinely useful, and how technical decisions affect business workflows and handoff.',
      },
    ],
    media: [
      { label: 'Hero product screenshot', description: 'A high-level SmartProcure dashboard or procurement-planning view.', status: 'Asset to add' },
      { label: 'System / user flow', description: 'A clean flow from hotel input to recommendation, review, and confirmation.', status: 'Asset to add' },
      { label: 'Key product screens', description: 'Dashboard, planning, recommendation, and review / confirm screens.', status: 'Asset to add' },
      { label: 'AI flow', description: 'Data → rules and Gemini → recommendation → human review.', status: 'Asset to add' },
      { label: 'Cross-functional integration', description: 'How software, receiving hardware, and marketing work connect.', status: 'Asset to add' },
      { label: 'Internship context', description: 'One or two suitable NIA workshop or team images.', status: 'Asset to add' },
      { label: 'Demo / repository', description: 'A deployed demo, public GitHub repository, or short walkthrough when appropriate.', status: 'Asset to add' },
    ],
    proof: ['End-to-end procurement-planning MVP developed during a three-month internship', 'Rule-based calculation logic kept separate from Gemini-assisted recommendations', 'Remote deployment, end-to-end flow testing, and handoff documentation'],
    evidenceNeeded: ['Approved product screenshots and system / user flow', 'Public-safe AI and cross-functional integration diagrams', 'Deployed demo, public repository, or short demo video if shareable'],
    limitations: ['Internship MVP; this case study does not imply production deployment or measured operational impact.', 'Hotel data is described at a high level; confidential customer or PMS information is not published.'],
    skills: {
      hard: ['JavaScript', 'HTML/CSS', 'Node.js', 'Gemini API', 'Data Modeling', 'Git/GitHub', 'Deployment', 'Testing'],
      soft: ['Cross-functional Collaboration', 'Remote Collaboration', 'Stakeholder Communication', 'Technical Communication'],
    },
    roleFocus: { 'business-analyst': 'primary', 'data-analyst': 'supporting', 'system-analyst': 'primary', 'product-manager': 'primary' },
    tags: ['Product Discovery', 'Requirement Analysis', 'Process Understanding', 'B2B Product Thinking', 'Human-in-the-loop Design', 'AI-assisted Recommendation'],
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
    category: 'Bootcamp & Hackathon',
    role: 'Front-end Developer',
    date: 'Jan–Feb 2025',
    award: '1st Place + Popular Vote',
    headline: 'Redesigning KMUTT SIT’s classroom booking website into a clearer and more modern booking experience.',
    summary: 'After a one-month voluntary bootcamp, our eight-person cross-functional team had seven days to redesign the School of Information Technology’s existing classroom booking website.',
    facts: [
      { label: 'Role', value: 'Front-end Developer' },
      { label: 'Team', value: '8 cross-functional members' },
      { label: 'Duration', value: '1-month bootcamp + 7-day hackathon' },
      { label: 'Organization', value: 'School of Information Technology, KMUTT' },
      { label: 'Type', value: 'Bootcamp & Hackathon project' },
    ],
    sections: [
      {
        heading: 'The challenge',
        body: 'The original system had an outdated interface and a booking experience that was difficult to navigate by modern usability expectations. Our goal was to redesign the experience so students and staff could understand the booking flow more easily while preserving essential functions such as authentication, role-based access, room selection, scheduling, and booking details.',
      },
      {
        heading: 'My contribution',
        body: 'As a Front-end Developer, I translated Figma designs into responsive web interfaces, built page layouts and reusable UI structures, and implemented visual styling and responsive behavior. I clarified implementation details with the design team, collaborated with another frontend developer who focused more on application logic and backend communication, and worked with teammates and mentors to resolve technical blockers during the seven-day build.',
      },
      {
        heading: 'The redesigned experience',
        body: 'The redesigned system included authentication and role-based access, so users sign in before accessing booking functions with permissions based on their role; a room booking flow where users select a classroom, date, time, and reservation details; and Help & FAQ guidance. The interface focused on clearer information hierarchy, simpler navigation, and a more modern visual experience than the legacy website.',
      },
    ],
    featureList: [
      { title: 'Authentication & Role-based Access', description: 'Users sign in before accessing booking functions, with permissions based on their role.' },
      { title: 'Room Booking Flow', description: 'Users select a classroom, date, time, and provide reservation details.' },
      { title: 'Help & FAQ', description: 'Guidance helps users understand how to use the redesigned system.' },
    ],
    reflection: [
      {
        heading: 'Result',
        body: 'The team completed the redesign within the 7-day hackathon and received 1st Place and the Popular Vote Award. For me, this project was an important transition from learning frontend concepts in a bootcamp to applying them in a real team under a deadline.',
      },
      {
        heading: 'What I learned',
        body: 'This project taught me how frontend development works inside a cross-functional team, not just as isolated coding. I learned to translate designs into implementation, communicate technical constraints with designers, break blockers into smaller problems, seek feedback quickly, and keep delivering under a short deadline. These lessons became the foundation for later projects where I took on more complex frontend, API, and product responsibilities.',
      },
    ],
    media: [
      { label: 'Before & After', description: 'Comparison between the legacy classroom-booking interface and our redesign.', status: 'Asset to add' },
      { label: 'Final Product Screens', description: 'Login, booking flow, reservation form, and Help / FAQ pages.', status: 'Asset to add' },
      { label: 'Design → Implementation', description: 'Selected Figma screens alongside the implemented frontend.', status: 'Asset to add' },
      { label: 'Hackathon Evidence', description: 'Demo, repository, presentation, team photos, or award proof.', status: 'Asset to add' },
    ],
    proof: ['1st Place — Hello World HIPPO Hackathon 2025', 'Popular Vote Award', 'Delivered within a 7-day hackathon'],
    evidenceNeeded: ['Before-and-after comparison and final product screens', 'Selected Figma screens with implemented frontend', 'Demo, repository, presentation, team photos, or award proof'],
    limitations: ['Team hackathon project; this case study describes my frontend contribution and collaboration without attributing the full system to one person.'],
    skills: {
      hard: ['HTML', 'CSS', 'JavaScript', 'React', 'Front-end Development', 'Responsive UI'],
      soft: ['Cross-functional Collaboration', 'Communication', 'Problem Solving', 'Working Under Pressure'],
    },
    roleFocus: { 'business-analyst': 'supporting', 'data-analyst': 'supporting', 'system-analyst': 'primary', 'product-manager': 'supporting' },
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Front-end Development', 'Responsive UI'],
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
    category: 'NTU Hackathon 2026',
    role: 'Product Concept · Interaction Design · Physical Prototyping · Pitching',
    date: '2026',
    award: 'Honorable Mention — 20 awarded teams among 50 participating teams',
    headline: 'A Unity-based rehabilitation game concept designed to make stroke rehabilitation exercises feel more purposeful and engaging.',
    summary: 'A two-day hackathon project that connected rehabilitation movements with a story-driven game and physical controllers.',
    facts: [
      { label: 'Role', value: 'Product Concept · Interaction Design · Physical Prototyping · Pitching' },
      { label: 'Project type', value: '2-day hackathon prototype' },
      { label: 'Platform', value: 'Unity-based game concept' },
      { label: 'Recognition', value: 'Honorable Mention — 20 awarded teams among 50 participating teams' },
    ],
    sections: [
      {
        heading: 'The challenge',
        body: 'The challenge was to create a game that could support physical rehabilitation for a stroke patient. During a short online introduction to the user, one detail stood out: he often spoke about his family. Because our direct user access was limited, I treated this as an initial insight rather than a confirmed need and supplemented it with additional research. This led to the concept: “Protect what you love again.”',
      },
      {
        heading: 'The solution — Paw Guardian',
        body: 'Paw Guardian is a combat-style game where the player protects a black cat representing something meaningful to them. Gameplay connects rehabilitation movements with two physical controllers that can be switched between hands to support different movement needs.',
      },
      {
        heading: 'My contribution',
        body: 'My teammate focused on Unity development, while I focused on the product concept and experience. I developed the Paw Guardian concept, translated the user context into the game narrative, researched the rehabilitation context, designed physical interactions, built the foam sword and slime controller with sensors, supported testing and hardware assembly, and presented the final prototype to the judges.',
      },
    ],
    featureList: [
      { title: 'Sword movement', description: 'A sensor-enabled foam sword lets the player attack monsters through arm movements.' },
      { title: 'Grip exercise', description: 'A squeezable slime-shaped foam controller creates a second rehabilitation interaction using grip strength.' },
      { title: 'Meaningful game narrative', description: 'Protecting a black cat gives the movement activity a purpose rooted in the initial user insight.' },
    ],
    reflection: [
      {
        heading: 'Outcome',
        body: 'Paw Guardian received an Honorable Mention, with 20 teams receiving recognition among 50 participating teams.',
      },
      {
        heading: 'What I learned',
        body: 'This project taught me how to turn limited user insight into a testable concept, divide responsibilities effectively under a two-day deadline, and contribute to a technical product through product thinking, interaction design, prototyping, and storytelling.',
      },
    ],
    media: [
      { label: 'Physical prototype', description: 'The sensor-enabled foam sword and squeezable slime controller.', status: 'Asset to add' },
      { label: 'Gameplay concept', description: 'Unity game screens showing the combat and protection narrative.', status: 'Asset to add' },
      { label: 'Prototype testing', description: 'Public-safe testing or hardware-assembly evidence.', status: 'Asset to add' },
      { label: 'Pitch & award evidence', description: 'Final presentation, team photo, or Honorable Mention proof.', status: 'Asset to add' },
    ],
    proof: ['Honorable Mention — 20 awarded teams among 50 participating teams', 'Two physical rehabilitation interactions: arm movement and grip exercise', 'Built and pitched within a 2-day hackathon'],
    evidenceNeeded: ['Photos or video of the physical controllers and prototype', 'Unity gameplay screens or short walkthrough', 'Pitch deck, team photo, or award evidence'],
    limitations: ['Hackathon concept developed from limited direct user access; the initial insight informed a testable direction, not a clinical claim.', 'This is a prototype concept, not a validated medical device or rehabilitation treatment.'],
    skills: {
      hard: ['Product Ideation', 'User-Centered Design', 'Interaction Design', 'Rapid Prototyping', 'Hardware Prototyping', 'Pitching', 'Storytelling'],
      soft: ['Cross-functional Collaboration', 'Communication', 'Adaptability', 'Working Under Pressure'],
    },
    roleFocus: { 'business-analyst': 'primary', 'data-analyst': 'supporting', 'system-analyst': 'supporting', 'product-manager': 'primary' },
    tags: ['Product Ideation', 'Interaction Design', 'Rapid Prototyping', 'Hardware Prototyping', 'Pitching'],
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
      ...supportingProjects.filter((project) => project.slug !== 'sun-sola'),
    ],
  },
  {
    title: 'University Team Project',
    description: 'Course projects where I practiced system thinking, design research, and building with a small team.',
    projects: [supportingProjects.find((project) => project.slug === 'sun-sola'), projects.find((project) => project.slug === 'suan-thonburi-rom-park')],
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
