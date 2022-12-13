import React from 'react';
import {Button} from "../Button";
import {NavLink} from "react-router-dom";
import s from './MainPage.module.css'

export const MainPage = () => {
    
    const buttonHandler = () => {
        console.log('add book')
    }

    return (
        <div className={s.mainPage}>
            <h1 className={s.title}>Книжная полка</h1>
            <div><NavLink to={'/add-book'}><Button callBack={buttonHandler} name={'Добавить книгу'}/></NavLink></div>
        </div>
    );
};

