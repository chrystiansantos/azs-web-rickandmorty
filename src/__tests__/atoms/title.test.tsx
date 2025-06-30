import { Title } from "@/components/atoms";
import { render, screen } from "@testing-library/react";

describe("Title", () => {
  it("renders the children text", () => {
    render(<Title>Page Title</Title>);
    expect(screen.getByText("Page Title")).toBeInTheDocument();
  });

  it("renders an <h1> element", () => {
    render(<Title>Page Title</Title>);
    const element = screen.getByText("Page Title");
    expect(element.tagName).toBe("H1");
  });

  it("applies the correct CSS classes", () => {
    render(<Title>Page Title</Title>);
    const element = screen.getByText("Page Title");
    expect(element).toHaveClass("text-3xl", "font-semibold", "text-zinc-100");
  });
});
