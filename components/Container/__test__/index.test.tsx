import { render } from "@testing-library/react";
import Container from "..";

describe("Container", () => {
  it("should render Container component", () => {
    const container = render(<Container>children</Container>);

    expect(container.getByText("children")).toBeInTheDocument();
  });
});
