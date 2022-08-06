import { render, screen } from "@testing-library/react";
import Contact from "..";

describe("Contact", () => {
  it("should render Contact screen", () => {
    render(<Contact />);

    expect(screen.getByText("Contact"));
  });
});
