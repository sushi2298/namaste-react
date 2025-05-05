import { render, screen } from "@testing-library/react"
import ContactUs from "../ContactUs"
import '@testing-library/jest-dom'

test("should load contact us", () => {
    render(<ContactUs />);
    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
});

test("should render the button", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
});
