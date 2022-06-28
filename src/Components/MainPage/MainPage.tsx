import React from 'react';
import {Button} from "../Button";
import {NavLink} from "react-router-dom";
import s from './MainPage.module.css'

export const MainPage = () => {

    const addBookHandler = () => {

    }
    return (
        <div>
            <h1>Книжная полка</h1>
            <div><NavLink to={'/add-book'}><Button callBack={addBookHandler} name={'Добавить книгу'}/></NavLink></div>
        </div>
    );
};

