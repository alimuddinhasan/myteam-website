import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button, { ButtonColor } from "..";

describe("Button", () => {
  it("should render default Button", () => {
    const button = render(<Button label='Label' />);

    expect(button.getByText("Label")).toBeInTheDocument();
  });

  it("should trigger onClick handler", async () => {
    const clickHandler = jest.fn();
    const button = render(<Button label='Label' onClick={clickHandler} />);

    await userEvent.click(button.getByText("Label"));
    expect(clickHandler).toBeCalledTimes(1);
  });

  it("should render button with primary as default color", () => {
    const button = render(<Button label='Label' />);

    expect(button.getByText("Label")).toHaveClass(
      "text-white enabled:hover:text-midnight-green enabled:hover:bg-white"
    );
  });

  it("should render button with primary color", () => {
    const button = render(<Button label='Label' color={ButtonColor.primary} />);

    expect(button.getByText("Label")).toHaveClass(
      "text-white enabled:hover:text-midnight-green enabled:hover:bg-white"
    );
  });

  it("should render button with secondary color", () => {
    const button = render(
      <Button label='Label' color={ButtonColor.secondary} />
    );

    expect(button.getByText("Label")).toHaveClass(
      "text-midnight-green bg-white enabled:hover:text-midnight-green enabled:hover:bg-rapture-blue enabled:hover:border-rapture-blue"
    );
  });

  it("should disable button", () => {
    const button = render(<Button label='Label' isDisabled />);

    expect(button.getByText("Label")).toBeDisabled();
  });
});
