import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button, { ButtonColor } from "..";

describe("Button", () => {
  it("should render default Button", () => {
    const button = render(<Button label='Label' />);

    expect(button.getByText("Label")).toBeInTheDocument();
    expect(button.getByText("Label")).toHaveClass(
      "text-white enabled:hover:text-midnight-green enabled:hover:bg-white"
    );
    expect(button.getByText("Label")).toHaveClass("border-2");
  });

  it("should trigger onClick handler", async () => {
    const clickHandler = jest.fn();
    const button = render(<Button label='Label' onClick={clickHandler} />);

    await userEvent.click(button.getByText("Label"));
    expect(clickHandler).toBeCalledTimes(1);
  });

  it("should render button with primary color", () => {
    const button = render(<Button label='Label' color={ButtonColor.primary} />);

    expect(button.getByText("Label")).toHaveClass(
      "text-white enabled:hover:text-midnight-green enabled:hover:bg-white"
    );
    expect(button.getByText("Label")).toHaveClass("border-2");
  });

  it("should render button with secondary color", () => {
    const button = render(
      <Button label='Label' color={ButtonColor.secondary} />
    );

    expect(button.getByText("Label")).toHaveClass(
      "text-midnight-green bg-white enabled:hover:text-midnight-green enabled:hover:bg-rapture-blue enabled:hover:border-rapture-blue"
    );
    expect(button.getByText("Label")).toHaveClass("border-2");
  });

  it("should render button with dark color", () => {
    const button = render(<Button label='Label' color={ButtonColor.dark} />);

    expect(button.getByText("Label")).toHaveClass(
      "text-dark-green bg-light-coral enabled:hover:text-light-coral border-dark-green enabled:hover:bg-dark-green enabled:hover:border-dark-green"
    );
    expect(button.getByText("Label")).toHaveClass("border-2");
  });

  it("should disable button", () => {
    const button = render(<Button label='Label' isDisabled />);

    expect(button.getByText("Label")).toBeDisabled();
  });
});

describe("Flat", () => {
  it("should render default flat Button", () => {
    const button = render(<Button label='Label' isFlat />);

    const element = button.getByText("Label");
    expect(element).toHaveClass(
      "text-white enabled:hover:text-midnight-green enabled:hover:bg-white"
    );
    expect(element).not.toHaveClass("border-2 py-3 px-7");
  });

  it("should render secondary flat Button", () => {
    const button = render(
      <Button label='Label' color={ButtonColor.secondary} isFlat />
    );

    const element = button.getByText("Label");
    expect(element).toHaveClass(
      "text-midnight-green bg-white enabled:hover:text-midnight-green enabled:hover:bg-rapture-blue enabled:hover:border-rapture-blue"
    );
    expect(element).not.toHaveClass("border-2 py-3 px-7");
  });
});

describe("Button with icon", () => {
  it("should render Button with icon", () => {
    const button = render(
      <Button icon='test' isFlat dataTestid='button-with-icon' />
    );
    expect(button.getByTestId("button-with-icon")).not.toHaveClass(
      "enabled:hover:bg-white"
    );
    expect(button.getByAltText("button-icon")).toBeInTheDocument();
  });
});
