import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CaseStudyPage from './CaseStudyPage';

test('labels the Cosaki MVP as early validation rather than product-market fit', () => {
  render(
    <MemoryRouter initialEntries={['/work/cosaki']}>
      <Routes><Route path="/work/:slug" element={<CaseStudyPage />} /></Routes>
    </MemoryRouter>,
  );
  expect(screen.getByText(/early partner validation/i)).toBeInTheDocument();
  expect(screen.queryByText(/product-market fit/i)).not.toBeInTheDocument();
});

test('renders HIPPO facts, award, features, and transparent media requests', () => {
  render(
    <MemoryRouter initialEntries={['/work/hello-world']}>
      <Routes><Route path="/work/:slug" element={<CaseStudyPage />} /></Routes>
    </MemoryRouter>,
  );

  expect(screen.getByRole('heading', { name: 'Hello World HIPPO Hackathon 2025' })).toBeInTheDocument();
  expect(screen.getByText('1st Place + Popular Vote')).toBeInTheDocument();
  expect(screen.getByText('Project facts')).toBeInTheDocument();
  expect(screen.getByText('Login authentication')).toBeInTheDocument();
  expect(screen.getByText('Media & documents')).toBeInTheDocument();
  expect(screen.getAllByText('Asset to add').length).toBeGreaterThan(0);
  expect(screen.queryByText('Early partner validation')).not.toBeInTheDocument();
});

test('places HIPPO hard and soft skills at the end of the case study', () => {
  render(
    <MemoryRouter initialEntries={['/work/hello-world']}>
      <Routes><Route path="/work/:slug" element={<CaseStudyPage />} /></Routes>
    </MemoryRouter>,
  );

  const skillsHeading = screen.getByRole('heading', { name: 'Skills developed' });
  const mediaHeading = screen.getByRole('heading', { name: 'Media & documents' });
  expect(screen.getByText('Hard skills')).toBeInTheDocument();
  expect(screen.getByText('Soft skills')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'View projects using Cross-functional Collaboration' })).toBeInTheDocument();
  expect(mediaHeading.compareDocumentPosition(skillsHeading) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
});
