import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "..";

describe("Header", () => {
  it("should render default Header", () => {
    const header = render(<Header />);

    expect(header.getByAltText("myteam-logo")).toBeInTheDocument();
    expect(header.getByText("home")).toBeInTheDocument();
    expect(header.getByText("about")).toBeInTheDocument();
    expect(header.getByText("contact us")).toBeInTheDocument();
  });
});