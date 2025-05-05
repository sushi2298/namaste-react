import { render, screen } from "@testing-library/react"
import Body from "../Body"
import { act } from "react"
import appStore from '../../utils/appStore'
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router"
import "@testing-library/jest-dom"


const mockInternetConnection = (status) => {

    const myEvent = new window.Event(status);
    const events = {}
    jest.spyOn(window, "addEventListener").mockImplementation((type, event, options) => {
        events[type] = event;
    });
    act(() => window.dispatchEvent(myEvent))
}

test("Should render online status", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Body />
            </Provider>
        </BrowserRouter>
    ));

    mockInternetConnection('offline');

    const errorText = screen.getByText("Please Check Your Internet Connection and Try Again");

    expect(errorText).toBeInTheDocument();

})