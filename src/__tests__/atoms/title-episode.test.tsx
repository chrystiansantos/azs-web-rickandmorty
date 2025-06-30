import { TitleEpisode } from "@/components/atoms";
import { render, screen } from "@testing-library/react";

describe("TitleEpisode", () => {
  it("renders the children text", () => {
    render(<TitleEpisode>Episode Title</TitleEpisode>);
    expect(screen.getByText("Episode Title")).toBeInTheDocument();
  });

  it("renders a <strong> element", () => {
    render(<TitleEpisode>Episode Title</TitleEpisode>);
    const element = screen.getByText("Episode Title");
    expect(element.tagName).toBe("STRONG");
  });

  it("applies the correct CSS class", () => {
    render(<TitleEpisode>Episode Title</TitleEpisode>);
    const element = screen.getByText("Episode Title");
    expect(element).toHaveClass("line-clamp-2");
  });
});
