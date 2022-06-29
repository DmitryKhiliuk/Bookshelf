import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";


import {BookItem} from "./BookListIitem/BookItem";
import {BookType} from "../../redux/books-reducer";



export const BookList = () => {

    const books = useSelector<AppRootStateType, BookType[]>(state => state.books)
    return (
        <div>
            {
                books.map((b) => {
                    return <BookItem key={b.id} book={b} />
                })
            }
        </div>
    );
};

