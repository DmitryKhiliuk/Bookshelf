import React, {ChangeEvent, useState} from 'react';
import {Button} from "../Button";
import {NavLink} from "react-router-dom";
import {Input} from "../Input";
import {useDispatch, useSelector} from "react-redux";
import {addBookAC, BookType} from "../../redux/books-reducer";
import {v1} from "uuid";

export const AddBook = () => {

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
        <div>
            <h2>Добавление книги</h2>
            <div>
                <div>Наименование</div>
                <Input callBack={setTitle}/>
            </div>
            <div>
                <div>Автор</div>
                <Input callBack={setAuthor}/>
            </div>
            <div>
                <div>Год выпуска</div>
                <Input callBack={setYear}/>
            </div>
            <div>
                <div>Изображение</div>
                <Input callBack={setImage}/>
            </div>
            <Button callBack={onClickSave} name={'Сохранить'}/>
            <div><NavLink to={'/'}><Button callBack={onClickCancel} name={'Отменить'}/></NavLink></div>
        </div>
    );
};

