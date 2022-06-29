import React from 'react';
import {BookType, removeBookAC} from "../../../redux/books-reducer";
import {Button} from "../../Button";
import s from "./BookListItem.module.css"
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
            <div>
                <div>{props.book.title}</div>
                <div>{props.book.author}</div>
                <div>{props.book.year}</div>
            </div>
            <div>
                <div>
                    <NavLink to={`/edit-book/${props.book.id}`}>
                        <Button callBack={onClickEdit} name={'Редактировать'}/>
                    </NavLink>
                </div>
                <Button callBack={onClickDelete} name={'Удалить'}/>
            </div>
        </div>
    );
};

