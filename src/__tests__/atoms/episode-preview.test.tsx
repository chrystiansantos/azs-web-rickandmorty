import { EpisodePreview } from "@/components/atoms";
import { render, screen } from "@testing-library/react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, className }: { src: string; alt: string; className: string }) => (
    <img src={src} alt={alt} className={className} />
  ),
}));

describe("EpisodePreview", () => {
  it("should render the image with correct src and alt", () => {
    const src = "/episode1.png";
    const episodeName = "Pilot";

    render(<EpisodePreview src={src} episodeName={episodeName} />);

    const img = screen.getByAltText(`Preview referente ao episódio ${episodeName}.`);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", src);
  });

  it("should apply the correct classes", () => {
    render(<EpisodePreview src="/img.png" episodeName="Any" />);
    const img = screen.getByRole("img");
    expect(img).toHaveClass("w-full", "h-[600px]", "object-fill");
  });
});
