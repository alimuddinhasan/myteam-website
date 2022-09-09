import { render, screen } from "@testing-library/react";
import GetStarted from "..";

describe("GetStarted", () => {
  it("should render Get Started component", () => {
    render(<GetStarted />);

    expect(screen.getByText(/Ready to get started/)).toBeInTheDocument();
    expect(screen.getByText("contact us")).toBeInTheDocument();
  });
});
