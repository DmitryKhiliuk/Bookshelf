import {MainPage} from "./MainPage";
import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import React from "react";

jest.mock('console')
const mockedLog = jest.spyOn(console, 'log')


describe('main page test', () => {
    it('render main page component', () => {
        const view = render(
            <MemoryRouter>
                <MainPage/>
            </MemoryRouter>
        );
        expect(view).toMatchSnapshot()
    });
    it('main page button test', () => {
        mockedLog.mockReturnValue()
        render(
            <MemoryRouter>
                <MainPage/>
            </MemoryRouter>
        )
        const btn = screen.getByRole('button')
        userEvent.click(btn)
        expect(mockedLog).toHaveBeenCalled()
    })
})