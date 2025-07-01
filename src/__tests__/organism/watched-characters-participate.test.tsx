import { WatchedCharactersParticipate } from '@/components/organism';
import { render, screen } from '@testing-library/react';

jest.mock('../../components/atoms', () => ({
  AmountCharactersParticipated: ({ amountCharacters }: { amountCharacters: number }) => (
    <div data-testid="amount-characters">{`Characters: ${amountCharacters}`}</div>
  ),
  Link: ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
    <a data-testid="details-link" href={href} className={className}>{children}</a>
  ),
}));

jest.mock('../../components/molecules', () => ({
  WatchedButton: ({ id, isWatch }: { id: string; isWatch: boolean }) => (
    <button data-testid="watched-button">{`Watched: ${isWatch} (ID: ${id})`}</button>
  ),
}));

describe('WatchedCharactersParticipate', () => {
  const defaultProps = {
    id: '42',
    amountCharacters: 8,
    isWatch: true,
  };

  it('renders AmountCharactersParticipated with correct value', () => {
    render(<WatchedCharactersParticipate {...defaultProps} />);
    const amount = screen.getByTestId('amount-characters');
    expect(amount).toBeInTheDocument();
    expect(amount).toHaveTextContent('Characters: 8');
  });

  it('renders WatchedButton with correct props', () => {
    render(<WatchedCharactersParticipate {...defaultProps} />);
    const watchedButton = screen.getByTestId('watched-button');
    expect(watchedButton).toBeInTheDocument();
    expect(watchedButton).toHaveTextContent('Watched: true (ID: 42)');
  });

  it('renders navigation Link with correct href and text', () => {
    render(<WatchedCharactersParticipate {...defaultProps} />);
    const link = screen.getByTestId('details-link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/episode/42');
    expect(link).toHaveTextContent('Detalhes');
  });

  it('renders ChevronRight icon inside the link', () => {
    render(<WatchedCharactersParticipate {...defaultProps} />);
    const link = screen.getByTestId('details-link');
    const svg = link.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('has correct layout classes on wrapper div', () => {
    const { container } = render(<WatchedCharactersParticipate {...defaultProps} />);
    const wrapper = container.firstChild as HTMLDivElement;

    expect(wrapper).toHaveClass('flex');
    expect(wrapper).toHaveClass('justify-between');
    expect(wrapper).toHaveClass('mt-4');
    expect(wrapper).toHaveClass('text-zinc-100');
  });
});
