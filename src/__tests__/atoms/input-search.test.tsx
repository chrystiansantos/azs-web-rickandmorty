import { InputSearch } from '@/components/atoms'
import { fireEvent, render, screen } from '@testing-library/react'

// Mock the icon (optional, in case of SVG rendering issues)
jest.mock('lucide-react', () => ({
  Search: () => <svg data-testid="search-icon" />,
}))

describe('InputSearch', () => {
  it('renders the input and the search icon', () => {
    render(<InputSearch />)

    expect(
      screen.getByPlaceholderText('Encontre seu episódio favorito pelo nome')
    ).toBeInTheDocument()
    expect(screen.getByTestId('search-icon')).toBeInTheDocument()
  })

  it('accepts and displays the typed value', () => {
    render(<InputSearch />)
    const input = screen.getByPlaceholderText('Encontre seu episódio favorito pelo nome') as HTMLInputElement

    fireEvent.change(input, { target: { value: 'Breaking Bad' } })

    expect(input.value).toBe('Breaking Bad')
  })

  it('properly forwards additional attributes', () => {
    render(<InputSearch name="search" data-testid="input-custom" />)

    const input = screen.getByTestId('input-custom')
    expect(input).toHaveAttribute('name', 'search')
  })

  it('calls the onChange function when the input changes', () => {
    const handleChange = jest.fn()
    render(<InputSearch onChange={handleChange} />)

    const input = screen.getByPlaceholderText('Encontre seu episódio favorito pelo nome')
    fireEvent.change(input, { target: { value: 'Lost' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
