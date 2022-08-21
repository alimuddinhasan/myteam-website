import { render } from "@testing-library/react";
import Director from "..";

describe("Director", () => {
  it("should render Director component", () => {
    const director = render(
      <Director
        avatar='avatar'
        name='name'
        positon='position'
        quote='quote'
        socials={{ linkedin: "linkedin", twitter: "twitter" }}
      />
    );
    expect(director.getByText("name")).toBeInTheDocument();
    expect(director.getByText("position")).toBeInTheDocument();
    expect(director.getByTestId("button-plus")).toBeInTheDocument();

    const directorAvatar = director.getByAltText("director-avatar");
    expect(directorAvatar).toBeInTheDocument();
    expect(directorAvatar).toHaveAttribute("src", "avatar");
  });
});
