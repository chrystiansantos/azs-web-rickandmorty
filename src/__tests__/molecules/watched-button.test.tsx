import { WatchedButton } from '@/components/molecules';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('../../hooks', () => ({
  useUpdateWatch: jest.fn()
}));

const mockWatchEpisode = jest.fn();

describe('WatchedButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with correct text and default icon color', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { useUpdateWatch } = require('../../hooks');
    useUpdateWatch.mockReturnValue({
      hasWatched: false,
      watchEpisode: mockWatchEpisode
    });

    render(<WatchedButton id="123" isWatch={false} />);

    expect(screen.getByText('Assitido')).toBeInTheDocument();
    const icon = screen.getByTestId('badge-check-icon');
    expect(icon).toHaveClass('text-slate-300');
    expect(icon).not.toHaveClass('text-green-500');
  });

  it('renders with green icon when hasWatched is true', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { useUpdateWatch } = require('../../hooks');
    useUpdateWatch.mockReturnValue({
      hasWatched: true,
      watchEpisode: mockWatchEpisode
    });

    render(<WatchedButton id="123" isWatch={true} />);

    const icon = screen.getByTestId('badge-check-icon');
    expect(icon).toHaveClass('text-green-500');
  });

  it('calls watchEpisode when clicked', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { useUpdateWatch } = require('../../hooks');
    useUpdateWatch.mockReturnValue({
      hasWatched: false,
      watchEpisode: mockWatchEpisode
    });

    render(<WatchedButton id="123" isWatch={false} />);
    const button = screen.getByRole('button', { name: /Assitido/i });

    fireEvent.click(button);
    expect(mockWatchEpisode).toHaveBeenCalled();
  });
});
