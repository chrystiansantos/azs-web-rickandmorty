import { Divider } from "@/components/atoms"
import { render, screen } from "@testing-library/react"

describe("Divider", () => {
  it("should render a div", () => {
    render(<Divider />)
    const divider = screen.getByTestId("divider")
    expect(divider.tagName).toBe("DIV")
  })

  it("should have the correct Tailwind classes", () => {
    render(<Divider />)
    const divider = screen.getByTestId("divider")
    expect(divider).toHaveClass("h-4", "bg-slate-300", "w-0.5")
  })
})