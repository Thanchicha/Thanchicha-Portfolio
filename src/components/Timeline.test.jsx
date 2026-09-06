import { render, screen } from '@testing-library/react';
import Timeline from './Timeline';

test('shows the verified training, internship, and startup timeline ranges', () => {
  render(<Timeline />);
  expect(screen.getByText(/Training Apr–May 2026 · Internship Jun–Aug 2026/i)).toBeInTheDocument();
  expect(screen.getByText('May–Aug 2026')).toBeInTheDocument();
  expect(screen.getByText(/SIT Innoventure · Startup continues/i)).toBeInTheDocument();
});
