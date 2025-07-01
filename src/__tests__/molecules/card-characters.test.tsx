import { CardCharacter } from '@/components/molecules';
import { render, screen } from '@testing-library/react';

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, className }: { src: string; alt: string; className: string }) => (
    <img src={src} alt={alt} className={className} />
  ),
}));

describe('CardCharacter', () => {
  const defaultProps = {
    name: 'Rick Sanchez',
    characterImage: '/rick.png',
  };

  it('renders the character image with correct alt text', () => {
    render(
      <CardCharacter {...defaultProps}>
        <span>Scientist</span>
      </CardCharacter>
    );

    const image = screen.getByAltText('Personagem Rick Sanchez');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/rick.png');
  });

  it('renders children correctly', () => {
    render(
      <CardCharacter {...defaultProps}>
        <p>Genial e insano</p>
      </CardCharacter>
    );

    expect(screen.getByText('Genial e insano')).toBeInTheDocument();
  });

  it('applies correct styles and structure', () => {
    const { container } = render(
      <CardCharacter {...defaultProps}>
        <span>Estilo</span>
      </CardCharacter>
    );

    const mainDiv = container.firstChild;
    expect(mainDiv).toHaveClass('h-[300px]');
    expect(mainDiv).toHaveClass('bg-cover');

    const overlay = screen.getByText('Estilo').parentElement;
    expect(overlay).toHaveClass('absolute');
    expect(overlay).toHaveClass('bg-black/40');
  });
});
