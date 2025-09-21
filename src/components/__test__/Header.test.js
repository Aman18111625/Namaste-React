import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header Component", () => {
  const renderHeader = () => render(
    <Provider store={appStore} >
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
);
  it("should render logo", () => {
    renderHeader();
    const logoElement = screen.getByTestId("logo");
    expect(logoElement).toBeInTheDocument();
  });
  it("should render navigation items", () => {
    renderHeader();
    const navItems = screen.getAllByTestId("nav-items");
    expect(navItems.length).toBeGreaterThan(0);
  });
  it("should render cart item with initial count 0", () => {
    renderHeader();
    const cartItem = screen.getByText(/Cart \(0\)/i);
    expect(cartItem).toBeInTheDocument();
    expect(cartItem).toHaveTextContent("0");
  });
  it("should render login button", () => {
    renderHeader();
    const loginButton = screen.getByTestId("login-btn");
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveTextContent("Login");
  });
  it("should change button text to logout on click", () => {
    renderHeader();
    const loginButton = screen.getByTestId("login-btn");
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveTextContent("Login");
    fireEvent.click(loginButton);
    expect(loginButton).toHaveTextContent("Logout");
    fireEvent.click(loginButton);
    expect(loginButton).toHaveTextContent("Login");
  });
});
