import { render, screen } from '@/test/test-utils';
import { describe, expect, it } from 'vitest';
import { MainLayout } from '../MainLayout';

describe('Component Test: MainLayout', () => {
  it('should render navigation links', () => {
    render(<MainLayout>something</MainLayout>);
    const message = screen.getAllByText(/something/i);
    expect(message).toBeVisible;
  });
});
