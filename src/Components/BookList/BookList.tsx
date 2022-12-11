import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {BookItem} from "./BookListIitem/BookItem";
import {BookType} from "../../redux/books-reducer";
import s from './BookList.module.css'


type BookListType = {
    background: {backgroundImage: string}
}

export const BookList = (props:BookListType) => {



    const books = useSelector<AppRootStateType, BookType[]>(state => state.books)
    return (
        <div className={s.bookList} style={props.background }>
            {
                books.map((b) => {
                    return <BookItem key={b.id} book={b} />
                })
            }
        </div>
    );
};

