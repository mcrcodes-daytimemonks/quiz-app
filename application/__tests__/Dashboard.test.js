import { render, screen } from "@testing-library/react";
import Dashboard from "../components/Dashboard";
import "@testing-library/jest-dom";

const props = {
  handleLogout: jest.fn(),
};

const renderDashboard = () => render(<Dashboard {...props} />);

describe("Dashboard", () => {
  it("matches snapshot", () => {
    const { asFragment } = renderDashboard();

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a call to action", () => {
    renderDashboard();
    const callToAction = /please choose a category/i

    expect(screen.getByText(callToAction)).toBeInTheDocument();
  });
});
