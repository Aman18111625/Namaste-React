import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Component", () => {
  it("should render Contact Us heading", () => {
    render(<Contact />);
    const headingElement = screen.getByText(/Contact Us/i);
    expect(headingElement).toBeInTheDocument();
  });
  it("should render form with input fields and submit button", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText(/Your Name/i);
    const emailInput = screen.getByPlaceholderText(/Your Email/i);
    const messageInput = screen.getByPlaceholderText(/Your Message/i);
    const submitButton = screen.getByRole("button", { name: /Submit/i });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent("Submit");
  });
});
