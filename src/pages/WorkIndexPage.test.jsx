import { fireEvent, render, screen, within } from '@testing-library/react';
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

  const hippoCard = screen.getByRole('heading', { name: 'Hello World HIPPO Hackathon 2025' }).closest('article');
  fireEvent.click(within(hippoCard).getByRole('button', { name: 'Filter by React' }));

  expect(screen.getByRole('heading', { name: 'Hello World HIPPO Hackathon 2025' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Cosaki' })).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'SUN SOLA' })).toBeInTheDocument();
  expect(screen.getByText('2 projects for Product Manager')).toBeInTheDocument();
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

test('shows a compact role toolkit before the full-width project results', () => {
  render(<MemoryRouter initialEntries={['/work?role=business-analyst']}><WorkIndexPage /></MemoryRouter>);

  const toolkitHeading = screen.getByRole('heading', { name: 'Business Analyst Toolkit' });
  const projectsHeading = screen.getByRole('heading', { name: 'Most relevant' });
  expect(toolkitHeading.compareDocumentPosition(projectsHeading) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  expect(screen.getByRole('heading', { name: 'Hard skills' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Soft skills' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Filter projects by Process Understanding' })).toBeInTheDocument();
  expect(screen.getByText(/SmartProcure.*operational workflow/i)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Filter projects by Requirement Analysis' }));
  expect(screen.getByRole('heading', { name: 'SmartProcure' })).toBeInTheDocument();
  expect(screen.getByText('Stakeholder Communication')).toBeInTheDocument();
});

test('updates the role toolkit when the selected role changes', () => {
  render(<MemoryRouter initialEntries={['/work?role=business-analyst']}><WorkIndexPage /></MemoryRouter>);

  fireEvent.click(screen.getByRole('button', { name: 'Data Analyst' }));

  expect(screen.getByRole('heading', { name: 'Data Analyst Toolkit' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Filter projects by Data Analysis' })).toBeInTheDocument();
});

test('searches within the active role lens and offers reset for no results', () => {
  render(<MemoryRouter initialEntries={['/work']}><WorkIndexPage /></MemoryRouter>);

  fireEvent.change(screen.getByRole('searchbox', { name: 'Search projects' }), { target: { value: 'zzzz' } });

  expect(screen.getByText(/No projects match/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Reset explorer' })).toBeInTheDocument();
});

test('shows skill names without hashtag symbols', () => {
  render(<MemoryRouter initialEntries={['/work']}><WorkIndexPage /></MemoryRouter>);

  expect(screen.queryByText('#React', { exact: true })).not.toBeInTheDocument();
  expect(screen.getAllByText('React', { exact: true }).length).toBeGreaterThan(0);
});
