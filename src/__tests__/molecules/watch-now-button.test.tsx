import { WatchNowButton } from '@/components/molecules';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

const mockPlayerUrl = 'https://example.com/watch';
process.env.NEXT_PUBLIC_PLAYER_VIDEO_URL = mockPlayerUrl;

jest.mock('../../components/atoms', () => ({
  NavigateButton: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} data-testid="navigate-button">
      {children}
    </a>
  )
}));

describe('WatchNowButton', () => {
  it('renders the button with correct text', () => {
    render(<WatchNowButton />);
    expect(screen.getByText('Assista agora')).toBeInTheDocument();
  });

  it('renders the Play icon', () => {
    render(<WatchNowButton />);
    const playIcon = screen.getByTestId('navigate-button').querySelector('svg');
    expect(playIcon).toBeInTheDocument();
  });

  it('navigates to the correct URL', () => {
    render(<WatchNowButton />);
    const link = screen.getByTestId('navigate-button') as HTMLAnchorElement;
    expect(link).toHaveAttribute('href', mockPlayerUrl);
  });
});
