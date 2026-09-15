import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import WorkExplorerControls from './WorkExplorerControls';
import { WORK_ROLES } from '../utils/workExplorer';

test('shows role lenses and calls the selected role handler', () => {
  const onRoleChange = vi.fn();

  render(<WorkExplorerControls roles={WORK_ROLES} activeRole="product-manager" search="" activeSkill="" onRoleChange={onRoleChange} onSearchChange={vi.fn()} onClearSkill={vi.fn()} onReset={vi.fn()} />);

  fireEvent.click(screen.getByRole('button', { name: 'Business Analyst' }));

  expect(onRoleChange).toHaveBeenCalledWith('business-analyst');
  expect(screen.getByRole('button', { name: 'Product Manager' })).toHaveAttribute('aria-pressed', 'true');
});

test('shows a clear skill action only when a skill is active', () => {
  render(<WorkExplorerControls roles={WORK_ROLES} activeRole="product-manager" search="" activeSkill="React" onRoleChange={vi.fn()} onSearchChange={vi.fn()} onClearSkill={vi.fn()} onReset={vi.fn()} />);

  expect(screen.getByRole('button', { name: 'Clear React filter' })).toBeInTheDocument();
});
