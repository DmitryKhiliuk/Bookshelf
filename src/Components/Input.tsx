import React, {ChangeEvent} from 'react';
import s from './Input.module.css'

type InputType = {

    callBack: (value: string) => void
    value: string | undefined
}


export const Input = (props:InputType) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.value)
    }

    return (
        <div>
            <input type="text" onChange={onChangeHandler} value={props.value} className={s.input}/>
        </div>
    );
};

