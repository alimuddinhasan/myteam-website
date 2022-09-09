import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "..";

describe("Header", () => {
  it("should render default Header", () => {
    render(<Header />);

    expect(screen.getByAltText("myteam-logo")).toBeInTheDocument();
    expect(
      screen.getByAltText("bg-pattern-about-2-contact-1")
    ).toBeInTheDocument();
    expect(screen.getByAltText("bg-pattern-home-2")).toBeInTheDocument();
    expect(screen.getByText("home")).toBeInTheDocument();
    expect(screen.getByText("about")).toBeInTheDocument();
    expect(screen.getByText("contact us")).toBeInTheDocument();
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("description")).toBeInTheDocument();
    expect(screen.getByTestId("header-h-line")).toBeInTheDocument();
  });
});
