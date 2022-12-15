import {AppRootStateType} from "./store";
import {selectBooks} from "./selectors";

let startState: AppRootStateType

describe('selected books', () => {
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
    it('books', () => {
        const endState = selectBooks(startState)
        expect(endState.length).toBe(2)
        expect(endState[0].title).toBe('Book')
        expect(Object.keys(endState[1]).length).toBe(5)
    })
})