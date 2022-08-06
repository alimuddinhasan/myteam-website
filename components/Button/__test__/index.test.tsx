import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "..";

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
});
