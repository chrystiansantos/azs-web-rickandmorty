import { AmountCharactersParticipated } from "@/components/atoms"
import { render, screen } from "@testing-library/react"

describe("AmountCharactersParticipated", () => {
  it("should render the amount of characters", () => {
    render(<AmountCharactersParticipated amountCharacters={7} />)
    expect(screen.getByText("7")).toBeInTheDocument()
  })

  it("should render an SVG icon (User icon)", () => {
    render(<AmountCharactersParticipated amountCharacters={3} />)

    // Acessa o primeiro SVG dentro do componente
    const svg = screen.getByText("3").parentElement?.querySelector("svg")
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveClass("size-5")
  })
})
