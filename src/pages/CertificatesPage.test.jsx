import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CertificatesPage from './CertificatesPage';

test('shows the public certificate collection when no local records are stored', () => {
  window.localStorage.clear();
  render(<MemoryRouter><CertificatesPage /></MemoryRouter>);
  const geminiCard = screen.getByRole('heading', { name: /Gemini Certification for Students/i }).closest('article');
  const ibmCard = screen.getByRole('heading', { name: /Developing Back-End Apps with Node.js and Express/i }).closest('article');

  expect(within(geminiCard).getByRole('img', { name: /Gemini Certification for Students.*certificate/i })).toHaveAttribute(
    'src',
    '/certificates/previews/gemini-certification-students-k12.png',
  );
  expect(within(geminiCard).getByRole('button', { name: /View Gemini Certification for Students.*certificate/i })).toBeInTheDocument();
  expect(within(ibmCard).getByRole('img', { name: /Developing Back-End Apps with Node.js and Express certificate/i })).toHaveAttribute(
    'src',
    '/certificates/previews/developing-backend-apps-node-express.png',
  );
  expect(within(ibmCard).getByRole('button', { name: /View Developing Back-End Apps with Node.js and Express certificate/i })).toBeInTheDocument();

  fireEvent.click(within(geminiCard).getByRole('button', { name: /View Gemini Certification for Students.*certificate/i }));
  expect(screen.getByRole('dialog', { name: /Gemini Certification for Students/i })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /Close certificate preview/i }));
  expect(screen.queryByRole('dialog', { name: /Gemini Certification for Students/i })).not.toBeInTheDocument();
});
