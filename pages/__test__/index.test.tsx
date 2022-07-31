import { render, screen } from "@testing-library/react";
import Home from "..";

describe("Home", () => {
  it("should render Home screen", () => {
    render(<Home />);

    expect(
      screen.getByText("Welcome to Next.js Base App!")
    ).toBeInTheDocument();

    expect(screen.getByText("Created by"));
    expect(screen.getByText("Alimuddin Hasan"));
  });
});
