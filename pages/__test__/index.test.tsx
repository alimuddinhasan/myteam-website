import { render, screen } from "@testing-library/react";
import Home from "..";

describe("Home", () => {
  it.skip("should render Home screen", () => {
    render(<Home />);

    expect(screen.getByText("Homepage"));
  });
});
