import { EpisodeHeader } from '@/components/molecules';
import { render, screen } from '@testing-library/react';

jest.mock('../../components/atoms', () => ({
  Link: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a data-testid="Link" href={href}>
      {children}
    </a>
  ),
  Title: ({ children }: { children: React.ReactNode }) => (
    <h1 data-testid="Title">{children}</h1>
  ),
}));

jest.mock('lucide-react', () => ({
  ArrowLeft: () => <svg data-testid="ArrowLeft" />,
}));

describe('EpisodeHeader', () => {
  const props = {
    redirectUrl: '/episodes',
    episodeName: 'The Ricklantis Mixup',
  };

  beforeEach(() => {
    render(<EpisodeHeader {...props} />);
  });

  it('should render a Link with the correct href', () => {
    const link = screen.getByTestId('Link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', props.redirectUrl);
  });

  it('should render the ArrowLeft icon inside the Link', () => {
    const icon = screen.getByTestId('ArrowLeft');
    expect(icon).toBeInTheDocument();
  });

  it('should display the episode name inside Title', () => {
    const title = screen.getByTestId('Title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(props.episodeName);
  });
});
