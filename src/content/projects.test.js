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

test('maps project relevance to the target roles', () => {
  const cosaki = getProjectBySlug('cosaki');
  const hippo = getProjectBySlug('hello-world');

  expect(cosaki.roleFocus['product-manager']).toBe('primary');
  expect(hippo.roleFocus['system-analyst']).toBe('primary');
});

test('adds Sun Sola as a full-stack case study with transparent evidence placeholders', () => {
  const sunSola = getProjectBySlug('sun-sola');

  expect(sunSola).toMatchObject({
    title: 'SUN SOLA',
    role: 'Front-end Developer · Cross-functional Contributor',
  });
  expect(sunSola.facts).toEqual(expect.arrayContaining([
    { label: 'Team', value: '3 cross-functional members' },
    { label: 'Build period', value: '4-day hackathon + 7-day improvement period' },
  ]));
  expect(sunSola.featureList).toEqual(expect.arrayContaining([
    expect.objectContaining({ title: 'Seller shop management' }),
    expect.objectContaining({ title: 'Customer reviews' }),
  ]));
  expect(sunSola.media).toEqual(expect.arrayContaining([
    expect.objectContaining({ label: 'Database ERD', status: 'Asset to add' }),
    expect.objectContaining({ label: 'Business plan / pitch deck', status: 'Asset to add' }),
  ]));
});
