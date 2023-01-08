import React from 'react';
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Input} from "./Input";

const onChange = jest.fn()


describe('test input', () => {
    it('', () => {
        render(<Input  value={''} callBack={onChange}/>)
        const input = screen.getByRole('textbox')
        userEvent.type(input, '111')
        expect(onChange).toHaveBeenCalledTimes(3)
    })
})