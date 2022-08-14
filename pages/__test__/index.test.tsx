import { render, screen } from "@testing-library/react";
import Home from "..";

describe("Home", () => {
  it("should render Home screen", () => {
    render(<Home />);

    expect(screen.getByRole("header")).toBeInTheDocument();
    expect(screen.getByRole("footer")).toBeInTheDocument();
    expect(screen.getByRole("get-started")).toBeInTheDocument();
  });
});
