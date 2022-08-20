import { render } from "@testing-library/react";
import FeaturedItem from "..";

describe("FeaturedItem", () => {
  it("should render FeaturedItem component", () => {
    const featuredItem = render(
      <FeaturedItem description='description' icon='icon' title='title' />
    );
    expect(featuredItem.getByText("title")).toBeInTheDocument();
    expect(featuredItem.getByText("description")).toBeInTheDocument();
    const iconEl = featuredItem.getByAltText("featured-icon");
    expect(iconEl).toBeInTheDocument();
    expect(iconEl).toHaveAttribute("src", "icon");
  });
});
