import { featuredProjects, getProjectBySlug } from './projects';

test('puts Cosaki first in featured work', () => {
  expect(featuredProjects[0].slug).toBe('cosaki');
});

test('keeps Cosaki evidence contextualized', () => {
  const cosaki = getProjectBySlug('cosaki');
  expect(cosaki.proof).toEqual(expect.arrayContaining([
    '25 cosplayers tested the Cosaki MVP',
    '7 rental-shop partners represent 470+ costumes',
  ]));
});

test('does not expose unfinished claim markers', () => {
  expect(JSON.stringify(featuredProjects)).not.toContain('TO ADD');
});

test('adds HIPPO as a full case study with verified recognition and project facts', () => {
  const hippo = getProjectBySlug('hello-world');
  expect(hippo).toMatchObject({
    title: 'Hello World HIPPO Hackathon 2025',
    award: '1st Place + Popular Vote',
  });
  expect(hippo.facts).toEqual(expect.arrayContaining([
    { label: 'Role', value: 'Front-end Developer' },
    { label: 'Team', value: '8 cross-functional members' },
    { label: 'Duration', value: '1-month bootcamp + 7-day hackathon' },
  ]));
  expect(hippo.media).toEqual(expect.arrayContaining([
    expect.objectContaining({ label: 'Final product screens', status: 'Asset to add' }),
  ]));
});
