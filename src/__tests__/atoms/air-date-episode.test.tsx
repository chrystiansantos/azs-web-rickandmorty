import { AirDateEpisode } from "@/components/atoms"
import { render, screen } from "@testing-library/react"

describe("AirDateEpisode", () => {
  it("should render the children correctly", () => {
    render(<AirDateEpisode>March 17, 2025</AirDateEpisode>)

    expect(screen.getByText("March 17, 2025")).toBeInTheDocument()
  })

  it("should have the correct class applied", () => {
    render(<AirDateEpisode>March 17, 2025</AirDateEpisode>)

    const element = screen.getByText("March 17, 2025")
    expect(element).toHaveClass("text-zinc-500")
  })
})
