import { SubTitle } from "@/components/atoms"
import { render, screen } from "@testing-library/react"

describe("SubTitle", () => {
  it("renders the children text", () => {
    render(<SubTitle>Subtitle example</SubTitle>)
    expect(screen.getByText("Subtitle example")).toBeInTheDocument()
  })

  it("renders a <p> element", () => {
    render(<SubTitle>Subtitle example</SubTitle>)
    const element = screen.getByText("Subtitle example")
    expect(element.tagName).toBe("P")
  })

  it("applies the correct classes", () => {
    render(<SubTitle>Subtitle example</SubTitle>)
    const element = screen.getByText("Subtitle example")
    expect(element).toHaveClass("text-zinc-300", "text-sm")
  })
})
