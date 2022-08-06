import { render } from "@testing-library/react";
import Button from "..";

describe("Button", () => {
  it("should renden default Button", () => {
    const button = render(<Button />);

    expect(button.getByText("Button")).toBeInTheDocument();
  });
});
