const WORK_ROLES = [
  { slug: 'business-analyst', label: 'Business Analyst' },
  { slug: 'data-analyst', label: 'Data Analyst' },
  { slug: 'system-analyst', label: 'System Analyst' },
  { slug: 'product-manager', label: 'Product Manager' },
];

const DEFAULT_ROLE = 'product-manager';

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

export { WORK_ROLES, DEFAULT_ROLE, getProjectSkills, matchesProject, groupProjectsByRelevance };
