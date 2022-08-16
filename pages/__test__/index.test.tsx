import { render, screen } from "@testing-library/react";
import Home from "..";

describe("Home", () => {
  it("should render Home screen", () => {
    render(<Home />);

    expect(screen.getByRole("header")).toBeInTheDocument();
    expect(screen.getByRole("footer")).toBeInTheDocument();
    expect(screen.getByRole("get-started")).toBeInTheDocument();
  });

  // TODO: add coverage of Review section
  describe("Review section", () => {
    it("should render Review section", () => {
      const home = render(<Home />);

      expect(home.getByText(/Delivering real results/)).toBeInTheDocument();
    });
  });

  describe("Featured section", () => {
    it("should render Featured section", () => {
      const home = render(<Home />);

      expect(home.getByText(/manage distributed teams/)).toBeInTheDocument();
      expect(home.getByTestId("h-line")).toBeInTheDocument();
    });
  });
});
