import { HeroDescription } from '@/components/molecules';
import { render, screen } from '@testing-library/react';

jest.mock('../../components/atoms', () => ({
  Title: ({ children }: { children: React.ReactNode }) => (
    <h1 data-testid="Title">{children}</h1>
  ),
  SubTitle: ({ children }: { children: React.ReactNode }) => (
    <p data-testid="SubTitle">{children}</p>
  ),
}));

describe('HeroDescription', () => {
  beforeEach(() => {
    render(<HeroDescription />);
  });

  it('should render the title correctly', () => {
    const title = screen.getByTestId('Title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Rick and Morty');
  });

  it('should render the subtitle correctly', () => {
    const expectedText =
      'Acompanhe malucas viagens no tempo-espaço e por universos paralelos com ' +
      'Rick, um cientista com problemas com a bebida, e seu neto Morty, um ' +
      'adolescente não tão brilhante quanto o avô.';

    const subtitle = screen.getByTestId('SubTitle');
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveTextContent(expectedText);
  });
});
