import { render } from "@testing-library/react";
import Container from "..";

describe("Container", () => {
  it("should render default Container component", () => {
    const container = render(<Container>children</Container>);

    expect(container.getByText("children")).toBeInTheDocument();
  });

  it("should render Container component with class", () => {
    const container = render(<Container className='test'>children</Container>);

    expect(container.getByText("children")).toHaveClass("test");
  });
});
