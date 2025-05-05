import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from '../../utils/appStore'
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

describe("Header", () => {
    it("should load the header", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const navs = screen.getAllByRole("listitem");

        expect(navs).toHaveLength(8);
    })

    it("should have cart(0)", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const cart = screen.getByText('Cart(0)');

        expect(cart).toBeInTheDocument();
    });

    it("Should change to logout when clicked on login", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginBtn = screen.getByRole("button", {name: "Login"});
        fireEvent.click(loginBtn);

        const logoutBtn = screen.getByRole("button", {name: "Logout"});
        expect(logoutBtn).toBeInTheDocument();
    })
})