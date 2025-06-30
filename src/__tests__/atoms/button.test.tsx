import { Button } from "@/components/atoms"
import { fireEvent, render, screen } from "@testing-library/react"

describe("Button", () => {
  it("should render the children", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText("Click me")).toBeInTheDocument()
  })

  it("should apply the 'cursor-pointer' class", () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole("button")
    expect(button).toHaveClass("cursor-pointer")
  })

  it("should forward other props like onClick", () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click</Button>)

    fireEvent.click(screen.getByRole("button"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("should accept disabled prop", () => {
    render(<Button disabled>Click</Button>)
    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
  })
})
