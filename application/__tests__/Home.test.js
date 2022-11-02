import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import { SessionProvider } from "next-auth/react";

describe("Home", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <SessionProvider session={{ user: { name: "Jane Doe" } }}>
        <Home />
      </SessionProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
