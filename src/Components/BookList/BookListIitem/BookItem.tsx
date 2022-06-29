import React from 'react';
import {BookType, removeBookAC} from "../../../redux/books-reducer";
import {Button} from "../../Button";
import s from "./BookItem.module.css"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";



export type BookItemType = {
    book: BookType

}

export const BookItem = (props: BookItemType) => {

    const dispatch = useDispatch()

    const onClickDelete = () => {
        dispatch(removeBookAC(props.book.id))
    }

    const onClickEdit = () => {

    }



    return (
        <div className={s.bookItem}>
            <div><img src={props.book.image} alt="img"/></div>
            <div className={s.bookItem__text}>
                <div className={s.title}>{props.book.title}</div>
                <div className={s.author}>{props.book.author}</div>
                <div className={s.year}>{props.book.year}</div>
            </div>
            <div className={s.bookItem__button}>
                <div>
                    <NavLink to={`/edit-book/${props.book.id}`}>
                        <Button callBack={onClickEdit} name={'Редактировать'}/>
                    </NavLink>
                </div>
                <div className={s.bookItem__button__delete}>
                    <Button callBack={onClickDelete} name={'Удалить'}/>
                </div>
            </div>
        </div>
    );
};

