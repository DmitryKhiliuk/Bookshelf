import {addBookAC, booksReducer, BookType, editBookAC, removeBookAC, initialState, testAC} from "./books-reducer";

let startState: BookType[]

describe('selected books', () => {
    beforeEach(() => {
        startState =  initialState
        }
    )
    it('should return default state', () => {
        const result = booksReducer(undefined, testAC())
        expect(result).toEqual(startState)
    })
    it('should add new book', () => {
        const newBook:BookType = {
            id:'3',
            title: 'New Book',
            author: 'new writer',
            year: '2022',
            image: 'new url'}
        const endState = booksReducer(startState, addBookAC(newBook))
        expect(endState.length).toBe(5)
    })
    it('should remove book', () => {
        const deletedBook = initialState.find(el => el.title === 'Биполярное расстройство')
        const id = deletedBook!.id
        const endState = booksReducer(startState, removeBookAC(id))
        expect(endState.length).toBe(3)
    })
    it('should edit book', () => {
        const newBook:BookType = {
            id:'1',
            title: 'New Book',
            author: 'new writer',
            year: '2022',
            image: 'new url'}
        const editedBook = initialState.find(el => el.title === 'Turbo Pascal')
        const id = editedBook!.id
        const endState = booksReducer(startState, editBookAC(id, newBook))
        expect(endState.length).toBe(4)
        expect(endState.find(book => book.id === newBook.id)!.title).toBe('New Book')
    })
})