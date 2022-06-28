import {combineReducers, createStore} from "redux";
import {booksReducer} from "./books-reducer";
import {loadState, saveState} from "./localstorage-utils";

export const rootReducer = combineReducers({
    books: booksReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        books:store.getState().books
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;