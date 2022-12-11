import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from "react-router-dom";
import * as reduxHooks from "react-redux";
import {AppRootStateType} from "./redux/store";

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
    })
  it('renders learn react link', () => {
    mockedSelector.mockReturnValue(startState.books)
    const view = render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    expect(view).toMatchSnapshot()
  });
})

