import React from 'react';
import s from './button.module.css'


type ButtonType = {
    callBack: () => void
    name: string
}

export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div >
            <button className={s.button} onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

