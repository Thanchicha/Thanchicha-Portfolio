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
