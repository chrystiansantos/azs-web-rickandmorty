import { Link } from "@/components/atoms"
import { render, screen } from "@testing-library/react"
import * as nextNavigation from "next/navigation"

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}))

describe("Link component", () => {
  const usePathnameMock = nextNavigation.usePathname as jest.Mock

  beforeEach(() => {
    jest.resetAllMocks()
  })

  it("renders children", () => {
    usePathnameMock.mockReturnValue("/home")
    render(<Link href="/home">Home</Link>)
    expect(screen.getByText("Home")).toBeInTheDocument()
  })

  it("applies active classes when pathname matches href exactly", () => {
    usePathnameMock.mockReturnValue("/about")
    render(<Link href="/about">About</Link>)

    const link = screen.getByText("About")
    expect(link).toHaveClass("text-slate-200", "border-slate-200")
  })

  it("does not apply active classes when pathname is different", () => {
    usePathnameMock.mockReturnValue("/contact")
    render(<Link href="/about">About</Link>)

    const link = screen.getByText("About")
    expect(link).not.toHaveClass("text-slate-200", "border-slate-200")
    expect(link).toHaveClass("border-b", "border-transparent")
  })

  it("merges additional className prop", () => {
    usePathnameMock.mockReturnValue("/home")
    render(<Link href="/home" className="custom-class">Home</Link>)

    const link = screen.getByText("Home")
    expect(link).toHaveClass("custom-class")
    expect(link).toHaveClass("text-slate-200", "border-slate-200")
  })
})
