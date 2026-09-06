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
