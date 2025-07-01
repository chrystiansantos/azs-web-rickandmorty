import { CharacterDescription } from "@/components/molecules";
import { render, screen } from "@testing-library/react";

interface CharacterDescription {
  name: string
  gender: 'male' | 'female' | 'unknown'
  status: string
  image: string
}

describe("CharacterDescription", () => {
  const mockProps: CharacterDescription = {
    name: "Rick Sanchez",
    gender: "male",
    status: "Alive",
    image: "https://example.com/rick.png",
  };

  it("renders the character's name", () => {
    render(<CharacterDescription {...mockProps} gender="female" />);
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
  });

  it("displays the gender and status", () => {
    render(<CharacterDescription {...mockProps} />);
    expect(screen.getByText("male")).toBeInTheDocument();
    expect(screen.getByText("Alive")).toBeInTheDocument();
  });
});
