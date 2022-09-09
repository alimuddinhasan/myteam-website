import { render, screen } from "@testing-library/react";
import Container from "..";

describe("Container", () => {
  it("should render default Container component", () => {
    render(<Container>children</Container>);

    expect(screen.getByText("children")).toBeInTheDocument();
  });

  it("should render Container component with class", () => {
    render(<Container className="test">children</Container>);

    expect(screen.getByText("children")).toHaveClass("test");
  });
});
