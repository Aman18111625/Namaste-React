import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import '@testing-library/jest-dom';

describe("Footer Component", () => {
  it("should render footer content", () => {
    render(<Footer />);
    const footerElement = screen.getByText(/© 2025 Namma Food. All rights reserved./i);
    expect(footerElement).toBeInTheDocument();
  });
});
