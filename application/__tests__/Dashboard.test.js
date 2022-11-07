import { render, screen } from "@testing-library/react";
import Dashboard from "../components/Dashboard";
import "@testing-library/jest-dom";
import { SessionProvider } from "next-auth/react";

const props = {
  handleLogout: jest.fn(),
};

const session = {
  user: {
    name: "Michael Shields",
    email: "mr.m.p.shields@gmail.com",
    image: "https://avatars.githubusercontent.com/u/73437037?v=4",
  },
  expires: "2022-11-30T21:18:08.670Z",
};

const renderDashboard = () =>
  render(
    <SessionProvider session={session}>
      <Dashboard {...props} />
      );
    </SessionProvider>
  );

describe("Dashboard", () => {
  it("matches snapshot", () => {
    const { asFragment } = renderDashboard();

    expect(asFragment()).toMatchSnapshot();
  });
});
