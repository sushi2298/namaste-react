import { act, useState } from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router"
import Body from "../Body";
import Header from "../Header";
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import UserContext from "../../context/UserContext";


test("Should Change the User name", async () => {
    let value = 'shab';
    const setUser = (text) => { value = text }
    await act(async () =>
        render(
        <BrowserRouter>
            <Provider store={appStore}>
                <UserContext.Provider value={{userName: value, setUser }}>
                    <Body />
                    <Header />
                </UserContext.Provider>
            </Provider>
        </BrowserRouter>)
    );

    const defaultUser = screen.getByText("shab");

    expect(defaultUser).toBeInTheDocument();


    const userInput = screen.getByTestId("userNameInput");


    fireEvent.change(userInput, { target: { value: 'sushi' }})


    expect(value).toBe('sushi');

})