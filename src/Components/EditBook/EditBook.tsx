import React, {useState} from 'react';
import {Button} from "../Button";
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {BookType, editBookAC} from "../../redux/books-reducer";
import {Input} from "../Input";
import {AppRootStateType} from "../../redux/store";



export const EditBook = () => {

    const dispatch = useDispatch()
    const {bookId} = useParams()
    const books = useSelector<AppRootStateType, BookType[]>(state => state.books)
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

    }


    return (
        <div>
            <h2>Редактирование книги</h2>
            <div>
                <div>Наименование</div>
                <Input callBack={setTitle} value={title}/>
            </div>
            <div>
                <div>Автор</div>
                <Input callBack={setAuthor} value={author}/>
            </div>
            <div>
                <div>Год выпуска</div>
                <Input callBack={setYear} value={year}/>
            </div>
            <div>
                <div>Изображение</div>
                <Input callBack={setImage} value={image}/>
            </div>
            {/*<div>
                {currentBook && JSON.stringify(currentBook, null, 2)}
            </div>*/}
            <div><NavLink to={'/'}><Button callBack={onClickSave} name={'Сохранить'}/></NavLink></div>
            <div><NavLink to={'/'}><Button callBack={onClickCancel} name={'Отменить'}/></NavLink></div>
        </div>
    );
};

