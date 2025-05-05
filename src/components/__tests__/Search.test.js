import { act } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Body from '../Body'
import data from './mocks/mockBodyData.json'
import { BrowserRouter } from 'react-router'
import '@testing-library/jest-dom'

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(data)
    })
})

describe("Search", () => {
    it("Should render search", async () => {
        await act(async() => render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        ));
        const search = screen.getByRole("button", { name: 'Search'});

        const searchInput = screen.getByTestId("searchInput");

        fireEvent.change(searchInput, { target: { value: "Thikana" }});

        fireEvent.click(search);

        const restoCards = screen.getAllByTestId("RestoCard");

        expect(restoCards).toHaveLength(1);
    })

    it("should render top rated restorants", async () => {
        await act(async () => render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        ));

        const topRatedBtn = screen.getByTestId('topRatedBtn');
        fireEvent.click(topRatedBtn);
        const restoCards = screen.getAllByTestId('RestoCard');

        expect(restoCards).toHaveLength(8);

        fireEvent.click(topRatedBtn);
        const newRestoCards = screen.getAllByTestId('RestoCard');

        expect(newRestoCards).toHaveLength(8);
    })
})