import { render, screen } from "@testing-library/react";
import RestoCard from "../RestoCard";
import MOCK_DATA from './mocks/restoCardMockData.json';
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";

describe("RestoCard", () => {
    it("Should render Thikana Resto card", () => {
        render(
            <BrowserRouter>
                <RestoCard resto={MOCK_DATA} />
            </BrowserRouter>
        );

        const name = screen.getByText("Thikana");

        expect(name).toBeInTheDocument();
    });
});
