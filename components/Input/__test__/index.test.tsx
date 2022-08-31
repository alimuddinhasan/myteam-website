import { render } from "@testing-library/react";
import Input from "..";

describe("Input", () => {
  it("should render Input text", () => {
    const input = render(<Input label="label" />);
    const field = input.getByPlaceholderText("label");
    expect(field).toBeInTheDocument();
    expect(field).toHaveClass("placeholder-white");
    expect(field).not.toHaveClass("placeholder-light-coral");
  });

  it("should render Input text in error state", () => {
    const input = render(<Input label="label" error="error" />);
    const field = input.getByPlaceholderText("label");
    expect(field).toBeInTheDocument();
    expect(field).not.toHaveClass("placeholder-white");
    expect(field).toHaveClass("placeholder-light-coral");
  });
});
