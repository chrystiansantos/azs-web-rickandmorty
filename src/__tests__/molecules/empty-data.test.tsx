import { EmptyData } from '@/components/molecules';
import { render, screen } from '@testing-library/react';

jest.mock('../../components/atoms', () => ({
  TitleEpisode: ({ children }: { children: React.ReactNode }) => (
    <h2 data-testid="TitleEpisode">{children}</h2>
  ),
  SubTitle: ({ children }: { children: React.ReactNode }) => (
    <p data-testid="SubTitle">{children}</p>
  ),
}));

jest.mock('lucide-react', () => ({
  Clapperboard: (props: any) => <svg data-testid="Clapperboard" {...props} />,
}));

describe('EmptyData', () => {
  const props = {
    title: 'Sem episódios',
    subtitle: 'Adicione algum favorito para começar',
  };

  beforeEach(() => {
    render(<EmptyData {...props} />);
  });

  it('should render the Clapperboard icon', () => {
    const icon = screen.getByTestId('Clapperboard');
    expect(icon).toBeInTheDocument();
  });

  it('should display the correct title', () => {
    const title = screen.getByTestId('TitleEpisode');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(props.title);
  });

  it('should display the correct subtitle', () => {
    const subtitle = screen.getByTestId('SubTitle');
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveTextContent(props.subtitle);
  });
});
