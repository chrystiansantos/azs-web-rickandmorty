import { Time } from "@/components/atoms";
import { render, screen } from "@testing-library/react";

describe("Time component", () => {
  it("renders the formatted date in pt-BR locale", () => {
    const dateStr = "2023-12-31T00:00:00Z";
    render(<Time date={dateStr} />);

    const formattedDate = new Intl.DateTimeFormat("pt-BR").format(new Date(dateStr));
    const timeElement = screen.getByText(formattedDate);

    expect(timeElement).toBeInTheDocument();
  });

  it("has the correct dateTime attribute", () => {
    const dateStr = "2023-12-31T00:00:00Z";
    render(<Time date={dateStr} />);

    const timeElement = screen.getByText(
      new Intl.DateTimeFormat("pt-BR").format(new Date(dateStr))
    );

    expect(timeElement).toHaveAttribute("dateTime", new Date(dateStr).toString());
  });
});
