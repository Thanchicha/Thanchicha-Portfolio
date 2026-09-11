import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

test('shows an About-first home with startup, internship, and project-context sections', () => {
  render(<MemoryRouter><HomePage /></MemoryRouter>);
  expect(screen.getByText(/Digital Service Innovation student focused on product management/i)).toBeInTheDocument();
  expect(screen.getByText('02 ABOUT_ME')).toBeInTheDocument();
  expect(screen.getByText('03 STARTUP_AND_INTERNSHIP')).toBeInTheDocument();
  expect(screen.getByText('04 PROJECTS_BY_CONTEXT')).toBeInTheDocument();
  expect(screen.getByText('25 cosplayers tested the Cosaki MVP')).toBeInTheDocument();
  expect(screen.queryByText('SUPPORTING_WORK')).not.toBeInTheDocument();
});
