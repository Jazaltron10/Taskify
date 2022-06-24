import React from 'react'
import { InputSubmitBtn } from './styles/Button.styles'
import {InputBox, InputWrapper} from './styles/Inputfield.styles'


interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputField:React.FC<Props> = ({todo, setTodo}) => {
return (
        <InputWrapper>
            <InputBox type="input" 
            value={todo}
            onChange={(e)=> setTodo(e.target.value)}
            placeholder='Enter a task' />
            <InputSubmitBtn type="submit">
                Go
            </InputSubmitBtn>
        </InputWrapper>
    )
}

export default InputField





