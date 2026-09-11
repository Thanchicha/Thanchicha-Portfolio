import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CertificatesPage from './CertificatesPage';

test('shows an empty state when no certificates are stored', () => {
  window.localStorage.clear();
  render(<MemoryRouter><CertificatesPage /></MemoryRouter>);
  expect(screen.getByText(/No certificates have been published yet/i)).toBeInTheDocument();
});
