import { render } from "@testing-library/react";
import Review from "..";

describe("Review", () => {
  it("should render Review component", () => {
    const review = render(
      <Review
        review='Review'
        name='Name'
        jobTitle='Job Title'
        avatar='avatar'
      />
    );

    expect(review.getByText(/Review/)).toBeInTheDocument();
    expect(review.getByText("Name")).toBeInTheDocument();
    expect(review.getByText("Job Title")).toBeInTheDocument();

    const profilePicture = review.getByAltText("profile-picture");
    expect(profilePicture).toBeInTheDocument();
    expect(profilePicture.getAttribute("src")).toEqual("avatar");
  });
});
