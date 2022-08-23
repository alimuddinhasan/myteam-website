import { render } from "@testing-library/react";
import ContactItem from "..";

describe("ContactItem", () => {
  it("should render ContactItem", () => {
    const contactItem = render(<ContactItem icon='icon' label='label' />);

    const icon = contactItem.getByAltText("contact-item-icon");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", "icon");

    expect(contactItem.getByText("label")).toBeInTheDocument();
  });
});
