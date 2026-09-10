import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CertificatesAdminPage from './CertificatesAdminPage';

test('adds a local certificate from the admin form', () => {
  window.localStorage.clear();
  render(<MemoryRouter><CertificatesAdminPage /></MemoryRouter>);

  fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Academic Excellence Scholarship' } });
  fireEvent.change(screen.getByLabelText('Issuer'), { target: { value: 'SIT, KMUTT' } });
  fireEvent.change(screen.getByLabelText('Issued date'), { target: { value: '2026' } });
  fireEvent.click(screen.getByRole('button', { name: 'Save certificate' }));

  expect(screen.getByText('Academic Excellence Scholarship')).toBeInTheDocument();
});
