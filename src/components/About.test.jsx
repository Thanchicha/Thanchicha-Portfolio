import { render, screen } from '@testing-library/react';
import About from './About';

test('keeps the About statement readable at a controlled width', () => {
  render(<About />);
  const statement = screen.getByRole('heading', { level: 2 });
  expect(statement).toHaveClass('max-w-3xl');
  expect(statement).toHaveClass('leading-[1.28]');
});
