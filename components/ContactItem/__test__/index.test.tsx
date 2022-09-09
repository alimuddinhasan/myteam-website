import { render, screen } from "@testing-library/react";
import ContactItem from "..";

describe("ContactItem", () => {
  it("should render ContactItem", () => {
    render(<ContactItem icon="icon" label="label" />);

    const icon = screen.getByAltText("contact-item-icon");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", "icon");

    expect(screen.getByText("label")).toBeInTheDocument();
  });
});
