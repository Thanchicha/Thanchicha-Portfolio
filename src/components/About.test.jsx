import { render, screen } from '@testing-library/react';
import About from './About';

test('keeps the About statement readable at a controlled width', () => {
  render(<About />);
  const statement = screen.getByRole('heading', { level: 2 });
  expect(statement).toHaveClass('max-w-3xl');
  expect(statement).toHaveClass('leading-[1.5]');
  expect(statement).toHaveClass('tracking-[0.01em]');
});

test('shows the academic excellence scholarship recognition', () => {
  render(<About />);
  expect(screen.getByText('Academic Excellence Scholarship — SIT, KMUTT')).toBeInTheDocument();
  expect(screen.getByText(/Awarded in 2025 and 2026 in recognition of academic performance/i)).toBeInTheDocument();
});
