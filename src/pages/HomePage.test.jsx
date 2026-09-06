import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

test('shows the positioning and selected Cosaki proof', () => {
  render(<MemoryRouter><HomePage /></MemoryRouter>);
  expect(screen.getByText(/Digital Service Innovation student focused on product management/i)).toBeInTheDocument();
  expect(screen.getByText('25 cosplayers tested the Cosaki MVP')).toBeInTheDocument();
});
