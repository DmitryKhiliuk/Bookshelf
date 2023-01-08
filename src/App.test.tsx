import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {MemoryRouter} from "react-router-dom";
import * as reduxHooks from "react-redux";
import {AppRootStateType} from "./redux/store";
import userEvent from "@testing-library/user-event";

jest.mock('react-redux')
const mockedSelector = jest.spyOn(reduxHooks, 'useSelector')

let startState: AppRootStateType

describe('app test', () => {
    beforeEach(() => {
        startState = {
            books: [
                {
                    id: '1',
                    title: "Book",
                    author: "writer",
                    year: "1900",
                    image: "url",
                },
                {
                    id: '2',
                    title: "Book2",
                    author: "writer2",
                    year: "1902",
                    image: "url2",
                },

            ]
        }
        mockedSelector.mockReturnValue(startState.books)
    })
    it('render app component', () => {
        const view = render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        );
        expect(view).toMatchSnapshot()
    });
    it('add link test', () => {
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        )
        const addLink = screen.getByText('Добавить книгу')
        userEvent.click(addLink)
        expect(screen.getByText('Добавление книги')).toBeInTheDocument()
    })
    it('edit link test', () => {
        render(<MemoryRouter><App/></MemoryRouter>)
        const editLink = screen.getAllByText('Редактировать')
        userEvent.click(editLink[0])
        expect(screen.getByText('Редактирование книги')).toBeInTheDocument()
    })
})

