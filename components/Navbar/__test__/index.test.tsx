import { render, screen } from "@testing-library/react";
import Navbar from "..";

describe("Navbar", () => {
  it("should render Navbar", () => {
    render(<Navbar />);
    expect(screen.getByAltText("myteam-logo")).toBeInTheDocument();
    expect(screen.getByText("home")).toBeInTheDocument();
    expect(screen.getByText("about")).toBeInTheDocument();
    expect(screen.getByText("contact us")).toBeInTheDocument();
  });
});
