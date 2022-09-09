import { render, screen } from "@testing-library/react";
import Review from "..";

describe("Review", () => {
  it("should render Review component", () => {
    render(
      <Review
        review="Review"
        name="Name"
        jobTitle="Job Title"
        avatar="avatar"
      />
    );

    expect(screen.getByText(/Review/)).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Job Title")).toBeInTheDocument();

    const profilePicture = screen.getByAltText("profile-picture");
    expect(profilePicture).toBeInTheDocument();
    expect(profilePicture.getAttribute("src")).toEqual("avatar");
  });
});
