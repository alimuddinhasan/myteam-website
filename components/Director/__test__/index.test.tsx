import { render } from "@testing-library/react";
import Director from "..";
import userEvent from "@testing-library/user-event";

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

    expect(director.queryByText("quote")).toBeNull();
  });

  it("should show quote", async () => {
    const director = render(
      <Director
        avatar='avatar'
        name='name'
        positon='position'
        quote='quote'
        socials={{ linkedin: "linkedin", twitter: "twitter" }}
      />
    );

    expect(director.getByText("position")).toBeInTheDocument();
    expect(director.getByAltText("director-avatar")).toBeInTheDocument();
    expect(director.queryByText(/quote/)).toBeNull();

    const buttonPlus = director.getByTestId("button-plus");

    await userEvent.click(buttonPlus);
    expect(director.getByText(/quote/)).toBeInTheDocument();
    expect(director.queryByText("position")).toBeNull();
    expect(director.queryByAltText("director-avatar")).toBeNull();
  });
});
