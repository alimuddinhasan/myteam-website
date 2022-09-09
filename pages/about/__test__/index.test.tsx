import { render, screen } from "@testing-library/react";
import About from "../index.page";

describe("About", () => {
  it("should render About screen", () => {
    render(<About />);

    expect(screen.getByText("About"));
  });
});
