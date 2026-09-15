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

test('keeps HIPPO focused on the classroom-booking redesign and verified recognition', () => {
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
    expect.objectContaining({ label: 'Before & After', status: 'Asset to add' }),
    expect.objectContaining({ label: 'Hackathon Evidence', status: 'Asset to add' }),
  ]));
});

test('maps project relevance to the target roles', () => {
  const cosaki = getProjectBySlug('cosaki');
  const hippo = getProjectBySlug('hello-world');

  expect(cosaki.roleFocus['product-manager']).toBe('primary');
  expect(hippo.roleFocus['system-analyst']).toBe('primary');
});

test('keeps Sun Sola aligned with its discovery-platform and CRUD delivery story', () => {
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
    expect.objectContaining({ title: 'Customer & Seller Authentication' }),
    expect.objectContaining({ title: 'Shop & Product Management' }),
  ]));
  expect(sunSola.media).toEqual(expect.arrayContaining([
    expect.objectContaining({ label: 'Database ERD', status: 'Asset to add' }),
    expect.objectContaining({ label: 'GitHub / demo', status: 'Asset to add' }),
  ]));
});

test('adds the park safety project with user-validation results and media placeholders', () => {
  const parkSafety = getProjectBySlug('suan-thonburi-rom-park');

  expect(parkSafety).toMatchObject({
    title: 'Suan Thonburi Rom Park Safety Innovation',
    role: 'User Research · Problem Definition · Prototyping · User Testing',
  });
  expect(parkSafety.featureList).toEqual(expect.arrayContaining([
    expect.objectContaining({ title: 'Emergency Alarm Box' }),
    expect.objectContaining({ title: 'Guardian Robot' }),
    expect.objectContaining({ title: 'Suan Thon Guard Website' }),
  ]));
  expect(parkSafety.proof).toEqual(expect.arrayContaining([
    'Emergency Alarm Box — 4.53 / 5 user satisfaction',
    'Suan Thon Guard Website — 3.63 / 5 user satisfaction; 73.68% were not interested in volunteering',
  ]));
  expect(parkSafety.media).toEqual(expect.arrayContaining([
    expect.objectContaining({ label: 'User testing results', status: 'Asset to add' }),
  ]));
});

test('expands CP Axtra with Smart Adviser leadership, research, and estimate-aware evidence', () => {
  const cpAxtra = getProjectBySlug('cp-axtra');

  expect(cpAxtra).toMatchObject({
    title: 'AXTRA MILE Hackathon 2025 — Smart Adviser',
    role: 'Team Lead · Product / Business Analyst · Research · Data Support',
  });
  expect(cpAxtra.facts).toEqual(expect.arrayContaining([
    { label: 'Team', value: '5 members' },
    { label: 'Achievement', value: 'Top 20 Workshop Participant → Top 10 Finalist' },
  ]));
  expect(cpAxtra.media).toEqual(expect.arrayContaining([
    expect.objectContaining({ label: 'Makro pitch deck', status: 'Asset to add' }),
    expect.objectContaining({ label: 'Impact and financial model', status: 'Asset to add' }),
  ]));
  expect(cpAxtra.limitations).toEqual(expect.arrayContaining([
    expect.stringMatching(/estimated/i),
  ]));
});
