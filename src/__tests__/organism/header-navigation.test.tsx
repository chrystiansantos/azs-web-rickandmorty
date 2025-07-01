import { HeaderNavigation } from '@/components/organism';
import { render, screen } from '@testing-library/react';

jest.mock('../../components/atoms', () => ({
  Link: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a data-testid={`link-${href}`} href={href}>{children}</a>
  ),
}));

describe('HeaderNavigation', () => {
  it('renders the header and nav elements', () => {
    render(<HeaderNavigation />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('navigation').parentElement?.tagName).toBe('HEADER');
  });

  it('renders all navigation links with correct labels and hrefs', () => {
    render(<HeaderNavigation />);

    const homeLink = screen.getByTestId('link-/');
    const favoritesLink = screen.getByTestId('link-/favorites');
    const watchesLink = screen.getByTestId('link-/watches');

    expect(homeLink).toHaveTextContent('Home');
    expect(homeLink).toHaveAttribute('href', '/');

    expect(favoritesLink).toHaveTextContent('Favoritos');
    expect(favoritesLink).toHaveAttribute('href', '/favorites');

    expect(watchesLink).toHaveTextContent('Assistidos');
    expect(watchesLink).toHaveAttribute('href', '/watches');
  });

  it('renders links inside a styled unordered list', () => {
    const { container } = render(<HeaderNavigation />);
    const ul = container.querySelector('ul');

    expect(ul).toBeInTheDocument();
    expect(ul).toHaveClass('list-none');
    expect(ul).toHaveClass('flex');
    expect(ul).toHaveClass('justify-center');
    expect(ul).toHaveClass('gap-4');
    expect(ul).toHaveClass('md:gap-10');
    expect(ul).toHaveClass('md:justify-start');
  });
});
