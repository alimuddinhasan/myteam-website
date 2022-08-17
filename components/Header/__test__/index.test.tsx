import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "..";

describe("Header", () => {
  it("should render default Header", () => {
    const header = render(<Header />);

    expect(header.getByAltText("myteam-logo")).toBeInTheDocument();
    expect(header.getByAltText("bg-pattern-about-2-contact-1")).toBeInTheDocument();
    expect(header.getByAltText("bg-pattern-home-2")).toBeInTheDocument();
    expect(header.getByText("home")).toBeInTheDocument();
    expect(header.getByText("about")).toBeInTheDocument();
    expect(header.getByText("contact us")).toBeInTheDocument();
    expect(header.getByTestId("title")).toBeInTheDocument();
    expect(header.getByTestId("description")).toBeInTheDocument();
    expect(header.getByTestId("header-h-line")).toBeInTheDocument();
  });
});