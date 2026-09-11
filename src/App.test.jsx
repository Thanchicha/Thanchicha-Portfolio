import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the Home positioning copy at the root route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );

  expect(screen.getByText(/Digital Service Innovation student focused on product management/i)).toBeInTheDocument();
});

test('renders the Cosaki page from its shareable route', () => {
  render(
    <MemoryRouter initialEntries={['/work/cosaki']}>
      <App />
    </MemoryRouter>,
  );

  expect(screen.getByRole('heading', { name: 'Cosaki' })).toBeInTheDocument();
});

test('renders the HIPPO case study from its shareable route', () => {
  render(
    <MemoryRouter initialEntries={['/work/hello-world']}>
      <App />
    </MemoryRouter>,
  );

  expect(screen.getByRole('heading', { name: 'Hello World HIPPO Hackathon 2025' })).toBeInTheDocument();
});
