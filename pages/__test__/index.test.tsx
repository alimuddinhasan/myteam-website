import { render, screen } from "@testing-library/react";
import Home from "../index.page";

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
      render(<Home />);

      expect(screen.getByText(/Delivering real results/)).toBeInTheDocument();
    });
  });

  describe("Featured section", () => {
    it("should render Featured section", () => {
      render(<Home />);

      expect(screen.getByText(/manage distributed teams/)).toBeInTheDocument();
      expect(screen.getByTestId("h-line")).toBeInTheDocument();
    });
  });
});
