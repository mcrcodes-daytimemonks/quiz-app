import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Home />);

    expect(asFragment()).toMatchSnapshot();
  });
});
