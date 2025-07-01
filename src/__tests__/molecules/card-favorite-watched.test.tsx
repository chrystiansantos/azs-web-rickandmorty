import { CardFavoriteWatched } from '@/components/molecules';
import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';

jest.mock('../../util', () => ({
  convertDate: jest.fn(() => '01 de Janeiro de 2023'),
}));

jest.mock('../../components/atoms', () => ({
  Card: ({ children }: { children: ReactNode }) => <div data-testid="Card">{children}</div>,
  Image: ({ src, alt }: { src: string, alt: string }) => <img data-testid="Image" src={src} alt={alt} />,
  TitleEpisode: ({ children }: { children: ReactNode }) => <h2 data-testid="TitleEpisode">{children}</h2>,
  AirDateEpisode: ({ children }: { children: ReactNode }) => <p data-testid="AirDateEpisode">{children}</p>,
}));

describe('CardFavoriteWatched', () => {
  const defaultProps = {
    name: 'Pilot',
    episode: 'S01E01',
    air_date: '2013-12-02',
  };

  it('renders the Card wrapper', () => {
    render(<CardFavoriteWatched {...defaultProps} />);
    expect(screen.getByTestId('Card')).toBeInTheDocument();
  });

  it('renders the Image with correct src and alt', () => {
    render(<CardFavoriteWatched {...defaultProps} />);
    const image = screen.getByTestId('Image');
    expect(image).toHaveAttribute('src', '/episodes/S01E01.webp');
    expect(image).toHaveAttribute('alt', 'Preview do episódio S01E01');
  });

  it('renders the episode title with episode and name', () => {
    render(<CardFavoriteWatched {...defaultProps} />);
    expect(screen.getByTestId('TitleEpisode')).toHaveTextContent('S01E01, Pilot');
  });

  it('renders the formatted air date and correct dateTime', () => {
    render(<CardFavoriteWatched {...defaultProps} />);
    const airDate = screen.getByTestId('AirDateEpisode');
    expect(airDate).toHaveTextContent('Estreado em:');

    const timeElement = screen.getByText('01 de Janeiro de 2023');
    expect(timeElement.tagName).toBe('TIME');
    expect(timeElement).toHaveAttribute('dateTime', new Date(defaultProps.air_date).toString());
  });
});
