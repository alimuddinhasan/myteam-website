import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button, { ButtonColor } from "..";

describe("Button", () => {
  it("should render default Button", () => {
    render(<Button label="Label" />);

    expect(screen.getByText("Label")).toBeInTheDocument();
    expect(screen.getByText("Label")).toHaveClass(
      "text-white enabled:hover:text-midnight-green enabled:hover:bg-white"
    );
    expect(screen.getByText("Label")).toHaveClass("border-2");
  });

  it("should trigger onClick handler", async () => {
    const clickHandler = jest.fn();
    render(<Button label="Label" onClick={clickHandler} />);

    await userEvent.click(screen.getByText("Label"));
    expect(clickHandler).toBeCalledTimes(1);
  });

  it("should render button with primary color", () => {
    render(<Button label="Label" color={ButtonColor.primary} />);

    expect(screen.getByText("Label")).toHaveClass(
      "text-white enabled:hover:text-midnight-green enabled:hover:bg-white"
    );
    expect(screen.getByText("Label")).toHaveClass("border-2");
  });

  it("should render button with secondary color", () => {
    render(<Button label="Label" color={ButtonColor.secondary} />);

    expect(screen.getByText("Label")).toHaveClass(
      "text-midnight-green bg-white enabled:hover:text-midnight-green enabled:hover:bg-rapture-blue enabled:hover:border-rapture-blue"
    );
    expect(screen.getByText("Label")).toHaveClass("border-2");
  });

  it("should render button with dark color", () => {
    render(<Button label="Label" color={ButtonColor.dark} />);

    expect(screen.getByText("Label")).toHaveClass(
      "text-dark-green bg-light-coral enabled:hover:text-light-coral border-dark-green enabled:hover:bg-dark-green enabled:hover:border-dark-green"
    );
    expect(screen.getByText("Label")).toHaveClass("border-2");
  });

  it("should disable button", () => {
    render(<Button label="Label" isDisabled />);

    expect(screen.getByText("Label")).toBeDisabled();
  });
});

describe("Flat", () => {
  it("should render default flat Button", () => {
    render(<Button label="Label" isFlat />);

    const element = screen.getByText("Label");
    expect(element).toHaveClass(
      "text-white enabled:hover:text-midnight-green enabled:hover:bg-white"
    );
    expect(element).not.toHaveClass("border-2 py-3 px-7");
  });

  it("should render secondary flat Button", () => {
    render(<Button label="Label" color={ButtonColor.secondary} isFlat />);

    const element = screen.getByText("Label");
    expect(element).toHaveClass(
      "text-midnight-green bg-white enabled:hover:text-midnight-green enabled:hover:bg-rapture-blue enabled:hover:border-rapture-blue"
    );
    expect(element).not.toHaveClass("border-2 py-3 px-7");
  });
});

describe("Button with icon", () => {
  it("should render Button with icon", () => {
    render(<Button icon="test" isFlat dataTestid="button-with-icon" />);
    expect(screen.getByTestId("button-with-icon")).not.toHaveClass(
      "enabled:hover:bg-white"
    );
    expect(screen.getByAltText("button-icon")).toBeInTheDocument();
  });
});
