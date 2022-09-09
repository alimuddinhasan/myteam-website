import { render, screen } from "@testing-library/react";
import Contact from "../index.page";

describe("Contact", () => {
  it("should render Contact screen", () => {
    render(<Contact />);

    expect(screen.getByText("Contact"));
  });
});
