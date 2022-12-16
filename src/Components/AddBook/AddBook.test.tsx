import React from "react";
import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {AddBook} from "./AddBook";
import backgroundImage from "../../assets/2423.jpg";
import * as reduxHooks from "react-redux";
import userEvent from "@testing-library/user-event";

const background = {backgroundImage: `url(${backgroundImage} )`}

jest.mock('react-redux')
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')
const dispatch = jest.fn()

jest.mock('console')
const mockedLog = jest.spyOn(console, 'log')

describe('add book component test', () => {
    it('should create add book component', () => {
        const view = render(<MemoryRouter><AddBook background={background}/></MemoryRouter>)
        expect(view).toMatchSnapshot()
    })
    it('must render buttons in the component add book', () => {
        render(<MemoryRouter><AddBook background={background}/></MemoryRouter>)
        const saveBtn = screen.getByText('Сохранить')
        const cancelBtn = screen.getByText('Отменить')
        const allBtn = screen.getAllByRole('button')
        expect(allBtn.length).toEqual(2)
        expect(allBtn).toEqual([saveBtn,cancelBtn])
    })
    it('must render inputs in the component add book', () => {
        render(<MemoryRouter><AddBook background={background}/></MemoryRouter>)
        const allInputs = screen.getAllByRole('textbox')
        expect(allInputs.length).toEqual(4)
    })
    it('should dispatch add book action', () => {
        mockedDispatch.mockReturnValue(dispatch)
        render(<MemoryRouter><AddBook background={background}/></MemoryRouter>)
        userEvent.click(screen.getByText('Сохранить'))
        expect(dispatch).toHaveBeenCalledTimes(1)

    })
    it('main page button test', () => {
        mockedLog.mockReturnValue()
        render(<MemoryRouter><AddBook background={background}/></MemoryRouter>)
        userEvent.click(screen.getByText('Отменить'))
        expect(mockedLog).toHaveBeenCalled()
    })
})