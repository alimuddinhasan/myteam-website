import { render, screen } from "@testing-library/react";
import FeaturedItem from "..";

describe("FeaturedItem", () => {
  it("should render FeaturedItem component", () => {
    render(
      <FeaturedItem description="description" icon="icon" title="title" />
    );
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
    const iconEl = screen.getByAltText("featured-icon");
    expect(iconEl).toBeInTheDocument();
    expect(iconEl).toHaveAttribute("src", "icon");
  });
});
