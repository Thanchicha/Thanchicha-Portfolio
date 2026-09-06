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
