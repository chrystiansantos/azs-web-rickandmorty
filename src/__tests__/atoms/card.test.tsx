import { Card } from "@/components/atoms"
import { render, screen } from "@testing-library/react"

describe("Card", () => {
  it("should render the children", () => {
    render(<Card>My content</Card>)
    expect(screen.getByText("My content")).toBeInTheDocument()
  })

  it("should render a div with all Tailwind classes", () => {
    render(<Card>Content</Card>)
    const card = screen.getByText("Content").closest("div")

    expect(card).toHaveClass(
      "p-1",
      "pb-4",
      "border",
      "border-zinc-800",
      "rounded-xl",
      "bg-zinc-900",
      "fill-slate-500",
      "drop-shadow-lg",
      "drop-shadow-slate-500/90",
      "hover:drop-shadow-slate-100/90",
      "transition-all",
      "duration-300"
    )
  })
})
