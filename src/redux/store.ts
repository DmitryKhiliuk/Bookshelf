import {combineReducers, createStore} from "redux";
import {booksReducer} from "./books-reducer";

export const rootReducer = combineReducers({
    books: booksReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;