import { Hero } from '@/components/organism';
import { render, screen } from '@testing-library/react';

jest.mock('../../components/molecules', () => ({
  HeroDescription: () => <div data-testid="hero-description">Hero Description</div>,
  WatchNowButton: () => <button data-testid="watch-now-button">Watch Now</button>,
}));

describe('Hero', () => {
  it('renders the Hero section with correct children', () => {
    render(<Hero />);

    const description = screen.getByTestId('hero-description');
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent('Hero Description');

    const watchButton = screen.getByTestId('watch-now-button');
    expect(watchButton).toBeInTheDocument();
    expect(watchButton).toHaveTextContent('Watch Now');
  });

  it('has correct structure and layout container', () => {
    const { container } = render(<Hero />);

    const outerDiv = container.firstChild as HTMLDivElement;

    expect(outerDiv).toHaveClass('h-[460px]');
    expect(outerDiv).toHaveClass('md:h-[720px]');
    expect(outerDiv).toHaveClass('w-full');
    expect(outerDiv).toHaveClass('bg-no-repeat');
    expect(outerDiv).toHaveClass('flex');
    expect(outerDiv).toHaveClass('items-end');
    expect(outerDiv).toHaveClass('md:items-center');
  });

  it('renders description and button inside a max-width container', () => {
    render(<Hero />);
    const container = screen.getByTestId('hero-description').parentElement;

    expect(container).toHaveClass('max-w-[400px]');
    expect(container).toHaveClass('flex');
    expect(container).toHaveClass('flex-col');
    expect(container).toHaveClass('gap-2');
  });
});
