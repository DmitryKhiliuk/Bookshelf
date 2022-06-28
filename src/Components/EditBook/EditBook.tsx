import React from 'react';
import {Button} from "../Button";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {BookType} from "../../redux/books-reducer";

type EditBookType = {

}

export const EditBook = () => {

    const onClickHandler = () => {

    }


    return (
        <div>
            <h2>Редактирование книги</h2>
            <div>
                <div>Наименование</div>
                <input type="text"/>
            </div>
            <div>
                <div>Автор</div>
                <input type="text" />
            </div>
            <div>
                <div>Год выпуска</div>
                <input type="text" />
            </div>
            <div>
                <div>Изображение</div>
                <input type="text" />
            </div>
            <Button callBack={onClickHandler} name={'Сохранить'}/>
            <div><NavLink to={'/'}><Button callBack={onClickHandler} name={'Отменить'}/></NavLink></div>
        </div>
    );
};

