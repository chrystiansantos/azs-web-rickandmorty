import { EpisodeDescription } from '@/components/organism';
import { render, screen } from '@testing-library/react';

jest.mock('../../components/atoms', () => ({
  Typography: ({ children }: { children: React.ReactNode }) => (
    <span data-testid="typography">{children}</span>
  ),
  Divider: () => <hr data-testid="divider" />,
  Time: ({ date }: { date: string }) => <time data-testid="time">{date}</time>,
}));

jest.mock('../../components/molecules', () => ({
  WatchedFavoriteAction: ({
    id,
    isFavorite,
    isWatch,
  }: {
    id: string;
    isFavorite: boolean;
    isWatch: boolean;
  }) => (
    <div data-testid="watched-favorite-action">
      {`ID: ${id}, Favorite: ${isFavorite}, Watched: ${isWatch}`}
    </div>
  ),
}));

describe('EpisodeDescription', () => {
  const defaultProps = {
    id: '1',
    episode: 'S01E01',
    airDate: '2025-06-30',
    isFavorite: true,
    isWatch: false,
  };

  it('renders the episode code in Typography', () => {
    render(<EpisodeDescription {...defaultProps} />);
    const typography = screen.getByTestId('typography');
    expect(typography).toHaveTextContent('S01E01');
  });

  it('renders two dividers', () => {
    render(<EpisodeDescription {...defaultProps} />);
    const dividers = screen.getAllByTestId('divider');
    expect(dividers).toHaveLength(2);
  });

  it('renders the air date in Time component', () => {
    render(<EpisodeDescription {...defaultProps} />);
    const time = screen.getByTestId('time');
    expect(time).toHaveTextContent('2025-06-30');
    expect(time.tagName).toBe('TIME');
  });

  it('renders the WatchedFavoriteAction with correct props', () => {
    render(<EpisodeDescription {...defaultProps} />);
    const action = screen.getByTestId('watched-favorite-action');
    expect(action).toHaveTextContent('ID: 1, Favorite: true, Watched: false');
  });

  it('has the correct layout classes on wrapper div', () => {
    const { container } = render(<EpisodeDescription {...defaultProps} />);
    const wrapper = container.firstChild as HTMLDivElement;

    expect(wrapper).toHaveClass('flex');
    expect(wrapper).toHaveClass('gap-4');
    expect(wrapper).toHaveClass('md:gap-6');
    expect(wrapper).toHaveClass('items-center');
    expect(wrapper).toHaveClass('justify-start');
    expect(wrapper).toHaveClass('mt-4');
    expect(wrapper).toHaveClass('text-slate-200');
  });
});
