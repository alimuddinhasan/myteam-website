import { render, screen } from "@testing-library/react";
import BaseScreen from "..";

describe("BaseScreen", () => {
  it("should render BaseScreen", () => {
    render(<BaseScreen pageTitle="pageTitle"></BaseScreen>);
    expect(screen.getByRole("header")).toBeInTheDocument();
    expect(screen.getByRole("footer")).toBeInTheDocument();
    expect(screen.getByRole("get-started")).toBeInTheDocument();
  });
});
