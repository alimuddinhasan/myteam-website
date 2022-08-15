import { render, screen } from "@testing-library/react";
import Home from "..";

describe("Home", () => {
  it("should render Home screen", () => {
    render(<Home />);

    expect(screen.getByRole("header")).toBeInTheDocument();
    expect(screen.getByRole("footer")).toBeInTheDocument();
    expect(screen.getByRole("get-started")).toBeInTheDocument();
  });
  describe("Review Section", () => {
    it("should render Review section", () => {
      const home = render(<Home />);

      expect(home.getByText(/Delivering real results/));
    });
  });
});
