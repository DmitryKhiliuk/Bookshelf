import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {booksReducer} from "./books-reducer";
import {loadState, saveState} from "./localstorage-utils";

export const rootReducer = combineReducers({
    books: booksReducer
})

//Для DEVTools  Redux
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(rootReducer, loadState(), composeEnhancers(applyMiddleware()))

store.subscribe(() => {
    saveState({
        books:store.getState().books
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
