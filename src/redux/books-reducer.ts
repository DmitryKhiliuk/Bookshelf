import {v1} from "uuid";

export type BookType = {
    id: string
    title: string
    author: string
    year: string
    image: string
}

export type ActionType = addBookACType | removeBookACType | editBookACType

const initialState: BookType[] = [
    {id:v1(), title: 'JS and JQuery', author: 'David Sower', year: '2016', image: 'https://rust.litnet.com/uploads/covers/220/1618119063_65.jpg'},
    {id:v1(), title: 'How to shit in a suitcase', author: 'VVP', year: '2022', image: 'https://img4.labirint.ru/rc/83ce162e5637da27a4513dd034f6db9d/363x561q80/books81/803832/cover.jpg?1620321928'},
]

export const booksReducer = (state:BookType[] = initialState, action: ActionType):BookType[] => {
    switch (action.type) {
        case "ADD-BOOK": {
            return [action.newBook, ...state]
        }
        case "REMOVE-BOOK": {
            return state.filter((b) => b.id !== action.id)
        }
        case "EDIT-BOOK": {
            return state.map((b) => b.id === action.id ? {...b, ...action.newBook} : b)
        }
    }
    return state
}

export type addBookACType = ReturnType<typeof addBookAC>
export const addBookAC = (newBook:any) => {
    return {
        type: 'ADD-BOOK',
        newBook
    } as const
}
export type removeBookACType = ReturnType<typeof removeBookAC>
export const removeBookAC = (id:string) => {
    return {
        type: 'REMOVE-BOOK',
        id
    } as const
}
export type editBookACType = ReturnType<typeof editBookAC>
export const editBookAC = (id:string, newBook:any) => {
    return {
        type: 'EDIT-BOOK',
        id,
        newBook
    } as const
}