import { pageMetadata } from './metadata';

test('creates an accurate Cosaki page title', () => {
  expect(pageMetadata('cosaki').title).toBe('Cosaki Case Study | Thanchicha Hempichit');
});

test('uses the portfolio social description on the homepage', () => {
  expect(pageMetadata('home').description).toMatch(/product discovery, strategy, requirements, AI automation/i);
});
