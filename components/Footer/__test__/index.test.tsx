import { render } from "@testing-library/react";
import Footer from "..";

describe("Footer", () => {
  it("should render default Footer", () => {
    const footer = render(<Footer />);

    expect(footer.getByAltText("myteam-logo")).toBeInTheDocument();
    expect(footer.getByText("home")).toBeInTheDocument();
    expect(footer.getByText("about")).toBeInTheDocument();
    expect(footer.getByText(/987 Hillcrest Lane/)).toBeInTheDocument();
    expect(footer.getByText(/Copyright/)).toBeInTheDocument();
  });
});
