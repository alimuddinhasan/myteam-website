import { render } from "@testing-library/react";
import BaseScreen from "..";

describe("BaseScreen", () => {
  it("should render BaseScreen", () => {
    const baseScreen = render(<BaseScreen pageTitle='pageTitle'></BaseScreen>);
    expect(baseScreen.getByRole("header")).toBeInTheDocument();
    expect(baseScreen.getByRole("footer")).toBeInTheDocument();
    expect(baseScreen.getByRole("get-started")).toBeInTheDocument();
  });
});
