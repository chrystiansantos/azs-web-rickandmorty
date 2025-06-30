import { AmountCharacters } from "@/components/atoms"
import { render, screen } from "@testing-library/react"

describe("AmountCharacters", () => {
  it("should render the children", () => {
    render(<AmountCharacters>10</AmountCharacters>)
    expect(screen.getByText("10")).toBeInTheDocument()
  })

  it("should render the User icon", () => {
    render(<AmountCharacters>10</AmountCharacters>)
    const svg = screen.getByText("10").parentElement?.querySelector("svg")
    expect(svg).toBeInTheDocument()
  })

  it("should render everything inside a span with correct classes", () => {
    render(<AmountCharacters>10</AmountCharacters>)
    const wrapper = screen.getByText("10").closest("span")
    expect(wrapper).toHaveClass("flex", "gap-1", "items-center")
  })
})
