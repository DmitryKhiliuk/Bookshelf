import {AppRootStateType} from "./store";
import {addBookAC, booksReducer, BookType, editBookAC, removeBookAC} from "./books-reducer";

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
    it('should add new book', () => {
        const newBook:BookType = {
            id:'3',
            title: 'New Book',
            author: 'new writer',
            year: '2022',
            image: 'new url'}
        const endState = booksReducer(startState.books, addBookAC(newBook))
        expect(endState.length).toBe(3)
    })
    it('should remove book', () => {
        const endState = booksReducer(startState.books, removeBookAC('2'))
        expect(endState.length).toBe(1)
    })
    it('should edit book', () => {
        const newBook:BookType = {
            id:'1',
            title: 'New Book',
            author: 'new writer',
            year: '2022',
            image: 'new url'}
        const endState = booksReducer(startState.books, editBookAC('1', newBook))
        expect(endState.length).toBe(2)
        expect(endState.find(book => book.id === newBook.id)!.year).toBe('2022')
    })

})