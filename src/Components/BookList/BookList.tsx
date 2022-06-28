import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";

import {findAllByDisplayValue} from "@testing-library/react";
import {BookItem} from "./BookListIitem/BookItem";
import {BookType} from "../../redux/books-reducer";

export const BookList = () => {

    const books = useSelector<AppRootStateType, BookType[]>(state => state.books)
    const dispatch = useDispatch()
    return (
        <div>
            {
                books.map((b) => {
                    return <BookItem key={b.id} book={b}/>
                })
            }
        </div>
    );
};

