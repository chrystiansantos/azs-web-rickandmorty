import { Image } from "@/components/atoms";
import { render, screen } from "@testing-library/react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, className }: { src: string; alt: string; className: string }) => (
    <img src={src} alt={alt} className={className} />
  ),
}));

describe("Image component", () => {
  it("renders an image with the given props and default fill and sizes", () => {
    render(<Image src="/test.jpg" alt="test image" />)

    const img = screen.getByAltText("test image")
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute("src", "/test.jpg")
  })
})