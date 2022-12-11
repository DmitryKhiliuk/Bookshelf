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
    {id:v1(), title: 'React: современные шаблоны для разработки ', author: 'Алекс Бэнкс, Ева Порселло', year: '2021', image: 'https://s4-goods.ozstatic.by/480/537/52/101/101052537_0_React_sovremennie_shabloni_dlya_razrabotki_prilozheniy_Aleks_Benks_Eva_Porsello.jpg'},
    {id:v1(), title: 'JavaScript с нуля', author: 'Кирупа Чиннатамби', year: '2021', image: 'https://s2-goods.ozstatic.by/480/443/28/101/101028443_0_JavaScript_s_nulya_Kirupa_CHinnatambi.jpg'},
    {id:v1(), title: 'Turbo Pascal', author: 'Валерий Фаронов', year: '2021', image: 'https://s3-goods.ozstatic.by/480/884/110/101/101110884_0_Turbo_Pascal_Uchebnoe_posobie_Valeriy_Faronov.jpg'},
    {id:v1(), title: 'Биполярное расстройство', author: 'Е. Касьянов', year: '2022', image: 'https://s2-goods.ozstatic.by/480/803/109/101/101109803_0_Bipolyarnoe_rasstroystvo_gid_po_vizhivaniyu_dlya_teh_kto_chasto_ne_vidit_beloy_polosi_Masha_Pushkina_E_Kasyanov.jpg'},
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
export const addBookAC = (newBook:BookType) => {
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
export const editBookAC = (id:string, newBook:BookType) => {
    return {
        type: 'EDIT-BOOK',
        id,
        newBook
    } as const
}