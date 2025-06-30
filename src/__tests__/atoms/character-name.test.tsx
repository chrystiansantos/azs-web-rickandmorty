import { CharacterName } from "@/components/atoms"
import { render, screen } from "@testing-library/react"

describe("CharacterName", () => {
  it("should render the children", () => {
    render(<CharacterName>Rick Sanchez</CharacterName>)
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument()
  })

  it("should render a <strong> element", () => {
    render(<CharacterName>Rick Sanchez</CharacterName>)
    const element = screen.getByText("Rick Sanchez")
    expect(element.tagName).toBe("STRONG")
  })

  it("should apply the correct Tailwind classes", () => {
    render(<CharacterName>Rick Sanchez</CharacterName>)
    const element = screen.getByText("Rick Sanchez")
    expect(element).toHaveClass("text-xl", "font-semibold", "block")
  })
})
