import { render, screen } from "@testing-library/react";
import Director from "..";
import userEvent from "@testing-library/user-event";

describe("Director", () => {
  it("should render Director component", () => {
    render(
      <Director
        avatar="avatar"
        name="name"
        positon="position"
        quote="quote"
        socials={{ linkedin: "linkedin", twitter: "twitter" }}
      />
    );
    expect(screen.getByText("name")).toBeInTheDocument();
    expect(screen.getByText("position")).toBeInTheDocument();
    expect(screen.getByTestId("button-plus")).toBeInTheDocument();

    const directorAvatar = screen.getByAltText("director-avatar");
    expect(directorAvatar).toBeInTheDocument();
    expect(directorAvatar).toHaveAttribute("src", "avatar");

    expect(screen.queryByText("quote")).toBeNull();
  });

  it("should show quote", async () => {
    render(
      <Director
        avatar="avatar"
        name="name"
        positon="position"
        quote="quote"
        socials={{ linkedin: "linkedin", twitter: "twitter" }}
      />
    );

    expect(screen.getByText("position")).toBeInTheDocument();
    expect(screen.getByAltText("director-avatar")).toBeInTheDocument();
    expect(screen.queryByText(/quote/)).toBeNull();

    const buttonPlus = screen.getByTestId("button-plus");

    await userEvent.click(buttonPlus);
    expect(screen.getByText(/quote/)).toBeInTheDocument();
    expect(screen.queryByText("position")).toBeNull();
    expect(screen.queryByAltText("director-avatar")).toBeNull();
  });
});
