import { EpisodeNameAndFavorite } from '@/components/molecules';
import { fireEvent, render, screen } from '@testing-library/react';

const mockFavoriteEpisode = jest.fn();
jest.mock('../../hooks', () => ({
  useUpdateFavorite: jest.fn(() => ({
    hasFavorite: true,
    favoriteEpisode: mockFavoriteEpisode,
  })),
}));


jest.mock('../../components/atoms', () => ({
  Button: ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
    <button data-testid="Button" onClick={onClick}>{children}</button>
  ),
  TitleEpisode: ({ children }: { children: React.ReactNode }) => (
    <h2 data-testid="TitleEpisode">{children}</h2>
  ),
}));

jest.mock('lucide-react', () => ({
  Heart: ({ fill, className }: { fill: string; className?: string }) => (
    <svg data-testid="Heart" data-fill={fill} className={className} />
  ),
}));

describe('EpisodeNameAndFavorite', () => {
  const props = {
    id: '1',
    episode: 'S01E01',
    name: 'Pilot',
    isFavorite: true,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render episode title correctly', () => {
    render(<EpisodeNameAndFavorite {...props} />);
    const title = screen.getByTestId('TitleEpisode');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('S01E01, Pilot');
  });

  it('should render Heart icon with red fill if favorite', () => {
    render(<EpisodeNameAndFavorite {...props} />);
    const heart = screen.getByTestId('Heart');
    expect(heart).toBeInTheDocument();
    expect(heart.getAttribute('data-fill')).toBe('oklch(63.7% 0.237 25.331)');
  });

  it('should call favoriteEpisode when button is clicked', () => {
    render(<EpisodeNameAndFavorite {...props} />);
    const button = screen.getByTestId('Button');
    fireEvent.click(button);
    expect(mockFavoriteEpisode).toHaveBeenCalledTimes(1);
  });
});
