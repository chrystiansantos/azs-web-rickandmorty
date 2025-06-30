import { PreviewEpisode } from "@/components/atoms";
import { render, screen } from "@testing-library/react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, className, height, width }: {
    src: string; alt: string; className: string; height: number; width: number
  }) => (
    <img src={src} alt={alt} className={className} height={height} width={width} />
  ),
}));

describe("PreviewEpisode", () => {
  it("renders an image with correct src, alt and classes", () => {
    render(<PreviewEpisode src="/test.png" alt="Test image" />);

    const img = screen.getByAltText("Test image");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/test.png");
    expect(img).toHaveClass("w-full", "h-[600px]", "object-fill");
    expect(img).toHaveAttribute("height", "400");
    expect(img).toHaveAttribute("width", "400");
  });
});
