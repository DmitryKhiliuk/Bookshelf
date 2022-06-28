import {v1} from "uuid";

export type BookType = {
    id: string
    title: string
    author: string
    year: string
    image: string
}



const initialState: BookType[] = [
    {id:v1(), title: 'JS and JQuery', author: 'David Sower', year: '2016', image: 'https://rust.litnet.com/uploads/covers/220/1618119063_65.jpg'},
    {id:v1(), title: 'How to shit in a suitcase', author: 'Vladimir Putin', year: '2022', image: 'https://img4.labirint.ru/rc/83ce162e5637da27a4513dd034f6db9d/363x561q80/books81/803832/cover.jpg?1620321928'},
]

export const booksReducer = (state:BookType[] = initialState, action: any) => {
    return state
}