import { render, screen } from '@testing-library/react';
import Timeline from './Timeline';

test('shows the verified training, internship, and startup timeline ranges', () => {
  render(<Timeline />);
  expect(screen.getByText(/Training Apr–May 2026 · Internship Jun–Aug 2026/i)).toBeInTheDocument();
  expect(screen.getAllByText('May 2026')).toHaveLength(2);
  expect(screen.getByText(/SIT Innoventure · Startup continues/i)).toBeInTheDocument();
});

test('separates ongoing work from completed experience', () => {
  render(<Timeline />);
  expect(screen.getByRole('heading', { name: 'Currently in progress' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Completed experience' })).toBeInTheDocument();
  expect(screen.getAllByText('May 2026')).toHaveLength(2);
  expect(screen.getByText('Jun–Aug 2026')).toBeInTheDocument();
});
