import React from 'react';
import {BookType} from "../../../redux/books-reducer";
import {Button} from "../../Button";
import s from "./BookListItem.module.css"
import {NavLink} from "react-router-dom";


export type BookItemType = {
    book: BookType
}

export const BookItem = (props: BookItemType) => {

    const onClickHandler = () => {

    }

    return (
        <div className={s.bookItem}>
            <div><img src={props.book.image} alt="img"/></div>
            <div>
                <div>{props.book.title}</div>
                <div>{props.book.author}</div>
                <div>{props.book.year}</div>
            </div>
            <div>
                <div><NavLink to={'/edit-book'}><Button callBack={onClickHandler} name={'Редактировать'}/></NavLink></div>
                <Button callBack={onClickHandler} name={'Удалить'}/>
            </div>
        </div>
    );
};

