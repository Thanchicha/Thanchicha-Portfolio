const WORK_ROLES = [
  { slug: 'business-analyst', label: 'Business Analyst' },
  { slug: 'data-analyst', label: 'Data Analyst' },
  { slug: 'system-analyst', label: 'System Analyst' },
  { slug: 'product-manager', label: 'Product Manager' },
];

const DEFAULT_ROLE = 'product-manager';

const ROLE_TOOLKITS = {
  'business-analyst': {
    hard: ['Requirement Analysis', 'Process Understanding', 'User Research', 'Data Analysis', 'Product Discovery', 'B2B Product Thinking'],
    soft: ['Stakeholder Communication', 'Technical Communication', 'Cross-functional Collaboration', 'Decision Making', 'Prioritization'],
    evidence: 'SmartProcure — translated an operational workflow into structured requirements and a working MVP.',
  },
  'data-analyst': {
    hard: ['Data Analysis', 'Customer Survey Analysis', 'Data Modeling', 'APIs', 'Market Research', 'Impact Estimation'],
    soft: ['Critical Thinking', 'Communication', 'Problem Solving', 'Stakeholder Communication', 'Adaptability'],
    evidence: 'AI Investment News Automation — turned multiple data sources into structured signals for faster review.',
  },
  'system-analyst': {
    hard: ['Requirement Analysis', 'Data Modeling', 'REST API Integration', 'MySQL', 'Node.js', 'Testing'],
    soft: ['Technical Communication', 'Cross-functional Collaboration', 'Problem Solving', 'Decision Making', 'Adaptability'],
    evidence: 'SUN SOLA — connected frontend flows, REST APIs, backend logic, and persistent MySQL data.',
  },
  'product-manager': {
    hard: ['Product Discovery', 'MVP Scoping', 'Feature Prioritization', 'Product Strategy', 'Roadmapping', 'User Testing'],
    soft: ['Stakeholder Communication', 'Product–Engineering Communication', 'Team Leadership', 'Decision Making', 'Prioritization'],
    evidence: 'Cosaki — moved from community research to MVP scope, user testing, and partner onboarding.',
  },
};

function getProjectSkills(project) {
  return [...(project.tags || []), ...(project.skills?.hard || []), ...(project.skills?.soft || [])];
}

function normalized(value) {
  return value.toLowerCase().trim();
}

function matchesProject(project, { search = '', skill = '' } = {}) {
  const searchableContent = [
    project.title,
    project.summary,
    project.category,
    project.role,
    ...getProjectSkills(project),
  ].filter(Boolean).join(' ').toLowerCase();
  const searchMatches = !search || searchableContent.includes(normalized(search));
  const skillMatches = !skill || getProjectSkills(project).some((projectSkill) => normalized(projectSkill) === normalized(skill));

  return searchMatches && skillMatches;
}

function groupProjectsByRelevance(projects, role, filters = {}) {
  return projects.filter((project) => matchesProject(project, filters)).reduce((grouped, project) => {
    const relevance = project.roleFocus?.[role];
    if (relevance === 'primary') grouped.primary.push(project);
    if (relevance === 'supporting') grouped.supporting.push(project);
    return grouped;
  }, { primary: [], supporting: [] });
}

function getRoleToolkit(role) {
  return ROLE_TOOLKITS[role] || ROLE_TOOLKITS[DEFAULT_ROLE];
}

export { WORK_ROLES, DEFAULT_ROLE, getProjectSkills, matchesProject, groupProjectsByRelevance, getRoleToolkit };
