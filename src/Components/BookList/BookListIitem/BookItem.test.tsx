import React from "react";
import {BookItem} from "./BookItem";
import {render, screen} from "@testing-library/react";
import {BookType} from "../../../redux/books-reducer";
import {MemoryRouter} from "react-router-dom";
import * as reduxHooks from "react-redux";
import userEvent from "@testing-library/user-event";


jest.mock('react-redux')
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')
const dispatch = jest.fn()

jest.mock('console')
const mockedLog = jest.spyOn(console, 'log')

let bookItem: BookType

describe('book item test', () => {
    beforeEach(() => {
        bookItem = {
            id: '1',
            title: "Book",
            author: "writer",
            year: "1900",
            image: "url",
        }
    })
    it('should create book item', () => {
        const view = render(
            <MemoryRouter>
                <BookItem book={bookItem}/>
            </MemoryRouter>
        )
        expect(view).toMatchSnapshot()
    })
    it('should render buttons', () => {
        render(<MemoryRouter><BookItem book={bookItem}/></MemoryRouter>)
        const deleteBtn = screen.getByText('Удалить')
        const editBtn = screen.getByText('Редактировать')
        const allButton = screen.getAllByRole('button')
        expect(allButton).toEqual([editBtn,deleteBtn])
    })
    it('should dispatch remove book action', () => {
        mockedDispatch.mockReturnValue(dispatch)
        render(<MemoryRouter><BookItem book={bookItem}/></MemoryRouter>)
        userEvent.click(screen.getByText('Удалить'))
        expect(dispatch).toHaveBeenCalledTimes(1)
    })
    it('main page button test', () => {
        mockedLog.mockReturnValue()
        render(<MemoryRouter><BookItem book={bookItem}/></MemoryRouter>)
        userEvent.click(screen.getByText('Редактировать'))
        expect(mockedLog).toHaveBeenCalled()
    })

})