import {MainPage} from "./MainPage";
import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";
jest.mock('react-redux')
describe('main page test', () => {
    it('add link test', () => {
        render(
            <MemoryRouter>
                <MainPage/>
            </MemoryRouter>
        )
        const addLink = screen.getByText('Добавить книгу')
        userEvent.click(addLink)
        expect(screen.getByTestId('add-link')).toBeInTheDocument()
    })
})