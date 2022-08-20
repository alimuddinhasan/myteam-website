import { render } from "@testing-library/react";
import Navbar from "..";

describe("Navbar", () => {
  it("should render Navbar", () => {
    const navbar = render(<Navbar />);
    expect(navbar.getByAltText("myteam-logo")).toBeInTheDocument();
    expect(navbar.getByText("home")).toBeInTheDocument();
    expect(navbar.getByText("about")).toBeInTheDocument();
    expect(navbar.getByText("contact us")).toBeInTheDocument();
  });
});
