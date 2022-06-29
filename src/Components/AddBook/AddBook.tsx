import React, {useState} from 'react';
import {Button} from "../Button";
import {NavLink} from "react-router-dom";
import {Input} from "../Input";
import {useDispatch} from "react-redux";
import {addBookAC} from "../../redux/books-reducer";
import {v1} from "uuid";
import s from './AddBook.module.css'

type AddBookType = {
    background: {backgroundImage: string}
}

export const AddBook = (props:AddBookType) => {

    const dispatch = useDispatch()
    const[title, setTitle] = useState('')
    const[author, setAuthor] = useState('')
    const[year, setYear] = useState('')
    const[image, setImage] = useState('')
    let newBook: any  = {

    }
    const onClickSave = () => {
        newBook.id = v1()
        newBook.title = title
        newBook.author = author
        newBook.year = year
        newBook.image = image
        dispatch(addBookAC(newBook))
    }

    const onClickCancel = () => {

    }

    return (
        <div className={s.editBook} style={props.background}>
            <div className={s.back}>
                <h2 className={s.editBook__alignment}>Добавление книги</h2>
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
                <div className={s.editBook__alignment}>
                    <div className={s.editBook__button}><NavLink to={'/'}><Button callBack={onClickSave} name={'Сохранить'}/></NavLink></div>
                    <div className={s.editBook__button}><NavLink to={'/'}><Button callBack={onClickCancel} name={'Отменить'}/></NavLink></div>
                </div>

        </div>
    );
};

