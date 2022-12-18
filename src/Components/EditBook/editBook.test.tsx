import React from "react";
import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {EditBook} from "./EditBook";
import backgroundImage from "../../assets/2423.jpg";
import * as reduxHooks from "react-redux";
import userEvent from "@testing-library/user-event";
import {AppRootStateType} from "../../redux/store";

const background = {backgroundImage: `url(${backgroundImage} )`}

jest.mock('react-redux')
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')
const mockedSelector = jest.spyOn(reduxHooks, 'useSelector')
const dispatch = jest.fn()

jest.mock('console')
const mockedLog = jest.spyOn(console, 'log')

let startState: AppRootStateType

describe('edit book component test', () => {
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
    it('should create edit book component', () => {
        const view = render(<MemoryRouter><EditBook background={background}/></MemoryRouter>)
        expect(view).toMatchSnapshot()
    })
    it('must render buttons in the component edit book', () => {
        render(<MemoryRouter><EditBook background={background}/></MemoryRouter>)
        const saveBtn = screen.getByText('Сохранить')
        const cancelBtn = screen.getByText('Отменить')
        const allBtn = screen.getAllByRole('button')
        expect(allBtn.length).toEqual(2)
        expect(allBtn).toEqual([saveBtn, cancelBtn])
    })
    it('must render inputs in the component edit book', () => {
        render(<MemoryRouter><EditBook background={background}/></MemoryRouter>)
        const allInputs = screen.getAllByRole('textbox')
        expect(allInputs.length).toEqual(4)
    })
    it('should dispatch edit book action', () => {
        mockedDispatch.mockReturnValue(dispatch)
        render(<MemoryRouter><EditBook background={background}/></MemoryRouter>)
        userEvent.click(screen.getByText('Сохранить'))
        expect(dispatch).toHaveBeenCalledTimes(1)

    })
    it('main page button test', () => {
        mockedLog.mockReturnValue()
        render(<MemoryRouter><EditBook background={background}/></MemoryRouter>)
        userEvent.click(screen.getByText('Отменить'))
        expect(mockedLog).toHaveBeenCalled()
    })
})