import { render, screen } from "@testing-library/react";
import Footer from "..";

describe("Footer", () => {
  it("should render default Footer", () => {
    render(<Footer />);

    expect(screen.getByAltText("myteam-logo")).toBeInTheDocument();
    expect(screen.getByText("home")).toBeInTheDocument();
    expect(screen.getByText("about")).toBeInTheDocument();
    expect(screen.getByText(/987 Hillcrest Lane/)).toBeInTheDocument();
    expect(screen.getByText(/Copyright/)).toBeInTheDocument();
  });
});
