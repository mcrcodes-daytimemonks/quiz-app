import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/Login";
import "@testing-library/jest-dom";

const props = {
  username: "username",
  handleUsernameChange: jest.fn(),
  handleLogin: jest.fn(),
};

const renderLogin = () => render(<Login {...props} />);

describe("Login", () => {
  it("matches snapshot", () => {
    const { asFragment } = renderLogin();

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a textbox for the user to enter their name", () => {
    renderLogin();

    const usernameInput = screen.getByRole("textbox", {
      name: /enter your name/i,
    });

    expect(usernameInput).toHaveAttribute("name", "username");
    expect(usernameInput).toHaveAttribute("id", "username");
    expect(usernameInput).toHaveAttribute("type", "text");
    expect(usernameInput).toHaveAttribute("maxLength", "35");
    expect(usernameInput).toHaveValue(props.username);
  });

  it("renders a login button", () => {
    renderLogin();

    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
});
