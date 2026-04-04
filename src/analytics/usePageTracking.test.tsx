import { describe, it, expect, beforeEach } from 'vitest';
import { render, act } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { usePageTracking } from './usePageTracking';

function Harness() {
  usePageTracking();
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate('/about')}>go-about</button>
      <button onClick={() => navigate('/contact')}>go-contact</button>
    </>
  );
}

function wrap(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Harness />
    </MemoryRouter>
  );
}

describe('usePageTracking', () => {
  beforeEach(() => {
    window.dataLayer = [];
  });

  it('does not fire spa_pageview on initial mount', () => {
    wrap('/');
    const views = window.dataLayer.filter((e) => e['event'] === 'spa_pageview');
    expect(views).toHaveLength(0);
  });

  it('fires spa_pageview with correct page_path on navigation', () => {
    const { getByText } = wrap('/');
    act(() => { getByText('go-about').click(); });
    const views = window.dataLayer.filter((e) => e['event'] === 'spa_pageview');
    expect(views).toHaveLength(1);
    expect(views[0]).toMatchObject({ event: 'spa_pageview', page_path: '/about' });
  });

  it('fires once per unique navigation', () => {
    const { getByText } = wrap('/');
    act(() => { getByText('go-about').click(); });
    act(() => { getByText('go-contact').click(); });
    const views = window.dataLayer.filter((e) => e['event'] === 'spa_pageview');
    expect(views).toHaveLength(2);
    expect(views[1]).toMatchObject({ page_path: '/contact' });
  });
});
