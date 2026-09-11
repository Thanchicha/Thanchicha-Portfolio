import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import WorkIndexPage from './WorkIndexPage';

test('links HIPPO from a standard work card without featured treatment', () => {
  render(<MemoryRouter><WorkIndexPage /></MemoryRouter>);

  const hippoLink = screen.getByRole('link', { name: /open hello world hippo hackathon 2025 case study/i });
  expect(hippoLink).toHaveAttribute('href', '/work/hello-world');
  expect(screen.getByText('1st Place + Popular Vote')).toBeInTheDocument();
});
