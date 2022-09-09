import { render, screen } from "@testing-library/react";
import Input from "..";

describe("Input", () => {
  it("should render Input text", () => {
    render(<Input label="label" />);
    const field = screen.getByPlaceholderText("label");
    expect(field).toBeInTheDocument();
    expect(field).toHaveClass("placeholder-white");
    expect(field).not.toHaveClass("placeholder-light-coral");
  });

  it("should render Input text in error state", () => {
    render(<Input label="label" error="error" />);
    const field = screen.getByPlaceholderText("label");
    expect(field).toBeInTheDocument();
    expect(field).not.toHaveClass("placeholder-white");
    expect(field).toHaveClass("placeholder-light-coral");
  });
});
