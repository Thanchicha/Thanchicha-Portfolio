import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import WorkIndexPage from './WorkIndexPage';

test('links HIPPO from a standard work card without featured treatment', () => {
  render(<MemoryRouter><WorkIndexPage /></MemoryRouter>);

  const hippoLink = screen.getByRole('link', { name: /open hello world hippo hackathon 2025 case study/i });
  expect(hippoLink).toHaveAttribute('href', '/work/hello-world');
  expect(screen.getByText('1st Place + Popular Vote')).toBeInTheDocument();
});

test('filters work by a clickable skill hashtag', () => {
  render(<MemoryRouter initialEntries={['/work']}><WorkIndexPage /></MemoryRouter>);

  fireEvent.click(screen.getByRole('button', { name: 'Filter by React' }));

  expect(screen.getByRole('heading', { name: 'Hello World HIPPO Hackathon 2025' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Cosaki' })).not.toBeInTheDocument();
  expect(screen.getByText('1 project for Product Manager')).toBeInTheDocument();
});

test('defaults to Product Manager and shows its primary work first', () => {
  render(<MemoryRouter initialEntries={['/work']}><WorkIndexPage /></MemoryRouter>);

  expect(screen.getByRole('button', { name: 'Product Manager' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByRole('heading', { name: 'Most relevant' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Cosaki' })).toBeInTheDocument();
});

test('changes to the Data Analyst lens', () => {
  render(<MemoryRouter initialEntries={['/work']}><WorkIndexPage /></MemoryRouter>);

  fireEvent.click(screen.getByRole('button', { name: 'Data Analyst' }));

  expect(screen.getByRole('heading', { name: 'AI Investment News Automation' })).toBeInTheDocument();
});

test('searches within the active role lens and offers reset for no results', () => {
  render(<MemoryRouter initialEntries={['/work']}><WorkIndexPage /></MemoryRouter>);

  fireEvent.change(screen.getByRole('searchbox', { name: 'Search projects' }), { target: { value: 'zzzz' } });

  expect(screen.getByText(/No projects match/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Reset explorer' })).toBeInTheDocument();
});
