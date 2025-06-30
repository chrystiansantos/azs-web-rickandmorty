import { Loader } from "@/components/atoms"
import { render, screen } from "@testing-library/react"
import React from "react"

describe("Loader", () => {
  it("should render the loader div with correct classes", () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Loader loaderRef={ref} />)

    const loaderDiv = screen.getByTestId("loader-div") || ref.current

    expect(loaderDiv).toBeInTheDocument()
    expect(loaderDiv).toHaveClass("flex", "items-center", "justify-center", "p-10")
  })

  it("should render the LoaderIcon svg", () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Loader loaderRef={ref} />)

    const svg = screen.getByTestId("loader-div")?.querySelector("svg") || document.querySelector("svg")
    expect(svg).toBeInTheDocument()
  })

  it("should attach the ref to the div", () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Loader loaderRef={ref} />)

    expect(ref.current).not.toBeNull()
    expect(ref.current?.classList.contains("flex")).toBe(true)
  })
})
