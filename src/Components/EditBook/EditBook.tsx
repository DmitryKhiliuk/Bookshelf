import React, {useState} from 'react';
import {Button} from "../Button";
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {BookType, editBookAC} from "../../redux/books-reducer";
import {Input} from "../Input";
import {AppRootStateType} from "../../redux/store";
import s from './EditBook.module.css'
import {selectBooks} from "../../redux/selectors";

type EditBookType = {
    background: {backgroundImage: string}
}

export const EditBook = (props: EditBookType) => {

    const dispatch = useDispatch()
    const {bookId} = useParams()
    const books = useSelector<AppRootStateType, BookType[]>(selectBooks)
    console.log('bookId: ', bookId)
    const currentBook = books.find((book) => book.id === bookId )

    const[title, setTitle] = useState(currentBook && currentBook.title)
    const[author, setAuthor] = useState(currentBook && currentBook.author)
    const[year, setYear] = useState(currentBook && currentBook.year)
    const[image, setImage] = useState(currentBook && currentBook.image)

    let newBook: any  = {

    }

    const onClickSave = () => {
        newBook.id = bookId
        newBook.title = title
        newBook.author = author
        newBook.year = year
        newBook.image = image
        dispatch(editBookAC(newBook.id, newBook))

    }


    const onClickCancel = () => {
        console.log('edit book')
    }


    return (
        <div className={s.editBook} style={props.background}>
            <div className={s.back}>
                <h2 className={s.editBook__alignment}>Редактирование книги</h2>
                <div className={s.editBook__alignment}>
                    <div className={s.editBook__item__title}>Наименование</div>
                    <Input callBack={setTitle} value={title}/>
                </div>
                <div className={s.editBook__alignment}>
                    <div className={s.editBook__item__title}>Автор</div>
                    <Input callBack={setAuthor} value={author}/>
                </div>
                <div className={s.editBook__alignment}>
                    <div className={s.editBook__item__title}>Год выпуска</div>
                    <Input callBack={setYear} value={year}/>
                </div>
                <div className={s.editBook__alignment}>
                    <div className={s.editBook__item__title}>Изображение</div>
                    <Input callBack={setImage} value={image}/>
                </div>
            </div>
            {/*<div>
                {currentBook && JSON.stringify(currentBook, null, 2)}
            </div>*/}
            <div className={s.editBook__alignment}>
                <div className={s.editBook__button}><NavLink to={'/'}><Button callBack={onClickSave} name={'Сохранить'}/></NavLink></div>
                <div className={s.editBook__button}><NavLink to={'/'}><Button callBack={onClickCancel} name={'Отменить'}/></NavLink></div>
            </div>
        </div>
    );
};

