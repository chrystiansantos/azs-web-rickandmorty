import { Typography } from "@/components/atoms"
import { render, screen } from "@testing-library/react"

describe("Typography", () => {
  it("should render the children", () => {
    render(<Typography>Hello world</Typography>)
    expect(screen.getByText("Hello world")).toBeInTheDocument()
  })

  it("should apply correct classes to the span", () => {
    render(<Typography>Hello world</Typography>)
    const span = screen.getByText("Hello world").closest("span")
    expect(span).toHaveClass("flex", "gap-1", "items-center")
  })
})
