import { NavigateButton } from "@/components/atoms"
import { render, screen } from "@testing-library/react"

describe("NavigateButton", () => {
  it("renders the children text", () => {
    render(<NavigateButton href="/test">Click me</NavigateButton>)
    expect(screen.getByText("Click me")).toBeInTheDocument()
  })

  it("passes the href prop correctly", () => {
    render(<NavigateButton href="/test">Click me</NavigateButton>)
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", "/test")
  })

  it("applies the default classes", () => {
    render(<NavigateButton href="/test">Click me</NavigateButton>)
    const link = screen.getByRole("link")
    expect(link).toHaveClass(
      "text-zinc-600",
      "font-semibold",
      "bg-zinc-100",
      "py-1",
      "px-3",
      "rounded-full",
      "flex",
      "items-center",
      "gap-2",
      "size-fit"
    )
  })

  it("forwards additional props to Link", () => {
    render(
      <NavigateButton href="/test" aria-label="navigate-button">
        Click me
      </NavigateButton>
    )
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("aria-label", "navigate-button")
  })
})
