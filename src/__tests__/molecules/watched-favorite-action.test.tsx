import { WatchedFavoriteAction } from '@/components/molecules';
import { fireEvent, render, screen } from '@testing-library/react';

import { useUpdateFavorite, useUpdateWatch } from '../../hooks';

jest.mock('../../hooks', () => ({
  useUpdateFavorite: jest.fn(),
  useUpdateWatch: jest.fn(),
}));


describe('WatchedFavoriteAction', () => {
  const favoriteMock = {
    hasFavorite: false,
    favoriteEpisode: jest.fn(),
  };

  const watchMock = {
    hasWatched: false,
    watchEpisode: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useUpdateFavorite as jest.Mock).mockReturnValue(favoriteMock);
    (useUpdateWatch as jest.Mock).mockReturnValue(watchMock);
  });

  it('renders heart icon and watched button correctly', () => {
    render(<WatchedFavoriteAction id="123" isFavorite={false} isWatch={false} />);

    const heartIcon = screen.getByRole('button', { name: '' }).querySelector('svg');
    expect(heartIcon).toBeInTheDocument();

    const badgeCheckIcon = screen.getByTestId('badge-check-icon');
    expect(badgeCheckIcon).toBeInTheDocument();

    const divider = screen.getByTestId('divider');
    expect(divider).toBeInTheDocument();
  });

  it('calls favoriteEpisode when heart button is clicked', () => {
    render(<WatchedFavoriteAction id="123" isFavorite={false} isWatch={false} />);

    const favoriteButton = screen.getAllByRole('button')[0]; // first button is the heart
    fireEvent.click(favoriteButton);

    expect(favoriteMock.favoriteEpisode).toHaveBeenCalledTimes(1);
  });

  it('calls watchEpisode when watched button is clicked', () => {
    render(<WatchedFavoriteAction id="123" isFavorite={false} isWatch={false} />);

    const watchedButton = screen.getAllByRole('button')[1];
    fireEvent.click(watchedButton);

    expect(watchMock.watchEpisode).toHaveBeenCalledTimes(1);
  });

  it('shows filled heart icon when hasFavorite is true', () => {
    (useUpdateFavorite as jest.Mock).mockReturnValue({
      hasFavorite: true,
      favoriteEpisode: jest.fn(),
    });

    render(<WatchedFavoriteAction id="123" isFavorite={true} isWatch={false} />);

    const heartIcon = screen.getAllByRole('button')[0].querySelector('svg');
    expect(heartIcon?.getAttribute('fill')).toBe('#fb2c36');
  });
});
