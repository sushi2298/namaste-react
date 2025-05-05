import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import RestaurantDetails from "../RestaurantDetails"
import MOCK_DATA from "./mocks/mockMenu.json"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router"
import Cart from "../Cart"


global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
)

it("Should render the updated cart", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantDetails />
                <Cart />
            </Provider>
        </BrowserRouter>
    ));

    const accord = screen.getByTestId("accordian_Recommended");


    fireEvent.click(accord);

    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems).toHaveLength(20);


    const addBtns = screen.getAllByRole("button", { name: "ADD" });

    fireEvent.click(addBtns[0]);

    const cartText = screen.getByText("Cart(1)");

    expect(cartText).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    const cartText2 = screen.getByText("Cart(2)");

    expect(cartText2).toBeInTheDocument();

    const allItema = screen.getAllByTestId("foodItems");

    expect(allItema).toHaveLength(22);

    const clearBtn = screen.getByRole("button", { name: "clear cart"})

    fireEvent.click(clearBtn);
    const newItems = screen.getAllByTestId("foodItems");

    expect(newItems).toHaveLength(20);

    const cartText0 = screen.getByText("Cart(0)");

    expect(cartText0).toBeInTheDocument();

    //click on some other accordion
    const accord2 = screen.getByTestId("accordian_Thali");

    fireEvent.click(accord2);

    const foodItems2 = screen.getAllByTestId("foodItems");
    expect(foodItems2).toHaveLength(4);

    //close the accordion

    fireEvent.click(accord2);

    const noItems = screen.queryAllByTestId("foodItems");
    expect(noItems).toHaveLength(0);
})