import { render } from "@testing-library/react";
import GetStarted from "..";

describe("GetStarted", () => {
  it("should render Get Started component", () => {
    const getStarted = render(<GetStarted />);

    expect(getStarted.getByText(/Ready to get started/)).toBeInTheDocument();
    expect(getStarted.getByText("contact us")).toBeInTheDocument();
  });
});
